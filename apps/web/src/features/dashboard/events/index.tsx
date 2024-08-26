"use client";

import { useState } from "react";
import Link from "next/link";
import useGetEventsDashboard from "@/hooks/api/dashboard/useGetEventsDashboard";
import { Loader2, Router } from "lucide-react";
import { useSession } from "next-auth/react";
import { IoIosWarning } from "react-icons/io";
import { useRouter } from "next/navigation";

const DashboardEventsPage = () => {
  const [page, setPage] = useState(1);
  const [showNotif, setShowNotif] = useState(true);
  const [showTitle, setShowTitle] = useState(true);
  const [showThumbnail, setShowThumbnail] = useState(true);
  const [showCategory, setShowCategory] = useState(true);
  const [showPrice, setShowPrice] = useState(true);
  const [showSeat, setShowSeat] = useState(true);
  const [showStart, setShowStart] = useState(true);
  const [showEnd, setShowEnd] = useState(true);
  const { data, isPending } = useGetEventsDashboard({ page, take: 10 });
  const sessions = useSession();
  const router = useRouter();

  if (isPending) {
    return <Loader2 className="mx-auto animate-spin" />;
  }

  if (!data || data.data.length === 0) {
    return <p className="text-center">No Events Found</p>;
  }

  data.data[0].userId !== sessions.data?.user.id ? (
    <p className="text-center">Permission denied</p>
  ) : null;

  const formatToRupiah = (number: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  const toggleSelection = (value: boolean, callback: any) => {
    callback(!value);
  };

  return (
    <div>
      <div className="rounded-lg bg-white p-2 shadow-md">
        <div className="m-1 flex gap-2">
          <p>Display:</p>
          <label onClick={() => toggleSelection(showNotif, setShowNotif)}>
            <input type="checkbox" name="displayNotif" checked={showNotif} />{" "}
            Notifications
          </label>
          <label onClick={() => toggleSelection(showTitle, setShowTitle)}>
            <input type="checkbox" name="displayTitle" checked={showTitle} />{" "}
            Title
          </label>
          <label
            onClick={() => toggleSelection(showThumbnail, setShowThumbnail)}
          >
            <input
              type="checkbox"
              name="displayThumbnail"
              id="displayThumbnail"
              checked={showThumbnail}
            />{" "}
            Thumbnail
          </label>
          <label onClick={() => toggleSelection(showCategory, setShowCategory)}>
            <input
              type="checkbox"
              name="displayCategory"
              id="displayCategory"
              checked={showCategory}
            />{" "}
            Title
          </label>
          <label onClick={() => toggleSelection(showPrice, setShowPrice)}>
            <input
              type="checkbox"
              name="displayPrice"
              id="displayPrice"
              checked={showPrice}
            />{" "}
            Price
          </label>
          <label onClick={() => toggleSelection(showSeat, setShowSeat)}>
            <input
              type="checkbox"
              name="displaySeat"
              id="displaySeat"
              checked={showSeat}
            />{" "}
            Available Seat
          </label>
          <label onClick={() => toggleSelection(showStart, setShowStart)}>
            <input
              type="checkbox"
              name="displayStart"
              id="displayStart"
              checked={showStart}
            />{" "}
            Start Date
          </label>
          <label onClick={() => toggleSelection(showEnd, setShowEnd)}>
            <input
              type="checkbox"
              name="displayEnd"
              id="displayEnd"
              checked={showEnd}
            />{" "}
            End Date
          </label>
        </div>
        <table className="min-w-full">
          <thead>
            <tr>
              {showNotif ? <th className="border px-4 py-2">Notif</th> : null}
              {showTitle ? <th className="border px-4 py-2">Title</th> : null}
              {showThumbnail ? (
                <th className="border px-4 py-2">Thumbnail</th>
              ) : null}
              {showCategory ? (
                <th className="border px-4 py-2">Category</th>
              ) : null}
              {showPrice ? <th className="border px-4 py-2">Price</th> : null}
              {showSeat ? <th className="border px-4 py-2">Available Seat</th> : null}
              {showStart ? (
                <th className="border px-4 py-2">Start Date</th>
              ) : null}
              {showEnd ? <th className="border px-4 py-2">End Date</th> : null}
            </tr>
          </thead>
          <tbody>
            {data.data.map((event) => (
              <tr key={event.id} className="py-2 text-center">
                {showNotif ? (
                  <td className="border py-2">
                    {event.payments.map((payment) =>
                      payment.status === "WAITING_FOR_ADMIN_CONFIRMATION" ? (
                        <Link
                          href={`/dashboard/transactions/${event.id}`}
                          className="flex justify-center"
                        >
                          <IoIosWarning />
                        </Link>
                      ) : (
                        <div></div>
                      ),
                    )}
                    {event.payments.length === 0 ? <div></div> : null}
                  </td>
                ) : null}
                {showTitle ? (
                  <td className="border py-2">{event.title}</td>
                ) : null}
                {showThumbnail ? (
                  <td className="border py-2">
                    {event.img ? (
                      <div className="flex justify-center">
                        <img
                          src={event.img}
                          alt="Event thumbnail"
                          className="h-12 w-12 object-cover"
                        />
                      </div>
                    ) : (
                      "Image not found"
                    )}
                  </td>
                ) : null}
                {showCategory ? (
                  <td className="border py-2">{event.category.category}</td>
                ) : null}
                {showPrice ? (
                  <td className="border py-2">{formatToRupiah(event.price)}</td>
                ) : null}
                {showSeat ? (
                  <td className="border py-2 text-sm">{event.availableSeat} out of {event.quota}</td>
                ) : null}
                {showStart ? (
                  <td className="border py-2">
                    {new Date(event.startDate).toLocaleDateString()}
                  </td>
                ) : null}
                {showEnd ? (
                  <td className="border py-2">
                    {new Date(event.endDate).toLocaleDateString()}
                  </td>
                ) : null}

                {/* {payment.status === "WAITING_FOR_ADMIN_CONFIRMATION" ? (
                  <td className="border py-2">
                    <div className="flex justify-evenly gap-1">
                      <button
                        className="rounded-md bg-green-500 p-1"
                        onClick={() =>
                          handleButton({ id: payment.id, status: "DONE" })
                        }
                      >
                        ACCEPT
                      </button>
                      <button
                        className="rounded-md bg-red-500 p-1"
                        onClick={() =>
                          handleButton({ id: payment.id, status: "REJECTED" })
                        }
                      >
                        REJECT
                      </button>
                    </div>
                  </td>
                ) : (
                  ""
                )} */}
              </tr>
            ))}
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
