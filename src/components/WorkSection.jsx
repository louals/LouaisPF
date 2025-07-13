import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiStripe,
  SiCloudflare,
  SiScikitlearn,
  SiPandas,
  SiStreamlit,
  SiDocker,
  SiFlask,
  SiMysql,
  SiRaspberrypi,
  SiOpencv,
  SiSqlite,
  SiNumpy,
  SiScipy,
  SiAppwrite,
} from "react-icons/si";
import { FaMicrochip } from "react-icons/fa";
import { MdDevicesOther } from "react-icons/md";
import { FaPython } from "react-icons/fa";
import { useLanguage } from "../Contexts/languageContext";
import { workContent } from "../contents/work";
import ReactPrj from "../assets/ReactPrj.png";
import ReactLive from "/demo/reactcommerce.mp4"
import mlapp from "../assets/cbirapplication.png"
import socialmedia from "../assets/socialmedia.png"
import snap from "/demo/socialmedia.mp4"
import cbir from "/demo/cbirapp.mp4"
import { useState } from "react";

const techIcons = {
  React: <SiReact className="text-cyan-400" />,
  "Next.js": <SiNextdotjs className="text-white" />,
  TypeScript: <SiTypescript className="text-blue-500" />,
  "Tailwind CSS": <SiTailwindcss className="text-blue-400" />,
  "Node.js": <SiNodedotjs className="text-green-500" />,
  Python: <SiPython className="text-blue-400" />,
  Flask: <SiFlask className="text-gray-200" />,
  Tkinter: <FaPython className="text-yellow-400" />,
  MongoDB: <SiMongodb className="text-green-400" />,
  PostgreSQL: <SiPostgresql className="text-blue-300" />,
  MySQL: <SiMysql className="text-blue-500" />,
  GraphQL: <SiGraphql className="text-pink-500" />,
  Stripe: <SiStripe className="text-purple-400" />,
  Cloudflare: <SiCloudflare className="text-orange-500" />,
  "Scikit-learn": <SiScikitlearn className="text-orange-400" />,
  Pandas: <SiPandas className="text-emerald-500" />,
  Streamlit: <SiStreamlit className="text-red-400" />,
  Docker: <SiDocker className="text-blue-400" />,
  "Raspberry Pi": <SiRaspberrypi className="text-rose-500" />,
  GPIO: <FaMicrochip className="text-yellow-300" />,
  Hardware: <FaMicrochip className="text-gray-300" />,
  IoT: <MdDevicesOther className="text-violet-400" />,
  OpenCv: <SiOpencv className="text-[#5C3EE8]" />,
    Sqlite: <SiSqlite className="text-[#003B57]" />,
  Numpy: <SiNumpy className="text-[#013243]" />,
  Scipy: <SiScipy className="text-blue-900" />,
    AppWrite: <SiAppwrite className="text-[#000000]"/>,
};

const WorkSection = () => {
  const { language } = useLanguage();
  const content = workContent[language];
  const [activeVideo, setActiveVideo] = useState(null);

  const projects = [
    {
      ...content.projects[5],
      github: "https://github.com/louals/React_SocialMedia",
      live: snap,
      image: socialmedia,
    },
    {
      ...content.projects[3],
      github: "https://github.com/louals/mlapp",
      live: cbir,
      image: mlapp,
    },
    {
      ...content.projects[0],
      github: "https://github.com/louals/Ecommerce-React-Node.js",
      live: ReactLive,
      image: ReactPrj,
    },
  ];

  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setActiveVideo(null);
    }
  };

  return (
    <section id="projects" className="py-10 md:py-12 lg:py-20 xl:py-24 2xl:py-28 2xl:mb-28 2xl:mt-5 px-4 sm:px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 2xl:mt-5">
            {content.title} <span className="text-purple-400">{content.highlightedTitle}</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">{content.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700"
            >
              <div className="h-52 overflow-hidden bg-gray-700">
                <img src={project.image} alt={project.title} className="w-full h-full object-fill transition-transform duration-500 hover:scale-110" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="flex items-center gap-1 px-2.5 py-1 text-xs rounded-full bg-gray-700 text-gray-200">
                      {techIcons[tag]} {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gray-700 hover:bg-gray-600 text-white transition-colors text-sm"
                  >
                    <FiGithub size={14} /> Code
                  </a>
                  <button
                    onClick={() => setActiveVideo(project.live)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-purple-600 hover:bg-purple-500 text-white transition-colors text-sm"
                  >
                    <FiExternalLink size={14} /> Live Demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {activeVideo && (
          <div 
            onClick={closeModal}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <div className="relative w-full max-w-4xl">
              <button 
                onClick={() => setActiveVideo(null)} 
                className="bg-transparent border-none absolute -top-20 right-0 text-white text-3xl hover:text-red-400 z-10"
              >
                &times;
              </button>
              <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-2xl">
                <video 
                  src={activeVideo} 
                  controls 
                  autoPlay 
                  className="w-full"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-10 md:mt-12"
        >
          <a
            href="https://github.com/louals"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 border border-purple-400 text-purple-400 rounded-md font-medium hover:bg-purple-900/30 transition-colors text-sm sm:text-base"
          >
            {content.viewAll}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;