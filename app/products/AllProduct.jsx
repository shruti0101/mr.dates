"use client";

import React, { useState } from "react";
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

  const addToCart = useCartStore((state) => state.addToCart);

  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // FILTER STATE
  const [selectedCategory, setSelectedCategory] =
    useState("all");

  // FLATTEN PRODUCTS
  const allProducts = categories.flatMap((cat) =>
    cat.products.map((p) => ({
      ...p,
      categoryId: cat.id,
      categoryName: cat.name,
    }))
  );

  // FILTER PRODUCTS
  const filteredProducts =
    selectedCategory === "all"
      ? allProducts
      : allProducts.filter(
          (product) =>
            product.categoryId === selectedCategory
        );

  // PAGINATION
  const totalPages = Math.ceil(
    filteredProducts.length / itemsPerPage
  );

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

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
          backgroundImage: "url('/bg3.webp')",
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

          <p className="mt-4 text-gray-200 text-base md:text-lg">
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
          
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">
            
       {/* SIDEBAR */}
<aside className="hidden lg:block">
  <div
    className="
      sticky top-30
      max-h-[calc(100vh-2rem)]
      overflow-y-auto
      overscroll-contain
      bg-white rounded-3xl border border-[#e5d3b3]
      p-6 shadow-sm
      scrollbar-thin scrollbar-thumb-[#c7a46a] scrollbar-track-transparent
    "
  >
    
    <h3 className="text-3xl font-serif text-[#3b2a10] mb-5">
      Categories
    </h3>

    <ul className="space-y-3">
      
      {/* ALL PRODUCTS */}
      <li>
        <button
          onClick={() => {
            setSelectedCategory("all");
            setCurrentPage(1);
          }}
          className={`group w-full flex items-center justify-between rounded-xl px-4 py-4 transition-all ${
            selectedCategory === "all"
              ? "bg-[#3b2a10] text-white"
              : "text-[#5a4320] hover:bg-[#f6ead1]"
          }`}
        >
          <span className="font-medium text-lg">
            All Products
          </span>
        </button>
      </li>

      {/* CATEGORY LIST */}
      {categories.map((cat) => (
        <li key={cat.id}>
          <button
            onClick={() => {
              setSelectedCategory(cat.id);
              setCurrentPage(1);
            }}
            className={`group w-full flex items-center justify-between rounded-xl px-4 py-4 transition-all ${
              selectedCategory === cat.id
                ? "bg-[#3b2a10] text-white"
                : "text-[#5a4320] hover:bg-[#f6ead1]"
            }`}
          >
            <span className="font-medium text-lg">
              {cat.name}
            </span>

            <ArrowUpRight
              size={18}
              className={`transition ${
                selectedCategory === cat.id
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100"
              }`}
            />
          </button>
        </li>
      ))}
    </ul>
  </div>
</aside>

            {/* PRODUCTS */}
            <div>
              
              {/* RESULT COUNT */}
              <div className="mb-8  flex items-center justify-between">
                <h2 className="text-2xl font-serif text-[#3b2a10]">
                  {selectedCategory === "all"
                    ? "All Products"
                    : categories.find(
                        (c) =>
                          c.id === selectedCategory
                      )?.name}
                </h2>

                <p className="text-sm text-gray-500">
                  {filteredProducts.length} Products
                </p>
              </div>

              {/* GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                
              {currentProducts.map((product) => (
  <div
    key={product.id}
    className="group relative bg-white rounded-2xl overflow-hidden border border-amber-600 hover:border-amber-500 transition-all duration-300 shadow-sm hover:shadow-xl"
  >
    {/* ICON */}
    <div className="absolute top-4 right-4 z-10 bg-amber-500 p-2 rounded-full opacity-0 group-hover:opacity-100 transition">
      <ArrowUpRight className="w-4 h-4 text-white" />
    </div>

    {/* PRODUCT LINK */}
    <Link href={`/products/${product.id}`}>
      {/* IMAGE */}
      <div className="relative h-[260px] flex items-center justify-center bg-white">
        <Image
          src={product.image?.src || "/placeholder.webp"}
          alt={product.image?.alt || product.name}
          fill
          className="object-contain p-4 group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6 text-center">
        <h2 className="text-lg font-semibold text-gray-900 leading-snug">
          {product.name}
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          {product.categoryName}
        </p>
      </div>
    </Link>

    {/* BUTTONS */}
    <div className="px-6 pb-6 flex gap-3">
      <button
        onClick={() => {
          addToCart({
            ...product,
            quantity: 1,
          });

          toast.success("Added to cart");
        }}
        className="flex-1 bg-[#3b2a10] hover:bg-black text-white py-3 rounded-xl flex items-center justify-center gap-2 transition"
      >
        <ShoppingCart size={18} />
        Add To Cart
      </button>

      <Link
        href={`/products/${product.id}`}
        className="px-4 py-3 border border-[#3b2a10] rounded-xl hover:bg-[#3b2a10] hover:text-white transition"
      >
        View
      </Link>
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
                    onClick={() =>
                      handlePageChange(currentPage - 1)
                    }
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
                  {[...Array(totalPages)].map(
                    (_, index) => (
                      <button
                        key={index}
                        onClick={() =>
                          handlePageChange(index + 1)
                        }
                        className={`px-4 py-2 rounded-full text-sm transition ${
                          currentPage === index + 1
                            ? "bg-[#00537B] text-white"
                            : "border border-gray-300 text-gray-700 hover:bg-[#00537B] hover:text-white"
                        }`}
                      >
                        {index + 1}
                      </button>
                    )
                  )}

                  {/* NEXT */}
                  <button
                    onClick={() =>
                      handlePageChange(currentPage + 1)
                    }
                    disabled={
                      currentPage === totalPages
                    }
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