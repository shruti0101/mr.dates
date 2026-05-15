import Link from 'next/link';
import React from 'react'
import { categories ,portfolioNavItem } from "@/Data/data";

const SiteMap = () => {
    const pages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Our Products", path: "/products" },
    { name: "Contact", path: "/contact" },
    { name: "Blogs", path: "/blogs" },

  ];

  return (
     <div className="bg-[#f7f7f7] min-h-screen py-16 px-4 sm:px-10 mt-15">
      <div className="max-w-[1200px] mx-auto pt-8">
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-5">
          Sitemap
        </h1>

        {/* Static Pages */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">
            Pages
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {pages?.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="bg-white border text-lg rounded-lg h-[70px] flex items-center justify-center text-center font-medium text-gray-800 hover:bg-[#442e33] hover:text-white hover:shadow-lg transition transform hover:scale-105"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-6 text-gray-800 ">
            Category
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories?.map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.id}`}
                className=" p-2 flex items-center justify-center text-center font-medium text-gray-800 hover:bg-[#442e33] hover:text-white hover:shadow-lg transition transform hover:scale-105"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        {/* {Products} */}
        <div>
          <h2 className="text-xl font-semibold mb-6 text-gray-800">
            Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.flatMap((cat)=>cat.products).map((prod,index) => (
              <Link
                key={index}
                href={`/products/${prod.id}`}
                className="p-1 flex items-center justify-center text-center font-medium text-black hover:bg-[#442e33] hover:text-white  hover:shadow-lg transition transform hover:scale-105"
              >
                {prod.name}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default SiteMap