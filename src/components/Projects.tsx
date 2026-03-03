import { motion } from "motion/react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with payment integration and real-time inventory.",
    tags: ["React", "Node.js", "Stripe"],
    link: "#",
  },
  {
    title: "AI Chat Assistant",
    description:
      "An intelligent chatbot capable of natural conversations and task automation.",
    tags: ["Next.js", "OpenAI", "Tailwind"],
    link: "#",
  },
  {
    title: "Portfolio Generator",
    description:
      "A tool helping developers create stunning portfolios in minutes.",
    tags: ["TypeScript", "Vite", "Framer Motion"],
    link: "#",
  },
  {
    title: "Task Management App",
    description: "A collaborative project management tool for remote teams.",
    tags: ["React", "Firebase", "Redux"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.a
              href={"#projects"}
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5, transition: { duration: 0.1 } }}
              transition={{ duration: 0.2 }}
              viewport={{ once: true }}
              className="group block p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
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
