// ─── Personal Data ───────────────────────────────────────────────
// Edit these constants to update your portfolio content.

export const PERSONAL = {
  name: "Umar Firoz",
  headline: "Software Engineer — Java, Spring Boot, Microservices, AWS",
  tagline: "I Build Backend Systems",
  intro:
    "Software Engineer at IBM with 3+ years shipping Java microservices, event-driven architectures, and cloud-native platforms that serve 10,000+ enterprise users. I work across the full stack — Spring Boot and Kafka on the backend, React and Next.js on the frontend — and I've recently been building GenAI-powered developer tools. I like systems that are boring in production and interesting in design.",
  email: "iiuumar28@gmail.com",
  phone: "+91-8077038844",
  location: "Hyderabad, India",
  resumeUrl: "https://docs.google.com/document/d/1E7CpoL4rX9iemYW507L6Z0cXNcPJ8C_reEAA8NN3Rco/edit?usp=sharing",
  social: {
    linkedin: "https://linkedin.com/in/iumar28",
    github: "https://github.com/iumar28",
    codeforces: "https://codeforces.com/profile/iumar28",
    leetcode: "https://leetcode.com/iumar28",
  },
};

export const CREDENTIALS = [
  { label: "Experience", value: "3+ Years" },
  { label: "Current", value: "IBM India" },
  { label: "Scale", value: "10,000+ Users" },
  { label: "GATE Rank", value: "#346" },
  { label: "AWS", value: "Certified" },
];

export const ABOUT = {
  title: "About",
  paragraphs: [
    "I spend most of my time writing Java, thinking about system design, and trying to make distributed services behave. At IBM, I own backend microservices built on Spring Boot that handle authentication, authorization, and secure API communication for enterprise platforms used by thousands of people every day.",
    "The part of the job I enjoy most is the architecture side — figuring out how to make things fast (Redis, async processing, query tuning), reliable (Kafka for event-driven messaging), and easy to deploy (Docker, Kubernetes, Jenkins pipelines on AWS). I've also built full-stack features with React and Next.js when the team needed someone who could ship end-to-end.",
    "Before IBM, I was at a SaaS startup (Leadzen.ai) where I built backend services and a Chrome extension that shipped to production. On the side, I built AutoStack — a developer tool that generates and deploys full-stack apps automatically — and sold it to a US client. More recently, I've been working with OpenAI APIs to build GenAI-assisted developer workflows, because I think the engineers who learn to work with LLMs now will have a serious edge in the next few years.",
    "When I'm not building, I'm usually solving problems on LeetCode or Codeforces. Competitive programming taught me how to think under pressure, and that skill shows up every time I debug a production issue at 2 AM.",
  ],
};

export const SKILLS = [
  {
    category: "Backend & API Development",
    items: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "Hibernate / JPA",
      "JDBC",
      "REST APIs",
      "GraphQL (familiar)",
      "Node.js",
      "Python",
    ],
  },
  {
    category: "Frontend & UI",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML5 / CSS3",
      "Vue.js (familiar)",
    ],
  },
  {
    category: "Architecture & System Design",
    items: [
      "Microservices Architecture",
      "Distributed Systems",
      "Event-Driven Architecture",
      "System Design & HLD",
      "API Design & Versioning",
      "Design Patterns",
      "Domain-Driven Design (familiar)",
    ],
  },
  {
    category: "Data, Caching & Messaging",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Apache Kafka",
      "RabbitMQ",
    ],
  },
  {
    category: "Cloud, DevOps & Infrastructure",
    items: [
      "AWS (EC2, S3, Lambda, RDS, CloudWatch)",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Terraform",
      "GitHub Actions",
      "CI/CD Pipelines",
      "Infrastructure as Code",
      "Linux / Bash",
    ],
  },
  {
    category: "AI, GenAI & Developer Tooling",
    items: [
      "OpenAI APIs",
      "LLM Integration",
      "Prompt Engineering",
      "Agentic Workflows",
      "AI-Assisted Development",
      "GitHub Copilot",
    ],
  },
  {
    category: "Testing, Observability & Practices",
    items: [
      "JUnit",
      "Integration Testing",
      "Postman",
      "Prometheus",
      "Grafana",
      "SonarQube",
      "Distributed Tracing",
      "Jira",
      "Git",
      "Agile / Scrum",
    ],
  },
];

export const EXPERIENCE = [
  {
    role: "Software Engineer",
    company: "IBM India",
    location: "Hyderabad",
    period: "Dec 2023 — Present",
    type: "Enterprise",
    highlights: [
      "Own the backend for Java microservices built on Spring Boot and Spring Security that power authentication and authorization for 10,000+ enterprise users across distributed services.",
      "Designed and implemented RBAC, OAuth2, and JWT-based auth flows — handling secure token exchange, role hierarchies, and service-to-service trust across the microservices mesh.",
      "Cut API response times by reworking hot paths with Redis caching, rewriting slow SQL queries, and introducing async processing where synchronous calls were bottlenecking throughput.",
      "Built event-driven data pipelines using Apache Kafka to decouple tightly-bound services, improving reliability and making the system easier to scale and debug independently.",
      "Set up and maintain CI/CD pipelines with Jenkins, Docker, and Kubernetes — every merge to main triggers automated builds, tests, and containerized deployments to AWS.",
      "Shipped React and Next.js dashboard features when the frontend team needed extra hands — implemented code splitting, lazy loading, and API integration that improved page load times.",
      "Helped build out the team's observability stack with Prometheus and Grafana — set up dashboards, alerting rules, and SLO tracking that caught production issues before users noticed.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Kafka",
      "Redis",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "AWS",
      "Jenkins",
      "React",
      "Next.js",
      "Prometheus",
      "Grafana",
    ],
  },
  {
    role: "SDE I",
    company: "Leadzen.ai (Hexus — Interactive Demo SaaS)",
    location: "Remote",
    period: "Jan — Dec 2023",
    type: "SaaS Startup",
    highlights: [
      "Built backend services from scratch using Node.js, Express, and MongoDB — designed the API layer and data models for an interactive product demo platform used by SaaS sales teams.",
      "Developed a Chrome extension that captured real-time browser events and turned them into replayable interactive demos — this became a core feature of the product.",
      "Set up Docker-based CI/CD with GitHub Actions that automated testing, building, and deploying across staging and production environments, cutting manual release work significantly.",
      "Worked directly with the product and design teams in an Agile setup — scoping features, estimating effort, and shipping weekly without breaking things.",
    ],
    stack: [
      "Node.js",
      "Express",
      "MongoDB",
      "Docker",
      "GitHub Actions",
      "Chrome APIs",
      "REST APIs",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Glabbr Technologies (Knyo Cloud)",
    location: "Pune — Remote",
    period: "Oct 2021 — Apr 2022",
    type: "Startup",
    highlights: [
      "Built backend APIs for a product data management platform used by manufacturers in automotive and pharma — handling part details, supplier data, and design file versioning.",
      "Worked with Go, MongoDB, and AWS services (S3, CloudFront, API Gateway) to build microservices that needed to be fast, reliable, and cost-efficient at scale.",
    ],
    stack: ["Go", "MongoDB", "AWS", "Microservices", "REST APIs", "Postman"],
  },
];

export const PROJECTS = [
  {
    title: "AutoStack",
    subtitle: "Full-Stack Project Generation & Deployment Platform",
    description:
      "I built this because I was tired of spending two days setting up every new project. AutoStack lets you pick a tech stack, and it generates a production-ready full-stack app, pushes it to GitHub, builds a Docker image, and deploys it to AWS — all automatically. I ended up selling it to a US-based client who uses it for their internal team onboarding.",
    highlights: [
      "Spring Boot backend with React frontend — the whole thing eats its own cooking",
      "Terraform scripts handle AWS provisioning, so there's zero manual infra work",
      "Docker containerization is baked into the pipeline from day one",
      "Took manual project setup from ~2 days to under 10 minutes",
    ],
    stack: [
      "Spring Boot",
      "React",
      "Terraform",
      "AWS",
      "Docker",
      "JHipster",
      "GitHub API",
    ],
    period: "Aug — Dec 2024",
  },
  {
    title: "GenAI Developer Assistant",
    subtitle: "LLM-Powered Workflow Automation for Engineers",
    description:
      "A developer tool that uses OpenAI's APIs to handle the repetitive parts of engineering — generating boilerplate code, drafting documentation, summarizing issues, and suggesting test cases. I built this partly to learn how agentic AI workflows actually work in practice, and partly because I wanted to stop writing the same CRUD scaffolding every sprint.",
    highlights: [
      "Prompt-engineered agentic workflows that chain LLM calls for multi-step tasks",
      "Python backend with REST API layer that orchestrates model responses",
      "Plugged into existing dev workflows — not a standalone toy, but a real productivity tool",
    ],
    stack: [
      "Python",
      "OpenAI APIs",
      "REST APIs",
      "Prompt Engineering",
      "Agentic Workflows",
      "LLM Integration",
    ],
    period: "Jan — Apr 2024",
  },
  {
    title: "Knyo Cloud",
    subtitle: "Product Data Management for Manufacturers",
    description:
      "A platform that gives manufacturing teams — automotive, pharma, industrial — a single place to manage product data, supplier relationships, and design files across distributed engineering teams. Think of it as version control, but for physical products.",
    highlights: [
      "Microservices backend in Go with MongoDB for flexible document storage",
      "AWS infrastructure (S3, CloudFront, API Gateway) for globally distributed access",
      "Designed for high availability and fault tolerance from the start",
    ],
    stack: ["Go", "MongoDB", "AWS", "Microservices", "REST APIs"],
    period: "Oct 2021 — Apr 2022",
  },
];

export const ACHIEVEMENTS = [
  {
    title: "GATE 2022",
    detail: "All India Rank 346",
    description:
      "Ranked in the top 0.2% nationally in the Graduate Aptitude Test in Engineering (CS)",
  },
  {
    title: "CodeChef",
    detail: "Global Rank #321",
    description:
      "Competed against 200K+ programmers worldwide in algorithmic contests",
  },
  {
    title: "AWS Certified",
    detail: "Cloud Practitioner (CLF-C02)",
    description:
      "Validated cloud architecture and AWS services knowledge",
  },
  {
    title: "LeetCode",
    detail: "Rating 1600+",
    description:
      "Consistently rated in the top tier for data structures and algorithm problem solving",
  },
  {
    title: "Codeforces",
    detail: "Max Rating 1100",
    description:
      "Active competitive programmer solving algorithmic and graph-theory problems",
  },
];

export const CERTIFICATIONS = [
  {
    name: "AWS Cloud Practitioner (CLF-C02)",
    url: "https://drive.google.com/file/d/1PjLGOhn36KziOODfaP-Md7fpq8c8aMu4/view",
  },
  {
    name: "IBM Full Stack .NET Developer",
    url: "https://drive.google.com/file/d/1slzVTc3G1Nyb_L0rxmcUXRIzPs3kFRxe/view",
  },
  {
    name: "IBM z/OS Mainframe",
    url: null,
  },
];

export const EDUCATION = {
  degree: "B.Tech Computer Science Engineering",
  university: "IKG Punjab Technical University",
  cgpa: "8.10 CGPA",
  period: "2019 — 2023",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];