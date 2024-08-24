"use client";

import useAxios from "@/hooks/useAxios";
// import { useAppDispatch } from "@/redux/hooks";
// import { loginAction } from "@/redux/slices/userSlice";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
// import { useState } from "react";
import { toast } from "react-toastify";

interface ForgotPasswordPayload {
  email: string;
}

const useForgotPassword = () => {
  const router = useRouter();
  const { axiosInstance } = useAxios();

  return useMutation({
    mutationFn: async (payload: ForgotPasswordPayload) => {
      const { data } = await axiosInstance.post("/auth/forgot-password", payload);
      return data;
    },
    onSuccess: async (data) => {
      toast.success("Reset password requested");
      router.push("/forgot");
    },
    onError: (error: AxiosError<any>) => {
      toast.error(error.response?.data);
    },
  });
};

export default useForgotPassword;
