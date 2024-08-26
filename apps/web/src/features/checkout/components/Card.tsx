import Link from "next/link";
import React, { FC } from "react";

interface CardProps {
  id: string;
  img: string;
  title: string;
  startDate: string;
  endDate: string;
  price: number;
}

const Card: FC<CardProps> = ({
  id,
  price,
  img,
  title,
  startDate,
  endDate,
}) => {
  return (
      <div className="w-80 overflow-hidden rounded-lg bg-white shadow-md">
        <img
          src={img}
          alt={title}
          className="h-32 w-full object-cover"
        />
        <div className="p-4">
          <h3 className="truncate text-lg font-semibold" title={title}>
            {title}
          </h3>
        </div>
      </div>
  );
};

export default Card;
