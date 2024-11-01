// icons
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiFramer,
  SiNextdotjs,
} from "react-icons/si";

// data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key="FaHtml5" />,
          <FaCss3 key="FaCss3" />,
          <FaJs key="FaJs" />,
          <FaReact key="FaReact" />,
          <SiNextdotjs key="SiNextdotjs" />,
          <SiFramer key="SiFramer" />,
          <FaWordpress key="FaWordpress" />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          <FaFigma key="FaFigma" />,
          <SiAdobexd key="SiAdobexd" />,
          <SiAdobephotoshop key="SiAdobephotoshop" />,
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "ReplicAIDE - Full-Stack Developer",
        stage: "2022 - 2024",
      },
      {
        title: "Venn Telecom - Front-End Developer",
        stage: "2021 - 2022",
      },
      {
        title: "Blonk Group. - Front-End Developer",
        stage: "2020 - 2021",
      },
      {
        title: "Founder - Jodev Agency",
        stage: "2019 - Present",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Bachelor Degree Computer Science - ISITCOM Tunisia",
        stage: "2022",
      },
      {
        title: "High School Computer Science and Maths - Ibn Sina",
        stage: "2019",
      },
    ],
  },
  {
    title: "Why Me?",
    info: [
      {
        title: "Analytical Thinker",
        stage: "Problem Solver",
      },
      {
        title: "Collaborative Spirit",
        stage: "Team Player",
      },
      {
        title: "Attention to Detail",
        stage: "Pixel Perfect Design",
      },
      {
        title: "Clear Communicator",
        stage: "High Communication Skills",
      },
      {
        title: "Adaptable",
        stage: "Quick Learner",
      },
      {
        title: "Customer-Centric",
        stage: "User Focused Design",
      },
      {
        title: "Time Management",
        stage: "Efficient Workflow",
      },
      {
        title: "Creative Mindset",
        stage: "Innovative Solutions",
      },
      {
        title: "Growth-Oriented",
        stage: "Continuous Learning",
      },
      {
        title: "Strategic Thinker",
        stage: "Proactive Problem Solving",
      },
    ],
  },
];

import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent design.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Starting at 12 with small games, my passion quickly shifted to
            crafting modern, visually engaging websites. This journey led me to
            freelancing, where each project fueled my drive to create sleek,
            user-focused interfaces that blend functionality with aesthetics.
          </motion.p>
          {/* Counters */}
          <div className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            <motion.div
              variants={fadeIn("right", 0.8)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex flex-1 xl:gap-x-6"
            >
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  +<CountUp start={0} end={5} duration={8} />
                </div>
                <div className="text-cs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>

              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  +<CountUp start={0} end={45} duration={8} />
                </div>
                <div className="text-cs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  +<CountUp start={0} end={89} duration={8} />
                </div>
                <div className="text-cs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8
                after:h-[2px] after:bg-white after:absolute after:-bottom-1
                after:left-0 z-50`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gp-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>

                {/* icons */}
                <div className="flex gap-x-4">
                  {item.icons?.map((icon, iconIndex) => (
                    <div key={iconIndex} className="text-2xl text-white">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
