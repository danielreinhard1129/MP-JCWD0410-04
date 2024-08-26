'use client'

import useAxios from "@/hooks/useAxios";
import { Event } from "@/types/event";
import { PageableResponse, PaginationQueries } from "@/types/pagination";
import { Payment } from "@/types/payment";
import { useQuery } from "@tanstack/react-query";

interface GetEventsQuery extends PaginationQueries {
  search?: string;
  category?: string;
  location?: string;
}

interface EventDashboard extends Event {
  category: {
    category: string;
},
payments: Payment[];
}



const useGetEventsDashboard = (queries: GetEventsQuery) => {
  const { axiosInstance } = useAxios();

  return useQuery({
    queryKey: ["events", queries],
    queryFn: async () => {
      try {
        queries.sortOrder = "asc";
        const { data } = await axiosInstance.get<PageableResponse<EventDashboard>>(
          "/events",
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
