"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { serviceData } from "@/data";

const SliderServices = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      className="h-[300px] md:h-[360px] w-full max-w-[1200px] mx-auto transition-all"
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div
            className="flex flex-col items-center px-6 py-8 h-auto md:h-[320px] rounded-lg cursor-pointer bg-gradient-to-r from-[#1E3A8A33] to-[#2563EB1A] shadow-md group hover:shadow-lg hover:from-[#2563EB3D] hover:to-[#3B82F67A] border border-transparent hover:border-blue-500 transition-all duration-500 transform hover:scale-105"
            aria-labelledby={`service-title-${index}`}
            role="region"
          >
            <div className="mb-4 text-5xl text-terciary transition-all duration-500 transform group-hover:rotate-6 group-hover:scale-110">
              {item.icon}
            </div>
            <div className="text-center">
              <h3
                id={`service-title-${index}`}
                className="mb-2 text-lg font-bold text-terciary transition-all duration-500 transform group-hover:translate-y-[-4px]"
              >
                {item.title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderServices;
