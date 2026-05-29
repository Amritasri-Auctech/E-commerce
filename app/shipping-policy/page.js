import Link from "next/link";

export const metadata = {
  title: "Shipping Policy - PharmaCare",
  description: "Learn about PharmaCare's shipping rates, delivery timelines, and coverage areas.",
};

export default function ShippingPolicyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-200 text-sm font-semibold uppercase tracking-wider mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Shipping Policy</h1>
          <p className="text-blue-100 text-lg">Last updated: January 1, 2025</p>
        </div>
      </section>

      <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-12">

          <p className="text-gray-600 leading-relaxed mb-8">
            PharmaCare is committed to delivering your medicines quickly and safely. Here's everything you need to know about our shipping process.
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">1. Shipping Charges</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
                <div className="text-3xl mb-2">🆓</div>
                <h3 className="font-bold text-blue-500 mb-1">Free Shipping</h3>
                <p className="text-blue-600 text-sm">On all orders above ₹499</p>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                <div className="text-3xl mb-2">🚚</div>
                <h3 className="font-bold text-gray-800 mb-1">Standard Shipping</h3>
                <p className="text-gray-600 text-sm">₹49 for orders below ₹499</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">2. Delivery Timelines</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left px-4 py-3 rounded-tl-xl font-semibold text-gray-700">Location</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Standard Delivery</th>
                    <th className="text-left px-4 py-3 rounded-tr-xl font-semibold text-gray-700">Express Delivery</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3 text-gray-600">Metro Cities</td>
                    <td className="px-4 py-3 text-gray-600">24-48 hours</td>
                    <td className="px-4 py-3 text-blue-600 font-medium">Same day / Next day</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-600">Tier 2 Cities</td>
                    <td className="px-4 py-3 text-gray-600">2-3 business days</td>
                    <td className="px-4 py-3 text-gray-600">1-2 business days</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-600">Tier 3 & Rural</td>
                    <td className="px-4 py-3 text-gray-600">3-5 business days</td>
                    <td className="px-4 py-3 text-gray-600">2-3 business days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">3. Order Processing</h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span> Orders placed before 2 PM are processed the same day</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span> Orders placed after 2 PM are processed the next business day</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span> Orders are not processed on Sundays and public holidays</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span> You will receive a tracking number via SMS/email once your order is dispatched</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">4. Delivery Coverage</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              We currently deliver to 500+ cities across India. We are continuously expanding our delivery network. If your pincode is not serviceable, you will be notified at checkout.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">5. Packaging</h2>
            <p className="text-gray-600 leading-relaxed">
              All medicines are packed in tamper-proof, temperature-appropriate packaging to ensure they reach you in perfect condition. Cold-chain medicines are shipped with ice packs and insulated packaging.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">6. Failed Delivery</h2>
            <p className="text-gray-600 leading-relaxed">
              If a delivery attempt fails, our courier partner will try again the next business day. After 3 failed attempts, the order will be returned to our warehouse and a refund will be initiated within 5-7 business days.
            </p>
          </section>

          <div className="border-t border-gray-200 pt-6 flex flex-wrap gap-4 text-sm">
            <Link href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>
            <Link href="/terms" className="text-blue-600 hover:underline">Terms & Conditions</Link>
            <Link href="/refund-policy" className="text-blue-600 hover:underline">Refund Policy</Link>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
