"use client";

import React, { useState } from "react";
import { Menu, X } from 'lucide-react';
import BuyButton from "@/features/detail/components/BuyButton";
import { EventDetailProps } from "@/types/eventCards";
import DetailCard from "./Card";

const DetailPageComponent: React.FC<EventDetailProps> = ({
  id,
  title,
  price,
  img,
  description,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="mx-auto min-h-screen w-full flex-col">
      <div className="relative flex h-64 w-full justify-center sm:h-96">
        <div 
        style={{ backgroundImage: `url(${img})` }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative self-center">
          <img src={img} className="max-w-sm sm:max-w-2xl" alt="Event cover" />
        </div>
      </div>
      <div className="min-h-screen bg-white">
        {/* Sticky Section with Improved Responsive Design */}
        <div className="sticky top-0 z-10 md:h-20 bg-white shadow-sm">
          <div className="container mx-auto max-w-7xl px-4 py-3 md:px-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center justify-between mb-4 md:mb-0">
                <button
                  className="md:hidden text-black"
                  onClick={toggleMenu}
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <div className="md:hidden">
                  <BuyButton
                    startPrice={838000}
                    ticketName={"PRESALE 4 : Early Entry 3 Day Pass"}
                    ticketDescription={
                      "Price excludes tax & admin fees- Ticket valid for 3 days (Friday to Sunday, 22..."
                    }
                    endDate={new Date("2024-07-26T23:00:00+07:00")}
                    price={838000}
                    isSoldOut={false}
                    maxQuantity={5}
                  />
                </div>
              </div>
              <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
                <ul className="flex flex-col gap-4 md:flex-row md:items-center md:space-x-6">
                  <li>
                    <a href="#pricing" className="text-black hover:text-blue-600 font-semibold">
                      Description
                    </a>
                  </li>
                  <li>
                    <a href="#exchange-refund" className="text-black hover:text-blue-600 font-semibold">
                      Exchange & Refund Policy
                    </a>
                  </li>
                  <li>
                    <a href="#admission-policy" className="text-black hover:text-blue-600 font-semibold">
                      FAQ
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="hidden md:block">
                <BuyButton
                  startPrice={838000}
                  ticketName={"PRESALE 4 : Early Entry 3 Day Pass"}
                  ticketDescription={
                    "Price excludes tax & admin fees- Ticket valid for 3 days (Friday to Sunday, 22..."
                  }
                  endDate={new Date("2024-07-26T23:00:00+07:00")}
                  price={838000}
                  isSoldOut={false}
                  maxQuantity={5}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Event Details Section */}
        <section className="container mx-auto flex max-w-7xl flex-col-reverse justify-around gap-8 px-4 py-12 md:flex-row md:px-8">
          <div className="md:max-w-4xl">
            <h2 className="mb-6 text-xl font-bold md:text-2xl">
              EVENT DETAILS
            </h2>
            <p className="mb-4 text-sm italic md:text-base">{title}</p>
            <p className="mb-6 text-sm md:text-base">{description}</p>
          </div>
          <DetailCard />
        </section>
      </div>
    </div>
  );
};

export default DetailPageComponent;