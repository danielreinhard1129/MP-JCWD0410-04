// import useAxios from "@/hooks/useAxios";
// import { Payment } from "@/types/payment";
// import { User } from "@/types/user";
// import { useQuery } from "@tanstack/react-query";

// interface StatisticsDashboard extends Payment {
//   user: User;
// }

// const useGetStatisticsDashboard = (eventId: string) => {
//   const { axiosInstance } = useAxios();
//   return useMutation({
//     mutationFn: async (payload: StatusPayload) => {
//       const { data } = await axiosInstance.get(`/dashboards/events/statistics/${event.id}`, payload);
//       return data;
//     },
//     onSuccess: async (data) => {
//       toast.success("Successfully updated payment status");
//       router.refresh();
//     },
//     onError: (error: AxiosError<any>) => {
//       toast.error(error.response?.data);
//     },
//   });
// };

// export default useGetStatisticsDashboard;
