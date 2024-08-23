// import React, { FC } from "react";
// import { CalendarIcon, GridIcon, ListIcon } from "lucide-react";
// import { EventCardProps } from "@/types/eventCards";
// import EventCards from "./EventCards";

// const EventList: FC<EventCardProps> = ({
//   id,
//   price,
//   thumbnail,
//   title,
//   date,
// }) => {
//   return (
//     <div className="container mx-auto max-w-7xl px-4 py-8">
//       <div className="mb-4 flex items-center text-sm text-gray-500">
//         <span>Home</span>
//         <span className="mx-2">/</span>
//         <span>Events</span>
//       </div>

//       <div className="mb-4 flex items-center justify-between">
//         <div className="space-x-2">
//           <button className="rounded bg-blue-500 px-4 py-2 text-white">
//             All
//           </button>
//           <button className="px-4 py-2 text-blue-500">New Onsales</button>
//         </div>
//         <div className="flex items-center space-x-2">
//           <button className="flex items-center rounded bg-gray-200 px-3 py-2">
//             <CalendarIcon className="mr-2 h-5 w-5" />
//             <span>Select date range</span>
//           </button>
//           <button className="rounded bg-gray-200 p-2">
//             <GridIcon className="h-5 w-5" />
//           </button>
//           <button className="rounded bg-gray-200 p-2">
//             <ListIcon className="h-5 w-5" />
//           </button>
//         </div>
//       </div>

//       <div className="mb-6 rounded bg-gray-200 p-3">
//         <CalendarIcon className="mr-2 inline-block h-5 w-5" />
//         <span>01 Aug 2024 (Thu.) ~ 31 Aug 2024 (Sat.)</span>
//       </div>
//       <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//         <EventCards
//           key={index}
//           id={card.id}
//           thumbnail={card.img}
//           title={card.title}
//           date={formattedDate}
//           price={card.price}
//         />
//       </div>
//     </div>
//   );
// };

// export default EventList;
