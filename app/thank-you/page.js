import Link from "next/link";
import { CheckCircle, Home, ShoppingBag, Phone } from "lucide-react";

export const metadata = {
  title: "Order Placed Successfully - PharmaCare",
  description: "Thank you for your order. Our team will contact you soon.",
  robots: { index: false },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-lg w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-emerald-600" />
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Thank You! 🎉</h1>
        <p className="text-xl text-emerald-700 font-semibold mb-3">Order Received Successfully</p>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Our team will contact you soon to confirm your order and arrange delivery. You will receive a confirmation email shortly.
        </p>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 mb-8 text-left space-y-4 shadow-sm">
          {[
            { emoji: "📦", label: "What happens next?", value: "Order confirmation within 30 minutes" },
            { emoji: "🚚", label: "Delivery", value: "Expected within 24-48 hours" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-lg shrink-0">{item.emoji}</div>
              <div>
                <p className="text-xs text-gray-400">{item.label}</p>
                <p className="text-sm font-medium text-gray-900">{item.value}</p>
              </div>
            </div>
          ))}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0">
              <Phone className="w-4 h-4 text-emerald-600" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Support</p>
              <p className="text-sm font-medium text-gray-900">Call us at +91 12345 67890</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
            <Home className="w-4 h-4" /> Back to Home
          </Link>
          <Link href="/products" className="flex items-center justify-center gap-2 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700 font-semibold px-6 py-3 rounded-xl transition-colors">
            <ShoppingBag className="w-4 h-4" /> Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
