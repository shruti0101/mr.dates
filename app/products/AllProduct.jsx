"use client";
import React, { useState } from "react";
import { categories } from "@/Data/data";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Slider from "@/components/Slider";


const Page = () => {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const allProducts = categories.flatMap((cat) =>
    cat.products.map((p) => ({ ...p, categoryId: cat.id }))
  );

  const totalPages = Math.ceil(allProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = allProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#F9FAFB]">
      {/* ================= HERO ================= */}
      <div
        className="relative h-[45vh] md:h-[80vh] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('/bg3.png')",
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
            Explore our complete range of premium Dates
        
          </p>
        </div>
      </div>



<Slider></Slider>



      {/* ================= PRODUCTS ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {currentProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group relative bg-white rounded-2xl overflow-hidden border border-amber-600 hover:border-amber-500 transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                {/* Hover Icon */}
                <div className="absolute top-4 right-4 z-10 bg-amber-500 p-2 rounded-full opacity-0 group-hover:opacity-100 transition">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>

                {/* Image */}
                <div className="h-[220px] flex items-center justify-center bg-white">
                  <Image
                    src={product.image.src || "/placeholder.webp"}
                    alt={product.image.alt || product.name}
                    title={product.name}
                    width={250}
                    height={250}
                    className="object-contain "
                  />
                </div>

                {/* Content */}
                <div className="p-5 text-center">
                  <h2 className="text-base md:text-lg font-semibold text-gray-900 leading-snug">
                    {product.name}
                  </h2>

                  <span className="inline-block mt-3 text-sm text-amber-600 font-medium">
                    View Details →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* ================= PAGINATION ================= */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-3 mt-14 flex-wrap">
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
      </section>
    </div>
  );
};

export default Page;
