import { motion, useMotionValue } from "framer-motion";
import { useGesture } from "@use-gesture/react";
import { useState, useEffect } from "react";
import {
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiHtml5,
  SiCss3,
  SiDjango,
  SiFlask,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiFigma,
  SiJavascript,
  SiLinux,
  SiKotlin,
  SiMysql,
  SiPhp,
  SiXampp,
  SiOracle,
  SiBootstrap,
  SiAppwrite,
  SiStripe,
  SiPaypal,
  SiPostman,
  SiJquery,
  SiGooglecloud,
  SiOpencv,
  SiNumpy,
  SiAndroidstudio,
} from "react-icons/si";

const techIcons = [
  { Icon: SiTypescript, color: "#3178C6", name: "TypeScript " },
  { Icon: SiReact, color: "#61DAFB", name: "React" },
  { Icon: SiNodedotjs, color: "#339933", name: "Node.js" },
  { Icon: SiPython, color: "#3776AB", name: "Python" },
  { Icon: SiHtml5, color: "#E34F26", name: "HTML5" },
  { Icon: SiCss3, color: "#1572B6", name: "CSS3" },
  { Icon: SiJavascript, color: "#F7DF1E", name: "JavaScript" },
  { Icon: SiDjango, color: "#092E20", name: "Django" },
  { Icon: SiFlask, color: "#ffffff", name: "Flask" },
  { Icon: SiTailwindcss, color: "#06B6D4", name: "TailwindCSS" },
  { Icon: SiMongodb, color: "#47A248", name: "MongoDB" },
  { Icon: SiFirebase, color: "#FFCA28", name: "Firebase" },
  { Icon: SiGit, color: "#F05032", name: "Git" },
  { Icon: SiFigma, color: "#F24E1E", name: "Figma" },
  { Icon: SiLinux, color: "#FCC624", name: "Linux" },
  { Icon: SiKotlin, color: "#7F52FF", name: "Kotlin" },
  { Icon: SiMysql, color: "#003B57", name: "MySQL" },
  { Icon: SiXampp, color: "#D92D1C", name: "XAMPP" },
  { Icon: SiOracle, color: "#F80000", name: "Oracle" },
  { Icon: SiBootstrap, color: "#563D7C", name: "Bootstrap" },
  { Icon: SiAppwrite, color: "#ffffff", name: "Appwrite" },
  { Icon: SiStripe, color: "#6772E5", name: "Stripe" },
  { Icon: SiPaypal, color: "#003087", name: "PayPal" },
  { Icon: SiPostman, color: "#FF6C37", name: "Postman" },
  { Icon: SiJquery, color: "#0769AD", name: "jQuery" },
  { Icon: SiPhp, color: "#8892BF", name: "PHP" },
  { Icon: SiGooglecloud, color: "#4285F4", name: "Google Cloud" },
  { Icon: SiOpencv, color: "#5C3EE8", name: "OpenCV" },
  { Icon: SiNumpy, color: "#013243", name: "NumPy" },
  { Icon: SiAndroidstudio, color: "#3DDC84", name: "Android Studio" },
];

const SkillsMatrix = () => {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const bind = useGesture({
    onMove: ({ xy: [x, y] }) => {
      mx.set((x - window.innerWidth / 2) * 0.02);
      my.set((y - window.innerHeight / 2) * 0.02);
    },
  });

  return (
    <section
      id="skills"
      className="relative min-h-screen w-full bg-black flex items-center justify-center overflow-hidden px-6 py-20"
      {...bind()}
    >
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/5"
          style={{
            width: `${Math.random() * 10 + 2}px`,
            height: `${Math.random() * 10 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
      <div className="relative z-10 w-full max-w-6xl">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
          {techIcons.map(({ Icon, color, name }, index) => {
            const x = useMotionValue(0);
            const y = useMotionValue(0);

            useEffect(() => {
              const distanceX = (index % 6) * 60 - 150;
              const distanceY = Math.floor(index / 6) * 60 - 150;

              const unsubscribeX = mx.onChange((val) => {
                x.set(distanceX - val * 10);
              });
              const unsubscribeY = my.onChange((val) => {
                y.set(distanceY - val * 10);
              });

              return () => {
                unsubscribeX();
                unsubscribeY();
              };
            }, [index]);

            return (
              <motion.div
                key={index}
                style={{ x, y }}
                className="flex justify-center"
                onHoverStart={() => setHoveredIcon({ Icon, color, name })}
                onHoverEnd={() => setHoveredIcon(null)}
              >
                <motion.div
                  className={`p-4 rounded-xl backdrop-blur-sm border-2 ${
                    hoveredIcon?.Icon === Icon
                      ? "border-white/70 shadow-lg scale-125"
                      : "border-white/10"
                  } transition-all duration-300`}
                  style={{ color }}
                  whileHover={{
                    rotate: [0, 5, -5, 0],
                    transition: { duration: 0.5 },
                  }}
                >
                  <Icon className="text-4xl" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Floating label for hovered icon */}
        {hoveredIcon && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800/80 backdrop-blur-md px-6 py-3 rounded-full"
          >
            <hoveredIcon.Icon
              className="inline-block mr-2 text-xl"
              style={{ color: hoveredIcon.color }}
            />
            <span className="text-white font-medium">{hoveredIcon.name}</span>
          </motion.div>
        )}
      </div>

      <motion.div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${
            mx.get() + window.innerWidth / 2
          }px ${
            my.get() + window.innerHeight / 2
          }px, rgba(99, 102, 241, 0.1) 0%, transparent 70%)`,
        }}
      />
    </section>
  );
};

export default SkillsMatrix;
