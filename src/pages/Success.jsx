import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function Success() {
  const navigate = useNavigate();
  return (
    <div class="max-w-md mx-auto text-center py-32 px-6 space-y-6">
      <div class="flex justify-center"><CheckCircle size={64} class="text-luxury-gold stroke-[1.5]" /></div>
      <h1 class="font-serif text-3xl tracking-wider uppercase text-luxury-onyx">Acquisition Authenticated</h1>
      <p class="text-neutral-500 text-sm leading-relaxed font-light">
        Thank you for choosing Neema Collections. Your secure financial transfer has cleared. A dedicated client advisor will notify you via encrypted email shortly to schedule secure luxury transport.
      </p>
      <div class="pt-4">
        <button onClick={() => navigate('/shop')} class="bg-luxury-onyx text-white text-xs px-6 py-3 uppercase tracking-[0.2em] hover:bg-luxury-gold hover:text-luxury-onyx transition-colors">Return to Atelier</button>
      </div>
    </div>
  );
}