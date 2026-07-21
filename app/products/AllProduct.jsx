"use client";

import React, { useEffect, useState } from "react";
import { categories } from "@/Data/data";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Slider from "@/components/Slider";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import toast from "react-hot-toast";


const Page = () => {
  const itemsPerPage = 12;
  const [products, setProducts] = useState([]);

  const addToCart = useCartStore((state) => state.addToCart);

  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
 const [categories, setCategories] = useState([]);


  useEffect(() => {
  fetchData();
}, []);

async function fetchData() {
  try {
    setLoading(true);

    const [categoryRes, productRes] = await Promise.all([
      fetch("/api/category"),
      fetch("/api/products"),
    ]);

    const categoryData = await categoryRes.json();
    const productData = await productRes.json();

    if (categoryData.success) {
      setCategories(categoryData.categories);
    }

    if (productData.success) {
      setProducts(productData.products);
    }
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
}

  async function fetchCategories() {
    try {
      const res = await fetch("/api/category");
      const data = await res.json();

      if (data.success) {
        setCategories(data.categories);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  }

  // FILTER STATE
  const [selectedCategory, setSelectedCategory] =
    useState("all");

  // FLATTEN PRODUCTS
  // const allProducts = categories.flatMap((cat) =>
  //   cat.products.map((p) => ({
  //     ...p,
  //     categoryId: cat.id,
  //     categoryName: cat.name,
  //   }))
  // );

  // FILTER PRODUCTS
  // const filteredProducts =
  //   selectedCategory === "all"
  //     ? allProducts
  //     : allProducts.filter(
  //         (product) =>
  //           product.categoryId === selectedCategory
  //       );

  const filteredProducts =
  selectedCategory === "all"
    ? products
    : products.filter(
        (product) => product.category === selectedCategory
      );

  // PAGINATION
  // const totalPages = Math.ceil(
  //   filteredProducts.length / itemsPerPage
  // );

  const totalPages = Math.ceil(
  filteredProducts.length / itemsPerPage
);

const startIndex = (currentPage - 1) * itemsPerPage;
const currentProducts = filteredProducts.slice(
  startIndex,
  startIndex + itemsPerPage
);


  // const currentProducts = filteredProducts.slice(
  //   startIndex,
  //   startIndex + itemsPerPage
  // );

  // PAGE CHANGE
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setLoading(true);

      setTimeout(() => {
        setCurrentPage(page);

        setLoading(false);

        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 400);
    }
  };

  return (
    <div className="bg-[#F9FAFB] min-h-screen">

  {/* HERO */}
  <div
    className="relative h-[45vh] md:h-[80vh] flex items-center justify-center text-center"
    style={{
      backgroundImage: "url('/allprod.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-black/30" />

    <div className="relative z-10 text-white max-w-3xl px-4">
      <Link
        href="/"
        className="text-sm uppercase tracking-widest text-yellow-400 hover:text-yellow-300 transition"
      >
        Home / Products
      </Link>

      <h1 className="mt-4 text-4xl md:text-6xl font-serif font-bold">
        All Products
      </h1>

      <p className="mt-4 text-white text-base md:text-lg">
        Explore our complete range of premium dates
      </p>
    </div>
  </div>

  {/* SLIDER */}
  <Slider />

  {/* LOADER */}
  {loading && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm">
      <div className="w-14 h-14 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  )}

  {/* PRODUCTS + SIDEBAR */}
  <section className="py-16">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1  gap-12">

        {/* SIDEBAR */}
       

        {/* PRODUCTS */}
        <div>
          {/* RESULT COUNT */}
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-serif text-[#072143]">
              {selectedCategory === "all"
                ? "All Products"
                : categories.find((c) => c._id === selectedCategory)?.name}
            </h2>

            <p className="text-sm text-gray-500">
              {products.length} Products
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            {currentProducts.map((product) => (
              <div
                key={product._id}
                className="group bg-white rounded-2xl overflow-hidden border border-amber-600 shadow-sm hover:shadow-xl transition-shadow"
              >
                <Link href={`/products/${product.slug}`}>
                  <div className="relative h-[260px]">
                    <Image
                      src={product.image}
                      alt={product.productName}
                      fill
                      className="object-contain p-4"
                    />
                  </div>

                  <div className="p-6 text-center">
                    <h2 className="text-lg font-semibold">
                      {product.productName}
                    </h2>

                    {/* <p className="text-sm text-gray-500 mt-2">
                      ₹{product.price}
                    </p> */}
                  </div>
                </Link>

                <div className="px-6 pb-6">
                  <button
                    onClick={() => {
                      addToCart({
                        ...product,
                        quantity: 1,
                      });

                      toast.success("Added to cart");
                    }}
                    className="w-full bg-[#072143] text-white py-3 rounded-xl"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* EMPTY STATE */}
          {currentProducts.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-gray-700">
                No products found
              </h3>
            </div>
          )}

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-3 mt-14 flex-wrap">
              {/* PREVIOUS */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-5 py-2 rounded-full border text-sm transition ${
                  currentPage === 1
                    ? "text-gray-400 border-gray-300 cursor-not-allowed"
                    : "border-[#00537B] text-[#00537B] hover:bg-[#00537B] hover:text-white"
                }`}
              >
                Previous
              </button>

              {/* PAGE NUMBERS */}
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 rounded-full text-sm transition ${
                    currentPage === index + 1
                      ? "bg-[#00537B] text-white"
                      : "border border-gray-300 text-gray-700 hover:bg-[#00537B] hover:text-white"
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              {/* NEXT */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-5 py-2 rounded-full border text-sm transition ${
                  currentPage === totalPages
                    ? "text-gray-400 border-gray-300 cursor-not-allowed"
                    : "border-[#00537B] text-[#00537B] hover:bg-[#00537B] hover:text-white"
                }`}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  </section>
</div>
  );
};

export default Page;