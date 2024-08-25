import React, { useMemo } from "react";
import { useRouter } from "next/navigation";
import AsyncSelect from "react-select/async";
import { debounce } from "lodash";
import { Search } from "lucide-react";
import { axiosInstance } from "@/lib/axios";
import { Event } from "@/types/event";
import useGetEventCards from "@/hooks/api/event/useGetEventCards";

interface EventOption {
  label: string;
  value: string;
}

const Searchbar = () => {
  const router = useRouter();
  const { data, isPending } = useGetEventCards({
    search: "", // We'll update this as needed
  });

  const getEventsOptions = async (inputText: string) => {
    const { data } = await axiosInstance.get("/events", {
      params: { search: inputText, take: 20 },
    });

    return data?.data.map((event: Event) => ({
      label: event.title,
      value: event.id,
    }));
  };

  const loadOptions = useMemo(
    () =>
      debounce(
        (inputText: string, callback: (option: EventOption[]) => void) => {
          getEventsOptions(inputText).then((option) => callback(option));
        },
        300
      ),
    []
  );

  const handleChange = (selectedOption: EventOption | null, actionMeta: any) => {
    if (actionMeta.action !== "clear" && selectedOption) {
      router.push(`/event/${selectedOption.value}`);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="relative" style={{ width: '400px' }}>
        <AsyncSelect
          placeholder="Search Event"
          loadOptions={loadOptions}
          onChange={handleChange}
          isClearable={true}
          classNamePrefix="react-select"
          styles={{
            control: (provided, state) => ({
              ...provided,
              width: '400px',
              minHeight: '38px',
              height: '38px',
              borderRadius: '9999px',
              borderColor: state.isFocused ? '#3b82f6' : '#e5e7eb',
              boxShadow: state.isFocused ? '0 0 0 2px #bfdbfe' : 'none',
              '&:hover': {
                borderColor: '#3b82f6'
              }
            }),
            valueContainer: (provided) => ({
              ...provided,
              height: '38px',
              padding: '0 6px 0 40px'
            }),
            input: (provided) => ({
              ...provided,
              margin: '0px',
            }),
            indicatorSeparator: () => ({
              display: 'none'
            }),
            dropdownIndicator: (provided) => ({
              ...provided,
              display: 'none'
            }),
            menu: (provided) => ({
              ...provided,
              width: '400px'
            })
          }}
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Searchbar;