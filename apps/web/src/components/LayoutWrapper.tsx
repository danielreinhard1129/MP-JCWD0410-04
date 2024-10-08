import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import NavbarDashboard from "./NavbarDashboard";
import Link from "next/link";
import { TbHome, TbCalendarStar } from "react-icons/tb";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

const LayoutWrapper = async ({ children }: PropsWithChildren) => {

  // const session = await auth();

  // if(!session) {
  //   return redirect("/login");
  // }

  return (
    <div className="flex bg-blue2">
      <div className="w-80 sticky bg-white">
        <div className="h-12">
          <Link href="/">
            <img
              src="/tixLogo300.png"
              alt="Description"
              className="m-auto w-40 object-cover py-2"
            />
          </Link>
        </div>
        <hr className="mx-2 border-blue2"></hr>
        <div className="p-4 bg-white shadow-sm h-screen">
          <p className="p-2 pl-4 text-xl font-bold text-blue1">Dashboard</p>
          <Link href="/dashboard">
            <div className="flex items-center justify-start space-x-2 p-2 pl-4 text-sm font-semibold hover:bg-blue3 rounded-full hover:text-blue2">
              <span>
                <TbHome />
              </span>
              <span >Dashboard</span>
            </div>
          </Link>
          <Link href="/dashboard/active-events" className="hover:text-black1">
            <div className="flex items-center justify-start space-x-2 p-2 pl-4 text-sm font-semibold hover:bg-blue3  rounded-full hover:text-blue2">
              <span>
                <TbCalendarStar />
              </span>
              <span>Events</span>
            </div>
          </Link>
          <Link href="/dashboard/transactions" className="hover:text-black1">
            <div className="flex items-center justify-start space-x-2 p-2 pl-4 text-sm font-semibold hover:bg-blue3  rounded-full hover:text-blue2">
              <span>
                <TbCalendarStar />
              </span>
              <span>Transactions</span>
            </div>
          </Link>
          <hr className="mx-2 border-blue2"></hr>
          <p className="p-2 pl-4 text-xl font-bold text-blue1">Account</p>
          <Link href="/profile" className="hover:text-black1">
            <div className="flex items-center justify-start space-x-2 p-2 pl-4 text-sm font-semibold hover:bg-blue3  rounded-full hover:text-blue2">
              <span>
                <TbHome />
              </span>
              <span>Profile</span>
            </div>
          </Link>
          <Link href="/dashboard/inbox" className="hover:text-black1">
            <div className="flex items-center justify-start space-x-2 p-2 pl-4 text-sm font-semibold hover:bg-blue3  rounded-full hover:text-blue2">
              <span>
                <TbHome />
              </span>
              <span>Inbox</span>
            </div>
          </Link>
          <Link href="/dashboard/settings" className="hover:text-black1">
            <div className="flex items-center justify-start space-x-2 p-2 pl-4 text-sm font-semibold hover:bg-blue3  rounded-full hover:text-blue2">
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
        <div className="bg-white min-h-screen mt-4 rounded-2xl p-4 shadow-sm">{children}</div>
      </div>
    </div>
  );
};

export default LayoutWrapper;
