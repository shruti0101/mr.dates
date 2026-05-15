'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const BlogPage = () => {

  const heroAnim = {
    hidden: { opacity: 0, scale: 1.05 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blog")
      .then((r) => r.json())
      .then((b) => {
        setBlogs(b);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {/* ================= HERO SECTION ================= */}
      <motion.div
        variants={heroAnim}
        initial="hidden"
        animate="show"
        className="relative bg-cover bg-center h-[50vh] md:h-[80vh] flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ backgroundImage: "url('/bg3.webp')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45"></div>

        {/* Content */}
        <div className="relative z-10 text-white px-6">
          <span className="inline-block mb-4 text-sm md:text-base tracking-[0.3em] uppercase text-white/80">
            Insights • Trends • Stories
          </span>

          <h1 className="max-w-6xl mx-auto tracking-tight text-3xl md:text-[85px] font-medium leading-tight">
            Our Blogs
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-white/90 leading-relaxed">
            Discover expert insights, product knowledge, sourcing guides, and
            industry trends from the world of premium dates & dry fruits.
            Crafted to inform, inspire, and elevate your buying decisions.
          </p>


        </div>
      </motion.div>

      <section className="py-10 md:px-15 px-5">
        <h2 className='md:text-3xl text-xl text-center font-bold'>Explore Our Blogs</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {loading ? <>
            {[...Array(3)].map((_, idx) => (
              <div key={idx} className="relative overflow-hidden rounded-2xl border border-gray-200 flex flex-col bg-white shadow-sm animate-pulse">
                <div className="flex flex-col h-full">
                  <div className="h-48 w-full bg-gray-200"></div>

                  <div className="px-4 py-3 flex flex-col gap-3">

                    <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-6 bg-gray-200 rounded w-1/2"></div>

                    <div className="mt-auto">
                      <div className="h-5 w-24 bg-gray-200 rounded"></div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </>
            : <>
              {blogs.map((item, idx) => (
                <div key={idx} className="relative overflow-hidden rounded-2xl border border-gray-200 flex flex-col
                         bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:border-orange-300 group">
                  <div className="relative z-10 flex flex-col h-full">
                    <div className='relative mb-2'>
                      <img
                        src={item?.image}
                        alt='Loading'
                        style={{ objectPosition: "center center" }}
                        className="h-60 w-full object-cover object-center "
                      />
                    </div>
                    <div className='px-4 py-2'>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2 line-clamp-2">
                        {item.title}
                      </h3>
                      <div className="mt-auto">
                        <a
                          href={`/blogs/${item.permalink}`}
                          className="inline-flex items-center text-lg font-medium text-amber-400 hover:text-yellow-400 transition hover:underline"
                        >
                          Read More →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>}
        </div>
      </section>
    </div>
  )
}

export default BlogPage;
