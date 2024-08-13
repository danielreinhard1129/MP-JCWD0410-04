import React from "react";
import Link from "next/link";

const Category = () => {
  return (
    <div className="container mx-auto mt-10 flex max-w-full flex-col justify-center gap-4 px-4 sm:justify-start md:max-w-7xl md:justify-between">
      <div className="flex flex-row justify-between">
        <div className="font-bold">Category</div>
        <div>b</div>
      </div>
      <div className="flex flex-row  gap-6">
        <div>
          <img
            src="https://images.sympla.com.br/651593e03c77e.png"
            className="w-28 rounded-full"
          />
          <h1 className="flex justify-center">Sports</h1>
        </div>
        <div>
          <img
            src="https://images.sympla.com.br/651593e03c77e.png"
            className="w-28 rounded-full"
          />
          <h1 className="flex justify-center">Sports</h1>
        </div>
        <div>
          <img
            src="https://images.sympla.com.br/651593e03c77e.png"
            className="w-28 rounded-full"
          />
          <h1 className="flex justify-center">Sports</h1>
        </div>
        <div>
          <img
            src="https://images.sympla.com.br/651593e03c77e.png"
            className="w-28 rounded-full"
          />
          <h1 className="flex justify-center">Sports</h1>
        </div>
        <div>
          <img
            src="https://images.sympla.com.br/651593e03c77e.png"
            className="w-28 rounded-full"
          />
          <h1 className="flex justify-center">Sports</h1>
        </div>
        <div>
          <img
            src="https://images.sympla.com.br/651593e03c77e.png"
            className="w-28 rounded-full"
          />
          <h1 className="flex justify-center">Sports</h1>
        </div>
      </div>
    </div>
  );
};

export default Category;
