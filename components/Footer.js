import Link from "next/link";
import { Pill, Phone, Mail, MapPin } from "lucide-react";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      {/* Newsletter */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-bold text-lg">Stay healthy, stay informed</p>
            <p className="text-blue-100 text-sm">Get health tips and exclusive offers in your inbox.</p>
          </div>
          <form className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 md:w-64 px-4 py-2.5 rounded-xl text-sm bg-white text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Email for newsletter"
            />
            <button type="submit" className="px-5 py-2.5 bg-blue-800 text-white text-sm font-semibold rounded-xl hover:bg-blue-900 transition-colors shrink-0">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Pill className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Pharma<span className="text-blue-400">Care</span></span>
            </Link>
            <p className="text-sm leading-relaxed">Your trusted online pharmacy. Genuine medicines delivered right to your doorstep.</p>
            <div className="flex gap-3">
              {[FacebookIcon, TwitterIcon, InstagramIcon].map((Icon, i) => (
                <a key={i} href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[{ href: "/", label: "Home" }, { href: "/about", label: "About Us" }, { href: "/products", label: "Shop" }, { href: "/contact", label: "Contact" }, { href: "/cart", label: "Cart" }].map((link) => (
                <li key={link.href}><Link href={link.href} className="hover:text-blue-400 transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-blue-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/refund-policy" className="hover:text-blue-400 transition-colors">Refund Policy</Link></li>
              <li><Link href="/shipping-policy" className="hover:text-blue-400 transition-colors">Shipping Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3"><MapPin className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" /><span>123 Health Street, Medical District, Mumbai - 400001</span></li>
              <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-blue-400 shrink-0" /><a href="tel:+911234567890" className="hover:text-blue-400 transition-colors">+91 12345 67890</a></li>
              <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-blue-400 shrink-0" /><a href="mailto:support@pharmacare.com" className="hover:text-blue-400 transition-colors">support@pharmacare.com</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} PharmaCare. All rights reserved.</p>
          <p>Genuine Medicines · Fast Delivery · Secure Checkout</p>
        </div>
      </div>
    </footer>
  );
}
