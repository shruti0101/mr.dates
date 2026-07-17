import { getCategories, getCategory, getProductsByCategory } from "@/lib/getCategory";
import AllProduct from "./AllProduct";

export const metadata = {
  title: "Dates Importer & Wholesale Trader in India | Bulk Supply",
  description: "Mr. Dates is a leading direct importer and bulk trader of premium dates in India, supplying Ajwa, Medjool, and other high-quality varieties to wholesalers and distributors with reliable PAN-India delivery.",
};

// export async function generateMetadata({ params }) {
//   // const { categoryId } = await params;

//   const category = await getCategory(categoryId);
//   console.log(category);

//   if (!category) {
//     return {
//       title: "Category Not Found",
//     };
//   }

//   return {
//     title: category.metaTitle,
//     description: category.metaDescription,
//   };
// }

export default async function AboutUsPage() {

  // const category = await getCategory(categoryId);
  // const plainCategory = JSON.parse(JSON.stringify(category));

  const categories = await getCategories();
  const plainCategories = JSON.parse(JSON.stringify(categories));

  // const products = await getProductsByCategory(categoryId);
  // const plainProducts = JSON.parse(JSON.stringify(products));

  // if (!category) {
  //   return (
  //     <div className="mt-32 text-center">
  //       <h2 className="text-2xl font-semibold text-red-600">
  //         Category not found
  //       </h2>
  //     </div>
  //   );
  // }

  return <AllProduct categories={plainCategories}  />;
}
