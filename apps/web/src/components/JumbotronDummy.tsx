"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ImageObject {
  src: string;
  alt: string;
}

const JumbotronCarousel: React.FC = () => {
  const images: ImageObject[] = [
    { src: "/west1.jpg", alt: "Ticket information" },
    { src: "/sports2.jpg", alt: "Ticket information" },
    { src: "/west1.png", alt: "Ticket information" },
    { src: "/music1.jpg", alt: "Ticket information" },
  ];

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1.5}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !w-2 !h-2 !bg-gray-400',
          bulletActiveClass: '!bg-white',
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="h-48 md:h-96 w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center transition-opacity duration-300">
            {({ isActive }) => (
              <div className={`relative w-full h-full ${isActive ? '' : 'opacity-50'}`}>
                <img src={image.src} alt={image.alt} className="h-full w-full object-cover rounded-lg" />
                {!isActive && (
                  <div className="absolute inset-0 bg-white opacity-50 rounded-lg"></div>
                )}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="swiper-button-prev !hidden sm:!flex !left-4 !top-1/2 !-translate-y-1/2 !bg-white !bg-opacity-50 !w-10 !h-10 !rounded-full items-center justify-center after:!content-['']">
        <ChevronLeft className="w-6 h-6" />
      </div>
      <div className="swiper-button-next !hidden sm:!flex !right-4 !top-1/2 !-translate-y-1/2 !bg-white !bg-opacity-50 !w-10 !h-10 !rounded-full items-center justify-center after:!content-['']">
        <ChevronRight className="w-6 h-6" />
      </div> */}
    </div>
  );
};

export default JumbotronCarousel;