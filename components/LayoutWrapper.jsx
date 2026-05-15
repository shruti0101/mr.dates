"use client";

// import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/app/providers/LenisProvider";
import Stickyfooter from "./Stickyfooter";

export default function LayoutWrapper({ children }) {
//   const pathname = usePathname();

  // Hide Navbar/Footer on /studio routes
//   const hideLayout = pathname.startsWith("/studio" , "/login");

  return (
    <>

    <LenisProvider>
      <Navbar />
      {children}
      <Stickyfooter></Stickyfooter>
      <Footer />
    </LenisProvider>
    </>
  );
}


//   <>
//       {!hideLayout && <Navbar />}
//       {children}
//       {!hideLayout && <Footer />}
//     </>
