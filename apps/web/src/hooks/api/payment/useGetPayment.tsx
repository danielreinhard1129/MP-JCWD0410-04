import { axiosInstance } from "@/lib/axios";
import { Payment } from "@/types/payment";
import { useQuery } from "@tanstack/react-query";

const useGetPayment = (paymentId: string) => {
  return useQuery({
    queryKey: ["payment", paymentId],
    queryFn: async () => {
      const { data } = await axiosInstance.get<Payment>(
        `/payments/${paymentId}`,
      );

      return data;
    },
  });
};

export default useGetPayment;