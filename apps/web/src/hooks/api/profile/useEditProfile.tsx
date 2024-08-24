"use client";

import useAxios from "@/hooks/useAxios";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface LoginPayload {
  email: string;
  password: string;
  username: string;
}

const useLogin = () => {
  const router = useRouter();
  const { axiosInstance } = useAxios();

  return useMutation({
    mutationFn: async (payload: LoginPayload) => {
      const { data } = await axiosInstance.patch("/profile/edit", payload);
      return data;
    },
    onSuccess: async (data) => {
      await signIn("credentials", { ...data, redirect: false });
      toast.success("Update success");
      router.replace(data.role === "CUSTOMER" ? "/" : "/dashboard");
    },
    onError: (error: AxiosError<any>) => {
      console.log();

      toast.error(error.response?.data);
    },
  });
};

export default useLogin;
