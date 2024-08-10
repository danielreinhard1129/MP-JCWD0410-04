import React, { PropsWithChildren } from 'react'
import Navbar from './Navbar'
import NavbarDashboard from './NavbarDashboard'
import Link from 'next/link'
import { TbHome, TbCalendarStar } from "react-icons/tb";

const LayoutWrapper = ({children}: PropsWithChildren) => {
  return (
    <div className='flex'>
      <div className='w-80'>
        <div className='bg-blue3'>
          <Link
            href="/"
            className="text-sm font-bold text-black1 hover:text-orange1"
          >
            <img
              src="/tixLogo300.png"
              alt="Description"
              className="w-40 object-cover mx-auto"
            />
          </Link>
        </div>
        <div className='bg-blue1 h-screen'>
          <p className='text-blue2 text-xs p-2 font-bold'>Dashboard</p>
          <Link
            href="/"
            className="hover:text-black1">
              <div className='text-blue2 text-sm p-2 flex items-center justify-start space-x-2'>
                <span><TbHome/></span>
                <span>Dashboard</span>
              </div>
          </Link>
          <Link
            href="/"
            className="hover:text-black1">
              <div className='text-blue2 text-sm p-2 flex items-center justify-start space-x-2'>
                <span><TbCalendarStar/></span>
                <span>Events</span>
              </div>
          </Link>
          <hr className='mx-2'></hr>
          <p className='text-blue2 text-xs p-2 font-bold'>Account</p>
          <Link
            href="/"
            className="hover:text-black1">
              <div className='text-blue2 text-sm p-2 flex items-center justify-start space-x-2'>
                <span><TbHome/></span>
                <span>Profile</span>
              </div>
          </Link>
          <Link
            href="/"
            className="hover:text-black1">
              <div className='text-blue2 text-sm p-2 flex items-center justify-start space-x-2'>
                <span><TbHome/></span>
                <span>Inbox</span>
              </div>
          </Link>
          <Link
            href="/"
            className="hover:text-black1">
              <div className='text-blue2 text-sm p-2 flex items-center justify-start space-x-2'>
                <span><TbHome/></span>
                <span>Settings</span>
              </div>
          </Link>
        </div>
      </div>
      <div className='w-[100%]'>
        <NavbarDashboard/>
        {children}
      </div>
    </div>
  )
}

export default LayoutWrapper