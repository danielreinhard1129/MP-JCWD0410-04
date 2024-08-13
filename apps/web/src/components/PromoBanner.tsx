const PromoBanner = () => {
  return (
    <div className="mb-10 mt-10 bg-[#f5f7f8] text-black1">
      <div className="container mx-auto max-w-full px-4 md:max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center lg:flex-row lg:justify-between lg:space-y-0 lg:text-left">
          <img src="https://images.sympla.com.br/6052047fec82e.svg" />
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">
              Looking for something?
            </h1>
            <h2 className="text-xl font-semibold text-gray-400 sm:text-3xl md:text-2xl">
              Log in with your Sympla account and see personalized
              recommendations
            </h2>
          </div>
          <h3 className="animate-bounce text-3xl sm:text-4xl md:text-5xl">▼</h3>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
