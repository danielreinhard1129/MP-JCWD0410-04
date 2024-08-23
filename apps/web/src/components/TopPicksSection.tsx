"use client";

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import CardList from "./CardList";

export function TopPicksSection() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="mx-auto w-full max-w-7xl border-t-2 border-blue3"
    >
      <CarouselContent className="-ml-1 p-8">
        <CardList/>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
