import Category from "@/components/Category";
import DummyCard from "@/components/DummyCard";
import Jumbotron from "@/components/Jumbotron";
import PopularEventsCard from "@/components/PopularEventsCard";
import PopularEventsTitle from "@/components/PopularEventsTitle";
import PromoBanner from "@/components/PromoBanner";
import PromoEventsCard from "@/components/PromoEventsCard";
import PromoEventsTitle from "@/components/PromoEventsTitle";
import Searchbar from "@/components/Searchbar";

const page = () => {
  return (
    <div className="bg-white max-w-full min-h-screen mt-10 px-0 md:px-0 lg:px-0">
      <Searchbar/>
      <Jumbotron/>
      <Category />
      <PopularEventsTitle/>
      <div className="mb-10">
        <div className="max-w-7xl mx-auto border-t-2 border-blue1 p-4 sm:p-6 lg:p-10 flex flex-wrap justify-center items-center gap-4 sm:gap-6">
        <DummyCard/>
        <DummyCard/>
        <DummyCard/>
        <DummyCard/>
        </div>
      </div>
      <PromoBanner/>
      <PromoEventsTitle/>
      <div className="mb-10">
        <div className="max-w-7xl mx-auto border-t-2 border-blue1 p-4 sm:p-6 lg:p-10 flex flex-wrap justify-center items-center gap-4 sm:gap-6">
          <PromoEventsCard/>
          <PromoEventsCard/>
          <PromoEventsCard/>
          <PromoEventsCard/>
        </div>
      </div>
    </div>
  );
};

export default page;
