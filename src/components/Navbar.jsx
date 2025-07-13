import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiGithub,
  FiLinkedin,
  FiGlobe,
  FiDownload,
} from "react-icons/fi";
import { SiTypescript, SiReact, SiNodedotjs } from "react-icons/si";
import logo from "../assets/mylogo.png";
import { useLanguage } from "../Contexts/languageContext";
import { navbarContent } from "../contents/navbar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { language, toggleLanguage } = useLanguage();

  const content = navbarContent[language];
  const { cv } = content;
  const techStack = [
    { icon: <SiTypescript className="text-blue-500" />, name: "TypeScript" },
    { icon: <SiReact className="text-cyan-400" />, name: "React" },
    { icon: <SiNodedotjs className="text-green-500" />, name: "Node.js" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = ["home", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
      setIsOpen(false);
    }
  };

  const navVariants = {
    hidden: { y: -100 },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      } border-b border-gray-800`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-center space-x-4"
          >
            <motion.img
              onClick={() => scrollToSection("home")}
              src={logo}
              alt="Your Logo"
              className="w-20 h-20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.5, ease: "easeOut" },
              }}
              whileHover={{
                rotate: 15,
                scale: 1.1,
                transition: { type: "spring", stiffness: 300, damping: 10 },
              }}
              whileTap={{ scale: 0.95, rotate: -5 }}
            />
          </motion.div>

          {/* Center navigation */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-1 bg-gray-800/50 rounded-full p-1 shadow-inner">
              {content.links.map((link) => {
                const sectionId = link.path.replace("#", "");
                return (
                  <motion.div
                    key={link.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button
                      onClick={() => scrollToSection(sectionId)}
                      className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                        activeSection === sectionId
                          ? "bg-gray-700 shadow-sm text-purple-400"
                          : "text-gray-300 hover:bg-gray-700/50"
                      }`}
                    >
                      {link.name}
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            {/* CV/Resume Download Button - Desktop */}
            <motion.a
              href={cv.path}
              download={cv.fileName}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-full  text-sm font-medium text-white shadow-md"
            >
              <FiDownload className="w-4 h-4" />
              <span>{cv.buttonText}</span>
            </motion.a>

            <motion.a
              href="https://github.com/louals"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="p-2 text-gray-300 hover:text-purple-400"
            >
              <FiGithub className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/louai-a-8b239b2a0/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="p-2 text-gray-300 hover:text-blue-400"
            >
              <FiLinkedin className="w-5 h-5" />
            </motion.a>

            <div className="hidden md:block h-6 w-px bg-gray-600"></div>

            <motion.button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-1 rounded-full bg-gray-800 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGlobe className="text-gray-300" />
              <span className="font-medium text-gray-200">
                {content.languageButton}
              </span>
            </motion.button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-full bg-gray-800"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-4 pt-2 pb-8 space-y-4 bg-gray-900 shadow-lg">
              {content.links.map((link) => {
                const sectionId = link.path.replace("#", "");
                return (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(sectionId)}
                    className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium ${
                      activeSection === sectionId
                        ? "bg-purple-900/50 text-purple-400"
                        : "text-gray-300 hover:bg-gray-800"
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}

              {/* CV/Resume Download Button - Mobile */}
              <motion.a
                href={cv.path}
                download={cv.fileName}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center space-x-2 w-full px-4 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-sm font-medium text-white shadow-md"
              >
                <FiDownload className="w-4 h-4" />
                <span>{cv.buttonText}</span>
              </motion.a>

              <div className="flex justify-center space-x-4 pt-4">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center px-3 py-1 rounded-full bg-gray-800 text-sm"
                  >
                    {tech.icon}
                    <span className="ml-1">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;