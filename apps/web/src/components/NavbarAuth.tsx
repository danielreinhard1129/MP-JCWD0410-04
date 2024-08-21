import Link from "next/link";
import React from "react";

const NavbarAuth = () => {
  return (
    <div className="flex items-center space-x-6">
      <Link
        href="/login"
        className="rounded-full bg-blue1 px-6 py-2 text-sm font-bold text-white hover:bg-blue3 hover:text-black1"
      >
        Login
      </Link>
      <Link
        href="/register"
        className="text-sm font-bold text-black1 hover:text-blue1"
      >
        Register
      </Link>
    </div>
  );
};

export default NavbarAuth;
