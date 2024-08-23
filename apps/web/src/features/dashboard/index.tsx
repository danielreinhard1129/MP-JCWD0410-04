import {
  DashboardCardBackground,
  DashboardCardHeader,
} from "@/components/ui/dashboardCard";
import { TbCalendarStar } from "react-icons/tb";

const DashboardPage = () => {
  return (
    <div>
      <h1 className="p-2 text-xl">Dashboard</h1>
      <div className="flex flex-wrap gap-4 pt-0">
        <DashboardCardBackground>
          <DashboardCardHeader>
            <TbCalendarStar />
            <p>Events</p>
          </DashboardCardHeader>
          <div className="text-center h-24 content-center">
            <p className="m-1 text-xl">2 Active Events</p>
            <p className="m-1 text-xl">5 Past Events</p>
          </div>
        </DashboardCardBackground>
        <DashboardCardBackground>
          <DashboardCardHeader>
            <TbCalendarStar />
            <p>Coupons</p>
          </DashboardCardHeader>
          <div className="text-center h-24 content-center">
            <p className="m-1 text-xl">2 Active Events</p>
            <p className="m-1 text-xl">5 Past Events</p>
          </div>
        </DashboardCardBackground>
        <DashboardCardBackground>
          <DashboardCardHeader>
            <TbCalendarStar />
            <p>Reviews</p>
          </DashboardCardHeader>
          <div className="text-center h-24 content-center">
            <p className="m-1 text-xl">2 Active Events</p>
            <p className="m-1 text-xl">5 Past Events</p>
          </div>
        </DashboardCardBackground>
        <DashboardCardBackground>
          <DashboardCardHeader>
            <TbCalendarStar />
            <p>Tickets Sold</p>
          </DashboardCardHeader>
          <div className="text-center h-24 content-center">
            <p className="m-1 text-xl">2 Active Events</p>
            <p className="m-1 text-xl">5 Past Events</p>
          </div>
        </DashboardCardBackground>
        <DashboardCardBackground>
          <DashboardCardHeader>
            <TbCalendarStar />
            <p>Sales</p>
          </DashboardCardHeader>
          <div className="text-center h-24 content-center">
            <p className="m-1 text-xl">2 Active Events</p>
            <p className="m-1 text-xl">5 Past Events</p>
          </div>
        </DashboardCardBackground>
        <DashboardCardBackground>
          <DashboardCardHeader>
            <TbCalendarStar />
            <p>Attendees</p>
          </DashboardCardHeader>
          <div className="text-center h-24 content-center">
            <p className="m-1 text-xl">2 Active Events</p>
            <p className="m-1 text-xl">5 Past Events</p>
          </div>
        </DashboardCardBackground>
      </div>
    </div>
  );
};

export default DashboardPage;
