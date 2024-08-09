import React from "react";

const Searchbar = () => {
  return (
    <div className="flex justify-center">
      <form className="form relative ">
        <button className="absolute left-2 -translate-y-1/2 top-1/2 p-1">
          <svg
            width="17"
            height="16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-labelledby="search"
            className="w-5 h-5 text-gray-700"
          >
            <path
              d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
              stroke="currentColor"
              stroke-width="1.333"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
        <input
          className="input placeholder:text-md rounded-full w-4xl sd:max-w-3xl md:max-w-3xl px-8 py-3 border-2  border-blue1 focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 "
          placeholder="Find Event/Artist/Group Name"
          //   required=""
          type="text"
        />
      </form>
    </div>
  );
};

export default Searchbar;
