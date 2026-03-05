import { motion } from "motion/react";

const projects = [
  {
    title: "Neural Mapping of Gene-Sequence Risk Factors",
    description:
      "Deep learning framework designed to predict the likelihood of cancer by analyzing the complex, non-linear associations between specific gene sequences.",
    tags: [
      "Neural Networks",
      "Python",
      "TensorFlow",
      "Scikit-learn",
      "Pandas",
      "Numpy",
    ],
    link: "https://github.com/siddardhakavuri/Modelling-Associations",
  },
  {
    title: "Portfolio Website",
    description:
      "A high-performance showcase built with type-safe, component-driven architecture and hardware-accelerated animations and page transitions.",
    tags: [
      "TypeScript",
      "Tailwind",
      "Framer Motion",
      "React",
      "Vite",
      "Cloudflare",
    ],
    link: "https://github.com/siddardhakavuri/Portfolio",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-[10vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5, transition: { duration: 0.1 } }}
              transition={{ duration: 0.2 }}
              viewport={{ once: true }}
              className="group block p-8 rounded-2xl bg-white/7 border border-white/15 hover:bg-white/12 transition-colors"
            >
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors min-h-16 flex items-center">
                {project.title}
              </h3>
              <p className="text-gray-400 my-10 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs font-medium text-cyan-400 bg-cyan-400/10 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
