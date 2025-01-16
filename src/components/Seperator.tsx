"use client";

import { motion, useScroll, useSpring } from "motion/react";

export default function ScrollLinked() {
  const { scrollYProgress } = useScroll();

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="">
      <motion.div className="scroll-progress" style={{ scaleY }} />
    </div>
  );
}
