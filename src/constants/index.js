export const ABOUT_TEXT = `Hello! My name is Julian, and I am a computer science student at the University of Connecticut, concentrating in Algorithms and Theory, with a strong focus on full stack web development and Python. My passion for technology began with a curiosity about how systems work and has grown into a commitment to building impactful, user-focused software. I thrive in collaborative environments, enjoy solving complex problems, and constantly seek opportunities to learn and innovate. Outside of coding, I stay active through the gym and climbing, exploring emerging technologies, and play music.`;

export const EDUCATION = [
  {
    year: "2024 – 2027",
    major: "B.S. in Computer Science, Concentration in Algorithms and Theory",
    school: "University of Connecticut",
    description:
      "Relevant Coursework: Data Structures, Algorithms and Complexity, Python Development, Systems Programming, Computer Architecture, Cybersecurity, Theory of Computation, Probability Models, AI, OOP, C++",
  },
  {
    year: "2022 – 2024",
    major: "Associate in Computer Science",
    school: "CT State Community College",
    description:
      "Graduated on the Dean's List. Relevant Coursework: Java, Discrete Math, SQL, MongoDB, HTML, CSS, Tailwind, JavaScript.",
  },
];

export const EXPERIENCES = [
  {
    year: "Jun 2026 – Present",
    role: "Software Engineering Intern",
    company: "The Walt Disney Company",
    description:
      "Managing APIs with Java and Spring Boot to power live and on-demand media distribution for Disney+, ESPN+, Hulu, and more — serving over 10 million active users. Engineering automated data pipelines via AWS (S3, ECS, Java Lambdas) to streamline content delivery between providers and consumers. Building a centralized observability dashboard in TypeScript to track real-time service uptime and backend health.",
    technologies: ["Java", "Spring Boot", "TypeScript", "AWS", "S3", "ECS", "Lambda"],
  },
  {
    year: "Jun 2025 – Dec 2025",
    role: "Software Engineering Intern",
    company: "IPC Systems",
    description:
      "Refactored legacy turret remoting system to use the WAMPD protocol, migrating the API layer from C++ to TypeScript within a Tauri architecture. Replaced screenshot-based monitoring with VNC integration, enabling interactive remote access and cutting latency by 60%. Implemented remote diagnostic command execution via WAMPD SSH with real-time frontend feedback.",
    technologies: ["TypeScript", "Vue", "Tauri", "WAMPD", "VNC", "C++"],
  },
  {
    year: "Sep 2024 – May 2026",
    role: "Web Development Intern",
    company: "University of Connecticut",
    description:
      "Designed and maintained backend architecture for university websites handling 1,000+ daily visitors. Engineered and optimized RESTful API endpoints, improving site speed and reliability. Automated Airtable data migration processes using Python, saving 5 hours of manual work weekly.",
    technologies: ["JavaScript", "Python", "REST APIs", "WordPress", "HTML", "CSS"],
  },
  {
    year: "Jun 2024 – May 2026",
    role: "Co-Founder / Front End Engineer",
    company: "CheckUP LLC",
    description:
      "Built core user-facing features for a mental health SaaS platform, integrating Clerk authentication and improving onboarding efficiency by 80%. Designed and developed responsive, accessible UIs with React and Tailwind CSS, meeting WCAG 2.1 standards across all devices.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind", "Clerk", "SQL"],
  },
];

export const PROJECTS = [
  {
    title: "Pneumonia Classifier",
    description:
      "A convolutional neural network (CNN) in PyTorch to detect pneumonia from chest X-ray images, deployed as a Flask API on Render.",
    technologies: ["Python", "PyTorch", "Flask", "Albumentations", "Pillow"],
    github: "https://github.com/Julian-Hart/Pneumonia-Classifier",
    link: "",
  },
  {
    title: "Encryption Library",
    description:
      "A modular encryption library in C implementing AES and RSA algorithms with efficient memory management and a CLI for file encryption/decryption.",
    technologies: ["C", "AES", "RSA", "Pointers", "Data Structures"],
    github: "",
    link: "",
  },
  {
    title: "CheckUP",
    description:
      "A mental health SaaS platform connecting employees with employers and HR for wellness tracking, with secure authentication and accessible design.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind", "SQL", "Clerk", "Docker"],
    link: "https://checkupapp.org",
  },
  {
    title: "Video Meeting App",
    description:
      "A scalable meeting app supporting up to 50 concurrent users with real-time communication, scheduling, and cross-platform compatibility.",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Clerk", "Stream", "Shadcn"],
    github: "https://github.com/Julian-Hart/Connect-Live",
    link: "https://connect-live-blush.vercel.app/",
  },
  {
    title: "AI Article Summarizer",
    description:
      "An AI-powered tool that takes in an article URL and returns a concise summary using a Summarizer API from RapidAPI.",
    technologies: ["React", "Redux", "Tailwind", "Vite", "APIs"],
    github: "https://github.com/Julian-Hart/summarize_ai",
    link: "https://summarizeai-julian-harts-projects.vercel.app/",
  },
];

export const CONTACT = {
  phoneNo: "+1 860-993-8031",
  email: "julianja.hart@gmail.com",
};
