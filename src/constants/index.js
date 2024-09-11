import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";

export const ABOUT_TEXT = `Hello! My name is Julian, and I am a dedicated and versatile computer science student at the University of Connecticut specializing in full stack web development and Python. My journey in software development began with a deep curiosity for how things work and an obsession with computers and the internet as a whole, and it has evolved into a passion for creating software that is useful and engaging for all. I thrive in collaborative environments, continuously strive to learn, and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active by going to the gym and climbing, exploring new technologies, and playing music. I hope to hear from you!`;

export const EDUCATION = [
  {
    year: "2024 - Present",
    major: "Computer Science",
    school: "University of Connecticut",
    description: `Taking classes on Data Structures and Algorithms, and Python Development.`,
  },
  {
    year: "2022 - 2024",
    major: "Computer Science",
    school: "CT State Community College",
    description: `Took classes covering Java development, Discrete Mathematics, SQL, MongoDB, HTML, CSS, Tailwind, and JavaScript.`,
  },
];

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Web Development Intern",
    company: "University of Connecticut",
    description: `Currently involved in refactoring the backend architecture of high-traffic university websites that are viewed by thousands of users daily. My role includes implementing and optimizing APIs to enhance site performance and reliability.
`,
    technologies: ["Javascript", "APIs", "Wordpress", "HTML", "CSS"],
  },
  {
    year: "2024 - Present",
    role: "Co Founder",
    company: "CheckUP LLC",
    description: `Co-founded CheckUP LLC, an app enhancing employee-employer HR communication to monitor mental health and job satisfaction, built with Next.js, Tailwind, SQL, and Clerk.
`,
technologies: [
  "HTML",
  "CSS",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Clerk",
  "Stream",
  "Shadcn",
]
  },
];

export const PROJECTS = [
  {
    title: "CheckUP",
    image: project3,
    description:
      "An app that connects employees with their employers and HR to keep track of employees mental health and job satisfaction.",
    technologies: [
      "HTML",
      "CSS",
      "Next.js",
      "Tailwind",
      "SQL",
      "Clerk",
      "Docker",
      "APIs",
    ],

    github: "https://github.com/SaltworkStudios/checkupapp",

    link: "https://checkupapp.org",
  },
  {
    title: "Video Meeting App",
    image: project1,
    description:
      "A fully responsive Video Meeting application where you can create, join, and schedule video meetings. ",
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
      "An AI Article Summarizer that takes in an article and returns a summary using a Summarizer API coming from RapidAPI. ",
    technologies: ["HTML", "CSS", "React", "Vite", "Redux", "Tailwind", "APIs"],

    github: "https://github.com/Julian-Hart/summarize_ai",

    link: "https://summarizeai-julian-harts-projects.vercel.app/",
  },
];

export const CONTACT = {
  phoneNo: "+1 860-993-8031",
  email: "Julianja.hart@gmail.com",
};
