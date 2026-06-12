import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Cpu, Shirt, Sparkles } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div class="bg-luxury-alabaster">
      {/* --- HERO SHOWCASE BANNER --- */}
      <section class="relative h-[85vh] bg-neutral-900 flex items-center justify-center text-center px-4 overflow-hidden">
        <div 
          class="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-multiply scale-105" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80')" }} 
        />
        
        <div class="relative z-10 max-w-3xl space-y-6">
          <h1 class="font-serif text-4xl sm:text-6xl lg:text-7xl tracking-[0.25em] text-luxury-gold uppercase font-bold">
            SAMJOE
            <span class="block text-sm sm:text-base tracking-[0.5em] font-sans font-light text-white mt-4">CLASSY EMPORIUM</span>
          </h1>
          <div class="w-16 h-[1px] bg-luxury-gold mx-auto my-4"></div>
          <p class="font-serif italic text-white/90 text-lg sm:text-xl font-light tracking-wide">
            "Curating Fine Jewelry, Tailored Cuts & Heritage Electronics"
          </p>
          <div class="pt-6">
            <button 
              onClick={() => navigate('/shop')}
              class="bg-transparent border border-luxury-gold text-luxury-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] hover:bg-luxury-gold hover:text-luxury-onyx transition-all duration-500 shadow-lg cursor-pointer"
            >
              Enter The Gallery
            </button>
          </div>
        </div>
      </section>

      {/* --- BRAND MANIFESTO --- */}
      <section class="max-w-4xl mx-auto text-center py-20 px-6 space-y-4">
        <h2 class="font-serif uppercase tracking-[0.2em] text-neutral-400 text-xs">The Modern Standard</h2>
        <h3 class="font-serif text-2xl sm:text-3xl tracking-wide text-luxury-onyx">Three Disciplines. One Singular Caliber.</h3>
        <p class="text-neutral-500 text-sm max-w-2xl mx-auto leading-relaxed font-light">
          SamJoe Classy Emporium bridges the gaps between premium material investments, masterfully tailored wardrobe profiles, and elite computing hardware telemetry. We build ecosystems for those who refuse to compromise on design.
        </p>
      </section>

      {/* --- ICONIC CATEGORY HUBS --- */}
      <section class="max-w-7xl mx-auto px-6 pb-24">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Jewelry Category Core */}
          <div class="relative group h-96 bg-neutral-800 overflow-hidden shadow-md">
            <div 
              class="absolute inset-0 bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80')" }}
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div class="absolute inset-0 flex flex-col justify-end p-8 text-white space-y-2">
              <Sparkles size={20} class="text-luxury-gold" />
              <h4 class="font-serif text-xl tracking-wider uppercase">Fine Jewelry</h4>
              <p class="text-[11px] text-neutral-300 font-light tracking-wide">Ethical flawless settings and precious gold contours.</p>
              <button onClick={() => navigate('/shop')} class="text-[10px] uppercase font-semibold text-luxury-gold tracking-widest text-left pt-2 underline underline-offset-4 cursor-pointer">Explore</button>
            </div>
          </div>

          {/* Clothing Category Core */}
          <div class="relative group h-96 bg-neutral-800 overflow-hidden shadow-md">
            <div 
              class="absolute inset-0 bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80')" }}
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div class="absolute inset-0 flex flex-col justify-end p-8 text-white space-y-2">
              <Shirt size={20} class="text-luxury-gold" />
              <h4 class="font-serif text-xl tracking-wider uppercase">Atelier Clothing</h4>
              <p class="text-[11px] text-neutral-300 font-light tracking-wide">Cashmere composites and fluid hand-tailored silk profiles.</p>
              <button onClick={() => navigate('/shop')} class="text-[10px] uppercase font-semibold text-luxury-gold tracking-widest text-left pt-2 underline underline-offset-4 cursor-pointer">Explore</button>
            </div>
          </div>

          {/* Electronics Category Core */}
          <div class="relative group h-96 bg-neutral-800 overflow-hidden shadow-md">
            <div 
              class="absolute inset-0 bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80')" }}
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div class="absolute inset-0 flex flex-col justify-end p-8 text-white space-y-2">
              <Cpu size={20} class="text-luxury-gold" />
              <h4 class="font-serif text-xl tracking-wider uppercase">Elite Electronics</h4>
              <p class="text-[11px] text-neutral-300 font-light tracking-wide">Aerospace metals meeting advanced personal architecture.</p>
              <button onClick={() => navigate('/shop')} class="text-[10px] uppercase font-semibold text-luxury-gold tracking-widest text-left pt-2 underline underline-offset-4 cursor-pointer">Explore</button>
            </div>
          </div>

        </div>
      </section>

      {/* --- VALUE STATEMENT ACCENTS --- */}
      <section class="bg-luxury-onyx text-white py-12 px-6 border-t border-neutral-900">
        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div class="flex flex-col items-center space-y-2">
            <ShieldCheck class="text-luxury-gold" size={24} />
            <h5 class="text-xs uppercase tracking-widest font-semibold">Insured Vault Handover</h5>
            <p class="text-[11px] text-neutral-400 font-light max-w-xs">Every order is processed via encrypted signatures and hand-delivered securely.</p>
          </div>
          <div class="flex flex-col items-center space-y-2">
            <Sparkles class="text-luxury-gold" size={24} />
            <h5 class="text-xs uppercase tracking-widest font-semibold">Certified Heritage Lines</h5>
            <p class="text-[11px] text-neutral-400 font-light max-w-xs">Each product asset includes an authentic physical ownership ledger passport.</p>
          </div>
          <div class="flex flex-col items-center space-y-2">
            <Shirt class="text-luxury-gold" size={24} />
            <h5 class="text-xs uppercase tracking-widest font-semibold">Bespoke Fitting Services</h5>
            <p class="text-[11px] text-neutral-400 font-light max-w-xs">Connect directly with our luxury concierge desk for custom sizing adjustments.</p>
          </div>
        </div>
      </section>
    </div>
  );
}