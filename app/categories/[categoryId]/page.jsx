import { categories } from "@/Data/data";
import CategoryClient from "./CategoryClient";
import { getCategories, getCategory, getProductsByCategory } from "@/lib/getCategory";

/* ---------------- METADATA ---------------- */
// export async function generateMetadata({ params }) {
//   // ✅ unwrap params Promise
//   const { categoryId } = await params;

//   const category = categories.find(
//     (cat) => cat.id === categoryId
//   );

//   if (!category) {
//     return {
//       title: "Category Not Found",
//       description: "The requested category does not exist.",
//     };
//   }

//   return {
//     title: category.metaTitle,
//     description: category.metaDescription,
//     openGraph: {
//       title: category.metaTitle,
//       description: category.metaDescription,
//       images: category.products?.[0]?.image?.[0]?.src
//         ? [category.products[0].image[0].src]
//         : [],
//     },
//   };
// }

export async function generateMetadata({ params }) {
  const { categoryId } = await params;

  const category = await getCategory(categoryId);
  console.log(category)

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: category.metaTitle,
    description: category.metaDescription,
  };
}

/* ---------------- PAGE ---------------- */
export default async function Page({ params }) {
  // ✅ unwrap params Promise
  const { categoryId } = await params;

  // const category = categories.find(
  //   (cat) => cat.id === categoryId
  // );
    const category = await getCategory(categoryId);
    const plainCategory = JSON.parse(JSON.stringify(category));

      const categories = await getCategories();
      const plainCategories = JSON.parse(JSON.stringify(categories));


            const products = await getProductsByCategory(categoryId);
            const plainProducts = JSON.parse(JSON.stringify(products));

            




  if (!category) {
    return (
      <div className="mt-32 text-center">
        <h2 className="text-2xl font-semibold text-red-600">
          Category not found
        </h2>
      </div>
    );
  }

  return <CategoryClient category={plainCategory} categories={plainCategories} products={plainProducts} />;
}
