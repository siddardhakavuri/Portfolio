import { motion } from "motion/react";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Company",
    period: "20XX - Present",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tempora numquam illo doloremque voluptas quis debitis atque eos, veritatis aliquid, quae ab enim nam doloribus tenetur quasi minima adipisci aliquam?",
  },
  {
    role: "Software Engineer",
    company: "Company",
    period: "20XX - 20XX",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tempora numquam illo doloremque voluptas quis debitis atque eos, veritatis aliquid, quae ab enim nam doloribus tenetur quasi minima adipisci aliquam?",
  },
  {
    role: "Software Engineer",
    company: "Company",
    period: "20XX - 20XX",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tempora numquam illo doloremque voluptas quis debitis atque eos, veritatis aliquid, quae ab enim nam doloribus tenetur quasi minima adipisci aliquam?",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="p-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block">
          Experience
        </h2>

        <div className="space-y-12 border-l border-gray-800 ml-3">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-0"
            >
              <div className="absolute w-4 h-4 bg-cyan-400 rounded-full -left-2.25 top-1.5 border-4 border-black " />
              <div className="md:pl-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-2xl font-semibold text-white">
                    {exp.role}
                  </h3>
                  <span className="text-gray-400 font-mono text-sm">
                    {exp.period}
                  </span>
                </div>
                <h4 className="text-lg text-cyan-400 mb-4">{exp.company}</h4>
                <p className="text-gray-300 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
