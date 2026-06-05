import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiMongodb,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiAmazonaws,
  SiGraphql,
  SiC,
  SiCplusplus,
  SiDocker,
  SiPostgresql,
  SiFlask,
  SiPytorch,
} from "react-icons/si";
import { DiNodejsSmall, DiPython, DiJsBadge, DiJava } from "react-icons/di";

const row1 = [
  { icon: <DiJava className="text-4xl" />, label: "Java" },
  { icon: <DiJsBadge className="text-4xl" />, label: "JavaScript" },
  { icon: <SiTypescript className="text-4xl" />, label: "TypeScript" },
  { icon: <DiPython className="text-4xl" />, label: "Python" },
  { icon: <SiC className="text-4xl" />, label: "C" },
  { icon: <SiCplusplus className="text-4xl" />, label: "C++" },
  { icon: <RiReactjsLine className="text-4xl" />, label: "React" },
  { icon: <TbBrandNextjs className="text-4xl" />, label: "Next.js" },
  { icon: <DiNodejsSmall className="text-4xl" />, label: "Node.js" },
];

const row2 = [
  { icon: <SiRedux className="text-4xl" />, label: "Redux" },
  { icon: <SiAmazonaws className="text-4xl" />, label: "AWS" },
  { icon: <SiMongodb className="text-4xl" />, label: "MongoDB" },
  { icon: <SiPostgresql className="text-4xl" />, label: "PostgreSQL" },
  { icon: <SiTailwindcss className="text-4xl" />, label: "Tailwind" },
  { icon: <SiGraphql className="text-4xl" />, label: "GraphQL" },
  { icon: <SiDocker className="text-4xl" />, label: "Docker" },
  { icon: <SiFlask className="text-4xl" />, label: "Flask" },
  { icon: <SiPytorch className="text-4xl" />, label: "PyTorch" },
];

const IconCell = ({ icon, label }) => (
  <div
    className="flex flex-col items-center justify-center gap-2 w-20 h-20 border border-neutral-800 shrink-0 grayscale hover:grayscale-0 transition-all duration-300 cursor-default"
    title={label}
  >
    {icon}
  </div>
);

const Technologies = () => {
  return (
    <section className="py-24 border-b border-neutral-900">
      <p className="text-xs tracking-[0.3em] uppercase text-neutral-600 mb-12">Technologies</p>
      <div className="space-y-3 overflow-hidden select-none">
        <div className="marquee-row flex overflow-hidden gap-3">
          <div className="animate-marquee gap-3 shrink-0">
            {[...row1, ...row1].map((t, i) => (
              <IconCell key={i} icon={t.icon} label={t.label} />
            ))}
          </div>
        </div>
        <div className="marquee-row flex overflow-hidden gap-3">
          <div className="animate-marquee-reverse gap-3 shrink-0">
            {[...row2, ...row2].map((t, i) => (
              <IconCell key={i} icon={t.icon} label={t.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
