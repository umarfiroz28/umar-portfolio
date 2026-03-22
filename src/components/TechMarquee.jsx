import { motion } from "framer-motion";

const TECHS = [
  "Java",
  "Spring Boot",
  "Microservices",
  "Apache Kafka",
  "Redis",
  "PostgreSQL",
  "Docker",
  "Kubernetes",
  "AWS",
  "React",
  "Next.js",
  "TypeScript",
  "REST APIs",
  "System Design",
  "CI/CD",
  "Terraform",
];

export default function TechMarquee() {
  const doubled = [...TECHS, ...TECHS];

  return (
    <div className="relative py-6 overflow-hidden border-y border-white/[0.04]">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />

      <motion.div
        animate={{ x: [0, -50 * TECHS.length] }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex items-center gap-8 whitespace-nowrap"
      >
        {doubled.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="text-sm text-neutral-600 font-light tracking-wide"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
