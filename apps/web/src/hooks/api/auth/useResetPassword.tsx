"use client";

import useAxios from "@/hooks/useAxios";
import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface ResetPasswordPayload {
  password: string;
  token: string;
}

const useResetPassword = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: async (payload: ResetPasswordPayload) => {
      const { data } = await axiosInstance.patch(
        "/auth/reset-password",
        { password: payload.password },
        { headers: { Authorization: `Bearer ${payload.token}` } },
      );
      return data;
    },
    onSuccess: async () => {
      toast.success("Successfully reset password");
      router.push("/login");
    },
    onError: (error: AxiosError<any>) => {
      toast.error(error.response?.data);
    },
  });
};

export default useResetPassword;
