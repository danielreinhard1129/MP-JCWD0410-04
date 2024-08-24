import { axiosInstance } from "@/lib/axios";
import { Category } from "@/types/category";
import { useQuery } from "@tanstack/react-query";

const useGetCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await axiosInstance.get<Category[]>("/categories");
      return data;
    },
  });
};

export default useGetCategories;