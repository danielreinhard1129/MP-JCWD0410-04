'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DashboardEventPage = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-md rounded-lg p-4">
    {/* <div className="text-sm text-gray-500 mb-2">{pathname}</div> */}
    <div className="flex justify-between items-center">
      <div className="flex gap-2">
        {pathname === "/dashboard/active-events" ? (
          <Link href="/dashboard/active-events" className="bg-blue-100 text-blue-600 px-3 py-2 rounded-lg">
            Active Events
          </Link>
        ) : (
          <Link href="/dashboard/active-events" className="px-3 py-2 rounded-lg hover:bg-gray-100">
            Active Events
          </Link>
        )}
        {pathname === "/dashboard/past-events" ? (
          <Link href="/dashboard/past-events" className="bg-blue-100 text-blue-600 px-3 py-2 rounded-lg">
            Past Events
          </Link>
        ) : (
          <Link href="/dashboard/past-events" className="px-3 py-2 rounded-lg hover:bg-gray-100">
            Past Events
          </Link>
        )}
        {pathname === "/dashboard/statistics" ? (
          <Link href="/dashboard/statistics" className="bg-blue-100 text-blue-600 px-3 py-2 rounded-lg">
            Statistics
          </Link>
        ) : (
          <Link href="/dashboard/statistics" className="px-3 py-2 rounded-lg hover:bg-gray-100">
            Statistics
          </Link>
        )}
      </div>
      <Link
        href="/dashboard/create-event"
        className="bg-blue1 text-white font-bold px-4 py-2 rounded-3xl hover:bg-blue3 transition-colors duration-200"
      >
        Create Event
      </Link>
    </div>
  </nav>
  )
}

export default DashboardEventPage