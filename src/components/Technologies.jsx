import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiTypescript, SiRedux, SiTailwindcss, SiAmazonaws, SiGraphql, SiWordpress, SiC, SiCplusplus, SiBootstrap } from "react-icons/si";
import { DiNodejsSmall, DiPython, DiHtml5, DiCss3, DiJsBadge, DiJava } from "react-icons/di";
import { motion } from "framer-motion";

const iconAnimation = (duration) => ({
  initial: { y: 0 },
  animate: {
    y: [5, -5],
    transition: {
      repeat: Infinity,
      duration: duration,
      ease: "linear",
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {[
          { icon: <DiHtml5 className="text-7xl" />, duration: 2.5 },
          { icon: <DiCss3 className="text-7xl" />, duration: 4.5 },
          { icon: <DiJsBadge className="text-7xl" />, duration: 3.5 },
          { icon: <SiTypescript className="text-7xl" />, duration: 3 },
          { icon: <RiReactjsLine className="text-7xl" />, duration: 2.5 },
          { icon: <SiRedux className="text-7xl" />, duration: 4 },
          { icon: <DiNodejsSmall className="text-7xl" />, duration: 5 },
          { icon: <TbBrandNextjs className="text-7xl" />, duration: 3 },
          { icon: <SiMongodb className="text-7xl" />, duration: 4.5 },
          { icon: <DiPython className="text-7xl" />, duration: 4 },
          { icon: <DiJava className="text-7xl" />, duration: 5.5 },
          { icon: <SiC className="text-7xl" />, duration: 3.5 },
          { icon: <SiCplusplus className="text-7xl" />, duration: 4.5 },
          { icon: <SiTailwindcss className="text-7xl" />, duration: 3 },
          { icon: <SiAmazonaws className="text-7xl" />, duration: 4.5 },
          { icon: <SiGraphql className="text-7xl" />, duration: 5 },
          { icon: <SiBootstrap className="text-7xl" />, duration: 4 },
          { icon: <SiWordpress className="text-7xl" />, duration: 3.5 },
        ].map((tech, index) => (
          <motion.div
            key={index}
            variants={iconAnimation(tech.duration)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            {tech.icon}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
