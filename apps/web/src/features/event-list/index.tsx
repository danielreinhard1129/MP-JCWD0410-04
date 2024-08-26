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
import Pagination from "./components/Pagination";

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

  const onChangePage = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };

  const handleSelectCategory = (value: string) => {
    console.log(selectedCategory);
    
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
    <div className="container min-h-screen mx-auto max-w-7xl px-4 py-4 sm:py-6 md:py-8">
      <div className="mb-4 h-10 border-b-2 border-blue3 flex items-center text-sm text-gray-500">
        <span>Home</span>
        <span className="mx-2">/</span>
        <span>Events</span>
      </div>

      <div className="mb-4 flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
        <div className="flex space-x-2">
          <button className="rounded bg-blue3 px-3 py-1 text-sm text-white sm:px-4 sm:py-2 sm:text-base">
            All
          </button>
          <button className="px-3 py-1 text-sm text-blue3 sm:px-4 sm:py-2 sm:text-base">
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
        </div>
      </div>

      <div className="min-h-screen grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 justify-items-center">
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
      <div className="flex mt-10 justify-center">
        <Pagination
          total={data?.meta?.total || 0}
          limit={data?.meta?.take || 0}
          onChangePage={onChangePage}
          page={page}
        />
      </div>
    </div>
  );
};

export default EventList;