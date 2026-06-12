import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X, Sparkles } from 'lucide-react';
import { CartContext } from '../App';

export default function Navbar() {
  const { setIsCartOpen, cartCount } = useContext(CartContext);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav class="bg-luxury-onyx text-white fixed top-0 left-0 w-full z-40 border-b border-neutral-900 tracking-widest uppercase text-xs">
      <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Mobile Toggle */}
        <button class="md:hidden text-luxury-gold" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Global Navigation Hub */}
        <div class="hidden md:flex items-center gap-8">
          <Link to="/shop" class="hover:text-luxury-gold transition-colors duration-300">The Catalog</Link>
          <Link to="/about" class="hover:text-luxury-gold transition-colors duration-300">Heritage</Link>
          <Link to="/contact" class="hover:text-luxury-gold transition-colors duration-300">Concierge</Link>
        </div>

        {/* Brand Core Identity */}
        <Link to="/" class="font-serif text-center flex flex-col items-center">
          <span class="text-base lg:text-xl tracking-[0.3em] text-luxury-gold font-bold flex items-center gap-1">
            SAMJOE <Sparkles size={14} class="text-luxury-gold inline animate-pulse" />
          </span>
          <span class="text-[9px] tracking-[0.35em] font-sans font-light text-neutral-300 -mt-0.5">
            CLASSY EMPORIUM
          </span>
        </Link>

        {/* Selection Vault Access */}
        <button onClick={() => setIsCartOpen(true)} class="flex items-center gap-2 hover:text-luxury-gold transition-colors duration-300 relative">
          <ShoppingBag size={18} class="text-luxury-gold" />
          <span class="hidden sm:inline">Vault</span>
          <span class="bg-luxury-gold text-luxury-onyx rounded-full w-4 h-4 flex items-center justify-center font-bold text-[9px] -mt-2 -ml-1">
            {cartCount}
          </span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div class="md:hidden bg-luxury-coal border-b border-neutral-800 flex flex-col px-6 py-6 gap-4">
          <Link to="/shop" onClick={() => setMobileOpen(false)} class="py-2 hover:text-luxury-gold">The Catalog</Link>
          <Link to="/about" onClick={() => setMobileOpen(false)} class="py-2 hover:text-luxury-gold">Heritage</Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)} class="py-2 hover:text-luxury-gold">Concierge</Link>
        </div>
      )}
    </nav>
  );
}