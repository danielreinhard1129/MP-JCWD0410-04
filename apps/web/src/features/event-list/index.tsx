"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import EventCards from "@/components/EventCards";
import useGetCategories from "@/hooks/api/category/useGetCategories";
import useGetEventCards from "@/hooks/api/event/useGetEventCards";
import { format } from "date-fns";
import { Loader2, CalendarIcon, GridIcon, ListIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const EventList = () => {
  const searchParams = useSearchParams();

  const category = searchParams.get("category");

  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(category || "");
  const { data, isPending } = useGetEventCards({
    page,
    take: 9,
    category: selectedCategory,
  });

  const { data: item } = useGetCategories();

  const handleSelectCategory = (value: string) => {
    if (value === "all") {
      return setSelectedCategory("");
    }
    setSelectedCategory(value);
  };

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
          <Select
            onValueChange={handleSelectCategory}
            defaultValue={category || ""}
          >
            <SelectTrigger className="sm:w-[200px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Category</SelectLabel>
                <SelectItem value="all">All</SelectItem>
                {item?.map((categories, index: number) => {
                  return (
                    <SelectItem value={categories.category} key={index}>
                      {categories.category.charAt(0).toUpperCase() +
                        categories.category.slice(1).toLowerCase()}
                    </SelectItem>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
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
        <span className="hidden sm:inline">
          01 Aug 2024 (Thu.) ~ 31 Aug 2024 (Sat.)
        </span>
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
