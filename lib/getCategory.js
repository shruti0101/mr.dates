import { connect } from "@/Database/db";
import Category from "@/models/category";
import product from "@/models/product";

export async function getCategory(slug) {
  await connect();

  return await Category.findOne({ slug }).lean();
}



export async function getCategories() {
  await connect();

  return await Category.find({}).lean();
}

export async function getProductsByCategory(slug) {
  await connect();

  const category = await Category.findOne({ slug });

  if (!category) return [];

  const products = await product.find({
    category: category._id,
  }).lean();

  console.log(products)

  return products;
}

export async function getProduct(slug) {
  await connect();

  return await product.findOne({ slug }).lean();
}


