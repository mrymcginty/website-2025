import { motion, MotionValue, useScroll, useTransform } from "motion/react";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const Tick = () => {
  const { scrollYProgress } = useScroll();
  const y = useParallax(scrollYProgress, 100);

  return (
    <section>
      <h2 className="section-header">👎 My Icks...</h2>
      <div className="grid gap-8 md:max-w-screen-lg md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ y: scrollYProgress }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4 },
          }}
        >
          <h3>In the office</h3>
          <ul className="custom-list custom-list--ticks">
            <li>👯 Console warnings.</li>
            <li>👯 Outdated dependencies.</li>
            <li>👯 Meetings that could have been emails.</li>
            <li>👯 5 days in office - I'm more productive in my own office.</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ visibility: "hidden" }}
          animate={{ visibility: "visible" }}
          style={{ y }}
        >
          <div>
            <h3>Outside of the office</h3>
            <ul className="custom-list">
              <li>📚 Playing audio on the bus without headphones.</li>
              <li>📚 Spicy food - I believe eating shouldn't hurt.</li>
              <li>☕️ Slow walkers.</li>
              <li>🧶 Noisy eaters.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tick;
