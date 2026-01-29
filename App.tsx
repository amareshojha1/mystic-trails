
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ScentFinder from './components/ScentFinder';
import CartDrawer from './components/CartDrawer';
import { PRODUCTS, CATEGORIES } from './constants';
import { Product, CartItem } from './types';
import { ShoppingBag, Star, RefreshCw, Droplets, Leaf, Sparkles, Heart, MessageCircle, CheckCircle2 } from 'lucide-react';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [isOrderSuccess, setIsOrderSuccess] = useState(false);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           p.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateCartQty = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsOrderSuccess(true);
    setCart([]);
  };

  return (
    <div className="min-h-screen selection:bg-mystic-pink selection:text-white">
      <Header 
        cartCount={cart.reduce((s, i) => s + i.quantity, 0)} 
        toggleCart={() => setIsCartOpen(true)}
        onSearch={setSearchTerm}
      />
      
      <main>
        <Hero />

        {/* Impact Section - The Unseen Journey */}
        <section id="impact" className="py-32 bg-mystic-cream relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="text-mystic-green font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">The Problem</span>
                <h2 className="text-4xl md:text-5xl font-serif text-mystic-dark italic mb-8 leading-tight">
                  The Unseen Journey of a Million Prayers
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                  <p>
                    Karnataka is home to over <span className="text-mystic-green font-bold">61,000 temples</span> where every morning begins with lakhs of devotees offering fresh flowers.
                  </p>
                  <p className="bg-mystic-pink/10 border-l-4 border-mystic-pink p-6 italic text-mystic-dark font-medium">
                    "But once the prayers are over, these flowers are swept into garbage bags, rotting in landfills and contaminating our groundwater with toxins."
                  </p>
                  <p>
                    The Mystic Trails gives these blessings a new beginning by rescuing them from the waste stream and bio-processing them into soulful products.
                  </p>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-mystic-green/5 rounded-[40px] transform rotate-3 group-hover:rotate-0 transition-transform duration-700"></div>
                <img 
                  src="https://images.unsplash.com/photo-1596435707700-6264292b9d99?auto=format&fit=crop&q=80&w=1200" 
                  alt="Floral Rescue" 
                  className="relative z-10 rounded-[32px] shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-xl z-20 max-w-[240px]">
                  <p className="text-4xl font-serif text-mystic-green mb-2">100%</p>
                  <p className="text-xs uppercase tracking-widest font-bold text-gray-500">Organic & Toxin Free</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-3xl font-serif italic text-mystic-dark">From Petal to Product</h2>
              <div className="w-20 h-[2px] bg-mystic-green/20 mx-auto mt-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {[
                { icon: <RefreshCw />, title: "Collect", desc: "Temple flowers rescued from 20+ temples in Karnataka." },
                { icon: <Droplets />, title: "Sort & Dry", desc: "Innovative drying techniques and bio-processing." },
                { icon: <Leaf />, title: "Grind", desc: "Pure floral powder mixed with natural ingredients." },
                { icon: <Sparkles />, title: "Create", desc: "Soulful, handcrafted lifestyle products." }
              ].map((step, i) => (
                <div key={i} className="text-center flex flex-col items-center group">
                  <div className="w-16 h-16 bg-mystic-green/5 rounded-full flex items-center justify-center text-mystic-green mb-6 group-hover:bg-mystic-green group-hover:text-white transition-all duration-500">
                    {step.icon}
                  </div>
                  <h3 className="text-sm uppercase tracking-widest font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-500 text-sm italic leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Shop Section */}
        <section id="shop" className="py-32 bg-mystic-cream">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
              <div className="max-w-xl">
                <span className="text-mystic-green font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Handcrafted with Purpose</span>
                <h2 className="text-4xl font-serif italic text-mystic-dark">The Collections</h2>
              </div>
              <div className="flex flex-wrap gap-4 mt-8 md:mt-0 overflow-x-auto pb-4 scrollbar-hide">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-8 py-3 rounded-full border text-[10px] uppercase tracking-widest font-bold transition-all whitespace-nowrap
                      ${selectedCategory === cat 
                        ? 'bg-mystic-green border-mystic-green text-white shadow-xl translate-y-[-2px]' 
                        : 'bg-white border-mystic-green/10 text-mystic-dark hover:border-mystic-green'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
              {filteredProducts.map(product => (
                <div 
                  key={product.id} 
                  id={`product-${product.id}`}
                  className="group"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 rounded-2xl mb-6">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-mystic-dark/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <button 
                      onClick={() => addToCart(product)}
                      className="absolute bottom-6 left-6 right-6 bg-white text-mystic-dark py-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center space-x-2 font-bold uppercase tracking-widest text-[9px] shadow-2xl rounded-lg"
                    >
                      <ShoppingBag size={12} />
                      <span>Add to Cart</span>
                    </button>
                    {product.category === 'Hampers' && (
                      <div className="absolute top-4 left-4 bg-mystic-pink text-white px-3 py-1 text-[8px] font-bold uppercase tracking-widest rounded-full">
                        Curated
                      </div>
                    )}
                  </div>
                  
                  <div className="text-left px-2">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-serif italic text-mystic-dark">{product.name}</h3>
                      <p className="font-bold text-mystic-green">₹{product.price}</p>
                    </div>
                    <p className="text-gray-400 text-xs italic mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={10} className={i < Math.floor(product.rating) ? "fill-mystic-green text-mystic-green" : "text-gray-200"} />
                        ))}
                      </div>
                      <span className="text-[10px] text-gray-300">({product.rating})</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ScentFinder />

        {/* Corporate Section */}
        <section className="py-32 bg-mystic-dark text-white overflow-hidden relative">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-mystic-green/5 blur-3xl rounded-full translate-x-1/2"></div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <span className="text-mystic-pink font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Meaningful Connections</span>
              <h2 className="text-4xl md:text-5xl font-serif italic mb-8">More Than a Gift, <br/>It's a Statement</h2>
              <p className="text-gray-400 text-lg mb-12 italic leading-relaxed">
                "A truly meaningful corporate gift isn't transactional! It's something that feels like a gesture of belonging."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <h4 className="text-white font-bold uppercase tracking-widest text-[11px] mb-4">Eco-Conscious Choice</h4>
                  <p className="text-gray-400 text-sm italic">An opportunity to enhance your brand's CSR credentials with 100% organic products.</p>
                </div>
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <h4 className="text-white font-bold uppercase tracking-widest text-[11px] mb-4">Bespoke Curation</h4>
                  <p className="text-gray-400 text-sm italic">Customized hampers available upon request for festivals and milestones.</p>
                </div>
              </div>
              <button className="bg-mystic-pink hover:bg-mystic-pink/90 text-white px-10 py-5 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all shadow-xl">
                Partner with us
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Order Success Modal */}
      {isOrderSuccess && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-mystic-dark/80 backdrop-blur-md" onClick={() => setIsOrderSuccess(false)}></div>
          <div className="relative bg-white max-w-lg w-full rounded-[40px] p-12 text-center shadow-2xl animate-in zoom-in-95 duration-500">
            <div className="w-24 h-24 bg-mystic-green/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 size={48} className="text-mystic-green" />
            </div>
            <h2 className="text-3xl font-serif italic text-mystic-dark mb-4">Blessings are on their way</h2>
            <p className="text-gray-500 italic mb-10 leading-relaxed">
              "Thank you for choosing a soulful path. Your order of handcrafted fragrances has been received and is being prepared with love."
            </p>
            <button 
              onClick={() => setIsOrderSuccess(false)}
              className="bg-mystic-green text-white px-10 py-4 rounded-full text-[10px] uppercase tracking-widest font-bold hover:scale-105 transition-all shadow-lg"
            >
              Continue Exploring
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-[90] flex flex-col space-y-4">
        <a 
          href="https://wa.me/918904051767" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
          title="WhatsApp Concierge"
        >
          <MessageCircle size={24} />
        </a>
      </div>

      <footer className="bg-white text-gray-400 py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-mystic-green rounded-full flex items-center justify-center">
                <Heart className="text-white fill-current" size={10} />
              </div>
              <h1 className="text-lg font-bold tracking-tight text-mystic-dark">
                The <span className="font-serif italic text-mystic-green">Mystic</span> Trails
              </h1>
            </div>
            <p className="text-xs italic leading-relaxed mb-8">
              Handcrafted in Karnataka, India. Where flowers find a second life as sacred blessings for your home.
            </p>
            <div className="text-[10px] font-bold text-mystic-dark uppercase tracking-widest">
              Subhra Moitra, Founder
            </div>
          </div>
          
          <div>
            <h4 className="text-mystic-dark uppercase tracking-widest text-[10px] font-bold mb-8">Shop</h4>
            <ul className="space-y-4 text-xs italic">
              <li><a href="#" className="hover:text-mystic-green transition-colors">Smudge Sticks</a></li>
              <li><a href="#" className="hover:text-mystic-green transition-colors">Sambrani Cups</a></li>
              <li><a href="#" className="hover:text-mystic-green transition-colors">Organic Cones</a></li>
              <li><a href="#" className="hover:text-mystic-green transition-colors">Curated Hampers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-mystic-dark uppercase tracking-widest text-[10px] font-bold mb-8">Impact</h4>
            <ul className="space-y-4 text-xs italic">
              <li><a href="#" className="hover:text-mystic-green transition-colors">The Temple Project</a></li>
              <li><a href="#" className="hover:text-mystic-green transition-colors">Regenerative Process</a></li>
              <li><a href="#" className="hover:text-mystic-green transition-colors">CSR Gifting</a></li>
              <li><a href="#" className="hover:text-mystic-green transition-colors">Sustainability Report</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-mystic-dark uppercase tracking-widest text-[10px] font-bold mb-8">Contact</h4>
            <ul className="space-y-4 text-xs italic">
              <li>subhramoitra@gmail.com</li>
              <li>+91 8904051767</li>
              <li>Bengaluru, Karnataka</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-24 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.3em] font-bold">
          <p>© 2025 The Mystic Trails. India's Spiritual Regenerative Brand.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-mystic-green">Instagram</a>
            <a href="#" className="hover:text-mystic-green">LinkedIn</a>
            <a href="#" className="hover:text-mystic-green">Twitter</a>
          </div>
        </div>
      </footer>

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQty={updateCartQty}
        onRemove={removeFromCart}
        onCheckout={handleCheckout}
      />
    </div>
  );
};

export default App;
