import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions - PharmaCare",
  description: "Read PharmaCare's terms and conditions for using our online pharmacy services.",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-200 text-sm font-semibold uppercase tracking-wider mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
          <p className="text-blue-100 text-lg">Last updated: January 1, 2025</p>
        </div>
      </section>

      <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-12">

          <p className="text-gray-600 leading-relaxed mb-8">
            By accessing and using the PharmaCare website, you accept and agree to be bound by the following terms and conditions. Please read them carefully before placing any order.
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">1. General Terms</h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span> You must be at least 18 years of age to use this website.</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span> You agree to provide accurate and complete information when placing orders.</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span> PharmaCare reserves the right to refuse service to anyone at any time.</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span> Prices and availability of products are subject to change without notice.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">2. Medical Disclaimer</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-4">
              <p className="text-amber-700 text-sm font-medium">Important Notice</p>
              <p className="text-amber-600 text-sm mt-1">
                The information provided on this website is for general informational purposes only and does not constitute medical advice. Always consult a qualified healthcare professional before taking any medication.
              </p>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span> Prescription medicines require a valid prescription from a licensed doctor.</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span> PharmaCare is not responsible for any adverse effects from self-medication.</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span> Product descriptions are for informational purposes only.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">3. Orders & Payments</h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span> All orders are subject to availability and confirmation.</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span> Prices are inclusive of applicable taxes unless stated otherwise.</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span> Payment must be completed before order processing begins.</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span> We reserve the right to cancel orders in case of pricing errors or stock unavailability.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed">
              All content on this website including text, graphics, logos, images, and software is the property of PharmaCare and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              PharmaCare shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our website or products. Our total liability shall not exceed the amount paid for the specific order in question.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">6. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">7. Changes to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              PharmaCare reserves the right to modify these terms at any time. Continued use of the website after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <div className="border-t border-gray-200 pt-6 flex flex-wrap gap-4 text-sm">
            <Link href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>
            <Link href="/refund-policy" className="text-blue-600 hover:underline">Refund Policy</Link>
            <Link href="/shipping-policy" className="text-blue-600 hover:underline">Shipping Policy</Link>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
