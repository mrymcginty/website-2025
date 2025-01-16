import { motion, MotionValue, useScroll, useTransform } from "motion/react";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const Tick = () => {
  const { scrollYProgress } = useScroll();
  const y = useParallax(scrollYProgress, 100);

  return (
    <section>
      <h2 className="section-header">⛵️ What floats my boat...</h2>
      <div className="grid gap-8 md:max-w-screen-lg md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ y: scrollYProgress }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4 },
          }}
          className="md:pl-6 pl-2"
        >
          <h3 className="text-2xl ml-6">In the office</h3>
          <ul className="custom-list custom-list--ticks">
            <li>👯 Working with smart people.</li>
            <li>🐝 The buzz of solving a problem.</li>
            <li>👩‍🎓 Always something new to learn.</li>
            <li>
              ✅ Being organised, I love spreadsheets, lists and ticking boxes.
            </li>
            <li>📈 Evenly dispersed Jira boards and a clean burnup chart.</li>
            <li>💬 Neat well commented PRs.</li>
            <li>
              🧹 Leaving a block of code in a better state than I found it.
            </li>
            <li>🧈 Buttery smooth CI/CD pipelines.</li>
            <li>
              🧑‍🎨 Being given a great design that I'm excited to implement.
            </li>
            <li>
              🤾‍♀️ Opportunities to include playful micro interactions and
              animations.
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ visibility: "hidden" }}
          animate={{ visibility: "visible" }}
          style={{ y }}
          className="md:pl-6"
        >
          <div>
            <h3 className="text-2xl ml-6">Outside of the office</h3>
            <ul className="custom-list">
              <li>
                ☕️ Good coffee and food, I love to keep an eye on the new
                foodie spots around the city.
              </li>
              <li>
                🧶 All things crafty. I have been known to make my own clothes,
                and have my own artwork on the wall.
              </li>
              <li>📚 Reading fiction.</li>
              <li>🍰 Baking, I make a mean brownie.</li>
              <li>
                🥾 Amateur and irregular hiker. But love being in the woods.
              </li>
              <li>💯 I'm in a Table Quiz WhatsApp group.</li>
              <li>
                🖼️ Love visits to IMMA, The National Gallery and The Hugh Lane
                Gallery.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tick;
