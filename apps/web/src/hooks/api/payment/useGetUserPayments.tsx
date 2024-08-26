"use client";

import useAxios from "@/hooks/useAxios";
import { Payment } from "@/types/payment";
import { useQuery } from "@tanstack/react-query";

const useGetUserPayments = () => {
  const { axiosInstance } = useAxios();
  return useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const { data } = await axiosInstance.get<Payment[]>("/payments");
      return data;
    },
  });
};

export default useGetUserPayments;
