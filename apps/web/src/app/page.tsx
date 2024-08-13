import Category from "@/components/Category";
import DummyCard from "@/components/DummyCard";
import PopularEventsTitle from "@/components/PopularEventsTitle";
import PromoBanner from "@/components/PromoBanner";
import PromoEventsTitle from "@/components/PromoEventsTitle";

const page = () => {
  return (
    <div className="mt-10 min-h-screen max-w-full bg-white px-0 md:px-0 lg:px-0">
      <Category />
      <PopularEventsTitle />
      <div className="mb-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 border-t-2 border-blue1 p-4 sm:gap-6 sm:p-6 lg:p-10">
          <DummyCard />
          <DummyCard />
          <DummyCard />
          <DummyCard />
        </div>
      </div>
      <PromoBanner />
      <PromoEventsTitle />
      <div className="mb-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 border-t-2 border-blue1 p-4 sm:gap-6 sm:p-6 lg:p-10">
          <DummyCard />
          <DummyCard />
          <DummyCard />
          <DummyCard />
        </div>
      </div>
    </div>
  );
};

export default page;
