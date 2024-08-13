"use client";
import Link from "next/link";
import { useState } from "react";
import Searchbar from "./Searchbar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white px-6 py-3 shadow-sm">
      <div className="container mx-auto flex max-w-7xl items-center justify-around">
        <Link
          href="/"
          className="hover:text-orange1 text-sm font-bold text-black1"
        >
          <img
            src="/tixLogo300.png"
            alt="TixStation Logo"
            className="w-40 object-cover"
          />
        </Link>
        <div className="hidden items-center space-x-6 md:flex">
          <Searchbar />
          <Link
            href="/create"
            className="text-sm font-bold text-black1 hover:text-blue1"
          >
            Create Event
          </Link>
          <Link
            href="/mytickets"
            className="text-sm font-bold text-black1 hover:text-blue1"
          >
            My Tickets
          </Link>
          <Link
            href="/login"
            className="rounded-full bg-blue1 px-6 py-2 text-sm font-bold text-white hover:bg-blue3"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="hover:text-orange1 text-sm font-bold text-black1 hover:text-blue1"
          >
            Register
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          className="text-black1 focus:outline-none md:hidden"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-2 bg-white shadow-md md:hidden">
          <div className="space-y-1 px-6 pb-4 pt-2">
            <Link
              href="/events"
              className="hover:text-orange1 block text-sm font-bold text-black1 hover:text-blue1"
            >
              Events
            </Link>
            <Link
              href="/help"
              className="hover:text-orange1 block text-sm font-bold text-black1 hover:text-blue1"
            >
              Help Center
            </Link>
            <Link
              href="#"
              className="hover:text-orange1 block text-sm font-bold text-black1 hover:text-blue1"
            >
              My Tickets
            </Link>
            <Link
              href="/login"
              className="block rounded-full bg-blue1 px-6 py-2 text-sm font-bold text-white hover:bg-blue3"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="hover:text-orange1 block text-sm font-bold text-black1 hover:text-blue1"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
