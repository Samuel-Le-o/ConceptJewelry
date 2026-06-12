import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../App';
import { Eye } from 'lucide-react';

const SAMJOE_INVENTORY = [
  { id: "sj-j001", name: "The Aurelia Diamond Ring", category: "Jewelry", price: 2450.00, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80" },
  { id: "sj-j002", name: "Infinity Chain Tennis Bracelet", category: "Jewelry", price: 4200.00, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80" },
  { id: "sj-c001", name: "Monarch Double-Breasted Cashmere Blazer", category: "Clothing", price: 890.00, image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80" },
  { id: "sj-c002", name: "Atelier Silk Evening Trench", category: "Clothing", price: 1150.00, image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80" },
  { id: "sj-e001", name: "Acoustic Obsidian ANC Headphones", category: "Electronics", price: 550.00, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80" },
  { id: "sj-e002", name: "Titanium Heritage Minimalist Smartwatch", category: "Electronics", price: 1250.00, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80" }
];

export default function Shop() {
  const { addToCart } = useContext(CartContext);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Jewelry", "Clothing", "Electronics"];
  const filteredProducts = activeCategory === "All" ? SAMJOE_INVENTORY : SAMJOE_INVENTORY.filter(p => p.category === activeCategory);

  return (
    <div class="max-w-7xl mx-auto px-6 py-12 space-y-12 text-white">
      {/* Title Block */}
      <div class="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-900 pb-6 gap-4">
        <div>
          <h1 class="font-serif text-4xl font-bold uppercase tracking-tight">The Core Index</h1>
          <p class="text-avant-muted text-xs font-light tracking-widest uppercase mt-1">Systematic division of modern luxury goods.</p>
        </div>
        
        {/* Category Selector Buttons */}
        <div class="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              class={`px-4 py-2 text-[10px] uppercase tracking-[0.2em] transition-all duration-300 font-bold border ${
                activeCategory === cat 
                  ? 'bg-avant-gold text-avant-dark border-avant-gold' 
                  : 'text-avant-muted hover:text-white bg-transparent border-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Canvas */}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <div key={product.id} class="bg-avant-card border border-neutral-900 group flex flex-col justify-between hover:border-neutral-700 transition-all duration-500">
            <div class="relative overflow-hidden aspect-[4/5] bg-avant-dark">
              <img src={product.image} alt={product.name} class="w-full h-full object-cover filter grayscale contrast-[1.1] group-hover:grayscale-0 group-hover:scale-102 transition-all duration-700 ease-out" />
              <div class="absolute inset-0 bg-gradient-to-t from-avant-dark via-transparent to-transparent opacity-80" />
              <Link to={`/product/${product.id}`} class="absolute top-4 right-4 bg-avant-dark/80 backdrop-blur-md p-3 rounded-none text-avant-gold border border-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Eye size={14} />
              </Link>
            </div>
            
            <div class="p-6 space-y-4">
              <div class="space-y-1">
                <div class="text-[9px] uppercase tracking-widest font-bold text-avant-gold">{product.category}</div>
                <h3 class="font-serif text-lg tracking-tight hover:text-avant-gold transition-colors duration-300">
                  <Link to={`/product/${product.id}`}>{product.name}</Link>
                </h3>
              </div>
              
              <div class="flex items-center justify-between pt-2 border-t border-neutral-900">
                <span class="font-sans font-bold text-md text-white">${product.price.toLocaleString()}.00</span>
                <button onClick={() => addToCart(product)} class="text-[10px] uppercase font-bold tracking-widest text-avant-neon hover:text-white border-b border-avant-gold pb-0.5 transition-colors cursor-pointer">Acquire Asset</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}