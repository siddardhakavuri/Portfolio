import { motion } from "motion/react";

const experiences = [
  {
    role: "Software Engineer",
    company: "Kolla Soft Inc.",
    period: "2024 - Present",
    description:
      "Engineered end-to-end development cycles for healthcare systems, specializing in optimizing user workflows to ensure accurate validation of healthcare eligibility outcomes.",
  },
  {
    role: "Machine Learning Intern",
    company: "Cedar's Sinai Medical Center",
    period: "2024",
    description:
      "Implemented advanced machine learning models designed to analyze complex genetic variations, significantly enhancing the precision of associated health risk assessments.",
  },
  {
    role: "Information Technology Support Specialist",
    company: "California State University, Dominguez Hills",
    period: "2021 - 2024",
    description:
      "Spearheaded enterprise-wide infrastructure management and daily help desk operations, providing expert support to resolve 90% of hardware, software, and application malfunctions at the first point of contact",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-[10vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block">
          Experience
        </h2>

        <ul className="space-y-12 border-l border-gray-800 ml-3">
          {experiences.map((exp, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: index * 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-0 list-none"
            >
              <div className="absolute w-4 h-4 bg-cyan-400 rounded-full -left-2.25 top-1.5 border-4 border-black " />
              <div className="md:pl-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-2xl font-semibold text-white">
                    {exp.role}
                  </h3>
                  <span className="text-gray-300 font-mono text-sm">
                    {exp.period}
                  </span>
                </div>
                <h4 className="text-lg text-cyan-400 mb-4">{exp.company}</h4>
                <p className="text-gray-300 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default Experience;
