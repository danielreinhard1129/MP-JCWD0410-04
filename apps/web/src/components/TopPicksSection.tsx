"use client";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import DummyCard from "./DummyCard";

export function TopPicksSection() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="mx-auto w-full max-w-7xl border-t-2 border-blue3"
    >
      <CarouselContent className="-ml-1">
        <DummyCard/>
        <DummyCard/>
        <DummyCard/>
        <DummyCard/>
        <DummyCard/>
        <DummyCard/>
        <DummyCard/>
        <DummyCard/>
        <DummyCard/>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
