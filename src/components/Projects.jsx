import React, { useState } from "react";
import { PROJECTS } from "../constants";
import { motion, AnimatePresence } from "framer-motion";

const ProjectRow = ({ project, index, isOpen, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
      className="border-t border-neutral-900"
    >
      <button onClick={onToggle} className="w-full text-left group">
        <div className="flex items-center gap-5 py-5">
          {/* Number */}
          <span className="text-[11px] text-neutral-700 font-mono w-7 shrink-0 tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Title */}
          <span
            className={`flex-1 text-base font-light transition-colors duration-200 ${
              isOpen
                ? "text-white"
                : "text-neutral-400 group-hover:text-neutral-200"
            }`}
          >
            {project.title}
          </span>

          {/* Tech preview — hidden when open */}
          <AnimatePresence>
            {!isOpen && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="hidden sm:flex gap-2 text-[11px] text-neutral-700 font-mono mr-4"
              >
                {project.technologies.slice(0, 2).join(" · ")}
              </motion.span>
            )}
          </AnimatePresence>

          {/* Toggle icon */}
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="text-neutral-600 text-xl leading-none shrink-0 select-none group-hover:text-neutral-400 transition-colors duration-200"
          >
            +
          </motion.div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            {/* Align with title (number w-7 + gap-5 = 48px) */}
            <div className="flex gap-5 pb-8">
              <div className="w-7 shrink-0" />
              <div>
                <p className="text-sm text-neutral-500 leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs text-neutral-600 border border-neutral-800 px-2.5 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-neutral-500 border border-neutral-800 px-4 py-2 hover:border-neutral-500 hover:text-neutral-200 transition-all duration-200"
                    >
                      GitHub ↗
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-neutral-500 border border-neutral-800 px-4 py-2 hover:border-neutral-500 hover:text-neutral-200 transition-all duration-200"
                    >
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Projects = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => setOpen(open === index ? null : index);

  return (
    <section className="py-24 border-b border-neutral-900">
      <p className="text-xs tracking-[0.3em] uppercase text-neutral-600 mb-12">Projects</p>
      <div>
        {PROJECTS.map((project, index) => (
          <ProjectRow
            key={index}
            project={project}
            index={index}
            isOpen={open === index}
            onToggle={() => toggle(index)}
          />
        ))}
        <div className="border-t border-neutral-900" />
      </div>
    </section>
  );
};

export default Projects;
