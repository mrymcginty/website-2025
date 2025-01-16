import { motion } from "motion/react";
import { FaLinkedin } from "react-icons/fa";

const variants = {
  visible: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3, // Stagger children by .3 seconds
    },
  },
  hidden: {
    transition: {
      when: "afterChildren",
    },
  },
};

const item = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 10 },
};

const Header = () => {
  return (
    <header className="header pt-20 pb-6">
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          variants={item}
          className="md:text-6xl text-4xl font-bold mb-1"
        >
          <span>Hello, I'm Mary</span>
        </motion.h2>
        <motion.h1 variants={item}>
          <span className="md:text-6xl text-4xl">
            a Software Engineer, based in Dublin{" "}
            <motion.span
              className="inline-block origin-[75%_75%] cursor-pointer"
              animate={{ rotate: [0, 30, 0] }}
              transition={{
                duration: 0.3,
                delay: 2,
                repeat: 3,
              }}
              whileHover={{
                rotate: [0, 30, 0],
                transition: {
                  duration: 0.3,
                  delay: 0,
                  repeat: Infinity,
                },
              }}
            >
              👋
            </motion.span>
          </span>
        </motion.h1>
        <motion.div variants={item}>
          <h3 className="mt-4 text-lg leading-snug">
            <span>
              I specialise in frontend technologies, with a focus on creating
              smart, accessible and beautiful interfaces.
            </span>
          </h3>
          <div className="mt-4">
            <a
              href="https://www.linkedin.com/in/mrymcginty/"
              className="inline-flex items-center space-x-2 rounded-md px-4 py-2 bg-blue text-white"
            >
              <FaLinkedin size={18} />
              <span>Connect</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;
