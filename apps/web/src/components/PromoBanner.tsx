import Link from "next/link";

const PromoBanner = () => {
  return (
    <div className="mb-10 mt-10 bg-[#f5f7f8] text-black1">
      <div className="container mx-auto p-8 md:max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4 text-left">
          <img src="/illust/1.svg" />
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h1 className="text-2xl font-bold md:text-3xl">
              Looking for More Events?
            </h1>
            <h2 className="text-xl font-semibold text-gray-400 md:text-xl">
            Don’t miss out on the action! Click the search button below to explore all the exciting events we have lined up just for you.
            </h2>
          </div>
          <Link
            href="/login"
            className="block rounded-full bg-blue1 px-6 py-2 text-center text-sm font-bold text-white hover:bg-blue3"
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
