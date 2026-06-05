import React from "react";
import aboutImg from "../assets/JulianPfp.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-24 border-b border-neutral-900">
      <p className="text-xs tracking-[0.3em] uppercase text-neutral-600 mb-12">About</p>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="shrink-0"
        >
          <img
            src={aboutImg}
            alt="Julian Hart"
            className="w-40 h-40 rounded-full object-cover grayscale"
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <p className="text-neutral-400 leading-relaxed text-base">{ABOUT_TEXT}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
