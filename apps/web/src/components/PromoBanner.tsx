const PromoBanner = () => {
  return (
    <div className="mt-10 mb-10 p-6 py-12 bg-blue3 text-white">
      <div className="container max-w-full md:max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between text-center lg:text-left space-y-4 lg:space-y-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Up to 50% Off on Selected Events—Limited Time Offer!
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl animate-bounce">
            ▼
          </h3>
        </div>
      </div>
    </div>
  )
}

export default PromoBanner;
