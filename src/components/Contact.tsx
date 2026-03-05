import { motion } from "motion/react";
import { useState } from "react";

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="contact" className="py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-6 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-300 mb-10 leading-relaxed">
          I'd love to hear from you. Whether you have a specific project in mind
          or just want to say hello, feel free to drop me a message!
        </p>

        <motion.a
          href="mailto:kavuri.siddardha@gmail.com"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: isHovered
              ? "0px 0px 20px 5px rgba(34, 211, 238, 0.4)"
              : [
                  "0px 0px 0px 0px rgba(34, 211, 238, 0)",
                  "0px 0px 20px 5px rgba(34, 211, 238, 0.4)",
                  "0px 0px 0px 0px rgba(34, 211, 238, 0)",
                ],
          }}
          transition={{
            boxShadow: {
              duration: isHovered ? 0 : 2,
              repeat: isHovered ? 0 : Infinity,
            },
          }}
          className="inline-block px-8 py-4 bg-transparent border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-colors"
        >
          Say Hello
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Contact;
