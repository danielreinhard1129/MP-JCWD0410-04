"use client";
import useGetEventCards from "@/hooks/api/event/useGetEventCards";
import { format } from "date-fns";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import EventCards from "./EventCards";

const CardList = () => {
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
    <div className="flex flex-row gap-4">
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
  );
};

export default CardList;
