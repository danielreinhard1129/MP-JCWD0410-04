import { Payment, PaymentCard } from "@/types/payment";
import React, { FC } from "react";

const PriceCard: FC<PaymentCard> = ({ total, qty }) => {
  return (
    <div className="rounded bg-white p-4 shadow">
      <h3 className="mb-2 font-semibold">Detail Harga</h3>
      <div className="space-y-2">
        {/* <div className="flex justify-between">
          <span>Ticket Price</span>
          <span>total</span>
        </div> */}
        <div className="flex justify-between">
          <span>Quantity</span>
          <span>{qty}</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>{total}</span>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
