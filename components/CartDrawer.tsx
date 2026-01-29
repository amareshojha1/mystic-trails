
import React from 'react';
import { X, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQty: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onCheckout: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onUpdateQty, onRemove, onCheckout }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <div className="absolute inset-0 bg-mystic-dark/60 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-mystic-cream shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="flex items-center justify-between p-6 border-b border-mystic-green/10">
          <h3 className="text-2xl font-serif text-mystic-dark italic">Your Satchel</h3>
          <button onClick={onClose} className="p-2 hover:bg-mystic-green/10 text-mystic-dark rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-mystic-green/5 rounded-full flex items-center justify-center mb-6">
                <ArrowRight size={28} className="text-mystic-green -rotate-45" />
              </div>
              <p className="text-lg text-gray-400 italic font-serif">Your satchel is empty...</p>
              <button 
                onClick={onClose}
                className="mt-6 text-mystic-green font-bold uppercase tracking-widest text-[10px] hover:underline"
              >
                Return to Collection
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex space-x-4 border-b border-mystic-green/5 pb-6 last:border-0">
                <div className="w-20 h-24 bg-white rounded-lg overflow-hidden flex-shrink-0 border border-mystic-green/5">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h4 className="font-serif text-lg leading-tight mb-1 text-mystic-dark">{item.name}</h4>
                  <p className="text-mystic-green font-bold text-sm mb-3">₹{item.price}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center bg-white border border-mystic-green/10 rounded-full">
                      <button onClick={() => onUpdateQty(item.id, -1)} className="p-2 hover:text-mystic-green text-gray-400"><Minus size={12}/></button>
                      <span className="px-3 text-xs font-bold text-mystic-dark">{item.quantity}</span>
                      <button onClick={() => onUpdateQty(item.id, 1)} className="p-2 hover:text-mystic-green text-gray-400"><Plus size={12}/></button>
                    </div>
                    <button onClick={() => onRemove(item.id)} className="text-red-300 hover:text-red-500 transition-colors p-2">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-8 bg-white border-t border-mystic-green/10 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-400 uppercase tracking-widest text-[10px] font-bold">Subtotal</span>
              <span className="text-2xl font-serif font-bold text-mystic-dark">₹{total.toFixed(2)}</span>
            </div>
            <p className="text-[10px] text-center text-gray-400 mb-8 italic">Blessed products shipping across India</p>
            <button 
              onClick={onCheckout}
              className="w-full bg-mystic-green hover:bg-mystic-green/90 text-white py-5 rounded-xl uppercase tracking-[0.2em] font-bold transition-all shadow-xl text-xs"
            >
              Secure Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
