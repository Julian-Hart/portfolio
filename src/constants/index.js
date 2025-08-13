import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";

export const ABOUT_TEXT = `Hello! My name is Julian, and I am a dedicated and versatile computer science student at the University of Connecticut specializing in full stack web development and Python. My journey in software development began with a deep curiosity for how things work and an obsession with computers and the internet, which has evolved into a passion for building impactful, user-focused software. I thrive in collaborative environments, continuously seek to learn, and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active by going to the gym and climbing, exploring new technologies, and playing music.`;

export const EDUCATION = [
  {
    year: "2024 - Present",
    major: "B.S. in Computer Science, Concentration in Algorithms and Theory",
    school: "University of Connecticut",
    description: `Relevant Coursework: Data Structures, Algorithms, Python Development, Systems Programming.`,
  },
  {
    year: "2022 - 2024",
    major: "Associate in Computer Science",
    school: "CT State Community College",
    description: `Graduated on the Dean’s List. Relevant Coursework: Java, Discrete Math, SQL, MongoDB, HTML, CSS, Tailwind, JavaScript.`,
  },
];

export const EXPERIENCES = [
  {
    year: "Jun 2025 – Present",
    role: "Software Engineer Intern",
    company: "ICP Systems",
    description: `Refactored legacy turret remoting systems to use the WAMPD protocol, migrating API layers from C++ to TypeScript in a Tauri architecture. Developed VNC integration for interactive remote access, implemented remote diagnostic command execution via WAMPD SSH, and built shared logic to auto-generate and sync turret command lists between backend and frontend.`,
    technologies: ["TypeScript", "Vue", "Tauri", "WAMPD", "VNC", "C++"],
  },
  {
    year: "Jun 2024 – Present",
    role: "Co-Founder / Front End Software Engineer",
    company: "CheckUP LLC",
    description: `Developed core user-facing features for a mental health SaaS platform, integrated Clerk authentication, and designed responsive, accessible UI with React and Tailwind. Led the UX/UI design process, improving onboarding efficiency by 80% and user satisfaction by 50%.`,
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Clerk",
      "Stream",
      "Shadcn",
      "SQL",
    ],
  },
  {
    year: "Sep 2024 – May 2025",
    role: "Web Development Intern",
    company: "University of Connecticut",
    description: `Designed and maintained backend architecture for high-traffic university websites with over 1,000 daily visitors. Engineered and optimized RESTful API endpoints to increase site speed and reliability by 50% and automated Airtable data migration using Python, saving 5 hours weekly.`,
    technologies: ["JavaScript", "APIs", "WordPress", "HTML", "CSS", "Python"],
  },
];

export const PROJECTS = [
  {
    title: "Pneumonia Classifier",
    image: project3,
    description:
      "A convolutional neural network (CNN) in PyTorch to detect pneumonia from chest X-ray images, deployed as a Flask API on Render.",
    technologies: [
      "Python",
      "PyTorch",
      "Flask",
      "Albumentations",
      "Pillow",
      "APIs",
    ],
    github: "https://github.com/Julian-Hart/Pneumonia-Classifier",
    link: "",
  },
  {
    title: "Encryption Library",
    image: project3,
    description:
      "A modular encryption library in C implementing AES and RSA algorithms with efficient memory management and a CLI for file encryption/decryption.",
    technologies: ["C", "AES", "RSA", "Pointers", "Data Structures"],
    github: "",
    link: "",
  },
  {
    title: "CheckUP",
    image: project3,
    description:
      "A mental health SaaS platform connecting employees with employers and HR for wellness tracking, with secure authentication and accessible design.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "SQL",
      "Clerk",
      "Docker",
      "APIs",
    ],
    link: "https://checkupapp.org",
  },
  {
    title: "Video Meeting App",
    image: project1,
    description:
      "A scalable meeting app supporting up to 50 concurrent users, featuring real-time communication, scheduling, and cross-platform compatibility.",
    technologies: [
      "HTML",
      "CSS",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Clerk",
      "Stream",
      "Shadcn",
    ],
    github: "https://github.com/Julian-Hart/Connect-Live",
    link: "https://connect-live-blush.vercel.app/",
  },
  {
    title: "AI Article Summarizer",
    image: project2,
    description:
      "An AI-powered tool that takes in an article and returns a concise summary using a Summarizer API from RapidAPI.",
    technologies: ["HTML", "CSS", "React", "Vite", "Redux", "Tailwind", "APIs"],
    github: "https://github.com/Julian-Hart/summarize_ai",
    link: "https://summarizeai-julian-harts-projects.vercel.app/",
  },
];

export const CONTACT = {
  phoneNo: "+1 860-993-8031",
  email: "Julianja.hart@gmail.com",
};
