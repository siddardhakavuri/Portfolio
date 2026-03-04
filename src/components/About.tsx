import { motion } from "motion/react";

const About = () => {
  return (
    <section
      id="about"
      className="content-center h-[75vh] mb-[10vh] flex flex-col justify-center"
    >
      <div className="flex justify-center content-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="md:text-5xl text-3xl flex justify-center content-center font-bold mb-8 bg-linear-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent ">
            HEY, I'M SIDDARDHA KAVURI
          </h2>
          <div className="flex justify-center content-center">
            <p className="md:w-2/3 md:text-xl text-lg text-center flex flex-wrap  text-gray-300 leading-relaxed mb-6">
              Full Stack Web Developer specializing in building scalable,
              high-performance web applications.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
