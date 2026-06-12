import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, HardDrive, Compass, Eye } from 'lucide-react';
import { CartContext } from '../App';

const MASTER_REGISTRY = [
  { id: "sj-j001", name: "The Aurelia Diamond Ring", category: "Jewelry", price: 2450.00, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80", desc: "A flawless brilliant-cut 1.5 carat center diamond, claw-set in solid 18k yellow gold filigree work." },
  { id: "sj-j002", name: "Infinity Chain Tennis Bracelet", category: "Jewelry", price: 4200.00, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80", desc: "A continuous ribbon of perfectly calibrated, ethically sourced emerald-cut diamonds linked by platinum weave handles." },
  { id: "sj-c001", name: "Monarch Double-Breasted Cashmere Blazer", category: "Clothing", price: 890.00, image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80", desc: "Hand-tailored Italian cashmere composition featuring unstructured shoulders, horn buttons, and a silk lining." },
  { id: "sj-c002", name: "Atelier Silk Evening Trench", category: "Clothing", price: 1150.00, image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80", desc: "Fluid Mulberry silk silhouette engineered for layered high-end aesthetics. Features deep-set waist tie controls." },
  { id: "sj-e001", name: "Acoustic Obsidian ANC Headphones", category: "Electronics", price: 550.00, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80", desc: "Audiophile-grade 40mm beryllium drivers delivering elite soundstage soundscapes wrapped in high-grade calf leather." },
  { id: "sj-e002", name: "Titanium Heritage Minimalist Smartwatch", category: "Electronics", price: 1250.00, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80", desc: "Aerospace-grade titanium chassis hosting a persistent high-refresh sapphire display and customizable health matrix telemetry." }
];

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    setProduct(MASTER_REGISTRY.find(p => p.id === id) || null);
  }, [id]);

  if (!product) return <div class="py-20 text-center text-avant-muted font-sans text-xs uppercase tracking-[0.3em]">Decoding dynamic data layers...</div>;

  return (
    <div class="max-w-6xl mx-auto px-6 py-12 text-white space-y-8">
      <button onClick={() => navigate('/shop')} class="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-avant-muted hover:text-avant-gold transition-colors">
        <ArrowLeft size={12} /> Return to Index
      </button>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div class="lg:col-span-7 bg-avant-card border border-neutral-900 p-3">
          <img src={product.image} alt={product.name} class="w-full h-[550px] object-cover filter contrast-[1.05]" />
        </div>

        <div class="lg:col-span-5 space-y-6">
          <div class="space-y-2">
            <span class="text-[9px] uppercase tracking-[0.3em] font-bold text-avant-gold bg-avant-surface border border-neutral-900 px-2 py-1 inline-block">{product.category} Segment</span>
            <h1 class="font-serif text-4xl tracking-tight leading-none uppercase">{product.name}</h1>
            <div class="text-2xl font-sans font-bold text-avant-neon pt-1">${product.price.toLocaleString()}.00</div>
          </div>

          <div class="p-4 bg-avant-surface border border-neutral-900 text-avant-muted text-xs leading-relaxed font-light tracking-wide">
            {product.desc}
          </div>

          <div class="flex items-center gap-4 pt-2">
            <div class="flex items-center border border-neutral-800 h-14 bg-avant-surface">
              <button class="px-4 h-full hover:bg-neutral-800 text-sm font-bold text-avant-muted hover:text-white" onClick={() => qty > 1 && setQty(qty - 1)}>-</button>
              <span class="w-10 text-center text-xs font-bold font-sans">{qty}</span>
              <button class="px-4 h-full hover:bg-neutral-800 text-sm font-bold text-avant-muted hover:text-white" onClick={() => setQty(qty + 1)}>+</button>
            </div>

            <button 
              onClick={() => addToCart(product, qty)}
              class="flex-grow h-14 bg-avant-gold text-avant-dark text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-all duration-300 cursor-pointer"
            >
              Acquire To Vault
            </button>
          </div>

          <div class="pt-6 border-t border-neutral-900 grid grid-cols-1 gap-4 text-[11px] text-avant-muted uppercase tracking-wider font-light">
            <div class="flex items-center gap-3"><HardDrive size={14} class="text-avant-gold" /> <span>Includes encrypted provenance telemetry signature</span></div>
            <div class="flex items-center gap-3"><Compass size={14} class="text-avant-gold" /> <span>Bespoke sizing specifications managed on demand</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}