import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { CartContext } from '../App';

export default function Navbar() {
  const { setIsCartOpen, cartCount } = useContext(CartContext);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav class="bg-luxury-onyx text-white fixed top-0 left-0 w-full z-40 border-b border-neutral-800 tracking-widest uppercase text-xs">
      <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button class="md:hidden text-luxury-gold" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div class="hidden md:flex items-center gap-8">
          <Link to="/shop" class="hover:text-luxury-gold transition-colors duration-300">Shop</Link>
          <Link to="/about" class="hover:text-luxury-gold transition-colors duration-300">About Us</Link>
          <Link to="/contact" class="hover:text-luxury-gold transition-colors duration-300">Contact</Link>
        </div>

        <Link to="/" class="font-serif text-lg lg:text-2xl tracking-[0.25em] text-center text-luxury-gold font-bold">
          NEEMA <span class="block text-[9px] tracking-[0.4em] font-sans font-light text-white -mt-1">COLLECTIONS</span>
        </Link>

        <button onClick={() => setIsCartOpen(true)} class="flex items-center gap-2 hover:text-luxury-gold transition-colors duration-300 relative">
          <ShoppingBag size={18} class="text-luxury-gold" />
          <span class="hidden sm:inline">Vault</span>
          <span class="bg-luxury-gold text-luxury-onyx rounded-full w-4 h-4 flex items-center justify-center font-bold text-[9px] -mt-2 -ml-1">
            {cartCount}
          </span>
        </button>
      </div>

      {mobileOpen && (
        <div class="md:hidden bg-luxury-coal border-b border-neutral-800 flex flex-col px-6 py-6 gap-4">
          <Link to="/shop" onClick={() => setMobileOpen(false)} class="py-2 hover:text-luxury-gold">Shop</Link>
          <Link to="/about" onClick={() => setMobileOpen(false)} class="py-2 hover:text-luxury-gold">About Us</Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)} class="py-2 hover:text-luxury-gold">Contact</Link>
        </div>
      )}
    </nav>
  );
}