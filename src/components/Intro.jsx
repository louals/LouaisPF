import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/mylogo.png';

export default function AnimatedIntro() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLogo(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showLogo && (
        <motion.div
          key="intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black"
        >
          <motion.img
            src={logo}
            alt="Louai Logo"
            initial={{ scale: 0, rotate: -30, opacity: 0 }}
            animate={{ scale: 1.2, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="w-32 h-32 md:w-48 md:h-48 xl:w-64 xl:h-64"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
