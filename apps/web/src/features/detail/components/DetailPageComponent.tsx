"use client";

import React, { useState } from "react";
import { Loader2, Menu, X } from "lucide-react";
import BuyButton from "@/features/detail/components/BuyButton";
import { EventDetailProps } from "@/types/eventCards";
import { format } from "date-fns";
import formatPrice from "@/utils/formatprice";
import { Calendar, MapPin, Banknote } from "lucide-react";
import { useParams } from "next/navigation";
import useGetEventDetail from "@/hooks/api/event/useGetEventDetail";
import Markdown from "@/components/Markdown";

const DetailPageComponent: React.FC<EventDetailProps> = ({
  title,
  price,
  img,
  description,
  startDate,
  endDate,
  location,
  user,
}) => {
  const params = useParams();
  const id = params.id as string;

  const { data, isPending } = useGetEventDetail(id);

  if (isPending) {
    return <Loader2 className="mx-auto animate-spin" />;
  }

  if (!data) {
    return <h1 className="text-center">Event not found</h1>;
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const formattedStartDate = format(new Date(startDate), "MMMM dd, yyyy");
  const formattedEndDate = format(new Date(endDate), "MMMM dd, yyyy");

  return (
    <div className="mx-auto min-h-screen w-full flex-col">
      <div className="relative flex h-64 w-full justify-center sm:h-96">
        <div
          style={{ backgroundImage: `url(${img})` }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative self-center">
          <img src={img} className="max-w-sm sm:max-w-2xl" alt="Event cover" />
        </div>
      </div>
      <div className="min-h-screen bg-white">
        {/* Sticky Section with Improved Responsive Design */}
        <div className="sticky top-0 z-10 h-14 bg-white py-2 shadow-sm md:h-[86px] md:py-3">
          <div className="container mx-auto max-w-7xl px-4 md:px-8 md:py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <button
                  className="mr-4 text-black md:hidden"
                  onClick={toggleMenu}
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <nav className={`${isMenuOpen ? "block" : "hidden"} md:block`}>
                  <ul className="flex flex-col gap-4 md:flex-row md:items-center md:space-x-6">
                    <li>
                      <a
                        href="#pricing"
                        className="font-semibold text-black hover:text-blue-600"
                      >
                        Description
                      </a>
                    </li>
                    <li>
                      <a
                        href="#exchange-refund"
                        className="font-semibold text-black hover:text-blue-600"
                      >
                        Exchange & Refund Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="#admission-policy"
                        className="font-semibold text-black hover:text-blue-600"
                      >
                        FAQ
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div>
                <BuyButton
                  id={data.id}
                  title={data.title}
                  desc={""}
                  img={""}
                  price={0}
                  quota={0}
                  availableSeat={0}
                  startDate={""}
                  endDate={""}
                  location={""}
                  userId={0}
                  isDeleted={false}
                  createdAt={""}
                  updatedAt={""}
                  user={{
                    username: "",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Event Details Section */}
        <section className="container mx-auto flex max-w-7xl flex-col-reverse justify-around gap-8 px-4 py-12 md:flex-row md:px-8">
          <div className="md:max-w-3xl">
            <h2 className="mb-6 text-xl font-bold md:text-2xl">
              EVENT DETAILS
            </h2>
            <p className="mb-4 text-sm italic md:text-base">{title}</p>
            {/* <p className="mb-6 text-sm md:text-base">{description}</p> */}
            <Markdown description={description} />
          </div>
          <div className="flex flex-col h-[280px] rounded-3xl bg-white p-4 text-black1 shadow sm:p-8 md:max-w-3xl">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Calendar size={20} />
                <h1>
                  {formattedStartDate} - {formattedEndDate}
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <h2>{location}</h2>
              </div>
              <div className="flex items-center gap-2">
                <Banknote size={20} />
                <h4>{formatPrice(price)}</h4>
              </div>
            </div>
            <div className="mt-10 flex flex-col justify-center border-t-2 border-dashed py-2">
              <h1 className="font-normal text-gray-500">Hosted by</h1>
              <h2 className="font-semibold">{user?.username}</h2>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DetailPageComponent;
