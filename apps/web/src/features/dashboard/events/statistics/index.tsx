"use client";

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

  return (
    <div>
      EventStatisticsPage
      <p className="text-center text-4xl font-semibold">{data.title}</p>
      <div className="flex mt-4">
        <div className="max-w-[200px]">
          <p>Available Seat: {data.availableSeat}</p>
          <p>Booked: {data.quota - data.availableSeat}</p>
          <PieChart width={200} height={160}>
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
        <p>Attendee List</p>
      </div>
    </div>
  );
};

export default EventStatisticsPage;
