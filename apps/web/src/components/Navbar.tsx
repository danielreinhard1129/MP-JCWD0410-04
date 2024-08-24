"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Searchbar from "./Searchbar";
import { signOut, useSession } from "next-auth/react";
import NavbarAuth from "./NavbarAuth";

const Navbar = () => {
  const session = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-10 w-full md:h-20 bg-white px-4 py-2 shadow-sm sm:px-6 sm:py-3">
      <div className="container mx-auto flex max-w-7xl items-center justify-between gap-2 sm:gap-4 md:justify-evenly lg:justify-around">
        <Link
          href="/"
          className="hover:text-orange1 text-xs font-bold text-black1 sm:text-sm"
        >
          <img
            src="/tixLogo300.png"
            alt="TixStation Logo"
            className="w-20 object-cover sm:w-28 md:w-40"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center lg:flex lg:flex-grow lg:justify-center">
          <div className="flex items-center space-x-4 lg:space-x-6">
            <Link
              href="/events"
              className="text-xs font-bold text-black1 hover:text-blue1 sm:text-sm"
            >
              Events
            </Link>
            <Link
              href="/events"
              className="text-xs font-bold text-black1 hover:text-blue1 sm:text-sm"
            >
              Help Center
            </Link>
            <Searchbar />
            <Link
              href="/login"
              className="text-xs font-bold text-black1 hover:text-blue1 sm:text-sm"
            >
              Create Event
            </Link>
            <Link
              href="/dashboard"
              className="text-xs font-bold text-black1 hover:text-blue1 sm:text-sm"
            >
              My Tickets
            </Link>
            <div className="">
              {session.data?.user ? (
                <button
                  onClick={() => signOut()}
                  className="text-xs font-bold text-black1 hover:text-blue1 sm:text-sm"
                >
                  Logout
                </button>
              ) : (
                <NavbarAuth />
              )}
            </div>
          </div>
        </div>

        {/* Tablet Menu */}
        {isTablet && (
          <div className="flex items-center space-x-2">
            <Searchbar />
            <button
              onClick={toggleMenu}
              className="text-black1 focus:outline-none"
              aria-label="Toggle menu"
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
        )}

        {/* Mobile Menu Button */}
        {!isTablet && (
          <button
            onClick={toggleMenu}
            className="text-black1 focus:outline-none lg:hidden"
            aria-label="Toggle menu"
          >
            <svg
              className="h-5 w-5 sm:h-6 sm:w-6"
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
        )}
      </div>

      {/* Mobile and Tablet Menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="flex flex-col items-center space-y-2 px-4 pb-3 pt-2 sm:space-y-3 sm:px-6 sm:pb-4">
            {!isTablet && (
              <div className="w-full">
                <Searchbar />
              </div>
            )}
            <Link
              href="/events"
              className="block text-xs font-bold text-black1 hover:text-blue1 sm:text-sm"
            >
              Events
            </Link>
            <Link
              href="/create"
              className="block text-xs font-bold text-black1 hover:text-blue1 sm:text-sm"
            >
              Create Event
            </Link>
            <Link
              href="/mytickets"
              className="block text-xs font-bold text-black1 hover:text-blue1 sm:text-sm"
            >
              My Tickets
            </Link>
            <Link
              href="/events"
              className="block text-xs font-bold text-black1 hover:text-blue1 sm:text-sm"
            >
              Help Center
            </Link>
            {session.data?.user ? (
              <button
                onClick={() => signOut()}
                className="text-xs font-bold text-black1 hover:text-blue1 sm:text-sm"
              >
                Logout
              </button>
            ) : (
              <NavbarAuth />
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;