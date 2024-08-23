"use client";
import Link from "next/link";
import { useState } from "react";
import Searchbar from "./Searchbar";
import { signOut, useSession } from "next-auth/react";
import NavbarAuth from "./NavbarAuth";

const Navbar = () => {
  const session = useSession();
  //session.data?.user.id
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-10 w-full bg-blue2 px-6 py-3 shadow-sm">
      <div className="container mx-auto flex max-w-7xl items-center justify-between gap-4 md:justify-evenly lg:justify-around">
        <Link
          href="/"
          className="hover:text-orange1 text-sm font-bold text-black1"
        >
          <img
            src="/tixLogo300.png"
            alt="TixStation Logo"
            className="w-28 object-cover md:w-40"
          />
        </Link>

        {/* Desktop Menu */}
        <Link
          href="/events"
          className="block text-sm font-bold text-black1 hover:text-blue1"
        >
          Events
        </Link>
        <div className="hidden items-center md:flex">
          <div className="flex items-center space-x-6">
            <Searchbar />
            <div className="flex space-x-4">
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
            </div>
            <div className="">
              {session.data?.user ? null : <NavbarAuth />}
              {session.data?.user ? (
                <button onClick={() => signOut()} className="text-sm font-bold text-black1 hover:text-blue1">Logout</button>
              ) : null}
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="text-black1 focus:outline-none md:hidden"
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center space-y-3 px-6 pb-4 pt-2">
            <div className="py-2">
              <Link
                href="/events"
                className="block text-sm font-bold text-black1 hover:text-blue1"
              >
                Events
              </Link>
              <Searchbar />
            </div>
            <Link
              href="/create"
              className="block text-sm font-bold text-black1 hover:text-blue1"
            >
              Create Event
            </Link>
            <Link
              href="/mytickets"
              className="block text-sm font-bold text-black1 hover:text-blue1"
            >
              My Tickets
            </Link>
            {session.data?.user ? null : <NavbarAuth />}
            {session.data?.user ? (
              <button onClick={() => signOut()}>logout</button>
            ) : null}
            {/* <Link
              href="/login"
              className="block rounded-full bg-blue1 px-6 py-2 text-center text-sm font-bold text-white hover:bg-blue3"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="block text-sm font-bold text-black1 hover:text-blue1"
            >
              Register
            </Link> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
