"use client";

import React, { useState, useEffect } from "react";

const images = [
  { src: "/west1.jpg", alt: "Ticket information" },
  { src: "/sports2.jpg", alt: "Ticket information" },
  { src: "/west1.png", alt: "Ticket information" },
  { src: "/music1.jpg", alt: "Ticket information" },
];

const Jumbotron = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-64 md:h-80 lg:h-96 w-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute left-0 top-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`block h-2 w-2 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Jumbotron;
