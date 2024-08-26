import React, { FC } from "react";

interface MyTicketsListCardProps {
  thumbnail: string;
  name: string;
  total: number;
  paymentId: number;
}

const MyTicketsListCard: FC<MyTicketsListCardProps> = () => {
  return (
    <div className="grid grid-cols-1 items-start gap-y-4 border-t p-4 sm:grid-cols-2 sm:items-center sm:gap-4 lg:grid-cols-5">
      <div className="flex items-center space-x-4">
        <div>
          <div className="text-sm text-gray-600">aaaa</div>
          <div className="text-xs text-gray-400">aaa</div>
        </div>
      </div>
      <div className="text-sm">tes</div>
      <div className="flex justify-between sm:block">
        <div className="text-sm font-medium">Invoice value</div>
        <div className="text-sm">bbbbbb€</div>
      </div>
      <div className="flex justify-between sm:block">
        <div className="text-sm font-medium">After tax</div>
        <div className="text-sm">ccccccc€</div>
      </div>
      <div className="flex items-center justify-between space-x-2 sm:justify-end sm:space-x-4">
        <div className="text-sm text-green-600">✓ Paid</div>
        <button className="rounded-full bg-purple-600 px-4 py-2 text-sm text-white hover:bg-purple-700">
          Review
        </button>
      </div>
    </div>
  );
};

export default MyTicketsListCard;
