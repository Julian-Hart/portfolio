import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-white selection:text-black bg-neutral-950">
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-white origin-left z-50"
      />

      <div className="container mx-auto px-8 max-w-5xl">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
