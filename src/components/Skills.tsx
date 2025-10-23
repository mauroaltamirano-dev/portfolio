import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import type { Skill } from "../types";

// Importar estilos de Swiper
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

interface SkillsProps {
  skills: Skill[];
}

const SkillCard: React.FC<{ skill: Skill; index: number }> = ({
  skill,
  index,
}) => {
  const renderIcon = () => {
    if (typeof skill.icon === "string") {
      // Si es una URL de imagen (fallback para compatibilidad)
      return (
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-8 h-8 object-contain"
          style={{ filter: `drop-shadow(0 0 8px ${skill.color}40)` }}
        />
      );
    } else {
      // Si es un componente de React Icon
      const IconComponent = skill.icon;
      return <IconComponent size={32} color={skill.color} />;
    }
  };

  return (
    <motion.div
      className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-gray-600 transition-all duration-300 h-32 flex flex-col items-center justify-center group"
      whileHover={{
        scale: 1.05,
        rotateY: 5,
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="mb-3 transition-transform duration-300 group-hover:scale-110">
        {renderIcon()}
      </div>
      <h3 className="text-sm font-medium text-gray-300 text-center group-hover:text-white transition-colors duration-300">
        {skill.name}
      </h3>
    </motion.div>
  );
};

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const categories = {
    languages: skills.filter((skill) => skill.category === "languages"),
    frameworks: skills.filter((skill) => skill.category === "frameworks"),
    libraries: skills.filter((skill) => skill.category === "libraries"),
    databases: skills.filter((skill) => skill.category === "databases"),
    tools: skills.filter((skill) => skill.category === "tools"),
    design: skills.filter((skill) => skill.category === "design"),
  };

  const categoryTitles = {
    languages: "Lenguajes",
    frameworks: "Frameworks",
    libraries: "Librerías",
    databases: "Bases de Datos",
    tools: "Herramientas",
    design: "Diseño",
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Tecnologías
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Herramientas y tecnologías organizadas por categorías
          </p>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={20}
            slidesPerView="auto"
            freeMode={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={3000}
            loop={true}
            className="!overflow-visible"
          >
            {[...skills, ...skills].map((skill, index) => (
              <SwiperSlide key={`${skill.name}-${index}`} className="!w-auto">
                <div className="w-40">
                  <SkillCard skill={skill} index={index} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <div className="grid gap-12">
          {Object.entries(categories).map(
            ([category, categorySkills]) =>
              categorySkills.length > 0 && (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-semibold text-gray-300 mb-6 text-center">
                    {categoryTitles[category as keyof typeof categoryTitles]}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {categorySkills.map((skill, index) => (
                      <SkillCard key={skill.name} skill={skill} index={index} />
                    ))}
                  </div>
                </motion.div>
              )
          )}
        </div>
      </div>
    </section>
  );
};
