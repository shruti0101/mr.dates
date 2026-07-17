import ProductClient from "./ProductClient";
import { getProduct } from "@/lib/getCategory";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { productId } = await params;

  const product = await getProduct(productId);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product does not exist.",
    };
  }

  return {
    title: product.metaTitle || product.name,
    description: product.metaDescription || product.name,
    openGraph: {
      title: product.metaTitle || product.name,
      description: product.metaDescription || product.name,
      images: product.image ? [product.image] : [],
    },
  };
}

export default async function Page({ params }) {
  const { productId } = await params;

  const product = await getProduct(productId);

  if (!product) {
    notFound();
  }

  return (
    <ProductClient
      product={JSON.parse(JSON.stringify(product))}
    />
  );
}