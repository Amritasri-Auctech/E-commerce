import Image from "next/image";
import { Shield, Truck, Users, Award, Heart, CheckCircle } from "lucide-react";

export const metadata = {
  title: "About Us - PharmaCare",
  description: "Learn about PharmaCare — our mission, vision, and commitment to delivering genuine medicines.",
};

const stats = [
  { value: "50,000+", label: "Happy Customers" },
  { value: "5,000+", label: "Medicines Available" },
  { value: "24/7", label: "Customer Support" },
  { value: "99.8%", label: "Genuine Products" },
];

const whyUs = [
  { icon: Shield, title: "100% Genuine Medicines", desc: "Every medicine is sourced directly from licensed manufacturers and certified distributors.", color: "bg-blue-50 text-blue-600" },
  { icon: Truck, title: "Fast & Reliable Delivery", desc: "Medicines delivered to your doorstep within 24-48 hours across 500+ cities.", color: "bg-emerald-50 text-emerald-600" },
  { icon: Users, title: "Expert Pharmacist Team", desc: "Qualified pharmacists available 24/7 to answer queries and guide medication usage.", color: "bg-purple-50 text-purple-600" },
  { icon: Award, title: "Best Price Guarantee", desc: "Competitive pricing with regular discounts. We'll match any lower price you find.", color: "bg-amber-50 text-amber-600" },
  { icon: Heart, title: "Customer First Approach", desc: "Your health and satisfaction are our top priorities. Easy returns and hassle-free refunds.", color: "bg-red-50 text-red-600" },
  { icon: CheckCircle, title: "Secure & Private", desc: "Your personal and payment information is fully encrypted and protected.", color: "bg-teal-50 text-teal-600" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 to-indigo-700 py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-200 text-sm font-semibold uppercase tracking-wider mb-3">Who We Are</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About PharmaCare</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            We are on a mission to make healthcare accessible, affordable, and convenient for everyone.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-2xl bg-blue-50 border border-blue-100">
                <p className="text-3xl font-bold text-blue-700 mb-1">{stat.value}</p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Our Story</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">Delivering Health Since 2018</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>PharmaCare was founded with a simple yet powerful vision — to make quality healthcare accessible to every household in India. We started as a small pharmacy in Mumbai and have grown into one of the most trusted online medicine platforms in the country.</p>
                <p>Today, we serve over 50,000 customers across 500+ cities, delivering genuine medicines, vitamins, and healthcare products right to their doorstep.</p>
                <p>We believe that no one should have to compromise on their health due to inconvenience or high prices. That's why we work tirelessly to offer the best prices, fastest delivery, and most reliable service.</p>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden h-80 shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1563213126-a4273aed2016?w=600&h=400&fit=crop&q=80"
                alt="Pharmacist at work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-600 text-white rounded-3xl p-8">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-blue-100 leading-relaxed">To provide every Indian household with easy access to genuine, affordable medicines through a seamless digital experience — backed by expert pharmacist support and lightning-fast delivery.</p>
            </div>
            <div className="bg-gray-900 text-white rounded-3xl p-8">
              <div className="text-4xl mb-4">🔭</div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">To become India's most trusted healthcare platform — where technology meets compassion to create a healthier nation. Quality healthcare just a click away for every citizen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-wider mb-2">Why Us</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose PharmaCare?</h2>
            <p className="text-gray-500 max-w-xl mx-auto">We go above and beyond to ensure you receive the best healthcare experience possible.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${item.color}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
