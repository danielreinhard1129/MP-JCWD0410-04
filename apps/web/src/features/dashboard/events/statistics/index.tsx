"use client";

// import useGetStatisticsDashboard from "@/hooks/api/dashboard/useGetEventStatistics";
import useGetEventDetail from "@/hooks/api/event/useGetEventDetail";
import { Loader2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const EventStatisticsPage = () => {
  const sessions = useSession();
  const params = useParams();
  const id = params.id as string;

  const { data, isPending } = useGetEventDetail(id);

  if (isPending) {
    return <Loader2 className="mx-auto animate-spin" />;
  }

  if (!data) {
    return <p className="text-center">Event not found</p>;
  }

  data.user.username !== sessions.data?.user.username ? (
    <p className="text-center">Permission denied</p>
  ) : null;

  const data01 = [
    {
      name: "Available Seat",
      value: data.availableSeat,
    },
    {
      name: "Booked",
      value: data.quota - data.availableSeat,
    },
  ];

  const barData = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
  ];

  const formatToRupiah = (number: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  // const { data: dataAttendees } = useGetStatisticsDashboard(id);

  // if (!dataAttendees) {
  //   <div>No Attendees</div>
  // }

  return (
    <div>
      EventStatisticsPage
      <p className="text-center text-4xl font-semibold">{data.title}</p>
      <div className="flex mt-4">
        <div className="max-w-[200px]">
          <p>Available Seat: {data.availableSeat}</p>
          <p>Booked: {data.quota - data.availableSeat}</p>
          <PieChart width={200} height={200}>
            <Pie
              data={data01}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={50}
              fill="#8884d8"
              label
            />
          </PieChart>
        </div>
        <div className="bg-white rounded-xl">
          <LineChart
            width={730}
            height={250}
            data={barData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </div>
      </div>
      <div className="mt-4">
        <p className="mb-4">Attendee List</p>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="border px-2 py-2">User</th>
              <th className="border px-2 py-2">Qty</th>
              <th className="border px-2 py-2">Total</th>
              <th className="border px-2 py-2">Proof</th>
              <th className="border px-2 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {/* {dataAttendees.map((payment) => (
              <tr key={payment.id} className="py-2 text-center">
                <td className="border py-2">{payment.user.username}</td>
                <td className="border py-2">{payment.qty}</td>
                <td className="border py-2">{formatToRupiah(payment.total)}</td>
                <td className="border py-2">
                  {payment.paymentProof ? (
                    <div className="flex justify-center">
                      <img
                        src={payment.paymentProof}
                        alt="Bukti bayar"
                        className="h-12 w-12 object-cover"
                      />
                    </div>
                  ) : (
                    "Pending"
                  )}
                </td>
                <td className="border py-2">
                  {new Date(payment.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventStatisticsPage;
