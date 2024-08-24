import React from "react";
import { axiosInstance } from "@/lib/axios";
import { Event } from "@/types/event";
import { debounce } from "lodash";
import { useRouter } from "next/navigation";
import AsyncSelect from "react-select/async";

interface EventOption {
  label: string;
  value: string;
}

const Searchbar = () => {
  const router = useRouter();

  const getEventsOptions = async (inputText: string) => {
    const { data } = await axiosInstance.get("/events", {
      params: { search: inputText, take: 20 },
    });
    return data?.data.map((event: Event) => ({
      label: event.title,
      value: event.id,
    }));
  };

  const loadOptions = debounce(
    (inputText: string, callback: (option: EventOption[]) => void) => {
      getEventsOptions(inputText).then((option) => callback(option));
    },
    500
  );

  return (
    <div className="flex justify-center max-w-full md:w-full lg:w-96">
      <div className="form relative w-full">
        <AsyncSelect
          placeholder="Find Event/Artist/Group Name"
          loadOptions={loadOptions}
          onChange={(event, actionMeta) => {
            if (actionMeta.action !== "clear") {
              router.push(`/event/${event?.value}`);
            }
          }}
          isClearable={true}
          className="w-full"
          classNames={{
            control: (state) =>
              "input w-full rounded-full border-2 border-blue1 px-10 py-3 placeholder-gray-400 transition-all duration-300 focus:border-blue-500 focus:outline-none",
            dropdownIndicator: () => "hidden",
            indicatorSeparator: () => "hidden",
          }}
        />
        <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg
            width="17"
            height="16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-labelledby="search"
            className="h-5 w-5 text-gray-700"
          >
            <path
              d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
              stroke="currentColor"
              strokeWidth="1.333"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;