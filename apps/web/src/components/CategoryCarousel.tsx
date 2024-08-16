"use client";

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import Category from "./Category";

export function CategoryCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="mt-4 mx-auto w-full max-w-7xl"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
       <Category/>
       <Category/>
       <Category/>
       <Category/>
       <Category/>
       <Category/>
       <Category/>
       <Category/>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

