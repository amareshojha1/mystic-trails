
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[90vh] flex items-center overflow-hidden bg-mystic-dark">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541614101331-1a5a3a194e90?auto=format&fit=crop&q=80&w=2000" 
          alt="Sacred Flowers"
          className="w-full h-full object-cover opacity-60 scale-110 animate-[pulse_10s_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mystic-dark via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center md:text-left">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-mystic-pink/20 border border-mystic-pink/30 px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-mystic-pink rounded-full animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-mystic-pink">India's Spiritual Regenerative Brand</span>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-serif text-white mb-8 leading-[1.1] tracking-tight">
            Where Flowers <br/>Find a <span className="italic text-mystic-pink">Second Life.</span>
          </h2>
          
          <p className="text-gray-300 text-lg md:text-xl font-light mb-12 max-w-xl leading-relaxed italic">
            "We rescue temple flowers from landfills and transform them into soulful, 100% organic fragrances."
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center md:justify-start">
            <a 
              href="#shop" 
              className="bg-mystic-green hover:bg-mystic-green/90 text-white px-12 py-5 text-[11px] uppercase tracking-[0.2em] font-bold transition-all shadow-2xl flex items-center justify-center space-x-2 group"
            >
              <span>Shop Organic</span>
              <div className="w-1 h-1 bg-white rounded-full group-hover:scale-[3] transition-all"></div>
            </a>
            <a 
              href="#impact" 
              className="bg-white/5 hover:bg-white/10 backdrop-blur-xl text-white border border-white/20 px-12 py-5 text-[11px] uppercase tracking-[0.2em] font-bold transition-all text-center"
            >
              The Mission
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 hidden lg:block text-right">
        <div className="text-[10px] uppercase tracking-[0.5em] text-white/40 rotate-90 origin-right">Scroll Journey</div>
      </div>
    </div>
  );
};

export default Hero;
