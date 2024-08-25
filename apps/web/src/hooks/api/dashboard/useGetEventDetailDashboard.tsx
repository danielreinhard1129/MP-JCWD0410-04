import useAxios from "@/hooks/useAxios";
import { Event } from "@/types/event";
import { useQuery } from "@tanstack/react-query";

const useGetEventDetail = (eventId: string) => {
  const { axiosInstance } = useAxios();
  return useQuery({
    queryKey: ["event", eventId],
    queryFn: async () => {
      try {
        const { data } = await axiosInstance.get<Event>(`/api/events/${eventId}`);
  
        return data;
      } catch (error) {
        throw new Error(`Error: ${error}`);
      }
    },
  });
};

export default useGetEventDetail;
