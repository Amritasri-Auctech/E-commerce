import Link from "next/link";

export const metadata = {
  title: "Refund Policy - PharmaCare",
  description: "Learn about PharmaCare's refund and return policy for medicines and healthcare products.",
};

export default function RefundPolicyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-200 text-sm font-semibold uppercase tracking-wider mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Refund Policy</h1>
          <p className="text-blue-100 text-lg">Last updated: January 1, 2025</p>
        </div>
      </section>

      <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-12">

          <p className="text-gray-600 leading-relaxed mb-8">
            At PharmaCare, customer satisfaction is our priority. We have a straightforward refund and return policy to ensure you have a hassle-free experience.
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">1. Eligible Returns</h2>
            <p className="text-gray-600 leading-relaxed mb-3">You may return a product within 7 days of delivery if:</p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span> The product is damaged or defective upon delivery</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span> You received the wrong product</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span> The product is expired or near expiry (within 3 months)</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span> The packaging is tampered or broken</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">2. Non-Returnable Items</h2>
            <div className="bg-red-50 border border-red-100 rounded-2xl p-5 mb-4">
              <p className="text-red-600 text-sm">The following items cannot be returned for safety and hygiene reasons:</p>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2"><span className="text-red-600 mt-1">•</span> Opened or used medicines</li>
              <li className="flex items-start gap-2"><span className="text-red-600 mt-1">•</span> Refrigerated or temperature-sensitive products</li>
              <li className="flex items-start gap-2"><span className="text-red-600 mt-1">•</span> Products without original packaging</li>
              <li className="flex items-start gap-2"><span className="text-red-600 mt-1">•</span> Prescription medicines once dispensed</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">3. Refund Process</h2>
            <div className="grid sm:grid-cols-3 gap-4 mb-4">
              {[
                { step: "01", title: "Raise Request", desc: "Contact us within 7 days of delivery" },
                { step: "02", title: "Verification", desc: "Our team verifies the return request" },
                { step: "03", title: "Refund", desc: "Refund processed within 5-7 business days" },
              ].map((item) => (
                <div key={item.step} className="bg-blue-50 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{item.step}</div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">{item.title}</p>
                  <p className="text-gray-500 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">4. Refund Methods</h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span> Original payment method (credit/debit card, net banking) — 5-7 business days</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span> UPI — 1-3 business days</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span> PharmaCare store credit — instant</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">5. How to Initiate a Return</h2>
            <p className="text-gray-600 leading-relaxed">
              To initiate a return, contact our support team at{" "}
              <a href="mailto:support@pharmacare.com" className="text-blue-600 hover:underline">
                support@pharmacare.com
              </a>{" "}
              or call{" "}
              <a href="tel:+911234567890" className="text-blue-600 hover:underline">
                +91 12345 67890
              </a>{" "}
              with your order ID and reason for return. Our team will guide you through the process.
            </p>
          </section>

          <div className="border-t border-gray-200 pt-6 flex flex-wrap gap-4 text-sm">
            <Link href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>
            <Link href="/terms" className="text-blue-600 hover:underline">Terms & Conditions</Link>
            <Link href="/shipping-policy" className="text-blue-600 hover:underline">Shipping Policy</Link>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
