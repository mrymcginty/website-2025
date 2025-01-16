"use client";

import { motion } from "motion/react";

export default function Seperator({ delay = 0 }: { delay?: number }) {
  const transition = {
    duration: 2,
    delay: delay,
    ease: "easeInOut",
  };
  const animateIn = {
    pathLength: 1,
    pathOffset: 0,
  };

  return (
    <section className="py-0">
      <motion.svg
        width="5"
        viewBox="0 0 1 100"
        version="1.1"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.line
          strokeDasharray="10"
          x1="0"
          y1="0"
          x2="0"
          y2="500"
          initial={{ pathLength: 0, pathOffset: 0 }}
          whileInView={animateIn}
          transition={transition}
          stroke="red"
          viewport={{ once: true }}
        ></motion.line>
        <line
          strokeDasharray="1"
          x1="0"
          y1="0"
          x2="0"
          y2="500"
          stroke="#f5f5f5" //zinc
        ></line>
      </motion.svg>
    </section>
  );
}
