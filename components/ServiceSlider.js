// icons
import {
  RxArrowTopRight,
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
} from "react-icons/rx";

const serviceData = [
  {
    icon: <RxDesktop />,
    title: "Full-Stack Development",
    description: "Building robust, scalable solutions from front-end interfaces to back-end functionalities.",
  },
  {
    icon: <RxCrop />,
    title: "UI/UX Design",
    description: "Crafting intuitive, user-centered designs that enhance user experience and visual appeal.",
  },
  {
    icon: <RxPencil2 />,
    title: "Graphic Design",
    description: "Creating compelling visuals that communicate your brand's message with clarity and creativity.",
  },
  {
    icon: <RxReader />,
    title: "Copywriting",
    description: "Delivering engaging, SEO-friendly content that connects with audiences and drives conversions.",
  },
  {
    icon: <RxRocket />,
    title: "SEO Optimization",
    description: "Enhancing website visibility and driving traffic with effective, data-driven SEO strategies.",
  },
];

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      FreeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-full rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer
            hover:bg-[rgba(89,65,169,0.25)] transition-all duration-500">
              {/* icon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title & desc */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="mx-w-[350px] leading-normal"> {item.description}</p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-500"/>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
      Services Slider
    </Swiper>
  );
};

export default ServiceSlider;
