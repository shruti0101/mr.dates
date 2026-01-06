"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* FAQs */
const leftFaqs = [
  {
    q: "Is Mr. Dates a trusted dates supplier?",
    a: "Yes, Mr. Dates is a trusted dates supplier offering premium-quality dates and dry fruits. We focus on freshness, authenticity, and consistent quality in every product we deliver.",
  },
  {
    q: "What types of dates do you supply?",
    a: "As a professional dates supplier, we offer a wide range of dates including Medjoul Dates, Ajwa Dates, Kalmi Dates, Safawi Dates, Tunisian Dates, Wet Dates, Zahidi Dates, and more.",
  },
  {
    q: "Do you provide wholesale dates and bulk orders?",
    a: "Yes, Mr. Dates specializes in wholesale dates and bulk dates supply, serving retailers, corporates, and distributors with reliable service and competitive pricing.",
  },
  {
    q: "Are your dates hygienically processed?",
    a: "Absolutely. All our products are carefully handpicked and hygienically processed under strict quality control to preserve natural taste, freshness, and nutritional value.",
  },
  {
    q: "Do you supply dry fruits and nuts as well?",
    a: "Yes, along with dates, we are also a reliable dry fruits supplier, offering premium dry fruits, nuts, and healthy snack options.",
  },
];

const rightFaqs = [
  {
    q: "Are your products suitable for daily consumption and gifting?",
    a: "Yes, our premium dates and dry fruits are ideal for daily consumption, festive gifting, corporate gifting, and special occasions.",
  },
  {
    q: "Do you cater to retailers and corporate buyers?",
    a: "Yes, as an experienced dates supplier, we cater to retailers, wholesalers, and corporate buyers with customized bulk and wholesale solutions.",
  },
  {
    q: "How do you ensure freshness and quality?",
    a: "We maintain strict quality checks, hygienic handling, and quality-controlled packaging to ensure long-lasting freshness and authentic taste.",
  },
  {
    q: "Can I order different date varieties in one bulk order?",
    a: "Yes, we offer flexible bulk dates ordering, allowing customers to choose multiple varieties based on their requirements.",
  },
  {
    q: "Why should I choose Mr. Dates as my dates supplier?",
    a: "Mr. Dates stands out as a reliable dates supplier due to premium sourcing, hygienic processing, wholesale availability, consistent quality, and customer-focused service.",
  },
];

/* Animations */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function FaqDatesSupplier() {
  const [openLeft, setOpenLeft] = useState(Array(leftFaqs.length).fill(false));
  const [openRight, setOpenRight] = useState(Array(rightFaqs.length).fill(false));

  return (
    <section
      style={{ backgroundImage: "url(/faq.jpg)" }}
      className="relative bg-cover bg-center py-16"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6">

        {/* Heading */}
        <motion.div
          className="mb-12 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-3">
            Frequently Asked Questions (FAQs)
          </h2>
          <p className="text-white">
            Everything you need to know about Mr. Dates as a trusted dates supplier.
          </p>
        </motion.div>

        {/* Two Columns */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* LEFT COLUMN */}
          <div className="space-y-3">
            {leftFaqs.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-white rounded-xl shadow-sm border border-gray-100"
              >
                <button
                  onClick={() =>
                    setOpenLeft((p) => p.map((v, i) => (i === index ? !v : v)))
                  }
                  className="w-full flex justify-between items-center px-6 py-4 text-left"
                >
                  <span className="font-medium text-[#4A2E1F]">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: openLeft[index] ? 180 : 0 }}
                    className="text-xl text-[#4A2E1F]"
                  >
                    {openLeft[index] ? "−" : "+"}
                  </motion.span>
                </button>

                <AnimatePresence>
                  {openLeft[index] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden px-6 pb-5 text-black text-[16px] leading-7"
                    >
                      {item.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-3">
            {rightFaqs.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-white rounded-xl shadow-sm border border-gray-100"
              >
                <button
                  onClick={() =>
                    setOpenRight((p) => p.map((v, i) => (i === index ? !v : v)))
                  }
                  className="w-full flex justify-between items-center px-6 py-4 text-left"
                >
                  <span className="font-medium text-[#4A2E1F]">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: openRight[index] ? 180 : 0 }}
                    className="text-xl text-[#4A2E1F]"
                  >
                    {openRight[index] ? "−" : "+"}
                  </motion.span>
                </button>

                <AnimatePresence>
                  {openRight[index] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden px-6 pb-5 text-black text-[16px] leading-7"
                    >
                      {item.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
