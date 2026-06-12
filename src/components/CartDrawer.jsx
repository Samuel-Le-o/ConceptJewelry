import React, { useContext } from 'react';
import { X, Trash2, Plus, Minus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../App';

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cart, updateQuantity, removeFromCart, cartTotal } = useContext(CartContext);
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  return (
    <div class="fixed inset-0 z-50 overflow-hidden">
      <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />
      <div class="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div class="w-screen max-w-md bg-luxury-alabaster text-luxury-onyx flex flex-col border-l border-neutral-200 shadow-2xl">
          <div class="p-6 border-b border-neutral-200 flex justify-between items-center bg-luxury-onyx text-white">
            <h2 class="font-serif text-lg tracking-widest uppercase">Your Selection Cart</h2>
            <button onClick={() => setIsCartOpen(false)} class="hover:text-luxury-gold transition-colors">
              <X size={20} />
            </button>
          </div>

          <div class="flex-grow overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div class="text-center py-20 text-neutral-400">
                <p class="font-serif italic mb-4">The cart is currently empty.</p>
                <button onClick={() => { setIsCartOpen(false); navigate('/shop'); }} class="text-xs uppercase border-b border-luxury-onyx tracking-widest pb-1 hover:text-luxury-gold hover:border-luxury-gold transition-all">Explore Creations</button>
              </div>
            ) : (
              cart.map(item => (
                <div key={item.id} class="flex gap-4 pb-6 border-b border-neutral-200">
                  <img src={item.image} alt={item.name} class="w-20 h-24 object-cover border border-neutral-200" />
                  <div class="flex-grow flex flex-col justify-between">
                    <div>
                      <h4 class="font-serif text-sm font-medium tracking-tight">{item.name}</h4>
                      <p class="text-xs text-luxury-goldDark font-semibold mt-1">${item.price.toLocaleString()}</p>
                    </div>
                    <div class="flex items-center justify-between mt-2">
                      <div class="flex items-center border border-neutral-300">
                        <button class="p-1 px-2 hover:bg-neutral-200 text-xs" onClick={() => updateQuantity(item.id, item.quantity - 1)}><Minus size={12} /></button>
                        <span class="px-3 text-xs font-medium">{item.quantity}</span>
                        <button class="p-1 px-2 hover:bg-neutral-200 text-xs" onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus size={12} /></button>
                      </div>
                      <button class="text-neutral-400 hover:text-red-600 transition-colors" onClick={() => removeFromCart(item.id)}>
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div class="p-6 bg-luxury-cream border-t border-neutral-200 space-y-4">
              <div class="flex justify-between text-sm uppercase tracking-wider font-semibold">
                <span>Subtotal Value</span>
                <span class="text-luxury-goldDark">${cartTotal.toLocaleString()}</span>
              </div>
              <button 
                onClick={() => { setIsCartOpen(false); navigate('/checkout'); }}
                class="w-full bg-luxury-onyx text-white py-4 text-xs font-medium uppercase tracking-[0.2em] hover:bg-luxury-gold hover:text-luxury-onyx transition-all duration-300 shadow-md"
              >
                Proceed To Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}