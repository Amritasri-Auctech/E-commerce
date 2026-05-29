import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - PharmaCare",
  description: "Read PharmaCare's privacy policy to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-200 text-sm font-semibold uppercase tracking-wider mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-blue-100 text-lg">Last updated: January 1, 2025</p>
        </div>
      </section>

      <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-12">

          <p className="text-gray-600 leading-relaxed mb-8">
            At PharmaCare, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or place an order with us.
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed mb-3">We may collect the following types of information:</p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span> Personal identification information (name, email address, phone number)</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span> Shipping and billing address</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span> Order history and purchase details</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span> Device and browser information for analytics</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span> Cookies and usage data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span> To process and fulfill your orders</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span> To send order confirmations and delivery updates</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span> To respond to customer service requests</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span> To improve our website and services</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span> To send promotional emails (with your consent)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">3. Data Security</h2>
            <p className="text-gray-600 leading-relaxed">
              We implement industry-standard security measures including SSL encryption to protect your personal information. Your payment details are processed through secure, PCI-compliant payment gateways and are never stored on our servers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">4. Sharing of Information</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span> Delivery partners to fulfill your orders</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span> Payment processors to complete transactions</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span> Legal authorities when required by law</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">5. Cookies</h2>
            <p className="text-gray-600 leading-relaxed">
              We use cookies to enhance your browsing experience, remember your cart items, and analyze website traffic. You can disable cookies in your browser settings, though this may affect some website functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-3">You have the right to:</p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span> Access the personal data we hold about you</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span> Request correction of inaccurate data</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span> Request deletion of your personal data</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span> Opt out of marketing communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:support@pharmacare.com" className="text-blue-600 hover:underline">
                support@pharmacare.com
              </a>{" "}
              or call us at{" "}
              <a href="tel:+911234567890" className="text-blue-600 hover:underline">
                +91 12345 67890
              </a>.
            </p>
          </section>

          <div className="border-t border-gray-200 pt-6 flex flex-wrap gap-4 text-sm">
            <Link href="/terms" className="text-blue-600 hover:underline">Terms & Conditions</Link>
            <Link href="/refund-policy" className="text-blue-600 hover:underline">Refund Policy</Link>
            <Link href="/shipping-policy" className="text-blue-600 hover:underline">Shipping Policy</Link>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
