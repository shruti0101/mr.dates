"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Delhi",
    image: "/client1.jpg",
    rating: 5,
    text: "The quality of dates from Mr. Dates is outstanding. Fresh, soft, and naturally sweet. You can feel the difference.",
  },
  {
    name: "Ayesha Khan",
    location: "Mumbai",
    image: "/client3.jpg",
    rating: 5,
    text: "I ordered gift packs for my family and everyone loved them. Beautiful packaging and amazing taste. Highly recommended!",
  },
  {
    name: "Vikas Mehta",
    location: "Gurgaon",
    image: "/client2.jpg",
    rating: 5,
    text: "Finally found a brand I trust for dates and dry fruits. Consistent quality and timely delivery every time.",
  },
  {
    name: "Neha Verma",
    location: "Noida",
    image: "/client4.jpg",
    rating: 5,
    text: "Soft, fresh and perfectly packed. Mr. Dates has become our go-to brand for healthy snacking.",
  },
];

export default function TestimonialsSlider() {
  return (
    <section className="bg-[#EFDECC]  py-10 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl lg:text-5xl  font-bold text-[#4A2E1F] mb-3">
            What Our Customers Say
          </h2>
          <p className="text-black max-w-xl mx-auto">
            Real experiences from people who love the taste and freshness of our dates.
          </p>
        </motion.div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition h-full"
              >
                {/* User */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-14 w-14 rounded-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#4A2E1F]">
                      {item.name}
                    </h4>
                    <span className="text-sm text-gray-500">
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i} className="text-[#e1b764] text-lg">
                      ★
                    </span>
                  ))}
                </div>

                {/* Review */}
                <p className="text-gray-700 text-[15px] leading-7">
                  “{item.text}”
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
