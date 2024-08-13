import React from "react";

const Searchbar = () => {
  return (
    <div className="flex w-96 justify-center">
      <form className="form relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl">
        <button className="absolute left-2 top-1/2 -translate-y-1/2 p-1">
          <svg
            width="17"
            height="16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-labelledby="search"
            className="h-5 w-5 text-gray-700"
          >
            <path
              d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
              stroke="currentColor"
              strokeWidth="1.333"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        <input
          className="input placeholder:text-md w-full rounded-full border-2 border-blue1 px-10 py-3 placeholder-gray-400 transition-all duration-300 focus:border-blue-500 focus:outline-none"
          placeholder="Find Event/Artist/Group Name"
          type="text"
        />
      </form>
    </div>
  );
};

export default Searchbar;
