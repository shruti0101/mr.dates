import { categories } from "@/Data/data";
import ProductClient from "./ProductClient";

export async function generateMetadata({ params }) {
  // ✅ NEW: await params
  const { productId } = await params;

  if (!productId) {
    return {
      title: "Premium Dates Collection | Mr. Dates",
      description: "Explore our wide range of high-quality dates.",
    };
  }

  const allProducts = categories.flatMap((c) => c.products || []);

  const product = allProducts.find(
    (p) => p?.id?.toLowerCase() === productId.toLowerCase()
  );

  if (!product) {
    return {
      title: "Premium Dates Collection | Mr. Dates",
      description: "Explore our wide range of high-quality dates.",
    };
  }

  return {
    title: product.metaTitle || product.name,
    description: product.metaDescription || product.name,
    openGraph: {
      title: product.metaTitle || product.name,
      description: product.metaDescription || product.name,
      images: [product.image?.src || product.image],
    },
  };
}

export default function Page({ params }) {
  return <ProductClient params={params} />;
}