"use client";
import useAxios from "@/hooks/useAxios";
import { EventCard } from "@/types/eventCards";
import { PageableResponse, PaginationQueries } from "@/types/pagination";
import { useQuery } from "@tanstack/react-query";

interface GetCardsQueries extends PaginationQueries {
  search?: string;
  category?: string;
}

// Hook react query untuk get data
const useGetEventCards = (queries: GetCardsQueries) => {
  const { axiosInstance } = useAxios();

  return useQuery({
    queryKey: ["events", queries],
    queryFn: async () => {
      const { data } = await axiosInstance.get<PageableResponse<EventCard>>(
        "/events/",
        { params: queries },
      );
      return data;
    },
  });
};

export default useGetEventCards;
