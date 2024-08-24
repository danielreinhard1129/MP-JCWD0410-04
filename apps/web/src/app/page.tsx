import { CategoryCarousel } from "@/components/CategoryCarousel";
import Jumbotron from "@/components/Jumbotron";
import JumbotronDummy from "@/components/JumbotronDummy";
import PopularEventsTitle from "@/components/PopularEventsTitle";
import PromoBanner from "@/components/PromoBanner";
import PromoEventsTitle from "@/components/PromoEventsTitle";
import { TopPicksSection } from "@/components/TopPicksSection";

const page = () => {
  return (
    <div className="min-h-screen max-w-full bg-white px-0 md:px-0 lg:px-0">
      <JumbotronDummy/>
      {/* <CategoryCarousel /> */}
      <PopularEventsTitle />
      <TopPicksSection />
      <PromoBanner />
      {/* <PromoEventsTitle /> */}
    </div>
  );
};

export default page;
