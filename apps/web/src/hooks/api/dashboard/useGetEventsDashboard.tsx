'use client'

import useAxios from "@/hooks/useAxios";
import { Event } from "@/types/event";
import { PageableResponse, PaginationQueries } from "@/types/pagination";
import { useQuery } from "@tanstack/react-query";

interface GetEventsQuery extends PaginationQueries {
  search?: string;
  category?: string;
  location?: string;
}

const useGetEventsDashboard = (queries: GetEventsQuery) => {
  const { axiosInstance } = useAxios();

  return useQuery({
    queryKey: ["events", queries],
    queryFn: async () => {
      try {
        const { data } = await axiosInstance.get<PageableResponse<Event>>(
          "/api/events",
          {
            params: queries,
          },
        );
        return data;
      } catch (error) {
        throw new Error(`Error: ${error}`);
      }
    },
  });
};

export default useGetEventsDashboard;
