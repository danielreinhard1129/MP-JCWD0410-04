import React from "react";
import Link from "next/link";

const Category = () => {
  return (
    <div className="mt-10 ">
      <div className="container flex flex-wrap max-w-7xl mx-auto">
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 px-2 mb-4">
          <div className="rounded-full bg-white border-2 border-blue1 p-4 flex items-center justify-start space-x-2 h-full">
            <span className="text-2xl">🎵</span>
            <span className="text-1xl font-medium">Music</span>
          </div>
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 px-2 mb-4">
          <div className="rounded-full bg-white border-2 border-blue1 to  p-4 flex items-center justify-start space-x-2 h-full">
            <span className="text-2xl">🎵</span>
            <span className="text-1xl font-medium">Sports</span>
          </div>
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 px-2 mb-4">
          <div className="rounded-full bg-white border-2 border-blue1 p-4 flex items-center justify-start space-x-2 h-full">
            <span className="text-2xl">🎵</span>
            <span className="text-1xl font-medium">Theater</span>
          </div>
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 px-2 mb-4">
          <div className="rounded-full bg-white border-2 border-blue1 p-4 flex items-center justify-start space-x-2 h-full">
            <span className="text-2xl">🎵</span>
            <span className="text-1xl font-medium">Classical</span>
          </div>
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 px-2 mb-4">
          <div className="rounded-full bg-white border-2 border-blue1 p-4 flex items-center justify-start space-x-2 h-full">
            <span className="text-2xl">🎵</span>
            <span className="text-1xl font-medium">Art Event</span>
          </div>
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 px-2 mb-4">
          <div className="rounded-full bg-white border-2 border-blue1 p-4 flex items-center justify-start space-x-2 h-full">
            <span className="text-2xl">🎵</span>
            <span className="text-1xl font-medium">Movie</span>
          </div>
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 px-2 mb-4">
          <div className="rounded-full bg-white border-2 border-blue1 p-4 flex items-center justify-start space-x-2 h-full">
            <span className="text-2xl">🎵</span>
            <span className="text-1xl font-medium">Anime</span>
          </div>
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 px-2 mb-4">
          <div className="rounded-full bg-white border-2 border-blue1 p-4 flex items-center justify-start space-x-2 h-full">
            <span className="text-2xl">🎵</span>
            <span className="text-1xl font-medium">KPOP</span>
          </div>
        </div>
        <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 px-2 mb-4">
          <div className="rounded-full bg-white border-2 border-blue1 p-4 flex items-center justify-start space-x-2 h-full">
            <span className="text-2xl">🎵</span>
            <span className="text-1xl font-medium">Live Stream</span>
          </div>
        </div>
      </div>
      <div className="mt-4 max-w-7xl mx-auto text-right">
        <Link href="/detailed-search" className="text-blue1 font-bold">
          Click here for detailed ticket search &gt;
        </Link>
      </div>
    </div>
  );
};

export default Category;
