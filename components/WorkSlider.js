import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const workSlides = {
  slides: [
    {
      images: [
        { title: "title1", path: "/Rep.png", link: "https://replicaide.com", color1: "#E35F1B", color2: "#4F1200" },
        { title: "title2", path: "/Blonk.png", link: "https://blonk.co", color1: "#65A6E6", color2: "#032755" },
        { title: "title3", path: "/Debook.png", link: "https://debook.app", color1: "#ff6f61", color2: "#ff9a8b" },
        { title: "title4", path: "/Venn.png", link: "https://www.venntelecom.com", color1: "#34e89e", color2: "#0f3443" },
      ],
    },
    {
      images: [
        { title: "title5", path: "/Jaslyn.png", link: "https://www.jaslynwrites.com", color1: "#F08E80", color2: "#FADCD2" },
        { title: "title6", path: "/AD.png", link: "https://addictsportnutrition.com", color1: "#213F6D", color2: "#BF9B30" },
        { title: "title7", path: "/Avakyan.png", link: "https://avakyancapital.com", color1: "#716F70", color2: "#E4E4E4" },
        { title: "title8", path: "/RealOpen.png", link: "https://realopen.com", color1: "#302E81", color2: "#9A8AC1" },
      ],
    },
    {
      images: [
        { title: "title5", path: "/GQ.png", link: "https://www.getquorum.com", color1: "#0F64A9", color2: "#F37F1E" },
        { title: "title6", path: "/JPN.png", link: "https://www.jpn-ent.net", color1: "#213F6D", color2: "#C95988" },
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
              <a
                href={image.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative rounded-lg overflow-hidden flex items-center group"
                key={imageIndex}
              >
                <div className="flex items-center justify-center relative overflow-hidden group">
                  {/* images */}
                  <Image src={image.path} width={500} height={300} alt={image.title} />
                  {/* overlay gradient */}
                  <div
                    style={{
                      background: `linear-gradient(to left, ${image.color1}, ${image.color2})`,
                    }}
                    className="absolute inset-0 opacity-0 group-hover:opacity-80 transition-all duration-700"
                  ></div>
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
              </a>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;