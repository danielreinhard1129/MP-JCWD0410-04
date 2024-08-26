"use client";

import useAxios from "@/hooks/useAxios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Payment } from "@/types/payment";

interface UploadPaymentProofPayload {
  paymentId: number;
  paymentProof: File;
  status: string;
}

const useUploadPaymentProof = () => {
  const router = useRouter();
  const { axiosInstance } = useAxios();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: UploadPaymentProofPayload) => {
      const updatePaymentForm = new FormData();

      updatePaymentForm.append("paymentProof", payload.paymentProof);
      updatePaymentForm.append("status", payload.status);

      // Sending payload as JSON directly
      const { data } = await axiosInstance.patch(
        `/payments/${payload.paymentId}`,
        updatePaymentForm,
      );
      return data;
    },
    onSuccess: () => {
      toast.success("Upload Success");
      queryClient.invalidateQueries({ queryKey: ["payments"] });
      router.push(`/mytickets`);
    },
    onError: (error: AxiosError<any>) => {
      toast.error(error.response?.data);
    },
  });
};

export default useUploadPaymentProof;