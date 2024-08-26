"use client";

import useAxios from "@/hooks/useAxios";
import { Payment_Status } from "@/types/payment";
// import { useAppDispatch } from "@/redux/hooks";
// import { loginAction } from "@/redux/slices/userSlice";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
// import { useState } from "react";
import { toast } from "react-toastify";

interface StatusPayload {
  id: number;
  status: string;
}

const useUpdateStatusPayment = () => {
  const { axiosInstance } = useAxios();

  return useMutation({
    mutationFn: async (payload: StatusPayload) => {
      const { data } = await axiosInstance.patch(`/dashboards/payments/${payload.id}`, payload);
      return data;
    },
    onSuccess: async (data) => {
      toast.success("Successfully updated payment status");
    },
    onError: (error: AxiosError<any>) => {
      toast.error(error.response?.data);
    },
  });
};

export default useUpdateStatusPayment;
