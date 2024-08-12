import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import NavbarDashboard from "./NavbarDashboard";
import Link from "next/link";
import { TbHome, TbCalendarStar } from "react-icons/tb";

const LayoutWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex bg-gray-300">
      <div className="w-80 sticky">
        <div className="h-12 bg-blue4">
          <Link href="/">
            <img
              src="/tixLogo300.png"
              alt="Description"
              className="m-auto w-40 object-cover py-2"
            />
          </Link>
        </div>
        <div className="h-screen bg-blue1">
          <p className="p-2 text-xs font-bold text-blue2">Dashboard</p>
          <Link href="/dashboard">
            <div className="flex items-center justify-start space-x-2 p-2 text-sm text-blue2 hover:bg-blue4 hover:text-blue3">
              <span>
                <TbHome />
              </span>
              <span>Dashboard</span>
            </div>
          </Link>
          <Link href="/dashboard/events" className="hover:text-black1">
            <div className="flex items-center justify-start space-x-2 p-2 text-sm text-blue2 hover:bg-blue4 hover:text-blue3">
              <span>
                <TbCalendarStar />
              </span>
              <span>Events</span>
            </div>
          </Link>
          <Link href="/dashboard/transactions" className="hover:text-black1">
            <div className="flex items-center justify-start space-x-2 p-2 text-sm text-blue2 hover:bg-blue4 hover:text-blue3">
              <span>
                <TbCalendarStar />
              </span>
              <span>Transactions</span>
            </div>
          </Link>
          <hr className="mx-2"></hr>
          <p className="p-2 text-xs font-bold text-blue2">Account</p>
          <Link href="/dashboard/profile" className="hover:text-black1">
            <div className="flex items-center justify-start space-x-2 p-2 text-sm text-blue2 hover:bg-blue4 hover:text-blue3">
              <span>
                <TbHome />
              </span>
              <span>Profile</span>
            </div>
          </Link>
          <Link href="/dashboard/inbox" className="hover:text-black1">
            <div className="flex items-center justify-start space-x-2 p-2 text-sm text-blue2 hover:bg-blue4 hover:text-blue3">
              <span>
                <TbHome />
              </span>
              <span>Inbox</span>
            </div>
          </Link>
          <Link href="/dashboard/settings" className="hover:text-black1">
            <div className="flex items-center justify-start space-x-2 p-2 text-sm text-blue2 hover:bg-blue4 hover:text-blue3">
              <span>
                <TbHome />
              </span>
              <span>Settings</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="w-[100%] m-4">
        <NavbarDashboard />
        {children}
      </div>
    </div>
  );
};

export default LayoutWrapper;
