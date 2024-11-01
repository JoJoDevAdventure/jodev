import { FaQuoteLeft } from 'react-icons/fa';
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const testimonialData = [
  {
    name: "Vlad Dremov",
    position: "Project Manager",
    message: "Joseph exceeded expectations by quickly delivering exactly what I needed with added tweaks that made the images even better. The process was seamless, with fast and comfortable communication throughout. An outstanding experience!"
  },
  {
    name: "Amanda Spon",
    position: "Creative Director",
    message: "Not only did Joseph welcome feedback with ease, but he also executed everything efficiently and on time. Highly recommend for anyone needing top-quality work done right!"
  },
  {
    name: "Robert Foley",
    position: "Marketing Specialist",
    message: "Working with Joseph was fantastic! His cooperative approach made everything easy. Highly recommend!"
  },
  {
    name: "Marc Nakken",
    position: "Operations Lead",
    message: "Very satisfied with Joseph's work. He's proactive and thoughtful, making collaboration a pleasure. Will definitely work with him again."
  },
  {
    name: "Jules Van Hoef",
    position: "Product Designer",
    message: "Joseph provided fast responses and excellent work. Looking forward to future collaborations!"
  },
  {
    name: "Timothy S.",
    position: "Tech Consultant",
    message: "Joseph delivered high-quality work at lightning speed. Highly recommend for any project!"
  },
  {
    name: "Hidenori Araki",
    position: "UX Strategist",
    message: "Joseph is incredibly attentive and focused on customer satisfaction. It’s been a pleasure working together, and I’m thrilled to have another project with him in the pipeline. Highly recommend!"
  },
  {
    name: "Amin T.",
    position: "Project Coordinator",
    message: "Another outstanding job from Joseph. Professional, responsive, and proactive in handling our requests. Highly recommend for any project!"
  }
];

const TestimonialsSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="h-[480px]"
    >
      {testimonialData.map((person, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            {/* avatar, name, position */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* name */}
                <div className="text-lg">{person.name}</div>
                {/* position */}
                <div className="text-[12px] uppercase font-extralight tracking-widest">{person.position}</div>
              </div>
            </div>
            {/* quote and message */}
            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20 cursor-grab">
              {/* quote icon */}
              <div className="mb-4">
                <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
              </div>
              {/* message */}
              <div className="xl:text-lg text-center md:text-left">{person.message}</div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialsSlider;
