"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../app/style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function Jumbotron() {
  return (
    <div className="mt-10 h-[400px] bg-half flex items-center justify-center">
      <div className="container max-w-7xl mx-auto">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="rounded-3xl  w-[960px]"
        >
          <SwiperSlide>
            <Image src="/TOP.png" alt="Top image" width={500} height={300} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/TOP.jpg" alt="Top image" width={500} height={300} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/TOP.png" alt="Top image" width={500} height={300} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
