import { Suspense } from "react";
import ProductsClient from "./ProductsClient";
import { medicines, categories } from "@/data/medicines";

export const metadata = {
  title: "Products - Buy Medicines Online",
  description:
    "Browse our complete range of medicines, vitamins, and healthcare products. Filter by category, price, and more.",
};

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-900 flex items-center justify-center"><div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" /></div>}>
      <ProductsClient medicines={medicines} categories={categories} />
    </Suspense>
  );
}
