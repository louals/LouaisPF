import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import yourImage from "../assets/mylogo.png";
import {
  SiNodedotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFastapi,
} from "react-icons/si";
import SiPython from "../assets/py.png";
import { useLanguage } from "../Contexts/languageContext";
import { heroContent } from "../contents/hero";

const HomeSection = () => {
  const { language } = useLanguage();
  const content = heroContent[language];

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden -top-20 md:-top-40 xl:py-32"
    >
      {/* Animated background elements - Mobile adjustments */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Animated circuit board grid - Reduced opacity on mobile */}
        <motion.div
          className="absolute inset-0 opacity-5 dark:opacity-10 md:opacity-10 md:dark:opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, #4f46e5 1px, transparent 1px),
              linear-gradient(to bottom, #4f46e5 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 120,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Code snippet - Hidden on mobile */}
        <motion.div
          className="absolute bottom-10 right-10 bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 shadow-xl mb-10 hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <pre className="text-xs text-green-400 font-mono">
            <code>{`
              function ${language === "en" ? "hireMe" : "engagezMoi"}() {
                return {
                  ${language === "en" ? "success" : "succès"}: true,
                  ${language === "en" ? "role" : "rôle"}: '${
              language === "en" ? "Frontend Developer" : "Développeur Frontend"
            }',
                  ${language === "en" ? "team" : "équipe"}: '${
              language === "en"
                ? "Your Awesome Company"
                : "Votre Entreprise Génial"
            }'
                }
              }
            `}</code>
          </pre>
        </motion.div>

        {/* Floating tech logos - Smaller and less prominent on mobile */}
        <motion.div
          className="absolute top-1/4 left-1/4 opacity-0 dark:opacity-0 md:opacity-5 md:dark:opacity-10"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 120,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <SiReact className="w-16 h-16 md:w-32 md:h-32 text-cyan-500" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 right-1/4 opacity-0 dark:opacity-0 md:opacity-5 md:dark:opacity-10"
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 150,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <SiTailwindcss className="w-16 h-16 md:w-32 md:h-32 text-blue-500" />
        </motion.div>

        {/* Pulsing energy nodes - Fewer and smaller on mobile */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full filter blur-xl ${
              i % 2 === 0 ? "bg-purple-600" : "bg-blue-600"
            }`}
            style={{
              width: `${60 + i * 20}px`,
              height: `${60 + i * 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.02, 0.05, 0.02],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Subtle moving gradient overlay - Less intense on mobile */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-blue-900/5 md:from-purple-900/10 md:to-blue-900/10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Main content - Mobile adjustments */}
      <div className="mx-auto px-4 sm:px-6 py-16 lg:py-20 xl:py-32 z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 xl:gap-24">
          {/* Left column - Text content - Mobile adjustments */}
          <div className="w-full lg:w-1/2 xl:w-2/5 space-y-4 sm:space-y-6 lg:space-y-8 xl:space-y-10 lg:ml-20 mb-8 lg:mb-10 px-4 sm:px-0">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 dark:text-white">
                {content.title}{" "}
                <span className="text-purple-600 dark:text-purple-400">
                  {content.name}
                </span>
              </h1>

              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-600 dark:text-gray-300 mt-2 sm:mt-4 h-12 sm:h-16 xl:h-20">
                <TypeAnimation
                  sequence={content.roles.flatMap((role) => [role, 2000])}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  className="text-purple-600 dark:text-purple-400"
                />
              </div>
            </motion.div>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed xl:leading-loose"
            >
              {content.description}
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3 sm:gap-4 xl:gap-6"
            >
              <a
                href="#contact"
                className="px-6 py-2 sm:px-8 sm:py-3 xl:px-10 xl:py-4 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors shadow-lg hover:shadow-purple-500/20 text-base sm:text-lg xl:text-xl"
              >
                {content.buttons.hire}
              </a>
              <a
                href="#projects"
                className="px-6 py-2 sm:px-8 sm:py-3 xl:px-10 xl:py-4 border-2 border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 rounded-full font-medium hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors text-base sm:text-lg xl:text-xl"
              >
                {content.buttons.work}
              </a>
            </motion.div>
          </div>

          {/* Right column - Image - Mobile adjustments */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 xl:w-2/5 flex justify-center mt-8 lg:mt-0"
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem]">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-20 blur-xl"></div>
              <div className="relative rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <img
                  src={yourImage}
                  alt="Louai"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating tech badges - Smaller on mobile */}
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 lg:-bottom-6 lg:-left-6 xl:-bottom-8 xl:-left-8 bg-white dark:bg-gray-800 p-2 sm:p-3 lg:p-4 rounded-full shadow-lg">
                <SiReact className="text-[#61DAFB] text-xl sm:text-2xl lg:text-3xl xl:text-4xl" />
              </div>
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 lg:-top-6 lg:-right-6 xl:-top-8 xl:-right-8 bg-white dark:bg-gray-800 p-2 sm:p-3 lg:p-4 rounded-full shadow-lg">
                <img
                  src={SiPython}
                  alt="Python Logo"
                  className="w-5 sm:w-7 lg:w-9 xl:w-11 h-5 sm:h-7 lg:h-9 xl:h-11"
                />
              </div>
              <div className="absolute top-1/4 -right-4 sm:-right-8 lg:-right-10 xl:-right-12 bg-white dark:bg-gray-800 p-2 sm:p-3 lg:p-4 rounded-full shadow-lg">
                <SiTypescript className="text-blue-600 text-xl sm:text-2xl lg:text-3xl xl:text-4xl" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scrolling indicator - Mobile adjustments */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 sm:bottom-10 lg:bottom-16 xl:bottom-20 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce flex flex-col items-center">
            <span className="text-xs sm:text-sm lg:text-base xl:text-lg text-gray-500 dark:text-gray-400 mb-1 sm:mb-2">
              {content.scrollText}
            </span>
            <div className="w-5 h-8 sm:w-6 sm:h-10 lg:w-7 lg:h-12 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1 h-2 sm:h-3 bg-gray-500 dark:bg-gray-400 rounded-full mt-1 sm:mt-2"
              ></motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;
