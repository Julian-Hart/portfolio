import React from "react";
import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section className="py-24 border-b border-neutral-900">
      <p className="text-xs tracking-[0.3em] uppercase text-neutral-600 mb-12">Education</p>
      <div className="space-y-12">
        {EDUCATION.map((edu, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-3 lg:gap-12"
          >
            <p className="text-sm text-neutral-600 pt-0.5">{edu.year}</p>
            <div>
              <h3 className="text-neutral-200 font-medium mb-1 text-sm">{edu.major}</h3>
              <p className="text-sm text-neutral-500 mb-3">{edu.school}</p>
              <p className="text-sm text-neutral-600 leading-relaxed">{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
