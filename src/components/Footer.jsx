import React from 'react';

export default function Footer() {
  return (
    <footer class="bg-luxury-onyx text-neutral-400 text-xs tracking-widest py-12 border-t border-neutral-800 px-6 mt-12">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="font-serif text-sm tracking-widest text-luxury-gold font-bold">
          © 2026 NEEMA COLLECTIONS.
        </div>
        <div class="flex gap-8 uppercase text-[10px]">
          <span class="hover:text-white cursor-pointer transition-colors">Privacy Paradigm</span>
          <span class="hover:text-white cursor-pointer transition-colors">Terms of Shop</span>
          <span class="hover:text-white cursor-pointer transition-colors">Insured Shipping</span>
        </div>
      </div>
    </footer>
  );
}