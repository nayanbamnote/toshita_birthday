"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration,
        delay: stagger(0.2),
      }
    );
  }, [scope, animate, filter, duration]);

  return (
    <motion.div ref={scope} className={cn("inline-block", className)}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={idx}
          className="opacity-0 inline-block"
          style={{ filter: filter ? "blur(10px)" : "none" }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.div>
  );
};