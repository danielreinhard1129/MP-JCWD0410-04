import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-3 px-6 sticky top-0 w-full z-50">
      <div className="container max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-bold text-black1 hover:text-orange1"
        >
          <img
            src="/tixLogo300.png"
            alt="TixStation Logo"
            className="w-40 object-cover"
          />
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/events"
            className="text-sm font-bold text-black1 hover:text-orange1 hover:text-blue1"
          >
            Events
          </Link>
          <Link
            href="/help"
            className="text-sm font-bold text-black1 hover:text-orange1 hover:text-blue1"
          >
            Help Center
          </Link>
          <Link
            href="#"
            className="text-sm font-bold text-black1 hover:text-orange1 hover:text-blue1"
          >
            My Tickets
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/login"
            className="text-sm font-bold bg-blue1 rounded-full py-2 px-6 text-white hover:bg-blue3"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="text-sm font-bold text-black1 hover:text-orange1 hover:text-blue1"
          >
            Register
          </Link>
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden text-black1 hover:text-orange1 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
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
        <div className="md:hidden bg-white shadow-md mt-2">
          <div className="px-6 pt-2 pb-4 space-y-1">
            <Link
              href="/events"
              className="block text-sm font-bold text-black1 hover:text-orange1 hover:text-blue1"
            >
              Events
            </Link>
            <Link
              href="/help"
              className="block text-sm font-bold text-black1 hover:text-orange1 hover:text-blue1"
            >
              Help Center
            </Link>
            <Link
              href="#"
              className="block text-sm font-bold text-black1 hover:text-orange1 hover:text-blue1"
            >
              My Tickets
            </Link>
            <Link
              href="/login"
              className="block text-sm font-bold bg-blue1 rounded-full py-2 px-6 text-white hover:bg-blue3"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="block text-sm font-bold text-black1 hover:text-orange1 hover:text-blue1"
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
