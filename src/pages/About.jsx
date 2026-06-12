import React from 'react';

export default function About() {
  return (
    <div class="max-w-4xl mx-auto px-6 py-16 space-y-12">
      <div class="text-center space-y-2">
        <h1 class="font-serif text-3xl tracking-widest uppercase">The Heritage of Neema</h1>
        <p class="font-serif text-sm italic text-neutral-400">Precision in design since conception.</p>
      </div>
      <div class="bg-neutral-200 h-96 w-full bg-cover bg-center shadow-lg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80')" }} />
      <div class="prose max-w-none text-neutral-600 text-sm leading-relaxed font-light space-y-6">
        <p>Neema Collections was established out of a desire to break away from fast-fashion production scales and return to the high-integrity ethos of traditional metalsmithing.</p>
        <p>We work exclusively with certified ethical mines and mineral distribution partners across the globe. Each diamond is verified via a secure custody log, while our fine metals are continuously recycled and refined to minimize our ecological footprint.</p>
      </div>
    </div>
  );
}