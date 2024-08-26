"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useFormik } from "formik";
import { createPaymentSchema } from "../schema/CreatePaymentSchema";
import { useParams } from "next/navigation";
import useGetEventDetail from "@/hooks/api/event/useGetEventDetail";
import useCreatePayment from "@/hooks/api/payment/useCreatePayment";
import { Loader2 } from "lucide-react";

const BuyButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { id: eventId } = useParams<{ id: string }>();
  const { data } = useGetEventDetail(eventId);
  const { mutateAsync: createPayment, isPending } = useCreatePayment();

  const maxQuantity = data!.availableSeat;

  const formik = useFormik({
    initialValues: {
      qty: 1,
      eventId: Number(eventId),
    },
    validationSchema: createPaymentSchema(maxQuantity),
    onSubmit: async (values) => {
      await createPayment(values);
      setIsOpen(false); // Close the dialog after successful transaction
    },
  });

  const handleDecrement = () => {
    if (formik.values.qty > 1) {
      formik.setFieldValue("qty", formik.values.qty - 1);
    }
  };

  const handleIncrement = () => {
    if (maxQuantity > formik.values.qty) {
      formik.setFieldValue("qty", formik.values.qty + 1);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="rounded-3xl bg-blue1 px-4 py-2 font-bold text-white transition-colors duration-200 hover:bg-blue3">
          BUY TICKET
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white shadow-lg sm:max-w-md">
        <Card className="w-full border-0 bg-white shadow-none">
          <CardHeader className="flex items-center justify-between bg-white">
            <CardTitle className="text-2xl font-bold text-black">
              Buy Ticket
            </CardTitle>
          </CardHeader>
          <CardContent className="bg-white">
            <div className="mb-4 mt-4 flex items-center justify-between">
              <span className="font-semibold text-black">Quantity:</span>
              <div className="mb-4 flex items-center justify-between">
                <button
                  onClick={handleDecrement}
                  disabled={formik.values.qty <= 1}
                  className="h-8 w-8 rounded-md bg-neutral-200"
                  type="button"
                >
                  -
                </button>
                <span className="mx-2 text-lg font-semibold">
                  {formik.values.qty}
                </span>
                <button
                  onClick={handleIncrement}
                  disabled={maxQuantity <= formik.values.qty}
                  className="h-8 w-8 rounded-md bg-neutral-200"
                  type="button"
                >
                  +
                </button>
              </div>
            </div>
            {formik.touched.qty && formik.errors.qty && (
              <div className="text-red-500">{formik.errors.qty}</div>
            )}
            {maxQuantity > 0 ? (
              <div className="text-red-500">
                {maxQuantity <= formik.values.qty
                  ? `Only ${maxQuantity} tickets are available. Please adjust your selection.`
                  : null}
              </div>
            ) : (
              <div className="text-red-500">Ticket quota is not available.</div>
            )}
          </CardContent>
          <CardFooter className="flex items-center justify-between bg-white">
            <span className="text-xl font-bold text-black">
              Rp.{" "}
              {data?.price
                ? (data.price * formik.values.qty).toLocaleString("id-ID")
                : "0"}
            </span>
            <Button
              type="submit"
              onClick={() => formik.handleSubmit()}
              disabled={isPending || !formik.isValid}
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              {isPending ? (
                <div className="flex items-center gap-2">
                  <Loader2 />
                  Processing...
                </div>
              ) : (
                "Buy Now"
              )}
            </Button>
          </CardFooter>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default BuyButton;
