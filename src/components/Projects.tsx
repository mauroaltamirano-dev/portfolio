import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import type { Project } from "../types";
import {
  getProjectImageUrl,
  generatePlaceholderGradient,
  getPlaceholderEmoji,
} from "../utils/imageUtils";

interface ProjectsProps {
  projects: Project[];
}

const ProjectCard: React.FC<{ project: Project; index: number }> = ({
  project,
  index,
}) => {
  return (
    <motion.div
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-gray-600 transition-all duration-300 group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden h-48">
        <motion.div
          className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10"
          whileHover={{ opacity: 1 }}
        >
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="text-white text-xl" />
            </motion.a>
          )}
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaExternalLinkAlt className="text-white text-xl" />
            </motion.a>
          )}
        </motion.div>

        {/* Project Image */}
        {project.image ? (
          <img
            src={getProjectImageUrl(project.image)}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              // Fallback si la imagen no carga
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              target.nextElementSibling?.classList.remove("hidden");
            }}
          />
        ) : null}

        {/* Fallback placeholder con gradiente personalizado */}
        <div
          className={`w-full h-full flex items-center justify-center ${
            project.image ? "hidden" : ""
          }`}
          style={generatePlaceholderGradient(project.title)}
        >
          <div className="text-6xl opacity-80">
            {getPlaceholderEmoji(index)}
          </div>
        </div>

        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-semibold rounded-full">
              Destacado
            </span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-gray-400 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600/50"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaGithub />
              <span className="text-sm">Código</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <FaExternalLinkAlt />
              <span className="text-sm">Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -200, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ bottom: "20%", right: "10%" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Proyectos Destacados
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Una selección de mis trabajos más recientes y significativos
          </p>
        </motion.div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <motion.h3
              className="text-2xl font-semibold text-gray-300 mb-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Otros Proyectos
            </motion.h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index + featuredProjects.length}
                />
              ))}
            </div>
          </>
        )}

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/mauroaltamirano-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub />
            Ver más en GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
