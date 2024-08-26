"use client";

import { Input } from "@/components/ui/input";
import useGetEventDetail from "@/hooks/api/event/useGetEventDetail";
import useUploadPaymentProof from "@/hooks/api/payment/useUploadPaymentProof";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import Card from "./components/Card";
import { Loader2 } from "lucide-react";
import useGetPayment from "@/hooks/api/payment/useGetPayment";
import PriceCard from "./components/PriceCard";

// interface PaymentCard {
//   id: number;
//   total: number;
//   qty: number;
// }

const CheckoutPage = () => {
  const params = useParams();
  const id = params.id as string;

  const {data: dataEvent, isPending: isPendingEvent} = useGetEventDetail(id)

  const { data, isPending } = useGetPayment(id);
  const [paymentProof, setPaymentProof] = useState<File | null>(null);
  const [paymentId] = useState<number>(0); // You should set this to the actual payment ID
  const uploadMutation = useUploadPaymentProof();

  if (isPending || isPendingEvent) {
    return <Loader2 className="mx-auto animate-spin" />;
  }

  if (!data || !dataEvent) {
    return <h1 className="text-center">Event not found</h1>;
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setPaymentProof(event.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (paymentProof) {
      uploadMutation.mutate({
        paymentProof,
        status: "WAITING_FOR_ADMIN_CONFIRMATION", // Adjust this status as needed
        paymentId: Number(id),
      });
    } else {
      alert("Please select a payment proof file");
    }
  };

  return (
    <div className="container mx-auto flex min-h-screen max-w-full items-center justify-center bg-grey1">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-lg">
        <h1 className="mb-4 text-2xl font-bold">Payment Detail</h1>
        <div className="mb-4 rounded bg-yellow-400 p-2 text-black">
          <span className="font-bold">13:15</span> Segera selesaikan pesananmu
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <div className="rounded bg-white p-4 shadow">
              <div className="flex items-start space-x-4">
                <Card
                  id={dataEvent.id}
                  img={dataEvent.img}
                  title={dataEvent.title}
                  startDate={""}
                  endDate={""}
                  price={0}
                />
              </div>
            </div>
            <div className="rounded bg-white p-4 shadow">
              <PriceCard id={data.id} total={data.total} qty={data.qty}/>
          </div>
          </div>

          <div>
            <div>
              <img src="/qris.png" alt="QRIS Code" />
              <h1 className="border-t-2 border-dashed border-gray-300 py-2 font-semibold">
                Please transfer the total amount to this QRIS address.
              </h1>
            </div>

            <div className="mt-4">
              <Input
                type="file"
                onChange={handleFileChange}
                className="mb-2 w-full"
              />
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={uploadMutation.isPending}
                className="w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:bg-blue-300"
              >
                {uploadMutation.isPending
                  ? "Uploading..."
                  : "Upload Payment Proof"}
              </button>
            </div>

            {uploadMutation.isError && (
              <div className="mt-2 text-red-500">
                Error: {uploadMutation.error.message}
              </div>
            )}

            {uploadMutation.isSuccess && (
              <div className="mt-2 text-green-500">
                Payment proof uploaded successfully!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
