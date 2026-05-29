import { notFound } from "next/navigation";
import { getMedicineById, medicines } from "@/data/medicines";
import ProductDetailClient from "./ProductDetailClient";

export async function generateStaticParams() {
  return medicines.map((m) => ({ id: String(m.id) }));
}

export async function generateMetadata({ params }) {
  const medicine = getMedicineById(params.id);
  if (!medicine) return { title: "Medicine Not Found" };
  return {
    title: `${medicine.name} - Buy Online`,
    description: medicine.description,
    keywords: [medicine.name, medicine.category, "buy medicine online", "PharmaCare"],
  };
}

export default function ProductDetailPage({ params }) {
  const medicine = getMedicineById(params.id);
  if (!medicine) notFound();

  const related = medicines
    .filter((m) => m.category === medicine.category && m.id !== medicine.id)
    .slice(0, 4);

  return <ProductDetailClient medicine={medicine} related={related} />;
}
