import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div class="bg-luxury-alabaster">
      <section class="relative h-[85vh] bg-neutral-900 flex items-center justify-center text-center px-4 overflow-hidden">
        <div class="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-multiply scale-105" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1600&q=80')" }} />
        
        <div class="relative z-10 max-w-3xl space-y-6">
          <h1 class="font-serif text-4xl sm:text-6xl lg:text-7xl tracking-[0.25em] text-luxury-gold uppercase font-bold">
            NEEMA
            <span class="block text-sm sm:text-base tracking-[0.5em] font-sans font-light text-white mt-4">COLLECTIONS</span>
          </h1>
          <div class="w-16 h-[1px] bg-luxury-gold mx-auto my-4"></div>
          <p class="font-serif italic text-white/90 text-lg sm:text-xl font-light tracking-wide">"Elegance Crafted for You"</p>
          <div class="pt-6">
            <button 
              onClick={() => navigate('/shop')}
              class="bg-transparent border border-luxury-gold text-luxury-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] hover:bg-luxury-gold hover:text-luxury-onyx transition-all duration-500"
            >
              Shop Now
            </button>
          </div>
        </div>
      </section>

      <section class="max-w-4xl mx-auto text-center py-20 px-6 space-y-4">
        <h2 class="font-serif uppercase tracking-[0.2em] text-neutral-500 text-xs">The Philosophy</h2>
        <h3 class="font-serif text-2xl sm:text-3xl tracking-wide text-luxury-onyx">Timeless Materials. Meticulous Craftsmanship.</h3>
        <p class="text-neutral-500 text-sm max-w-2xl mx-auto leading-relaxed font-light">
          Each masterpiece within Neema Collections is carefully engineered by master diamond setters and goldsmiths to translate the raw kinetic energy of high-end precious jewelry items into statements of graceful posture.
        </p>
      </section>
    </div>
  );
}