"use client";

import useAxios from "@/hooks/useAxios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface UpdatePFPPayload {
  pfp: File | null;
}

const useUpdatePFP = () => {
  const router = useRouter();
  const { axiosInstance } = useAxios();

  return useMutation({
    mutationFn: async (payload: UpdatePFPPayload) => {
      const updatePFPForm = new FormData();
      updatePFPForm.append("pfp", payload.pfp!);

      const { data } = await axiosInstance.patch("/profiles/update-picture", updatePFPForm);
      return data;
    },
    onSuccess: async (data) => {
      await signIn("credentials", { ...data, redirect: false });
      toast.success("Successfully updated profile picture");
      router.push("/profile");
    },
    onError: (error: AxiosError<any>) => {
      toast.error(error.response?.data);
    },
  });
};

export default useUpdatePFP;