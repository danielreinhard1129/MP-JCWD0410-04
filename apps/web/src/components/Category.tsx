import React from "react";
import Link from "next/link";

const Category = () => {
  return (
    <div className="mt-10">
      <div className="container flex flex-wrap justify-center sm:justify-start md:justify-between gap-4 max-w-full md:max-w-7xl mx-auto px-4">
        <button className="w-full sm:w-48 md:w-36 h-12 hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue3 to-blue1 text-white">
          Music
        </button>
        <button className="w-full sm:w-48 md:w-36 h-12 hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue3 to-blue1 text-white">
          Sports
        </button>
        <button className="w-full sm:w-48 md:w-36 h-12 hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue3 to-blue1 text-white">
          Theater
        </button>
        <button className="w-full sm:w-48 md:w-36 h-12 hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue3 to-blue1 text-white">
          Classical
        </button>
        <button className="w-full sm:w-48 md:w-36 h-12 hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue3 to-blue1 text-white">
          Art
        </button>
        <button className="w-full sm:w-48 md:w-36 h-12 hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue3 to-blue1 text-white">
          Anime
        </button>
        <button className="w-full sm:w-48 md:w-36 h-12 hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue3 to-blue1 text-white">
          Korean
        </button>
        <button className="w-full sm:w-48 md:w-36 h-12 hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-blue3 to-blue1 text-white">
          Live Stream
        </button>
      </div>
      <div className="mt-4 max-w-full md:max-w-7xl mx-auto text-center md:text-right px-4">
        <Link href="/detailed-search" className="text-blue1 font-bold">
          Click here to browse more
        </Link>
      </div>
    </div>
  );
};

export default Category;
