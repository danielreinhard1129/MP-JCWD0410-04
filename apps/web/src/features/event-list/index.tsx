"use client";

import EventCards from "@/components/EventCards";
import useGetEventCards from "@/hooks/api/event/useGetEventCards";
import { format } from "date-fns";
import { Loader2, CalendarIcon, GridIcon, ListIcon } from "lucide-react";
import { useState } from "react";

const EventList = () => {
  const [page, setPage] = useState(1);
  const { data, isPending } = useGetEventCards({
    page,
    take: 11,
  });

  if (isPending) {
    return <Loader2 className="mx-auto animate-spin" />;
  }

  if (!data) {
    return <h1 className="text-center">Blog not found</h1>;
  }
  return (
    <div className="container mx-auto max-w-7xl px-4 py-4 sm:py-6 md:py-8">
      <div className="mb-4 flex items-center text-sm text-gray-500">
        <span>Home</span>
        <span className="mx-2">/</span>
        <span>Events</span>
      </div>

      <div className="mb-4 flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
        <div className="flex space-x-2">
          <button className="rounded bg-blue-500 px-3 py-1 text-sm text-white sm:px-4 sm:py-2 sm:text-base">
            All
          </button>
          <button className="px-3 py-1 text-sm text-blue-500 sm:px-4 sm:py-2 sm:text-base">
            New Onsales
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <button className="flex items-center rounded bg-gray-200 px-2 py-1 text-sm sm:px-3 sm:py-2 sm:text-base">
            <CalendarIcon className="mr-1 h-4 w-4 sm:mr-2 sm:h-5 sm:w-5" />
            <span className="hidden sm:inline">Select date range</span>
            <span className="sm:hidden">Date</span>
          </button>
          <button className="rounded bg-gray-200 p-1 sm:p-2">
            <GridIcon className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
          <button className="rounded bg-gray-200 p-1 sm:p-2">
            <ListIcon className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>

      <div className="mb-4 rounded bg-gray-200 p-2 text-sm sm:mb-6 sm:p-3 sm:text-base">
        <CalendarIcon className="mr-1 inline-block h-4 w-4 sm:mr-2 sm:h-5 sm:w-5" />
        <span className="hidden sm:inline">01 Aug 2024 (Thu.) ~ 31 Aug 2024 (Sat.)</span>
        <span className="sm:hidden">Aug 1-31, 2024</span>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {data?.data.map((card, index) => {
          const formattedStartDate = format(
            new Date(card.startDate),
            "MMMM dd, yyyy",
          );
          const formattedEndDate = format(
            new Date(card.endDate),
            "MMMM dd, yyyy",
          );
          return (
            <EventCards
              key={index}
              id={card.id}
              img={card.img}
              title={card.title}
              startDate={formattedStartDate}
              endDate={formattedEndDate}
              price={card.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EventList;