"use client";

import EventCards from "@/components/EventCards";
import useGetEventCards from "@/hooks/api/event/useGetEventCards";
import { format } from "date-fns";
import { Loader2, CalendarIcon, GridIcon, ListIcon } from "lucide-react";
import { useState } from "react";
// import { CalendarIcon, GridIcon, ListIcon } from "lucide-react";

const EventList = () => {
  const [page, setPage] = useState(1);
  const { data, isPending } = useGetEventCards({
    page,
    take: 5,
  });

  if (isPending) {
    return <Loader2 className="mx-auto animate-spin" />;
  }

  if (!data) {
    return <h1 className="text-center">Blog not found</h1>;
  }
  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <div className="mb-4 flex items-center text-sm text-gray-500">
        <span>Home</span>
        <span className="mx-2">/</span>
        <span>Events</span>
      </div>

      <div className="mb-4 flex items-center justify-between">
        <div className="space-x-2">
          <button className="rounded bg-blue-500 px-4 py-2 text-white">
            All
          </button>
          <button className="px-4 py-2 text-blue-500">New Onsales</button>
        </div>
        <div className="flex items-center space-x-2">
          <button className="flex items-center rounded bg-gray-200 px-3 py-2">
            <CalendarIcon className="mr-2 h-5 w-5" />
            <span>Select date range</span>
          </button>
          <button className="rounded bg-gray-200 p-2">
            <GridIcon className="h-5 w-5" />
          </button>
          <button className="rounded bg-gray-200 p-2">
            <ListIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="mb-6 rounded bg-gray-200 p-3">
        <CalendarIcon className="mr-2 inline-block h-5 w-5" />
        <span>01 Aug 2024 (Thu.) ~ 31 Aug 2024 (Sat.)</span>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data?.data.map((card, index) => {
          const formattedDate = format(new Date(card.date), "MMMM dd, yyyy");
          return (
            <EventCards
              key={index}
              id={card.id}
              thumbnail={card.img}
              title={card.title}
              date={formattedDate}
              price={card.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EventList;
