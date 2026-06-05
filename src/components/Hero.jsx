import React from "react";
import resume from "../assets/JulianHart-Resume.pdf";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pb-32 border-b border-neutral-900">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="text-[clamp(3.5rem,11vw,8.5rem)] font-light tracking-tight text-white leading-[0.9] mb-10">
          Julian
          <br />
          Hart
        </h1>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <p className="text-neutral-400 text-lg mb-1">Software Engineer</p>
            <p className="text-neutral-600 text-sm">
              Storrs, CT &middot; University of Connecticut
            </p>
          </div>
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 border border-neutral-800 px-5 py-3 hover:border-neutral-500 hover:text-neutral-200 transition-all duration-200 w-fit"
          >
            Resume <span className="text-neutral-700">↗</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
