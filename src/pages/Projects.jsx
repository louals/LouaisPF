import { useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { workContent } from "../contents/work";
import { useLanguage } from "../Contexts/languageContext";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiStripe,
  SiCloudflare,
  SiTailwindcss,
  SiStreamlit,
  SiPython,
  SiScikitlearn,
  SiPandas,
  SiFlask,
  SiMysql,
  SiRaspberrypi,
  SiTypescript,
  SiNextdotjs,
  SiOpencv,
  SiKotlin,
  SiFirebase,
  SiXml,
  SiSqlite,
  SiNumpy,
  SiScipy,
  SiAndroidstudio,
} from "react-icons/si";
import { FaMicrochip } from "react-icons/fa";
import { MdDevicesOther } from "react-icons/md";
import { TbApi } from "react-icons/tb";
import { useState } from "react";

const techIcons = {
  React: <SiReact className="text-cyan-400" />,
  "Node.js": <SiNodedotjs className="text-green-500" />,
  MongoDB: <SiMongodb className="text-green-400" />,
  Stripe: <SiStripe className="text-purple-400" />,
  Cloudflare: <SiCloudflare className="text-orange-500" />,
  "Tailwind CSS": <SiTailwindcss className="text-blue-400" />,
  Python: <SiPython className="text-blue-400" />,
  "Scikit-learn": <SiScikitlearn className="text-orange-400" />,
  Pandas: <SiPandas className="text-emerald-500" />,
  Streamlit: <SiStreamlit className="text-red-400" />,
  Flask: <SiFlask className="text-gray-200" />,
  MySQL: <SiMysql className="text-blue-500" />,
  "Raspberry Pi": <SiRaspberrypi className="text-rose-500" />,
  GPIO: <FaMicrochip className="text-yellow-300" />,
  Hardware: <FaMicrochip className="text-gray-300" />,
  IoT: <MdDevicesOther className="text-violet-400" />,
  TypeScript: <SiTypescript className="text-blue-500" />,
  "Next.js": <SiNextdotjs className="text-white" />,
  "REST API": <TbApi className="text-green-400" />,
  OpenCv: <SiOpencv className="text-[#5C3EE8]" />,
  Sqlite: <SiSqlite className="text-[#003B57]" />,
  Numpy: <SiNumpy className="text-[#013243]" />,
  Scipy: <SiScipy className="text-blue-900" />,
  Kotlin: <SiKotlin className="text-[#A97BFF]" />,
  Firebase: <SiFirebase className="text-yellow-400" />,
  XML: <SiXml className="text-orange-600" />,
  AndroidStudio: <SiAndroidstudio className="text-green-600" />,
};

const Projects = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { projects, highlightedTitle, subtitle, linkLabels } =
    workContent[language];
  const [hoveredProject, setHoveredProject] = useState(null);
  const categories = ["All", "Web", "AI/ML", "IoT", "Mobile", "Full Stack"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) =>
          project.categories?.includes(activeCategory)
        );

  return (
    <div className="text-white px-4 sm:px-6 py-8 bg-gradient-to-br from-gray-950 to-gray-900">
      <div className="mx-auto">
        <button
          onClick={() => navigate("/")}
          className="flex items-center group text-sm text-gray-400 hover:text-white mb-8 transition-all duration-300"
        >
          <motion.div
            whileHover={{ x: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center"
          >
            <ArrowLeft
              className="mr-2 group-hover:-translate-x-1 transition-transform"
              size={18}
            />
            Back to Home
          </motion.div>
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            {highlightedTitle} 
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            {subtitle} 
          </p>
          
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <AnimatePresence>
          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12"
            >
              <p className="text-gray-400">
                No projects found in this category.
              </p>
            </motion.div>
          ) : (
            <div className="w-full h-full grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id || index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="relative bg-gray-800/50 border border-gray-700/50 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="h-60 sm:h-48 md:h-[200px] lg:h-[310px] xl:h-[310px] bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-fill"
                      />
                    ) : (
                      <div className="text-4xl text-gray-500 opacity-30">
                        {project.emoji || "🚀"}
                      </div>
                    )}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="p-6 relative z-10">
                    <div className="flex justify-between items-start mb-3">
                      <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </h2>
                      <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded-full">
                        {project.year || "2023"}
                      </span>
                    </div>

                    <p className="text-gray-300 text-sm mb-5 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-1 text-xs bg-gray-700/80 hover:bg-gray-600/80 px-3 py-1 rounded-full transition-all backdrop-blur-sm"
                        >
                          {techIcons[tag] || null}
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center z-10 relative">
                      <div className="flex gap-4">
                        {project.links.code && (
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.links.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 text-sm"
                            title="View Code"
                          >
                            <Github size={16} />
                            <span className="hidden sm:inline">
                              {linkLabels.github}
                            </span>
                          </motion.a>
                        )}
                        {project.links.demo && (
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 text-sm"
                            title="Live Demo"
                          >
                            <ExternalLink size={16} />
                            <span className="hidden sm:inline">
                              {linkLabels.demo} Live Demo
                            </span>
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
