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
        <h2 className="text-4xl font-bold mb-8 bg-linear-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent inline-block">
          About Me
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse totam
          laborum sequi beatae voluptas expedita, obcaecati ex odit. A, optio.
          Alias soluta perferendis aspernatur cum cumque minima sapiente illum
          labore.
        </p>
        <p className="text-xl text-gray-300 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse totam
          laborum sequi beatae voluptas expedita, obcaecati ex odit. A, optio.
          Alias soluta perferendis aspernatur cum cumque minima sapiente illum
          labore.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
