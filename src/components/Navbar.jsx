import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-8 mb-16">
      <span className="text-xs text-neutral-600 tracking-[0.3em] uppercase font-medium select-none">
        JH
      </span>
      <div className="flex items-center gap-5">
        <a
          href="https://www.linkedin.com/in/julian-hart-96282a286/"
          target="_blank"
          rel="noreferrer"
          className="text-neutral-600 hover:text-neutral-200 transition-colors duration-200"
        >
          <FaLinkedin size={18} />
        </a>
        <a
          href="https://github.com/Julian-Hart"
          target="_blank"
          rel="noreferrer"
          className="text-neutral-600 hover:text-neutral-200 transition-colors duration-200"
        >
          <FaGithub size={18} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
