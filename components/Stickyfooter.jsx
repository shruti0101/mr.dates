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
          <Home size={30} />
          <span>Home</span>
        </Link>

        <Link href="/products" className="flex flex-col items-center text-xs">
          <ShoppingBag size={30} />
          <span>Products</span>
        </Link>

    <a href="tel:+917065650411" className="flex flex-col items-center text-xs group">
  <div className="bg-red-500 p-2 rounded-full shadow-lg group-hover:scale-110 transition">
    <Phone className="text-white" size={20} />
  </div>
  <span className="mt-1">Contact Us</span>
</a>

     <a
  href="https://wa.me/917065650411"
  target="_blank"
  rel="noopener noreferrer"
  className="flex flex-col items-center text-xs group"
>
  <div className="bg-green-500 p-2 rounded-full shadow-lg group-hover:scale-110 transition">
    <FaWhatsapp className="text-white" size={22} />
  </div>
  <span className="mt-1">WhatsApp Us</span>
</a>

      </div>
    </div>
  );
};

export default Stickyfooter;
