"use client";

import { motion } from "framer-motion";

export default function LeadingDatesSupplier() {
  return (
    <motion.section
      style={{ backgroundImage: "url(/bglead.png)" }}
      className="bg-cover bg-center py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-3xl font-serif sm:text-4xl lg:text-5xl font-bold text-[#4A2E1F] mb-6">
              Leading Dates Supplier
            </h1>

            <p className="text-black text-[17px] leading-7 mb-5">
              <strong>Mr. Dates</strong> is a trusted and professional{" "}
              <strong>dates supplier</strong> offering{" "}
              <strong>premium dates, bulk dates,</strong> and{" "}
              <strong>wholesale dates</strong> to retailers, corporates, and
              individual buyers. Alongside our dates collection, we are also a
              reliable <strong>dry fruits supplier</strong>, providing{" "}
              <strong>premium dry fruits</strong>, nuts, and{" "}
              <strong>healthy snacks</strong> that meet the highest quality
              standards.
            </p>

            <p className="text-black text-[17px] leading-7 mb-5">
              As an experienced <strong>dates supplier</strong>, we source our
              products from trusted farms and process them under strict hygiene
              standards to preserve natural sweetness, rich flavor, and
              nutritional value. Our range includes Medjoul Dates, Ajwa Dates,
              Kalmi Dates, Safawi Dates, Tunisian Dates, Wet Dates, and more—
              available for <strong>daily consumption, gifting, and wholesale
              supply.</strong>
            </p>

            <p className="text-black text-[17px] leading-7">
              We specialize in <strong>bulk dates supply</strong> and{" "}
              <strong>wholesale dates distribution</strong>, ensuring consistent
              quality, competitive pricing, and reliable service. Whether you
              are looking for a dependable premium dates supplier or a complete
              solution for <strong>dry fruits and healthy snacks</strong>, Mr.
              Dates delivers products you can trust.
            </p>
          </motion.div>

          {/* RIGHT HIGHLIGHTS */}
          <motion.div
            className="bg-[#FAF7F2] rounded-2xl p-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-xl font-semibold text-[#4A2E1F] font-serif mb-6">
              Why Mr. Dates is the Preferred Dates Supplier
            </h3>

            <motion.ul
              className="space-y-4 text-gray-700 text-[17px] leading-6"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.12 },
                },
              }}
            >
              {[
                "Trusted dates supplier with a wide range of premium dates",
                "Reliable dry fruits supplier offering premium dry fruits and nuts",
                "Bulk and wholesale dates availability for businesses",
                "Hygienic processing and quality-controlled packaging",
                "Fresh, authentic taste with consistent quality",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    show: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  • {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
