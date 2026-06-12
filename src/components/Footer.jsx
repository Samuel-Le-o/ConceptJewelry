import React from 'react';

export default function Footer() {
  return (
    <footer class="bg-luxury-onyx text-neutral-400 text-xs tracking-widest py-12 border-t border-neutral-900 px-6 mt-12">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="font-serif text-sm tracking-widest text-luxury-gold font-bold">
          © 2026 SAMJOE CLASSY EMPORIUM.
        </div>
        <div class="flex gap-8 uppercase text-[10px]">
          <span class="hover:text-white cursor-pointer transition-colors duration-300">Privacy Paradigm</span>
          <span class="hover:text-white cursor-pointer transition-colors duration-300">Terms of Atelier</span>
          <span class="hover:text-white cursor-pointer transition-colors duration-300">Insured Transport</span>
        </div>
      </div>
    </footer>
  );
}