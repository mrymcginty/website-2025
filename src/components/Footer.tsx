import { useEffect } from "react";
import { motion, useScroll } from "motion/react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const encEmail = "bXJ5Lm1jZ2ludHlAZ21haWwuY29t";
    const form = document.getElementById("contact");
    if (form) {
      form.setAttribute("href", "mailto:".concat(atob(encEmail)));
    }
  }, []);

  return (
    <section>
      <h2 className="section-header">🧩 Get in touch</h2>
      <div className="grid gap-8 md:max-w-screen-lg">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ y: scrollYProgress }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4 },
          }}
          className="md:pl-12 pl-8"
        >
          <h3 className="text-2xl">
            Currently looking out for new opportunities
          </h3>

          <p className="my-4 space-x-2">
            <a
              id="contact"
              href=""
              className="inline-flex items-center space-x-2 rounded-md px-4 py-2 bg-orange text-white"
            >
              <MdEmail size={18} />
              <span>Email</span>
            </a>

            <a
              href="https://www.linkedin.com/in/mrymcginty/"
              className="inline-flex items-center space-x-2 rounded-md px-4 py-2 bg-blue text-white"
            >
              <FaLinkedin size={18} />
              <span>Connect</span>
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Footer;
