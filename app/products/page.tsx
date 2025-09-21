import type { Metadata } from "next";
import { ProductsPageContent } from "./components/ProductsPageContent";

export const metadata: Metadata = {
  title: "Productos - ALUDEOX",
  description:
    "Descubre nuestra línea completa de aleaciones de aluminio y cobre: conos, briquetas, lingotes, aleaciones madre y cobre electrolítico para diversas industrias.",
};

export default function ProductsPage() {
  return <ProductsPageContent />;
}
