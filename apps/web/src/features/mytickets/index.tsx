// "use client";

// import React from "react";
// import MyTicketsListCard from "./components/MyTicketsListCard";
// import useGetUserPayments from "@/hooks/api/payment/useGetUserPayments";

// const MyTickets = () => {
//   const { data } = useGetUserPayments();
//   console.log(data);

//   return (
//     <div className="min-h-screen bg-white py-4 sm:py-6 lg:py-8">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="mb-4 flex flex-col items-center justify-between sm:mb-6 sm:flex-row">
//           <h2 className="mb-2 text-xl font-semibold sm:mb-0">My Tickets</h2>
//         </div>
//         <div className="overflow-hidden rounded-lg bg-white shadow-md">
//           {/*  */}
//           {data?.map((payment, index: number) => {
//           return (
//             <MyTicketsListCard
//               key={index}
//               img={payment.event.img}
//               name={payment.event.name}
//               total={payment.total}
//               paymentId={payment.id}
//             />
//           );
//         })}
//           <MyTicketsListCard />
//           <MyTicketsListCard />
//           <MyTicketsListCard />
//           <MyTicketsListCard />
//           <MyTicketsListCard />
//           <MyTicketsListCard />
//           <MyTicketsListCard />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyTickets;
