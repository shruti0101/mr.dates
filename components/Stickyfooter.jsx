"use client";

import React from "react";
import Link from "next/link";
import { Home, ShoppingBag, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Stickyfooter = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white py-2 border-t shadow-lg z-50">
      <div className="flex justify-around items-center py-2">

        <Link href="/" className="flex flex-col items-center text-xs">
          <Home size={26} />
          <span>Home</span>
        </Link>

        <Link href="/products" className="flex flex-col items-center text-xs">
          <ShoppingBag size={26} />
          <span>Products</span>
        </Link>

        <Link href="/contact" className="flex flex-col items-center text-xs">
          <Phone className="text-red-600" size={26} />
          <span>Contact Us</span>
        </Link>

        <a
          href="https://wa.me/919773999082"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-xs"
        >
          <FaWhatsapp className="text-green-600 animate-pulse" size={27} />
          <span>WhatsApp Us</span>
        </a>

      </div>
    </div>
  );
};

export default Stickyfooter;
