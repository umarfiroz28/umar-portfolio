import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Char({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [10, 0]);
  return (
    <motion.span className="inline-block" style={{ opacity, y }}>
      {children}
    </motion.span>
  );
}

export default function AnimatedText({ text, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const tokenData = text.split(/(\s+)/).reduce(
    ({ items, count }, word, wordIndex) => {
      if (/^\s+$/.test(word)) {
        return {
          items: [...items, { type: "space", key: `space-${wordIndex}` }],
          count,
        };
      }

      const chars = word.split("").map((char, charIndex) => ({
        char,
        index: count + charIndex,
      }));

      return {
        items: [
          ...items,
          { type: "word", key: `${word}-${wordIndex}`, chars },
        ],
        count: count + chars.length,
      };
    },
    { items: [], count: 0 }
  );

  const animatedCharCount = tokenData.count || 1;

  return (
    <p ref={ref} className={`max-w-full break-words ${className}`}>
      {tokenData.items.map((item) => {
        if (item.type === "space") {
          return <span key={item.key}> </span>;
        }

        return (
          <span key={item.key} className="inline-block max-w-full align-baseline">
            {item.chars.map(({ char, index }) => {
              const start = index / animatedCharCount;
              const end = start + 1 / animatedCharCount;

              return (
                <Char
                  key={`${char}-${index}`}
                  progress={scrollYProgress}
                  range={[start, end]}
                >
                  {char}
                </Char>
              );
            })}
          </span>
        );
      })}
    </p>
  );
}
