"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="text-[#2B1B12]">

      {/* ================= HERO ================= */}
      <section
        className="relative h-[50vh] md:h-[70vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/bg3.png')" }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 px-6 text-white"
        >
          <h1 className="font-serif text-3xl md:text-6xl font-medium">
            Contact Mr. Dates
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-white/90">
            Let’s connect for premium dates, bulk orders, or business enquiries
          </p>
        </motion.div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="py-24 bg-[#FBF7F1]">
        <div className="max-w-7xl mx-auto mt-10 px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* ================= LEFT INFO ================= */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-10 bg-[#B88A2E]" />
              <span className="uppercase font-['IBM_Plex_Serif'] tracking-[0.25em] text-xs font-semibold text-[#6B091D]">
                Get In Touch
              </span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-[#111]">
              We’d Love to Hear From You
            </h2>

            <p className="text-[18px] leading-[1.9] text-[#333] mb-10 max-w-[520px]">
              Whether you’re looking for premium dates, wholesale supply,
              corporate gifting, or retail partnership — our team is here to
              assist you with reliable service and expert guidance.
            </p>

            {/* CONTACT DETAILS */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="text-[#6B091D]" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-[#444]">+91 7065 650411</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-[#6B091D]" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-black">customercare@mrdates.in</p>
                     <p className="text-black">sales@mrdates.in</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-[#6B091D]" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-black">
                  2nd, 328, Bhai Parmanand Colony, Dr. Mukherjee Nagar Delhi, New Delhi-110009, Delhi, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

<Image src="/leaf2.png" width={400} height={400} alt="Leaf" className="absolute bottom-0 right-0 animate-pulse"></Image>



          {/* ================= FORM ================= */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-[#EFCDBA] rounded-[32px] p-10 shadow-[0_30px_90px_rgba(0,0,0,0.15)]"
          >
            <h3 className="font-serif text-2xl font-semibold mb-6 text-[#111]">
              Send Us a Message
            </h3>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-4 rounded-xl border border-white focus:outline-none focus:border-[#6B091D]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-5 py-4 rounded-xl border border-white focusfocus:outline-none focus:border-[#6B091D]"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-5 py-4 rounded-xl border border-white focusfocus:outline-none focus:border-[#6B091D]"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-5 py-4 rounded-xl border border-white focusfocus:outline-none focus:border-[#6B091D]"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-[#6B091D] text-white py-4 rounded-full font-medium tracking-wide hover:bg-[#5A0717] transition"
              >
                Submit Enquiry
              </motion.button>
            </form>
          </motion.div>

        </div>
      </section>

      <Image src="/cta.png" width={400} height={400} alt="Leaf" className="absolute bottom-0 -left-20 "></Image>
    </div>
  );
};

export default ContactPage;
