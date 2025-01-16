import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type ExperiencePanelProps = {
  company: string;
  position: string;
  date: string;
  icon: string;
  children: JSX.Element;
};

const ExperiencePanel = ({
  company,
  position,
  date,
  icon,
  children,
}: ExperiencePanelProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-1"
    >
      <div className="flex flex-row items-start">
        <h3 className="text-base md:text-xl">
          <motion.button
            onClick={() => {
              setIsVisible(!isVisible);
            }}
            whileTap={{ y: 1 }}
            whileHover={{ x: 2 }}
            whileFocus={{ x: 3 }}
            className="cursor-pointer bg-white rounded-xl px-3 py-1 text-left"
          >
            <span className="mr-2">{icon}</span>
            <span className="text-blue">{position}</span> / {company}
          </motion.button>
        </h3>
      </div>

      <div style={container}>
        <AnimatePresence initial={false}>
          {isVisible ? (
            <motion.div
              initial={{ opacity: 0, height: 0, overflow: "hidden" }}
              animate={{ opacity: 1, height: "auto", overflow: "hidden" }}
              exit={{ opacity: 0, height: 0 }}
              key="box"
            >
              <p className="text-xs pl-7 mt-2 mb-4">{date}</p>
              <div className="mb-16">{children}</div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const container: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  position: "relative",
};

export default ExperiencePanel;
