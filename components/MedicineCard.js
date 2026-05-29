"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Eye, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function MedicineCard({ medicine }) {
  const { addToCart } = useCart();
  const discount = Math.round(
    ((medicine.originalPrice - medicine.price) / medicine.originalPrice) * 100
  );

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group flex flex-col">
      {/* Image */}
      <div className="relative h-48 bg-gray-50 overflow-hidden">
        <Image
          src={medicine.image}
          alt={medicine.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {discount > 0 && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
            -{discount}%
          </span>
        )}
        <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-600 text-xs px-2 py-1 rounded-full border border-gray-200">
          {medicine.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-gray-900 text-sm leading-tight mb-1 line-clamp-2">
          {medicine.name}
        </h3>
        <p className="text-gray-500 text-xs mb-3 line-clamp-2 flex-1">
          {medicine.shortDescription}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span className="text-xs font-medium text-gray-700">{medicine.rating}</span>
          <span className="text-xs text-gray-400">({medicine.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg font-bold text-blue-700">₹{medicine.price}</span>
          {medicine.originalPrice > medicine.price && (
            <span className="text-sm text-gray-400 line-through">₹{medicine.originalPrice}</span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => addToCart(medicine)}
            className="flex-1 flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-2.5 px-3 rounded-xl transition-colors"
            aria-label={`Add ${medicine.name} to cart`}
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            Add to Cart
          </button>
          <Link
            href={`/products/${medicine.id}`}
            className="flex items-center justify-center p-2.5 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 rounded-xl transition-colors"
            aria-label={`View details of ${medicine.name}`}
          >
            <Eye className="w-4 h-4 text-gray-500 hover:text-blue-600" />
          </Link>
        </div>
      </div>
    </div>
  );
}
