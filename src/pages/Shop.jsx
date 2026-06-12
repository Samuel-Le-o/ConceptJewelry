import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../App';

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/products`)
      .then(res => { setProducts(res.data); setLoading(false); })
      .catch(err => {
        console.error("Using fallback mockup dataset.");
        setProducts([
          { id: "neema-001", name: "The Aurelia Diamond Ring", category: "Rings", price: 2450.00, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80" },
          { id: "neema-002", name: "Solstice Gold Hoop Drop Earrings", category: "Earrings", price: 1850.00, image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=600&q=80" },
          { id: "neema-003", name: "Infinity Chain Tennis Bracelet", category: "Bracelets", price: 4200.00, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80" },
          { id: "neema-004", name: "Empress Baroque Pearl Pendant", category: "Necklaces", price: 1950.00, image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=600&q=80" }
        ]);
        setLoading(false);
      });
  }, []);

  if (loading) return <div class="min-h-[70vh] flex items-center justify-center font-serif text-lg italic tracking-widest text-neutral-400">Curating Exhibition Cart...</div>;

  return (
    <div class="max-w-7xl mx-auto px-6 py-12 space-y-10">
      <div class="text-center space-y-2">
        <h1 class="font-serif text-3xl tracking-[0.15em] uppercase font-semibold">The Shop Collection</h1>
        <p class="font-serif text-sm italic text-neutral-400">Discover handpicked, flawless execution signatures.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
        {products.map(product => (
          <div key={product.id} class="group relative flex flex-col justify-between">
            <Link to={`/product/${product.id}`} class="block overflow-hidden bg-luxury-cream border border-neutral-100">
              <img 
                src={product.image} 
                alt={product.name} 
                class="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
            </Link>
            <div class="mt-4 space-y-1 text-center">
              <p class="text-[10px] uppercase tracking-widest text-neutral-400">{product.category}</p>
              <h3 class="font-serif text-sm tracking-tight text-luxury-onyx hover:text-luxury-gold transition-colors duration-300">
                <Link to={`/product/${product.id}`}>{product.name}</Link>
              </h3>
              <p class="text-xs text-luxury-goldDark font-semibold">${product.price.toLocaleString()}</p>
            </div>
            <button 
              onClick={() => addToCart(product)}
              class="w-full mt-4 bg-luxury-onyx text-white py-3 text-[10px] uppercase tracking-[0.2em] hover:bg-luxury-gold hover:text-luxury-onyx transition-all duration-300 font-medium"
            >
              Acquire To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}