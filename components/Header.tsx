
import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, User, Heart } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  toggleCart: () => void;
  onSearch: (term: string) => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, toggleCart, onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-mystic-green/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-mystic-dark">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          <div className="flex-shrink-0 flex flex-col items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-mystic-green rounded-full flex items-center justify-center">
                <Heart className="text-white fill-current" size={14} />
              </div>
              <h1 className="text-xl md:text-2xl font-bold tracking-tight text-mystic-dark">
                The <span className="font-serif italic text-mystic-green">Mystic</span> Trails
              </h1>
            </div>
            <span className="text-[9px] tracking-[0.4em] uppercase text-mystic-pink font-bold -mt-1 ml-10">Regenerative Scent</span>
          </div>

          <div className="hidden md:flex space-x-10">
            <a href="#" className="text-[11px] uppercase tracking-widest hover:text-mystic-green transition-colors font-bold text-gray-500">Home</a>
            <a href="#shop" className="text-[11px] uppercase tracking-widest hover:text-mystic-green transition-colors font-bold text-gray-500">The Collection</a>
            <a href="#impact" className="text-[11px] uppercase tracking-widest hover:text-mystic-green transition-colors font-bold text-gray-500">Our Impact</a>
            <a href="#scent-finder" className="text-[11px] uppercase tracking-widest hover:text-mystic-green transition-colors font-bold text-gray-500">Scent Finder</a>
          </div>

          <div className="flex items-center space-x-4">
            <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="p-2 text-mystic-dark hover:text-mystic-green transition-colors">
              <Search size={18} />
            </button>
            <button 
              onClick={toggleCart}
              className="p-2 text-mystic-dark hover:text-mystic-green transition-colors relative"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-mystic-green text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {isSearchOpen && (
          <div className="absolute top-20 left-0 w-full bg-white p-4 border-b border-mystic-green shadow-xl animate-in slide-in-from-top duration-300">
            <div className="max-w-3xl mx-auto flex items-center bg-mystic-cream border border-mystic-green/20 rounded-full px-4 py-2">
              <Search className="text-gray-400 mr-2" size={16} />
              <input 
                type="text" 
                placeholder="Search for organic scents..." 
                className="w-full bg-transparent outline-none py-1 text-sm"
                onChange={(e) => onSearch(e.target.value)}
                autoFocus
              />
              <button onClick={() => setIsSearchOpen(false)}><X size={16} className="text-gray-400" /></button>
            </div>
          </div>
        )}
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white h-screen py-10 px-6 border-t border-gray-100">
          <div className="flex flex-col space-y-8 text-left uppercase tracking-widest text-sm font-bold text-mystic-dark">
            <a href="#" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#shop" onClick={() => setIsMenuOpen(false)}>Shop Collection</a>
            <a href="#impact" onClick={() => setIsMenuOpen(false)}>Our Journey</a>
            <a href="#scent-finder" onClick={() => setIsMenuOpen(false)}>AI Scent Finder</a>
            <div className="pt-10 border-t border-gray-100">
              <p className="text-[10px] text-gray-400 mb-2">Support</p>
              <a href="#" className="normal-case tracking-normal block mb-4">Contact Us</a>
              <a href="#" className="normal-case tracking-normal block">Wholesale</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
