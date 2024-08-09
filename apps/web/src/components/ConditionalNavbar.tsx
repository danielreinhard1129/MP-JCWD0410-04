"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

const ConditionalNavbar = () => {
  const pathname = usePathname();

  const hideNavbarPaths = ["/login", "/register"];

  const showNavbar = !hideNavbarPaths.includes(pathname);

  return showNavbar ? <Navbar /> : null;
};

export default ConditionalNavbar;
