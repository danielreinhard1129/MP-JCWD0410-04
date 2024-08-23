"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

const ConditionalNavbar = () => {
  const pathname = usePathname();

  const hideNavbarPaths = ["/login", "/register", "/dashboard", "/forgot-password"];

  // const showNavbar = !hideNavbarPaths.startwith(pathname);

  const showNavbar = !hideNavbarPaths.some(route => pathname.startsWith(route))
  return showNavbar ? <Navbar /> : null;
};

export default ConditionalNavbar;
