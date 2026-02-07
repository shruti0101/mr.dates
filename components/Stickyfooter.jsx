import React from "react";
import Link from "next/link";
import { Home, Info, ShoppingBag, Phone } from "lucide-react";

const Stickyfooter = () => {
  return (
    <div
      className="
        md:hidden 
        fixed bottom-0 left-0 
        w-full bg-white py-2 border-t shadow-lg  
        z-50
      "
    >
      <div className="flex justify-around items-center py-2">

        {/* HOME */}
        <Link href="/" className="flex flex-col items-center text-xs">
          <Home size={25} />
          <span>Home</span>
        </Link>

        {/* ABOUT */}
        <Link href="/about" className="flex flex-col items-center text-xs">
          <Info size={25} />
          <span>About</span>
        </Link>

        {/* PRODUCTS */}
        <Link
          href="/products"
          className="flex flex-col items-center text-xs relative"
        >
          <ShoppingBag size={25} />
          <span>Products</span>
        </Link>

        {/* CONTACT US */}
        <Link href="/contact" className="flex flex-col items-center text-xs">
          <Phone size={25} />
          <span>Contact Us</span>
        </Link>

      </div>
    </div>
  );
};

export default Stickyfooter;
