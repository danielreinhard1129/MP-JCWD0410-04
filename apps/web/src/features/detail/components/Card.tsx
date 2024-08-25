// import React, { useState } from "react";
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
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleExpand = () => setIsExpanded(!isExpanded);

//   const maxQuantity = availableSeat;
//   const isSoldOut = availableSeat === 0;

//   const incrementQuantity = () => {
//     if (quantity < maxQuantity) {
//       setQuantity(quantity + 1);
//     }
//   };

//   const decrementQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handleBuy = () => {
//     console.log(`Buying ${quantity} tickets`);
//     setIsOpen(false);
//   };

//   // const formattedStartDate = format(new Date(startDate), "MMMM dd, yyyy");
//   // const formattedEndDate = format(new Date(endDate), "MMMM dd, yyyy");

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
//               <div className="flex items-center">
//                 <Button
//                   onClick={decrementQuantity}
//                   disabled={quantity === 1 || isSoldOut}
//                   className="border border-gray-300 bg-white p-2 text-black"
//                   variant="outline"
//                 >
//                   <Minus className="h-4 w-4" />
//                 </Button>
//                 <span className="mx-4 font-semibold text-black">
//                   {availableSeat}
//                 </span>
//                 <Button
//                   onClick={incrementQuantity}
//                   disabled={quantity === maxQuantity || isSoldOut}
//                   className="border border-gray-300 bg-white p-2 text-black"
//                   variant="outline"
//                 >
//                   <Plus className="h-4 w-4" />
//                 </Button>
//               </div>
//             </div>
//             <div className="mt-4">
//               <p>aaa</p>
//             </div>
//           </CardContent>
//           <CardFooter className="flex items-center justify-between bg-white">
//             <span className="text-xl font-bold text-black">
//               Rp {(price * quantity).toLocaleString()}
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
