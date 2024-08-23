"use client";

import BuyButton from "@/components/BuyButton";
import { EventDetailProps } from "@/types/eventCards";
import React, { FC } from "react";

const DetailPageComponent: React.FC<EventDetailProps> = ({
  id,
  title,
  price,
  thumbnail,
  description,
  date,
}) => {
  return (
    <div className="w-full mx-auto min-h-screen flex-col">
      <div className="relative flex h-64 w-full justify-center sm:h-96">
        <div className="absolute inset-0 bg-[url('/kpop3.jpg')] bg-cover bg-center bg-no-repeat blur-sm"></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative self-center">
          <img src="/kpop3.jpg" className="max-w-sm sm:max-w-2xl" />
        </div>
      </div>
      <div className="min-h-screen bg-white">
        {/* Sticky Section */}
        <div className="sticky top-0 z-10 bg-white px-6 py-3 shadow-sm">
          <div className="container mx-auto flex max-w-7xl flex-col items-center justify-around px-4 py-3 md:flex-row md:px-8">
            <div className="mb-2 flex w-full flex-col gap-4 space-y-2 text-center text-sm font-bold md:mb-0 md:w-auto md:flex-row md:space-x-4 md:space-y-0 md:text-left md:text-base">
              <a href="#pricing" className="text-black hover:text-blue3">
                Description
              </a>
              <a
                href="#exchange-refund"
                className="text-black hover:text-blue3"
              >
                Exchange & Refund Policy
              </a>
              <a
                href="#admission-policy"
                className="text-black hover:text-blue3"
              >
                FAQ
              </a>
            </div>
            <BuyButton />
          </div>
        </div>

        {/* Event Details Section */}
        <section className="container mx-auto flex max-w-7xl flex-col-reverse justify-between gap-8 px-4 py-12 md:flex-row md:px-8">
          <div className="md:max-w-4xl">
            <h2 className="mb-6 text-xl font-bold md:text-2xl">
              EVENT DETAILS
            </h2>
            <p className="mb-4 text-sm italic md:text-base">{title}</p>
            <p className="mb-6 text-sm md:text-base">{description}</p>
          </div>
          <button className="mt-6 h-10 w-full self-center rounded-full border-2 border-blue1 bg-white px-4 py-2 text-sm font-normal text-blue1 hover:border-blue3 hover:text-blue3 md:mt-0 md:w-auto md:whitespace-nowrap md:text-base">
            View Seatmap
          </button>
        </section>
      </div>
    </div>
  );
};

export default DetailPageComponent;
