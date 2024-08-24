"use client";

import useAxios from "@/hooks/useAxios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface CreateEventPayload {
  title: string;
  desc: string;
  startDate: Date | undefined;
  endDate: Date | undefined;
  price: number;
  quota: number;
  img: File | null;
  location: string;
  availableSeat: number;
  categoryId: number;
  userId: number;
}

const useCreateEvent = () => {
  const router = useRouter();
  const { axiosInstance } = useAxios();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: CreateEventPayload) => {
      //karena createnya bawa image jadi harus pake form data
      const createEventForm = new FormData();

      createEventForm.append("title", payload.title);
      createEventForm.append("description", payload.desc);
      createEventForm.append("location", payload.location);
      createEventForm.append("startDate", payload.startDate!.toString());
      createEventForm.append("endDate", payload.endDate!.toString());
      createEventForm.append("price", payload.price.toString());
      createEventForm.append("quota", payload.quota.toString());
      createEventForm.append("img", payload.img!);
      createEventForm.append("categoryId", payload.categoryId.toString());

      const { data } = await axiosInstance.post("/events", createEventForm);
      return data;
    },
    onSuccess: () => {
      toast.success("Create event success");
      queryClient.invalidateQueries({ queryKey: ["events"] });
      router.push("/");
    },
    onError: (error: AxiosError<any>) => {
      toast.error(error.response?.data);
    },
  });
};

export default useCreateEvent;
