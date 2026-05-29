"use client";

import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, ChevronRight } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, totalItems, totalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-7xl mb-6">🛒</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Your cart is empty</h1>
          <p className="text-gray-500 mb-8">Add some medicines to get started.</p>
          <Link href="/products" className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors">
            <ShoppingBag className="w-5 h-5" /> Browse Medicines
          </Link>
        </div>
      </div>
    );
  }

  const shipping = totalPrice >= 499 ? 0 : 49;
  const grandTotal = totalPrice + shipping;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">Cart</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Shopping Cart <span className="text-gray-400 font-normal text-xl">({totalItems} items)</span>
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl border border-gray-100 p-5 flex gap-4 items-center hover:shadow-sm transition-shadow">
                <div className="w-20 h-20 bg-gray-100 rounded-xl overflow-hidden shrink-0 relative">
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-3xl">💊</div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 text-sm truncate">{item.name}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{item.category}</p>
                  <p className="text-blue-700 font-bold mt-1">₹{item.price}</p>
                </div>
                <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden shrink-0">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 hover:bg-gray-50 transition-colors" aria-label="Decrease quantity">
                    <Minus className="w-3.5 h-3.5 text-gray-600" />
                  </button>
                  <span className="px-3 py-1.5 font-semibold text-sm text-gray-900 min-w-[2.5rem] text-center">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 hover:bg-gray-50 transition-colors" aria-label="Increase quantity">
                    <Plus className="w-3.5 h-3.5 text-gray-600" />
                  </button>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-bold text-gray-900">₹{(item.price * item.quantity).toFixed(2)}</p>
                  <button onClick={() => removeFromCart(item.id)} className="mt-1 p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors" aria-label={`Remove ${item.name}`}>
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 sticky top-24 shadow-sm">
              <h2 className="font-bold text-gray-900 text-lg mb-6">Order Summary</h2>
              <div className="space-y-3 text-sm mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({totalItems} items)</span>
                  <span>₹{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? "text-emerald-600 font-medium" : ""}>
                    {shipping === 0 ? "FREE" : `₹${shipping}`}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-gray-400">Add ₹{(499 - totalPrice).toFixed(2)} more for free shipping</p>
                )}
                <div className="border-t border-gray-100 pt-3 flex justify-between font-bold text-gray-900 text-base">
                  <span>Total</span>
                  <span className="text-blue-700">₹{grandTotal.toFixed(2)}</span>
                </div>
              </div>
              <Link href="/checkout" className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-2xl transition-colors shadow-lg shadow-blue-100">
                Proceed to Checkout <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/products" className="flex items-center justify-center gap-2 w-full mt-3 text-gray-500 hover:text-blue-600 text-sm font-medium py-2 transition-colors">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
