import { EventCardProps } from "@/types/eventCards";
import Link from "next/link";
import React, { FC } from "react";

const EventCards: FC<EventCardProps> = ({
  id,
  price,
  img,
  title,
  startDate,
  endDate,
}) => {
  return (
    <Link href={`/event/${id}`}>
      <div className="w-80 overflow-hidden rounded-lg bg-white shadow-md">
        <img
          src={img}
          alt={title}
          className="h-32 w-full object-cover"
        />
        <div className="p-4">
          <p className="mb-2 text-sm text-gray-500">{startDate} - {endDate}</p>
          <h3 className="truncate text-lg font-semibold" title={title}>
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default EventCards;
