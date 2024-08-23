"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

const ConditionalFooter = () => {
  const pathname = usePathname();

  const hideFooterPaths = ["/login", "/register", "/dashboard", "/create"];

  const showFooter = !hideFooterPaths.some(route => pathname.startsWith(route));

  return showFooter ? <Footer/> : null;
};

export default ConditionalFooter;
