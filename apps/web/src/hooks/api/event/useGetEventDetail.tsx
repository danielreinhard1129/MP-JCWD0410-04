"use client";

import useAxios from "@/hooks/useAxios";
import { EventCard } from "@/types/eventCards";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

const useGetEventDetail = (id: string): UseQueryResult<EventCard, Error> => {
  const { axiosInstance } = useAxios();
  return useQuery({
    queryKey: ["event", id],
    queryFn: async () => {
      try {
        const { data } = await axiosInstance.get<EventCard>(`/events/${id}`);
        return data;
      } catch (error) {
        throw new Error(`Failed to fetch event details: ${error}`);
      }
    },
  });
};

export default useGetEventDetail;