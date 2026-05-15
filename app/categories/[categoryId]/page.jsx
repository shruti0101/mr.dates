import { categories } from "@/Data/data";
import CategoryClient from "./CategoryClient";

/* ---------------- METADATA ---------------- */
export async function generateMetadata({ params }) {
  // ✅ unwrap params Promise
  const { categoryId } = await params;

  const category = categories.find(
    (cat) => cat.id === categoryId
  );

  if (!category) {
    return {
      title: "Category Not Found",
      description: "The requested category does not exist.",
    };
  }

  return {
    title: category.metaTitle,
    description: category.metaDescription,
    openGraph: {
      title: category.metaTitle,
      description: category.metaDescription,
      images: category.products?.[0]?.image?.[0]?.src
        ? [category.products[0].image[0].src]
        : [],
    },
  };
}

/* ---------------- PAGE ---------------- */
export default async function Page({ params }) {
  // ✅ unwrap params Promise
  const { categoryId } = await params;

  const category = categories.find(
    (cat) => cat.id === categoryId
  );

  if (!category) {
    return (
      <div className="mt-32 text-center">
        <h2 className="text-2xl font-semibold text-red-600">
          Category not found
        </h2>
      </div>
    );
  }

  return <CategoryClient category={category} />;
}
