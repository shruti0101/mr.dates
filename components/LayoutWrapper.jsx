"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import Topbar from "@/components/Topbar";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  // Hide navbar/topbar
  const hideNavbarRoutes = ["/studio", "/login", "/learn"];

  // Hide footer only on these routes
  const hideFooterRoutes = ["/studio", "/login"];

  const hideNavbar = hideNavbarRoutes.some((route) =>
    pathname.startsWith(route)
  );

  const hideFooter = hideFooterRoutes.some((route) =>
    pathname.startsWith(route)
  );

  return (
    <>
      {!hideNavbar && <Topbar />}

      {!hideNavbar && <Navbar />}

      {children}

      {!hideFooter && <Footer />}
    </>
  );
}