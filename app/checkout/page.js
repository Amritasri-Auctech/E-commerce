"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronRight, CreditCard, Shield, Lock } from "lucide-react";
import { useCart } from "@/context/CartContext";

const paymentMethods = [
  { id: "stripe", label: "Stripe", icon: "💳" },
  { id: "paypal", label: "PayPal", icon: "🅿️" },
  { id: "adyen", label: "Adyen", icon: "🔷" },
  { id: "worldpay", label: "Worldpay", icon: "🌐" },
  { id: "2checkout", label: "2Checkout", icon: "2️⃣" },
];

const indianStates = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat",
  "Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh",
  "Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab",
  "Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh",
  "Uttarakhand","West Bengal","Delhi","Jammu & Kashmir","Ladakh",
];

export default function CheckoutPage() {
  const { cartItems, totalPrice, clearCart } = useCart();
  const router = useRouter();
  const [selectedPayment, setSelectedPayment] = useState("stripe");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ fullName: "", mobile: "", email: "", address: "", city: "", state: "", pincode: "" });

  const shipping = totalPrice >= 499 ? 0 : 49;
  const grandTotal = totalPrice + shipping;

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required";
    if (!/^[6-9]\d{9}$/.test(form.mobile)) e.mobile = "Enter a valid 10-digit mobile number";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address";
    if (!form.address.trim()) e.address = "Shipping address is required";
    if (!form.city.trim()) e.city = "City is required";
    if (!form.state) e.state = "Please select a state";
    if (!/^\d{6}$/.test(form.pincode)) e.pincode = "Enter a valid 6-digit pincode";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    clearCart();
    router.push("/thank-you");
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-colors bg-white ${
      errors[field] ? "border-red-400 bg-red-50" : "border-gray-200"
    }`;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Your cart is empty</h1>
          <Link href="/products" className="text-blue-600 font-medium hover:underline">Browse Medicines</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/cart" className="hover:text-blue-600 transition-colors">Cart</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">Checkout</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        <form onSubmit={handleSubmit} noValidate>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {/* Shipping */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h2 className="font-bold text-gray-900 text-lg mb-6">Shipping Details</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                    <input id="fullName" name="fullName" type="text" value={form.fullName} onChange={handleChange}
                      placeholder="Enter your full name" className={inputClass("fullName")} autoComplete="name" />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                  </div>
                  <div>
                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1.5">Mobile Number <span className="text-red-500">*</span></label>
                    <input id="mobile" name="mobile" type="tel" value={form.mobile} onChange={handleChange}
                      placeholder="10-digit mobile number" className={inputClass("mobile")} autoComplete="tel" maxLength={10} />
                    {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email Address <span className="text-red-500">*</span></label>
                    <input id="email" name="email" type="email" value={form.email} onChange={handleChange}
                      placeholder="your@email.com" className={inputClass("email")} autoComplete="email" />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1.5">Shipping Address <span className="text-red-500">*</span></label>
                    <textarea id="address" name="address" value={form.address} onChange={handleChange}
                      placeholder="House no., Street, Area, Landmark" rows={3}
                      className={`${inputClass("address")} resize-none`} autoComplete="street-address" />
                    {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1.5">City <span className="text-red-500">*</span></label>
                    <input id="city" name="city" type="text" value={form.city} onChange={handleChange}
                      placeholder="City" className={inputClass("city")} autoComplete="address-level2" />
                    {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1.5">State <span className="text-red-500">*</span></label>
                    <select id="state" name="state" value={form.state} onChange={handleChange}
                      className={inputClass("state")} autoComplete="address-level1">
                      <option value="">Select State</option>
                      {indianStates.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
                  </div>
                  <div>
                    <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1.5">Pincode <span className="text-red-500">*</span></label>
                    <input id="pincode" name="pincode" type="text" value={form.pincode} onChange={handleChange}
                      placeholder="6-digit pincode" className={inputClass("pincode")} maxLength={6} autoComplete="postal-code" />
                    {errors.pincode && <p className="text-red-500 text-xs mt-1">{errors.pincode}</p>}
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h2 className="font-bold text-gray-900 text-lg mb-6 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-blue-600" /> Payment Method
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {paymentMethods.map((method) => (
                    <label key={method.id} className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all ${
                      selectedPayment === method.id ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-blue-200"
                    }`}>
                      <input type="radio" name="payment" value={method.id} checked={selectedPayment === method.id}
                        onChange={() => setSelectedPayment(method.id)} className="sr-only" />
                      <span className="text-xl">{method.icon}</span>
                      <span className="text-sm font-medium text-gray-700">{method.label}</span>
                    </label>
                  ))}
                </div>
                <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Your payment information is encrypted and secure.</span>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border border-gray-100 p-6 sticky top-24 shadow-sm">
                <h2 className="font-bold text-gray-900 text-lg mb-4">Order Summary</h2>
                <div className="space-y-3 mb-4 max-h-48 overflow-y-auto">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-gray-600 truncate mr-2">{item.name} × {item.quantity}</span>
                      <span className="font-medium text-gray-900 shrink-0">₹{(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-100 pt-4 space-y-2 text-sm">
                  <div className="flex justify-between text-gray-600"><span>Subtotal</span><span>₹{totalPrice.toFixed(2)}</span></div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className={shipping === 0 ? "text-emerald-600 font-medium" : ""}>{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
                  </div>
                  <div className="border-t border-gray-100 pt-2 flex justify-between font-bold text-gray-900 text-base">
                    <span>Total</span>
                    <span className="text-blue-700">₹{grandTotal.toFixed(2)}</span>
                  </div>
                </div>
                <button type="submit" disabled={submitting}
                  className="mt-6 w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-4 rounded-2xl transition-colors shadow-lg shadow-blue-100">
                  {submitting ? (
                    <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />Processing...</>
                  ) : (
                    <><Shield className="w-5 h-5" />Place Order — ₹{grandTotal.toFixed(2)}</>
                  )}
                </button>
                <p className="text-xs text-gray-400 text-center mt-3">
                  By placing your order, you agree to our{" "}
                  <Link href="/terms" className="text-blue-600 hover:underline">Terms & Conditions</Link>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
