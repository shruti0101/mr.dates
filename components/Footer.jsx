"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin,Mail, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative text-white pt-10 pb-16 overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/footerbg.jpg')" }}
        aria-hidden="true"
      />

      {/* DARK OVERLAY */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.5) 100%)",
        }}
        aria-hidden="true"
      />

      {/* TOP ACCENT */}
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-amber-400 to-amber-600" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* BRAND */}
          <div>
            <Image
              src="/logooo.png"
              width={150}
              height={50}
              alt="Mr. Dates"
              className="object-cover"
            />

            <p className="leading-relaxed text-sm text-white mt-4">
              Mr. Dates offers premium-quality dates and dry fruits, carefully
              sourced from trusted farms. From daily nutrition to bulk and
              wholesale supply, we deliver freshness, taste, and consistency you
              can rely on.
            </p>
          </div>


         


          
          {/* QUICK LINKS */}
          <div>
            <h3 className="font-serif font-semibold text-xl mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm md:text-base tracking-wider">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Blogs", "/blogs"],
                ["Contact Us", "/contact"],
                ["Products", "/products"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="hover:text-amber-400 hover:underline underline-offset-4 decoration-amber-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>






 {/* PRODUCTS */}
          <div>
            <h3 className="font-serif font-semibold text-xl mb-4">
              Our Products
            </h3>
        <ul className="space-y-3 text-sm md:text-base tracking-wider">
  {[
    { name: "Kalmi Dates", link: "/categories/kalmi-dates" },
    { name: "Ajwa Dates", link: "/categories/ajwa-dates" },
    { name: "Barari Dates", link: "/categories/barari-dates" },
    { name: "Dry Fruits", link: "/categories/dry-fruits" },
    { name: "Kimia Dates", link: "/categories/kimia-dates" },
    { name: "Mr. Dates Products", link: "/categories/mr-dates-products" },
    { name: "Other Products", link: "/categories/other-products" },
  ].map((item) => (
    <li key={item.name}>
      <Link
        href={item.link}
        className="hover:text-amber-400 hover:underline underline-offset-4 decoration-amber-400"
      >
        {item.name}
      </Link>
    </li>
  ))}
</ul>
          </div>




          {/* CONTACT */}
       <div>
  <h3 className="font-serif font-semibold text-xl mb-4">
    Contact Us
  </h3>

  <div className="space-y-4 text-sm">
    {/* ADDRESS */}
    <div className="flex gap-3 items-start">
      <MapPin className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
      <p className="leading-relaxed">
        2nd, 328, Bhai Parmanand Colony,
        <br />
        Dr. Mukherjee Nagar, New Delhi – 110009,
        <br />
        Delhi, India
      </p>
    </div>

    {/* PHONE */}
    <div className="flex gap-3 items-center">
      <Phone className="w-5 h-5 text-amber-400 shrink-0" />
      <a
        href="tel:+917065650411"
        className="hover:text-amber-400 hover:underline underline-offset-4 decoration-amber-400"
      >
        +91 7065 650411
      </a>
    </div>

    {/* EMAILS */}
    <div className="flex gap-3 items-start">
      <Mail className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
      <div className="flex flex-col gap-1">
        <a
          href="mailto:sales@mrdates.in"
          className="hover:text-amber-400 hover:underline underline-offset-4 decoration-amber-400"
        >
          sales@mrdates.in
        </a>
        <a
          href="mailto:customercare@mrdates.in"
          className="hover:text-amber-400 hover:underline underline-offset-4 decoration-amber-400"
        >
          customercare@mrdates.in
        </a>
      </div>
    </div>
  </div>

  {/* SOCIAL */}
  <div className="flex gap-4 mt-6">
    <a href="#" aria-label="Instagram">
      <Instagram className="w-5 h-5 text-amber-500 hover:scale-110 transition" />
    </a>
    <a href="#" aria-label="Facebook">
      <Facebook className="w-5 h-5 text-amber-500 hover:scale-110 transition" />
    </a>
  </div>
</div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-10 border-t border-white/10 pt-4 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p>© 2025 Mr. Dates. All Rights Reserved.</p>
            <p>
Website Designed By Promozione Branding Pvt. Ltd. {"  "}
              <a
                href="https://promozionebranding.com/"
                className="underline underline-offset-4 text-amber-500"
              >
                Website Designing Company
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
