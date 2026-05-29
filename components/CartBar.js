"use client";

import Link from "next/link";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartBar() {
  const { totalItems, totalPrice } = useCart();

  if (totalItems === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 pointer-events-none">
      <div className="max-w-2xl mx-auto pointer-events-auto">
        <div className="bg-blue-700 text-white rounded-2xl shadow-2xl px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-xl">
              <ShoppingCart className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-blue-200">{totalItems} item{totalItems > 1 ? "s" : ""} in cart</p>
              <p className="font-bold text-lg leading-tight">₹{totalPrice.toFixed(2)}</p>
            </div>
          </div>
          <Link
            href="/cart"
            className="flex items-center gap-2 bg-white text-blue-700 font-semibold text-sm px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors"
          >
            View Cart <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
