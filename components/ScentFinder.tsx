import React, { useState } from 'react';
import { Sparkles, Loader2, Send, Flower } from 'lucide-react';
import { getScentRecommendation } from '../services/geminiService';
import { ScentRecommendation } from '../types';

const ScentFinder: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<ScentRecommendation | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setLoading(true);
    setRecommendation(null);
    try {
      const result = await getScentRecommendation(input);
      setRecommendation(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="scent-finder" className="py-32 bg-white text-mystic-dark overflow-hidden relative border-y border-gray-100">
      {/* Decorative Ornaments */}
      <div className="absolute top-10 left-10 text-mystic-green/5 pointer-events-none rotate-12">
        <Flower size={160} />
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center">
        <span className="inline-block px-4 py-2 bg-mystic-green/10 text-mystic-green text-[10px] uppercase tracking-[0.3em] font-bold mb-8 rounded-full">
          AI Alchemist
        </span>
        <h2 className="text-4xl md:text-5xl font-serif italic mb-8">Discover Your Soulful Scent</h2>
        <p className="text-gray-500 mb-12 text-lg italic max-w-2xl mx-auto leading-relaxed">
          "Describe a mood, a memory of a temple visit, or a feeling of serenity. We'll match you with the scent born from rescued blossoms."
        </p>

        <form onSubmit={handleSubmit} className="relative max-w-2xl mx-auto mb-20 group">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g., I want something that feels like morning prayers by a river..."
            className="w-full bg-mystic-cream border border-mystic-green/10 rounded-[20px] px-8 py-6 text-lg outline-none focus:border-mystic-green/40 focus:bg-white transition-all pr-16 italic shadow-sm group-hover:shadow-md"
          />
          <button 
            type="submit"
            disabled={loading}
            className="absolute right-3 top-3 bottom-3 bg-mystic-green hover:bg-mystic-green/90 text-white rounded-[14px] w-14 flex items-center justify-center transition-all disabled:opacity-50"
          >
            {loading ? <Loader2 className="animate-spin" /> : <Send size={20} />}
          </button>
        </form>

        {recommendation && (
          <div className="animate-in fade-in zoom-in duration-700 glass-card p-10 rounded-[32px] text-left max-w-2xl mx-auto flex flex-col md:flex-row gap-10 items-center shadow-2xl border-mystic-green/5">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-4">
                 <Sparkles size={16} className="text-mystic-green" />
                 <h4 className="text-mystic-green uppercase tracking-widest text-[10px] font-bold">The Alchemist Recommends</h4>
              </div>
              <h3 className="text-2xl font-serif italic mb-4 text-mystic-dark">{recommendation.name}</h3>
              <p className="text-gray-500 italic leading-relaxed mb-8">"{recommendation.reason}"</p>
              <button 
                className="bg-mystic-dark text-white px-8 py-3 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-mystic-green transition-all"
                onClick={() => {
                   const el = document.getElementById(`product-${recommendation.matchingProductId}`);
                   if(el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Product
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ScentFinder;