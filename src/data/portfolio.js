export const PERSONAL = {
  name: "Umar Firoz",
  headline: "Full-Stack Software Engineer - Java, React.js & Golang | AWS",
  currentRole: "Software Development Engineer at IBM India",
  heroFirstName: "umar",
  heroTagline:
    "frontend-first software engineer building precise interfaces and scalable product systems",
  aboutPitch:
    "I design interfaces people can trust and engineer the backend systems that keep them fast. My work combines React, Java, Golang, AWS, and production discipline across products serving 10,000+ users.",
  intro:
    "Full-stack Software Engineer with 3.5 years building secure, scalable systems end to end - from React.js interfaces to Java Spring Boot microservices to AWS infrastructure. I've built systems serving 10,000+ enterprise users, cut API latency by 40%, and improved p95 response time by roughly 30%.",
  email: "iiuumar28@gmail.com",
  formEmail: "umar9897222@gmail.com",
  phone: "+91-8077038844",
  location: "Hyderabad, Telangana",
  resumeUrl:
    "https://docs.google.com/document/d/1E7CpoL4rX9iemYW507L6Z0cXNcPJ8C_reEAA8NN3Rco/edit?usp=sharing",
  portfolio: "https://umar-portfolio-woad.vercel.app",
  social: {
    linkedin: "https://linkedin.com/in/iumar28",
    github: "https://github.com/iumar28",
    codeforces: "https://codeforces.com/profile/iumar28",
    leetcode: "https://leetcode.com/iumar28",
  },
};

export const CREDENTIALS = [
  { label: "Experience", value: "3.5 Years" },
  { label: "Current", value: "IBM India" },
  { label: "Scale", value: "10,000+ Users" },
  { label: "LeetCode", value: "Knight 1897+" },
  { label: "GATE", value: "AIR 346" },
];

export const HERO_BADGES = [
  {
    label: "LeetCode Knight",
    value: "1897+",
    tone: "#F59E0B",
    position: "left-[4%] top-[24%] md:left-[10%] md:top-[34%]",
  },
  {
    label: "Java Backend",
    value: "Spring Boot",
    tone: "#2563EB",
    position: "right-[5%] top-[28%] md:right-[9%] md:top-[32%]",
  },
  {
    label: "Frontend",
    value: "React + 3D",
    tone: "#14B8A6",
    position: "left-[7%] bottom-[26%] md:left-[13%] md:bottom-[26%]",
  },
  {
    label: "Golang",
    value: "Microservices",
    tone: "#16A34A",
    position: "right-[6%] bottom-[25%] md:right-[13%] md:bottom-[28%]",
  },
];

export const CORE_HIGHLIGHTS = [
  {
    title: "LeetCode Knight",
    detail: "1897+ rating",
    copy: "Algorithmic problem solving, 1,200+ solved problems, and contest discipline that transfers directly into debugging complex systems.",
  },
  {
    title: "Java Backend",
    detail: "Spring Boot + Microservices",
    copy: "Secure backend services with Spring Security, OAuth2, JWT, RBAC, Hibernate/JPA, Redis, Kafka, and SQL optimization.",
  },
  {
    title: "Frontend Development",
    detail: "React + TypeScript + Motion",
    copy: "Responsive React interfaces, operational dashboards, reusable components, form validation, and animated 3D frontend experiences.",
  },
  {
    title: "Golang",
    detail: "Distributed APIs",
    copy: "Go microservices, MongoDB-backed APIs, retry logic, schema validation, and fault-tolerant integration patterns on AWS.",
  },
];

export const ABOUT = {
  title: "About me",
  paragraph:
    "I am a frontend-first full-stack Software Engineer at IBM India. I build clean React interfaces, secure Java Spring Boot services, and Golang microservices with a strong eye for performance, system design, and trust. My work has supported 10,000+ enterprise users, reduced API latency by 40%, improved p95 response time by roughly 30%, and is backed by LeetCode Knight problem-solving discipline.",
};

export const SERVICES = [
  {
    title: "3D Frontend Experiences",
    description:
      "Interactive React interfaces with motion, depth, reusable UI systems, responsive layouts, validation, and production-grade REST API integration.",
  },
  {
    title: "Full-Stack Product Engineering",
    description:
      "End-to-end feature delivery with React.js, TypeScript, Java Spring Boot, secure auth, SQL databases, and component-based architecture.",
  },
  {
    title: "Backend & Microservices",
    description:
      "Scalable Java and Golang services with Kafka, Redis, OAuth2, JWT, RBAC, retry logic, circuit breakers, and fault-tolerant workflows.",
  },
  {
    title: "Cloud & DevOps on AWS",
    description:
      "Cloud-native deployment with AWS, Docker, Kubernetes, Terraform, Jenkins, GitHub Actions, Linux, and practical CI/CD pipelines.",
  },
  {
    title: "GenAI Product Workflows",
    description:
      "RAG pipelines, LangChain classifiers, LLM API integrations, prompt engineering, and AI-assisted tooling wired into real backend workflows.",
  },
];

export const PROJECTS = [
  {
    title: "AutoStack",
    category: "Full-Stack Platform",
    description:
      "A Spring Boot and React.js platform that generates project scaffolding, REST API structures, Dockerfiles, and CI/CD pipelines using prompt-engineered LLM workflows.",
    result: "Setup time from days to under 15 minutes",
    period: "Aug 2024 - Dec 2024",
    stack: ["Spring Boot", "React", "AWS", "Terraform", "Docker", "LLM"],
    url: PERSONAL.social.github,
    colors: ["#00D9FF", "#B600A8", "#BE4C00"],
  },
  {
    title: "Knyo Cloud",
    category: "Golang SaaS",
    description:
      "Golang and MongoDB microservices on AWS for distributed product data management across automotive and pharmaceutical domains.",
    result: "Fault-tolerant APIs built for horizontal scale",
    period: "Oct 2021 - Apr 2022",
    stack: ["Go", "MongoDB", "AWS", "Microservices", "REST APIs"],
    url: PERSONAL.social.github,
    colors: ["#B8F7D4", "#49B6FF", "#BBCCD7"],
  },
  {
    title: "GenAI Developer Assistant",
    category: "AI Engineering",
    description:
      "A Python and FastAPI productivity tool using multi-step LLM workflows and a RAG layer over internal codebases for code review, debugging, and documentation.",
    result: "Context-aware engineering automation",
    period: "2024",
    stack: ["Python", "FastAPI", "RAG", "LangChain", "LLM APIs"],
    url: PERSONAL.social.github,
    colors: ["#FFD166", "#B600A8", "#00D9FF"],
  },
];

export const TECHS = [
  "LeetCode Knight",
  "Java Backend",
  "Frontend Development",
  "Golang",
  "React.js",
  "TypeScript",
  "Framer Motion",
  "Three.js",
  "Tailwind CSS",
  "Java",
  "Spring Boot",
  "Golang",
  "Python",
  "AWS",
  "Kafka",
  "Redis",
  "PostgreSQL",
  "Docker",
  "Kubernetes",
  "Terraform",
  "LangChain",
  "RAG",
];

export const ACHIEVEMENTS = [
  "GATE 2022 CS/IT Rank 346",
  "LeetCode Knight, 1897+ rating",
  "CodeChef Global Rank #321",
  "Codeforces Rating 1100",
  "1,200+ problems solved",
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
