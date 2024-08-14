import Link from "next/link";
import React from "react";

const Category = () => {
  return (
    <Link href="/detail">
      <div className="p-6">
        <div>
          <img src="/icons/sports.png" className="w-full rounded-full" />
          <h1 className="flex justify-center font-bold mt-4">Sports</h1>
        </div>
      </div>
    </Link>
  );
};

export default Category;
