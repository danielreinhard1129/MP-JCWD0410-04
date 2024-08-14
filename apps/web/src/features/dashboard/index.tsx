import { TbCalendarStar, TbCalendarTime } from "react-icons/tb";
import {DashboardCard, DashboardCardContent} from "@/components/ui/dashboardCard";

const DashboardPage = () => {
  
  return (
    <div className='bg-white shadow-sm mt-4 rounded-2xl'>
      <h1 className="p-5 text-xl">
        Dashboard
      </h1>
      <div className="p-4 pt-0 flex flex-wrap gap-4">
        <DashboardCard>
          <DashboardCardContent>
            <TbCalendarStar/>
            <p>Events</p>
          </DashboardCardContent>
        </DashboardCard>
        <DashboardCard>
          <DashboardCardContent>
            <TbCalendarStar/>
            <p>Coupons</p>
          </DashboardCardContent>
        </DashboardCard>
        <DashboardCard>
          <DashboardCardContent>
            <TbCalendarStar/>
            <p>Reviews</p>
          </DashboardCardContent>
        </DashboardCard>
        <DashboardCard>
          <DashboardCardContent>
            <TbCalendarStar/>
            <p>Tickets Sold</p>
          </DashboardCardContent>
        </DashboardCard>
        <DashboardCard>
          <DashboardCardContent>
            <TbCalendarStar/>
            <p>Sales</p>
          </DashboardCardContent>
        </DashboardCard>
        <DashboardCard>
          <DashboardCardContent>
            <TbCalendarStar/>
            <p>Attendees</p>
          </DashboardCardContent>
        </DashboardCard>
      </div>
    </div>
  )
}

export default DashboardPage