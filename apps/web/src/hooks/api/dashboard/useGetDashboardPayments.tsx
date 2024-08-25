import useAxios from "@/hooks/useAxios";
import { Payment } from "@/types/payment";
import { useQuery } from "@tanstack/react-query";

const useGetEventDetail = (eventId: string) => {
  const { axiosInstance } = useAxios();
  return useQuery({
    queryKey: ["event", eventId],
    queryFn: async () => {
      try {
        const { data } = await axiosInstance.get<Payment>(`/api/dashboard/${eventId}`);
  
        return data;
      } catch (error) {
        throw new Error(`Error: ${error}`);
      }
    },
  });
};

export default useGetEventDetail;
