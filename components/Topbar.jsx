import Link from "next/link";
import { ShoppingBag, BookOpen } from "lucide-react";


import React from 'react'

const Topbar = () => {
  return (
    <div>

        <div className="w-full bg-[#f3ecef] border-b border-black/10">
  <div className="relative flex items-center justify-between h-[50px] overflow-hidden">
    
    {/* SHOP TAB */}
    <Link
      href="/products"
      className="relative w-1/2 h-full flex items-center justify-center bg-[#f3ecef] text-black font-extrabold uppercase tracking-[0.2em] text-lg z-10"
    >
      {/* angled shape */}
      <div
        className="absolute right-[-40px] top-0 h-full w-[80px] bg-[#f3ecef]"
        style={{
          clipPath: "polygon(0 0, 100% 0, 0 100%)",
        }}
      />

      <span className="relative flex items-center gap-2">
        <ShoppingBag size={20} strokeWidth={2.5} />
        <span>Shop</span>
      </span>
    </Link>

    {/* LEARN TAB */}
    <Link
      href="/learn"
      className="relative w-1/2 h-full flex items-center justify-center bg-[#8d2957] text-white font-extrabold uppercase tracking-[0.2em] text-lg"
    >
      <span className="flex items-center gap-2">
        <BookOpen size={20} strokeWidth={2.5} />
        <span className="underline underline-offset-4">
          Learn
        </span>
      </span>
    </Link>

  </div>
</div>
      
    </div>
  )
}

export default Topbar
