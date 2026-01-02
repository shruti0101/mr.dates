"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle");

  return (
    <footer className="relative text-white pt-10 pb-15 overflow-hidden">
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
      <div className="absolute top-0 left-0 h-1 w-full -z-5 bg-gradient-to-r from-amber-400 to-amber-600" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <Image
              src="/logo.webp"
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
            <h3 className="text-white font-serif font-semibold text-xl mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                ["Home", "/"],
                ["About Us", "/about-us"],
                ["Blogs", "/blogs"],
                ["Contact Us", "/contact-us"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white hover:text-amber-400 hover:underline underline-offset-4 decoration-amber-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* PRODUCT CATEGORIES */}
          <div>
            <h3 className="text-white font-serif font-semibold text-xl mb-4">
              Our Products
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                "Premium Dates",
                "Ajwa & Kalmi Dates",
                "Almonds & Cashews",
                "Raisins & Dry Fruits",
                "Gift & Combo Packs",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-white hover:text-amber-400 hover:underline underline-offset-4 decoration-amber-400"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white font-serif font-semibold text-xl mb-4">
              Contact Us
            </h3>

            <div className="flex items-start gap-3 mb-4">
              <MapPin className="text-amber-400 w-5 h-5" />
              <p className="text-sm text-white/95">
                Mr. Dates
                <br />
                New Delhi, India
              </p>
            </div>

            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400" />
                <a
                  href="tel:+919560759698"
                  className="hover:text-amber-400 hover:underline underline-offset-4 decoration-amber-400"
                >
                  +91 95607 59698
                </a>
              </p>

              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400" />
                <a
                  href="mailto:sales@mrdates.com"
                  className="hover:text-amber-400 hover:underline underline-offset-4 decoration-amber-400"
                >
                  sales@mrdates.com
                </a>
              </p>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-5">
              {[Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex items-center justify-center rounded-md transition transform hover:-translate-y-0.5"
                >
                  <Icon className="w-5 h-5 text-amber-500" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-10 border-t border-white/10 pt-4 text-sm text-white">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 Mr. Dates. All Rights Reserved.</p>
            <p>
              Website Designed By{" "}
              <a
                href="https://promozionebranding.com/"
                className="underline underline-offset-4 text-amber-500"
              >
                Promozione Branding Pvt. Ltd.
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
