import { motion } from "framer-motion";
import AvatarImg from "../components/Avatar";
import ParticlesCont from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text*/}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-content justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Transforming Ideas <br /> Into{" "}
            <span className="text-accent"> Digital Reality</span>
          </motion.h1>
          {/* subtitles */}
          <motion.pw
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:nb-16"
          >
            As a dedicated and innovative front-end / Full-Stack developer, I thrive on
            solving complex problems and transforming ideas into seamless,
            engaging user experiences. My passion for technology drives me to
            stay ahead of the latest trends, continuously expanding my skill set
            to deliver cutting-edge, high-performance solutions. With a growth
            mindset at the core of my approach, I’m committed to refining my
            craft and embracing new challenges to push the boundaries of what’s
            possible in the digital space.
          </motion.pw>
          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        {/* particles */}
        <ParticlesCont />
        {/* avatar img */}
        <motion.div
          className="w-full h-full max-w-[737px] max-h-[1078px] absolute -bottom-12 lg:bottom-12 lg:right-[8%]"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeIn" }}
        >
          <AvatarImg />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
