"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../app/style.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function Jumbotron() {
  return (
    <div className="h-[200px] md:h-[400px] bg-half md:bg-half2 flex items-center justify-center">
      <div className="container max-w-full sm:max-w-7xl mx-auto px-4">
        <Swiper
          spaceBetween={10}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="rounded-3xl  w-full sd:max-w-3xl md:max-w-3xl"
        >
          <SwiperSlide>
            <Image src="/TOP.png" alt="Top image" width={960} height={400} className="w-full h-auto object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/TOP.jpg" alt="Top image" width={960} height={400} className="w-full h-auto object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/TOP.png" alt="Top image" width={960} height={400} className="w-full h-auto object-cover" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
