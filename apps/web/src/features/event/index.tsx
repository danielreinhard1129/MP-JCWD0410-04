'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DashboardEventPage = () => {
  const pathname = usePathname();

  return (
    <div>
      <div>{pathname}</div>
      <div className='flex justify-between'>
        <div className='flex gap-2'>
          {pathname === "/dashboard/active-events" ? <Link href={"/dashboard/active-events"} className='bg-blue3 p-[6px] rounded-xl text-blue2'>Active Events</Link> : <Link href={"/dashboard/active-events"} className='p-[6px] rounded-xl'>Active Events</Link>}    
          {pathname === "/dashboard/past-events" ? <Link href={"/dashboard/past-events"} className='bg-blue3 p-[6px] rounded-xl text-blue2'>Past Events</Link> : <Link href={"/dashboard/past-events"} className='p-[6px] rounded-xl'>Past Events</Link>}
          {pathname === "/dashboard/statistics" ? <Link href={"/dashboard/statistics"} className='bg-blue3 p-[6px] rounded-xl text-blue2'>Statistics</Link> : <Link href={"/dashboard/statistics"} className='p-[6px] rounded-xl'>Statistics</Link>}
        </div>
        <Link href={"/dashboard/create-event"} className='p-[6px] rounded-xl'>Create event</Link>
      </div>
    </div>
  )
}

export default DashboardEventPage