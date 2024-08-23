"use client";

import { Loader2 } from "lucide-react";
import DetailPageComponent from "./components/DetailPageComponent";
import useGetEventDetail from "@/hooks/api/event/useGetEventDetail";
import { useParams } from 'next/navigation';

const DetailPage = () => {
  const params = useParams();
  const id = params.id as string;

  const { data, isPending } = useGetEventDetail(id);

  if (isPending) {
    return <Loader2 className="mx-auto animate-spin" />;
  }

  if (!data) {
    return <h1 className="text-center">Event not found</h1>;
  }

  return (
    <div className="flex flex-row gap-4">
      <DetailPageComponent
        id={data.id}
        title={data.title}
        price={data.price}
        thumbnail={data.img}
        description={data.desc}
        date={data.date}
      />
    </div>
  );
};

export default DetailPage;