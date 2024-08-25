// "use client";

// import React, { ChangeEvent, useState } from "react";
// import { ChevronUp, ChevronDown, Plus, Minus, X } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// import { EventCard } from "@/types/eventCards";
// import { format } from "date-fns";
// import useGetEventDetail from "@/hooks/api/event/useGetEventDetail";
// import { createTransactionSchema } from "../schema/CreateTransactionSchema";
// import { useFormik } from "formik";
// import { useParams } from "next/navigation";

// const BuyButton: React.FC<EventCard> = ({
//   id,
//   title,
//   price,
//   img,
//   desc,
//   startDate,
//   endDate,
//   location,
//   user,
//   quota,
//   availableSeat,
// }) => {
//   const { id: eventId } = useParams<{ id: string }>();
//   const { data } = useGetEventDetail(eventId);

//   const { mutateAsync: createTransaction, isPending } = useCreateTransaction();

//   const maxQuantity =
//     data?.quota && data?.booked !== undefined ? data.quota - data.booked : 0;

//   const formik = useFormik({
//     initialValues: {
//       qty: 0,
//       paymentMethod: "",
//       eventId: data?.id || 0,
//     },
//     validationSchema: createTransactionSchema(maxQuantity),
//     onSubmit: async (values) => {
//       // Handle form submission
//       await createTransaction(values);
//     },
//   });

//   const handleDecrement = () => {
//     if (formik.values.qty > 0) {
//       formik.setFieldValue("qty", formik.values.qty - 1);
//     }
//   };

//   const handleIncrement = () => {
//     if (maxQuantity > formik.values.qty) {
//       formik.setFieldValue("qty", formik.values.qty + 1);
//     }
//   };

//   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const value = parseInt(e.target.value, 10);
//     if (value > 0 && value <= maxQuantity) {
//       formik.setFieldValue("qty", value);
//     }
//   };

//   return (
//     <Dialog open={isOpen} onOpenChange={setIsOpen}>
//       <DialogTrigger asChild>
//         <Button className="bg-blue-600 text-white hover:bg-blue-700">
//           Beli Tiket
//         </Button>
//       </DialogTrigger>
//       <DialogContent className="bg-white shadow-lg sm:max-w-md">
//         <Card className="w-full border-0 bg-white shadow-none">
//           <CardHeader className="flex items-center justify-between bg-white">
//             <CardTitle className="text-2xl font-bold text-black">
//               {title}
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="bg-white">
//             <div className="mb-4 mt-4 flex items-center justify-between">
//               <span className="font-semibold text-black">Quantity:</span>
//               <div className="mb-4 flex items-center justify-between">
//                 <button
//                   onClick={handleDecrement}
//                   className="rounded-md bg-blue-500 px-3 py-1 text-white"
//                   disabled={quantity <= 1}
//                 >
//                   -
//                 </button>
//                 <span className="text-lg font-semibold">{quantity}</span>
//                 <button
//                   onClick={handleIncrement}
//                   className="rounded-md bg-blue-500 px-3 py-1 text-white"
//                 >
//                   +
//                 </button>
//               </div>
//             </div>
//           </CardContent>
//           <CardFooter className="flex items-center justify-between bg-white">
//             <span className="text-xl font-bold text-black">
//               Rp {price * value}
//             </span>
//             <Button
//               onClick={handleBuy}
//               className="bg-blue-600 text-white hover:bg-blue-700"
//               disabled={isSoldOut}
//             >
//               {isSoldOut ? "Sold Out" : `Beli ${quantity} Tiket`}
//             </Button>
//           </CardFooter>
//         </Card>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default BuyButton;
