import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white py-3 px-6 sticky top-0 w-full z-50">
      <div className="container max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-bold text-black1 hover:text-orange1"
        >
          <img
            src="/tixLogo300.png"
            alt="Description"
            className="w-40 object-cover"
          />
        </Link>

        <div className="flex items-center space-x-6">
          <Link
            href="/login"
            className="text-sm font-bold bg-blue1 rounded-full  py-2 px-6 text-white hover:bg-blue2"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="text-sm font-bold text-black1 hover:text-orange1 hover:text-blue1"
          >
            Register
          </Link>
          <Link
            href="/mytickets"
            className="text-sm font-bold text-black1 hover:text-orange1 hover:text-blue1"
          >
            My Tickets
          </Link>
          <Link
            href="/help"
            className="text-sm font-bold text-black1 hover:text-orange1 hover:text-blue1"
          >
            Help Center
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
