import React from "react";
import Link from "next/link";
import { Home, Whatsapp, ShoppingBag, Phone } from "lucide-react";

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
          <Phone className="text-red-600" size={25} />
          <span>Contact Us</span>
        </Link>

             {/* whatsapp */}
        <a href="tel: +919773999082" className="flex flex-col items-center text-xs">
          <Whatsapp className="text-green-600" size={25} />
          <span>Whatsapp Us</span>
        </a>

      </div>
    </div>
  );
};

export default Stickyfooter;
