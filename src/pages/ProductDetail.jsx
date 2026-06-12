import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Truck } from 'lucide-react';
import axios from 'axios';
import { CartContext } from '../App';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(() => {
        const mockArray = [
          { id: "neema-001", name: "The Aurelia Diamond Ring", category: "Rings", price: 2450.00, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80", desc: "A flawless brilliant-cut 1.5 carat center diamond, claw-set in solid 18k yellow gold filigree work." },
          { id: "neema-002", name: "Solstice Gold Hoop Drop Earrings", category: "Earrings", price: 1850.00, image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=600&q=80", desc: "Crafted radiant hoops finished with suspended geometric drops, refracting structural light with every movement." },
          { id: "neema-003", name: "Infinity Chain Tennis Bracelet", category: "Bracelets", price: 4200.00, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80", desc: "A continuous ribbon of perfectly calibrated, ethically sourced emerald-cut diamonds linked by platinum weave handles." },
          { id: "neema-004", name: "Empress Baroque Pearl Pendant", category: "Necklaces", price: 1950.00, image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=600&q=80", desc: "A singular, ultra-rare irregular iridescent South Sea baroque pearl gracefully sliding over an 18k braided mesh chain." }
        ];
        setProduct(mockArray.find(p => p.id === id));
      });
  }, [id]);

  if (!product) return <div class="py-20 text-center font-serif italic text-neutral-400">Parsing artifact files...</div>;

  return (
    <div class="max-w-6xl mx-auto px-6 py-12 space-y-8">
      <button onClick={() => navigate('/shop')} class="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-500 hover:text-luxury-gold transition-colors">
        <ArrowLeft size={14} /> Back to Collection
      </button>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div class="bg-luxury-cream border border-neutral-100">
          <img src={product.image} alt={product.name} class="w-full h-[550px] object-cover" />
        </div>

        <div class="space-y-6">
          <div class="space-y-1">
            <span class="text-xs uppercase tracking-[0.2em] text-luxury-goldDark font-semibold">{product.category}</span>
            <h1 class="font-serif text-3xl tracking-tight text-luxury-onyx font-medium">{product.name}</h1>
            <p class="text-xl font-serif text-luxury-onyx mt-2">${product.price.toLocaleString()}</p>
          </div>

          <p class="text-neutral-500 text-sm leading-relaxed font-light">{product.desc}</p>

          <div class="flex items-center gap-4 pt-4">
            <div class="flex items-center border border-neutral-300 h-12 bg-white">
              <button class="px-3 h-full hover:bg-neutral-100 text-sm" onClick={() => qty > 1 && setQty(qty - 1)}>-</button>
              <span class="w-12 text-center text-xs font-semibold">{qty}</span>
              <button class="px-3 h-full hover:bg-neutral-100 text-sm" onClick={() => setQty(qty + 1)}>+</button>
            </div>

            <button 
              onClick={() => addToCart(product, qty)}
              class="flex-grow h-12 bg-luxury-onyx text-white text-xs font-medium uppercase tracking-[0.2em] hover:bg-luxury-gold hover:text-luxury-onyx transition-all duration-300"
            >
              Add To Selection Vault
            </button>
          </div>

          <div class="pt-8 border-t border-neutral-200 grid grid-cols-1 gap-4 text-xs text-neutral-500">
            <div class="flex items-center gap-3"><Truck size={16} class="text-luxury-gold" /> <span>Complimentary Insured Overnight Courier Dispatch</span></div>
            <div class="flex items-center gap-3"><ShieldCheck size={16} class="text-luxury-gold" /> <span>Includes Authenticity Certification & Lifetime Guarantee</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}