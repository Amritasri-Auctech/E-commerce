import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartBar from "@/components/CartBar";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "PharmaCare - Online Pharmacy | Buy Medicines Online",
    template: "%s | PharmaCare",
  },
  description:
    "PharmaCare is your trusted online pharmacy. Buy genuine medicines, vitamins, and healthcare products at the best prices with fast home delivery.",
  keywords: [
    "online pharmacy",
    "buy medicines online",
    "medicine delivery",
    "healthcare products",
    "genuine medicines",
    "PharmaCare",
  ],
  authors: [{ name: "PharmaCare" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://pharmacare.com",
    siteName: "PharmaCare",
    title: "PharmaCare - Online Pharmacy | Buy Medicines Online",
    description:
      "Your trusted online pharmacy. Genuine medicines, fast delivery, secure checkout.",
  },
  twitter: {
    card: "summary_large_image",
    title: "PharmaCare - Online Pharmacy",
    description: "Buy genuine medicines online with fast home delivery.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 antialiased`}>
        <AuthProvider>
          <CartProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
            <CartBar />
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
