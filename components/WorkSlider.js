import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

// data
const workSlides = {
  slides: [
    {
      images: [
        { title: "title", path: "/thumb1.jpg" },
        { title: "title", path: "/thumb2.jpg" },
        { title: "title", path: "/thumb3.jpg" },
        { title: "title", path: "/thumb4.jpg" },
      ],
    },
    {
      images: [
        { title: "title", path: "/thumb4.jpg" },
        { title: "title", path: "/thumb1.jpg" },
        { title: "title", path: "/thumb2.jpg" },
        { title: "title", path: "/thumb3.jpg" },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.images.map((image, imageIndex) => (
              <div className="relative rounded-lg overflow-hidden flex items-center group" key={imageIndex}>
                <div className="flex items-center justify-center relative overflow-hidden group">
                  {/* images */}
                  <Image src={image.path} width={500} height={300} alt={image.title} />
                  {/* overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                  {/* title */}
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                    <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                      {/* title part 1*/}
                      <div className="delay-100">VISIT</div>
                      {/* title part 2*/}
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                        PROJECT
                      </div>
                      {/* icon */}
                      <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all transition-300 delay-300">
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
