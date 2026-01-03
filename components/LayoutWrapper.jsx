"use client";

// import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LayoutWrapper({ children }) {
//   const pathname = usePathname();

  // Hide Navbar/Footer on /studio routes
//   const hideLayout = pathname.startsWith("/studio" , "/login");

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}


//   <>
//       {!hideLayout && <Navbar />}
//       {children}
//       {!hideLayout && <Footer />}
//     </>
