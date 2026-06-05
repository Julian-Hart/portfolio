import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const TimelineEntry = ({ exp, index }) => {
  const isFirst = index === 0;

  return (
    <div className="relative pl-10">
      {/* Animated dot */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.3, delay: 0.05, type: "spring", stiffness: 500, damping: 25 }}
        className={`absolute left-[10px] top-[6px] w-3 h-3 rounded-full border ${
          isFirst
            ? "bg-white border-neutral-400 shadow-[0_0_10px_rgba(255,255,255,0.3)]"
            : "bg-neutral-900 border-neutral-600"
        }`}
      />

      {/* Pulse ring on the most recent entry */}
      {isFirst && (
        <motion.div
          animate={{ scale: [1, 1.8], opacity: [0.4, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
          className="absolute left-[10px] top-[6px] w-3 h-3 rounded-full bg-white"
        />
      )}

      {/* Card content */}
      <motion.div
        initial={{ opacity: 0, x: 18 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        className="pb-14"
      >
        <p className="text-[11px] text-neutral-600 font-mono tracking-wide mb-2">{exp.year}</p>
        <h3 className="text-neutral-100 font-medium text-sm mb-0.5">{exp.role}</h3>
        <p className="text-sm text-neutral-500 mb-5">{exp.company}</p>
        <p className="text-sm text-neutral-500 leading-relaxed mb-5">{exp.description}</p>
        <div className="flex flex-wrap gap-2">
          {exp.technologies.map((tech, i) => (
            <span
              key={i}
              className="text-xs text-neutral-600 border border-neutral-800 px-2.5 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const Experience = () => {
  return (
    <section className="py-24 border-b border-neutral-900">
      <p className="text-xs tracking-[0.3em] uppercase text-neutral-600 mb-12">Experience</p>
      <div className="relative">
        {/* Vertical timeline line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{ originY: 0 }}
          className="absolute left-[15px] top-0 bottom-0 w-px bg-neutral-800"
        />

        {EXPERIENCES.map((exp, index) => (
          <TimelineEntry key={index} exp={exp} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
