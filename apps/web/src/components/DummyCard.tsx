import React from "react";

const DummyCard = () => {
  return (
    <div className="max-w-sm w-96 rounded-3xl shadow-md bg-white dark:text-gray-800">
      <img
        src="/kpop3.jpg"
        alt=""
        className="h-24 object-cover w-full rounded-t-3xl object-center dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between space-y-8 p-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-wide">
            EVENT Eventevent Event 2024!
          </h2>
          <p className="text-gray-400">
            24/24/2024
          </p>
          <p className="font-bold dark:text-gray-800">
            Rp. 500.000
          </p>
        </div>
        <button
          type="button"
          className="flex w-full items-center justify-center rounded-md p-3 font-semibold tracking-wide bg-blue3 text-white hover:bg-blue1"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default DummyCard;
