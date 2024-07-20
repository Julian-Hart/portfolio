import React from "react";
import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Education</h2>
      <div>
        {EDUCATION.map((education, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{education.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="w-full lg:w-3/4 max-w-xl"
            >
              <h6 className="my-2 font-semibold">
                {education.major} -{" "}
                <span className="text-sm text-purple-100">
                  {education.school}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{education.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
