import React from 'react';

export default function About() {
  return (
    <div class="max-w-4xl mx-auto px-6 py-16 space-y-12">
      <div class="text-center space-y-2">
        <h1 class="font-serif text-3xl tracking-widest uppercase">The SamJoe Heritage</h1>
        <p class="font-serif text-sm italic text-neutral-400">Bridging elite craft disciplines under one master house.</p>
      </div>
      
      <div class="h-96 w-full bg-cover bg-center shadow-lg border border-neutral-200" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80')" }} />
      
      <div class="prose max-w-none text-neutral-600 text-sm leading-relaxed font-light space-y-6">
        <p>
          Founded on the principle of absolute refinement, SamJoe Classy Emporium functions as a curated gallery for modern connoisseurs. What began as an exclusive atelier for flawless custom jewelry has evolved into an all-encompassing lifestyle ecosystem spanning hand-tailored apparel and precision electronics.
        </p>
        <p>
          We source globally and select meticulously. From the grade of cashmere used in our blazers to the acoustic tuning parameters of our smart devices and the ethical certification of our diamond settings, every asset in our vault passes through rigorous quality validation before being released to our clients.
        </p>
      </div>
    </div>
  );
}