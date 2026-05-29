"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Star, ChevronRight, Minus, Plus, CheckCircle, AlertCircle, Info } from "lucide-react";
import { useCart } from "@/context/CartContext";
import MedicineCard from "@/components/MedicineCard";

export default function ProductDetailClient({ medicine, related }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const discount = Math.round(
    ((medicine.originalPrice - medicine.price) / medicine.originalPrice) * 100
  );

  const handleAddToCart = () => {
    addToCart(medicine, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/products" className="hover:text-blue-600 transition-colors">Products</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium truncate max-w-xs">{medicine.name}</span>
        </nav>

        {/* Product Detail */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden mb-10">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative h-80 md:h-auto min-h-72 bg-gray-50">
              <Image
                src={medicine.image}
                alt={medicine.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {discount > 0 && (
                <span className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow">
                  -{discount}% OFF
                </span>
              )}
            </div>

            {/* Info */}
            <div className="p-8 flex flex-col justify-center">
              <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-200 mb-3 w-fit">
                {medicine.category}
              </span>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{medicine.name}</h1>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(medicine.rating) ? "fill-amber-400 text-amber-400" : "text-gray-200"}`} />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-700">{medicine.rating}</span>
                <span className="text-sm text-gray-400">({medicine.reviews} reviews)</span>
              </div>

              <div className="flex items-center gap-3 mb-5">
                <span className="text-3xl font-bold text-blue-700">₹{medicine.price}</span>
                {medicine.originalPrice > medicine.price && (
                  <>
                    <span className="text-lg text-gray-400 line-through">₹{medicine.originalPrice}</span>
                    <span className="bg-red-50 text-red-600 text-sm font-semibold px-2 py-0.5 rounded-lg border border-red-100">
                      {discount}% OFF
                    </span>
                  </>
                )}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-5">{medicine.description}</p>

              <div className="flex items-center gap-2 mb-5">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span className="text-sm text-emerald-700 font-medium">In Stock ({medicine.stock} units available)</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-medium text-gray-700">Quantity:</span>
                <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2.5 hover:bg-gray-50 transition-colors" aria-label="Decrease quantity">
                    <Minus className="w-4 h-4 text-gray-600" />
                  </button>
                  <span className="px-5 py-2 font-semibold text-gray-900 min-w-[3rem] text-center">{quantity}</span>
                  <button onClick={() => setQuantity(Math.min(medicine.stock, quantity + 1))} className="p-2.5 hover:bg-gray-50 transition-colors" aria-label="Increase quantity">
                    <Plus className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className={`flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-semibold text-base transition-all ${
                  added
                    ? "bg-emerald-50 text-emerald-700 border-2 border-emerald-200"
                    : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200"
                }`}
              >
                {added ? (
                  <><CheckCircle className="w-5 h-5" /> Added to Cart!</>
                ) : (
                  <><ShoppingCart className="w-5 h-5" /> Add to Cart — ₹{(medicine.price * quantity).toFixed(2)}</>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-blue-50 rounded-lg"><Info className="w-4 h-4 text-blue-600" /></div>
              <h2 className="font-semibold text-gray-900">Uses</h2>
            </div>
            <ul className="space-y-2">
              {medicine.uses.map((use, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />{use}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-indigo-50 rounded-lg"><Info className="w-4 h-4 text-indigo-600" /></div>
              <h2 className="font-semibold text-gray-900">Dosage</h2>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{medicine.dosage}</p>
            <p className="text-xs text-gray-400 mt-3 italic">Always consult a doctor before taking any medication.</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-amber-50 rounded-lg"><AlertCircle className="w-4 h-4 text-amber-600" /></div>
              <h2 className="font-semibold text-gray-900">Side Effects</h2>
            </div>
            <ul className="space-y-2">
              {medicine.sideEffects.map((effect, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <AlertCircle className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />{effect}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {related.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Medicines</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((m) => <MedicineCard key={m.id} medicine={m} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
