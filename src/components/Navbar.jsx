import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-end py-6">
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/julian-hart-96282a286/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/Julian-Hart" target="_blank">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
