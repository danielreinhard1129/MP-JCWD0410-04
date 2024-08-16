"use client";

import Link from "next/link";
import { useState } from "react";
// import { useRouter } from 'next/router';

export default function BuyButton() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  //   const router = useRouter();

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  //   const handleProceed = () => {
  //     // Redirect to the checkout page
  //     router.push('/checkout');
  //   };

  return (
    <section>
      {/* Event details content */}
      <div className="md:max-w-4xl">
        {/* ... (event description code) ... */}
        <button
          onClick={togglePopup}
          className="mt-2 w-full rounded-full bg-blue3 px-4 py-2 text-sm font-bold text-white hover:bg-blue1 md:mt-0 md:w-auto md:text-base"
        >
          BUY TICKETS
        </button>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-11/12 max-w-md rounded-lg bg-white p-6 shadow-lg">
            <h3 className="mb-4 text-lg font-semibold">Tickets</h3>
            <div className="my-8 flex-row rounded-xl bg-[#f5f7fa] p-4">
              <div className="flex justify-between">
                <div>Regular</div>
                <div>Rp.100.000</div>
              </div>
              <div className="text-right font-bold text-red-400">Sold Out</div>
            </div>
            <div className="my-8 flex-row rounded-xl bg-[#f5f7fa] p-4">
              <div className="flex justify-between">
                <div>Premium</div>
                <div>Rp.200.000</div>
              </div>
              <div className="text-right font-bold text-green-400">
                Available
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-4">
              <button
                onClick={togglePopup}
                className="rounded-lg border px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <Link href="/checkout">
                <button
                  // onClick={handleProceed}
                  className="rounded-full bg-blue3 px-4 py-2 text-sm font-bold text-white hover:bg-blue1"
                >
                  Proceed
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
