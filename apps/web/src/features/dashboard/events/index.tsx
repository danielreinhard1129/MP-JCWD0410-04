"use client";

import { useState } from "react";
import Link from "next/link";
import useGetEventsDashboard from "@/hooks/api/dashboard/useGetEventsDashboard";

const DashboardEventsPage = () => {
  const [page, setPage] = useState(1);
  const [showTitle, setShowTitle] = useState(true);
  const [showThumbnail, setShowThumbnail] = useState(true);
  const [showCategory, setShowCategory] = useState(true);
  const [showPrice, setShowPrice] = useState(true);
  const [showSeat, setShowSeat] = useState(true);
  const [showStart, setShowStart] = useState(true);
  const [showEnd, setShowEnd] = useState(true);
  const { data, isPending } = useGetEventsDashboard({ page, take: 10 });

  const formatToRupiah = (number: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  const toggleSelection = (value:boolean, callback:any) => {
    callback(!value);
  }

  return (
    <div>
      <style>th</style>
      <div className="rounded-lg bg-white p-2 shadow-md">
        <div className="m-1 flex gap-2">
          <p>Display:</p>
          <label onClick={() => toggleSelection(showTitle, setShowTitle)}>
            <input type="checkbox" name="displayTitle" checked={showTitle} /> Title
          </label>
          <label onClick={() => toggleSelection(showThumbnail, setShowThumbnail)}>
            <input type="checkbox" name="displayThumbnail" id="displayThumbnail" checked={showThumbnail} /> Thumbnail
          </label>
          <label onClick={() => toggleSelection(showCategory, setShowCategory)}>
            <input type="checkbox" name="displayCategory" id="displayCategory" checked={showCategory} /> Title
          </label>
          <label onClick={() => toggleSelection(showPrice, setShowPrice)}>
            <input type="checkbox" name="displayPrice" id="displayPrice" checked={showPrice} /> Price
          </label>
          <label onClick={() => toggleSelection(showSeat, setShowSeat)}>
            <input type="checkbox" name="displaySeat" id="displaySeat" checked={showSeat} /> Available Seat
          </label>
          <label onClick={() => toggleSelection(showStart, setShowStart)}>
            <input type="checkbox" name="displayStart" id="displayStart" checked={showStart} /> Start Date
          </label>
          <label onClick={() => toggleSelection(showEnd, setShowEnd)}>
            <input type="checkbox" name="displayEnd" id="displayEnd" checked={showEnd} /> End Date
          </label>
        </div>
        <table className="min-w-full">
          <thead>
            <tr>
              {showTitle ? <th className="border px-4 py-2">Title</th> : null}
              {showThumbnail ? <th className="border px-4 py-2">Thumbnail</th> : null}
              {showCategory ? <th className="border px-4 py-2">Category</th> : null}
              {showPrice ? <th className="border px-4 py-2">Price</th> : null}
              {showSeat ? <th className="border px-4 py-2">Seat</th> : null}
              {showStart ? <th className="border px-4 py-2">Start Date</th> : null}
              {showEnd ? <th className="border px-4 py-2">End Date</th> : null}
            </tr>
          </thead>
          <tbody>
          {/* {isPending && (
              <tr>
              <td colSpan={9} className="text-center p-4">
              Loading...
              </td>
              </tr>
              )}
              {!isPending && data?.data?.map(event => (
                <tr key={event.id}>
                <td className="border px-4 py-2">{event.category?.title || "No Category"}</td>
                <td className="border px-4 py-2">{event.name}</td>
                <td className="border px-4 py-2">
                <img src={event.thumbnail} alt={event.name} className="w-12 h-12 object-cover" />
                </td>
                <td className="border px-4 py-2">{new Date(event.startDate).toLocaleDateString()}</td>
                <td className="border px-4 py-2">{new Date(event.endDate).toLocaleDateString()}</td>
                <td className="border px-4 py-2">{formatToRupiah(event.price)}</td>
                <td className="border px-4 py-2">{event.discount}%</td>
                <td className="border px-4 py-2">{event.quota}</td>
                </tr>
                ))}
                {!isPending && data?.data?.length === 0 && (
                  <tr>
                  <td colSpan={9} className="text-center p-4">
                  No events found.
                  </td>
                  </tr>
                  )} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardEventsPage;
