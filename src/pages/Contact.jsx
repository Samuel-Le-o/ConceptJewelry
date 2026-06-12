import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div class="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div class="space-y-6">
        <h1 class="font-serif text-3xl tracking-wide uppercase">Inquire Concierge</h1>
        <p class="text-neutral-500 text-sm leading-relaxed font-light">Should you require bespoke size options, unique gem allocations, or private gallery viewing arrangements, contact our concierge operators below.</p>
        
        <div class="space-y-4 text-xs tracking-wider text-neutral-600 uppercase pt-4">
          <div class="flex items-center gap-3"><MapPin size={16} class="text-luxury-gold" /> <span>Atelier HQ: Airport Residential Area, Accra, Ghana</span></div>
          <div class="flex items-center gap-3"><Phone size={16} class="text-luxury-gold" /> <span>+233 (0) 50 123 4567</span></div>
          <div class="flex items-center gap-3"><Mail size={16} class="text-luxury-gold" /> <span>concierge@neemacollections.com</span></div>
        </div>
      </div>

      <form class="bg-luxury-cream p-6 border border-neutral-200 space-y-4 shadow-sm" onSubmit={(e) => { e.preventDefault(); alert("Inquiry delivered to concierge queue."); }}>
        <div class="flex flex-col"><input type="text" placeholder="Name" required /></div>
        <div class="flex flex-col"><input type="email" placeholder="Email" required /></div>
        <div class="flex flex-col"><textarea rows="4" placeholder="Your Message / Bespoke Specifications" required></textarea></div>
        <button type="submit" class="w-full bg-luxury-onyx text-white py-3 text-xs uppercase tracking-[0.2em] hover:bg-luxury-gold hover:text-luxury-onyx transition-all duration-300 font-medium">Transmit Request</button>
      </form>
    </div>
  );
}