import {
  DashboardCardBackground,
  DashboardCardHeader
} from "@/components/ui/dashboardCard";
import { TbCalendarStar } from "react-icons/tb";

const DashboardPage = () => {
  return (
    <div className="mt-4 rounded-2xl bg-gray-300 shadow-sm">
      <h1 className="p-5 text-xl">Dashboard</h1>
      <div className="flex flex-wrap gap-4 p-4 pt-0">
        <DashboardCardBackground>
          <DashboardCardHeader>
            <TbCalendarStar />
            <p>Events</p>
          </DashboardCardHeader>
        </DashboardCardBackground>
        <DashboardCardBackground>
          <DashboardCardHeader>
            <TbCalendarStar />
            <p>Coupons</p>
          </DashboardCardHeader>
        </DashboardCardBackground>
        <DashboardCardBackground>
          <DashboardCardHeader>
            <TbCalendarStar />
            <p>Reviews</p>
          </DashboardCardHeader>
        </DashboardCardBackground>
        <DashboardCardBackground>
          <DashboardCardHeader>
            <TbCalendarStar />
            <p>Tickets Sold</p>
          </DashboardCardHeader>
        </DashboardCardBackground>
        <DashboardCardBackground>
          <DashboardCardHeader>
            <TbCalendarStar />
            <p>Sales</p>
          </DashboardCardHeader>
        </DashboardCardBackground>
        <DashboardCardBackground>
          <DashboardCardHeader>
            <TbCalendarStar />
            <p>Attendees</p>
          </DashboardCardHeader>
        </DashboardCardBackground>
      </div>
    </div>
  );
};

export default DashboardPage;
