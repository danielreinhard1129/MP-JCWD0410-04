"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

const ConditionalFooter = () => {
  const pathname = usePathname();

  const hideFooterPaths = ["/login", "/register"];

  const showFooter = !hideFooterPaths.includes(pathname);

  return showFooter ? <Footer/> : null;
};

export default ConditionalFooter;
