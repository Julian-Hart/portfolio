import React from "react";
import { CONTACT } from "../constants";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-24">
      <p className="text-xs tracking-[0.3em] uppercase text-neutral-600 mb-12">Contact</p>
      <div className="flex flex-col gap-3 mb-8">
        <a
          href={`mailto:${CONTACT.email}`}
          className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm w-fit"
        >
          {CONTACT.email}
        </a>
        <span className="text-neutral-600 text-sm">{CONTACT.phoneNo}</span>
      </div>
      <div className="flex gap-5">
        <a
          href="https://www.linkedin.com/in/julian-hart-96282a286/"
          target="_blank"
          rel="noreferrer"
          className="text-neutral-600 hover:text-neutral-200 transition-colors duration-200"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://github.com/Julian-Hart"
          target="_blank"
          rel="noreferrer"
          className="text-neutral-600 hover:text-neutral-200 transition-colors duration-200"
        >
          <FaGithub size={20} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
