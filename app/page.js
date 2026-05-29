import Link from "next/link";
import Image from "next/image";
import { Truck, Shield, Clock, Star, ArrowRight, Zap } from "lucide-react";
import MedicineCard from "@/components/MedicineCard";
import { getFeaturedMedicines } from "@/data/medicines";
import SearchBar from "@/components/SearchBar";

export const metadata = {
  title: "PharmaCare - Online Pharmacy | Buy Medicines Online",
  description:
    "Search and order medicines online. Fast delivery, genuine products, secure checkout. Your health is our priority.",
};

const features = [
  { icon: Shield, title: "100% Genuine", desc: "Sourced from certified manufacturers.", color: "text-blue-600", bg: "bg-blue-50" },
  { icon: Truck, title: "Fast Delivery", desc: "Delivered to your door in 24-48 hours.", color: "text-emerald-600", bg: "bg-emerald-50" },
  { icon: Clock, title: "24/7 Support", desc: "Pharmacist team always available.", color: "text-purple-600", bg: "bg-purple-50" },
  { icon: Star, title: "Best Prices", desc: "Competitive pricing with discounts.", color: "text-amber-600", bg: "bg-amber-50" },
];

const categories = [
  { label: "Pain Relief", emoji: "💊", href: "/products?category=Pain+Relief", bg: "bg-rose-50 hover:bg-rose-100 border-rose-200" },
  { label: "Antibiotics", emoji: "🧬", href: "/products?category=Antibiotics", bg: "bg-blue-50 hover:bg-blue-100 border-blue-200" },
  { label: "Vitamins", emoji: "🌿", href: "/products?category=Vitamins+%26+Supplements", bg: "bg-green-50 hover:bg-green-100 border-green-200" },
  { label: "Diabetes", emoji: "🩺", href: "/products?category=Diabetes+Care", bg: "bg-purple-50 hover:bg-purple-100 border-purple-200" },
  { label: "Heart Care", emoji: "❤️", href: "/products?category=Heart+%26+Blood+Pressure", bg: "bg-red-50 hover:bg-red-100 border-red-200" },
  { label: "Skin Care", emoji: "✨", href: "/products?category=Skin+Care", bg: "bg-pink-50 hover:bg-pink-100 border-pink-200" },
  { label: "Digestive", emoji: "🫁", href: "/products?category=Digestive+Health", bg: "bg-amber-50 hover:bg-amber-100 border-amber-200" },
  { label: "Cold & Flu", emoji: "🤧", href: "/products?category=Cold+%26+Flu", bg: "bg-cyan-50 hover:bg-cyan-100 border-cyan-200" },
];

const marqueeItems = [
  "💊 Free delivery above ₹499",
  "🧬 100% Genuine Medicines",
  "⚡ 24-48hr Fast Delivery",
  "🌿 Certified Manufacturers",
  "🔒 Secure Checkout",
  "⭐ 50,000+ Happy Customers",
];

export default function HomePage() {
  const featuredMedicines = getFeaturedMedicines();

  return (
    <>
      {/* Marquee */}
      <div className="bg-blue-50 border-b border-blue-100 overflow-hidden py-2.5">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="text-blue-700 text-xs font-medium mx-8">{item}</span>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-white/30">
                <Zap className="w-3.5 h-3.5" /> Trusted by 50,000+ customers
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                Your Health,<br />
                <span className="text-blue-200">Delivered</span> Fast
              </h1>
              <p className="text-blue-100 text-lg mb-8 max-w-lg">
                Order genuine medicines from the comfort of your home. Best prices, expert pharmacist support, and lightning-fast delivery.
              </p>
              <SearchBar />
              <div className="flex flex-wrap gap-5 mt-6 text-sm text-blue-100">
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-blue-200 rounded-full"></span>Free delivery above ₹499</span>
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-blue-200 rounded-full"></span>Genuine medicines</span>
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-blue-200 rounded-full"></span>Easy returns</span>
              </div>
            </div>

            {/* Hero image */}
            <div className="hidden md:block relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-96">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=500&fit=crop&q=80"
                  alt="Pharmacy medicines"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-xl">✅</div>
                <div>
                  <p className="text-xs text-gray-500">Verified Quality</p>
                  <p className="text-sm font-bold text-gray-900">100% Genuine</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-xl">🚚</div>
                <div>
                  <p className="text-xs text-gray-500">Delivery</p>
                  <p className="text-sm font-bold text-gray-900">24-48 Hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-3 p-4 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all">
                <div className={`p-2.5 rounded-xl ${f.bg} shrink-0`}>
                  <f.icon className={`w-5 h-5 ${f.color}`} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-0.5">{f.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Shop by Category</h2>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                className={`flex flex-col items-center gap-2 p-3 rounded-2xl border text-center transition-all ${cat.bg}`}
              >
                <span className="text-2xl">{cat.emoji}</span>
                <span className="text-xs font-medium text-gray-700 leading-tight">{cat.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Medicines */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-1">Top Picks</p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Medicines</h2>
            </div>
            <Link href="/products" className="hidden sm:flex items-center gap-1.5 text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {featuredMedicines.map((medicine) => (
              <MedicineCard key={medicine.id} medicine={medicine} />
            ))}
          </div>
          <div className="text-center mt-8 sm:hidden">
            <Link href="/products" className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors">
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50K+", label: "Happy Customers" },
              { value: "500+", label: "Medicines Available" },
              { value: "24hr", label: "Avg. Delivery Time" },
              { value: "4.8★", label: "Customer Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-blue-200 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us — with image */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden h-80 shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1563213126-a4273aed2016?w=600&h=400&fit=crop&q=80"
                alt="Pharmacist helping customer"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-2">Why PharmaCare</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Healthcare you can trust</h2>
              <div className="space-y-4">
                {[
                  { icon: "🏥", title: "Licensed Pharmacy", desc: "Fully licensed and regulated by the Pharmacy Council of India." },
                  { icon: "🔬", title: "Quality Checked", desc: "Every product passes strict quality checks before dispatch." },
                  { icon: "📞", title: "Expert Guidance", desc: "Qualified pharmacists available 24/7 for consultation." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 transition-colors">
                    <span className="text-2xl shrink-0">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-center overflow-hidden">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
            </div>
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Need Help Finding Your Medicine?</h2>
              <p className="text-blue-100 mb-8 max-w-xl mx-auto">Browse our complete catalogue or contact our pharmacist team for personalized assistance.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/products" className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors">
                  Browse All Medicines
                </Link>
                <Link href="/contact" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/10 transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
