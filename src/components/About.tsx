import { motion } from "motion/react";

const About = () => {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className=""
      >
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent inline-block">
          About Me
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed mb-6">
          Hello! I'm a passionate software engineer dedicated to building
          exceptional digital experiences. I specialize in full-stack
          development with a keen eye for design and performance.
        </p>
        <p className="text-xl text-gray-300 leading-relaxed">
          My journey in tech has been driven by a constant curiosity and a
          desire to solve complex problems with elegant solutions. When I'm not
          coding, you can find me exploring new technologies or contributing to
          open source.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
