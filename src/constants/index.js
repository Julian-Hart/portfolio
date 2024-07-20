import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";

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
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
];

export const PROJECTS = [
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
      "shadcn",
    ],
    github: "https://github.com/Julian-Hart/Connect-Live",
    link: "https://connect-live-blush.vercel.app/",
  },
  {
    title: "AI Article Summarizer",
    image: project2,
    description:
      "An AI Article Summarizer that takes in an article and returns a summary using a Summarizq API coming from RapidAPI. ",
    technologies: ["HTML", "CSS", "React", "Vite", "Redux", "Tailwind", "API"],

    github: "https://github.com/Julian-Hart/summarize_ai",

    link: "https://summarizeai-julian-harts-projects.vercel.app/",
  },
];

export const CONTACT = {
  phoneNo: "+1 860-993-8031",
  email: "Julianja.hart@gmail.com",
};
