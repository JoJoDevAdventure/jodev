import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ServicesSlider from "../../components/ServiceSlider";

//framer motion
import { } from "../../variants";

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[300vw] flex-col lg:text-left mb-4 xl:mb-0">
            <h2 className="h2 xl:mt-8">
              {" "}
              My services <span className="text-accent">.</span>
            </h2>
            <p className="mb-4 max-w-[400px] mx-auto lg:mx-0">
            Anim eu cupidatat reprehenderit do deserunt aute non ad sint enim.
            Excepteur reprehenderit ea ex ut adipisicing nisi irure incididunt
            exercitation nisi eiusmod exercitation nulla et. Ullamco elit non
            quis et minim esse.
          </p>
          </div>
          {/* Slider */}
          <ServicesSlider/>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
