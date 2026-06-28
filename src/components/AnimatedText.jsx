import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Char({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [10, 0]);
  return <motion.span style={{ opacity, y }}>{children}</motion.span>;
}

export default function AnimatedText({ text, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const chars = text.split("");

  return (
    <p ref={ref} className={className}>
      {chars.map((char, i) => {
        const start = i / chars.length;
        const end = start + 1 / chars.length;
        return (
          <Char key={`${char}-${i}`} progress={scrollYProgress} range={[start, end]}>
            {char === " " ? "\u00A0" : char}
          </Char>
        );
      })}
    </p>
  );
}
