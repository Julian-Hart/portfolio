import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import { DiJava } from "react-icons/di";
import { animate, easeIn, motion } from "framer-motion";

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
        <motion.div
          variants={iconAnimation(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiHtml5 className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconAnimation(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiCss3 className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconAnimation(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiJsBadge className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconAnimation(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconAnimation(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiNodejsSmall className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconAnimation(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandNextjs className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconAnimation(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconAnimation(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiPython className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconAnimation(5.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiJava className="text-7xl" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
