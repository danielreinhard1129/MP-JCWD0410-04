"use client";

import useAxios from "@/hooks/useAxios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface CreatePaymentPayload {
  qty: number;
  eventId: number;
}

const useCreatePayment = () => {
  const router = useRouter();
  const { axiosInstance } = useAxios();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: CreatePaymentPayload) => {
      // Sending payload as JSON directly
      const { data } = await axiosInstance.post("/payments", payload);
      return data;
    },
    onSuccess: (data) => {
      toast.success("Create Payment Success");
      queryClient.invalidateQueries({ queryKey: ["payments"] });
      router.push(`/checkout/${data.id}`);
    },
    onError: (error: AxiosError<any>) => {
      toast.error(error.response?.data);
    },
  });
};

export default useCreatePayment;