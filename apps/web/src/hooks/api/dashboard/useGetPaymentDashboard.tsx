import useAxios from "@/hooks/useAxios";
import { Payment } from "@/types/payment";
import { User } from "@/types/user";
import { useQuery } from "@tanstack/react-query";

interface PaymentDashboard extends Payment {
  event: {
    userId: number;
  },
  user: User
}

const useGetPaymentDashboard = (eventId: string) => {
  const { axiosInstance } = useAxios();
  return useQuery({
    queryKey: ["event", eventId],
    queryFn: async () => {
      try {
        const { data } = await axiosInstance.get<PaymentDashboard[]>(`/dashboards/payments/${eventId}`);
  
        return data;
      } catch (error) {
        throw new Error(`Error: ${error}`);
      }
    },
  });
};

export default useGetPaymentDashboard;
