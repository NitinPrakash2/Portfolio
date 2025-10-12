import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    ['#000000', '#1a0a2e', '#2d1b4e', '#3d2463']
  );

  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);

  return (
    <>
      <CustomCursor />
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600"
              initial={{ scale: 0 }}
              animate={{ scale: 2 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.8 }}
              style={{ opacity: 0.2, filter: 'blur(80px)' }}
            />
            <motion.div
              className="text-6xl font-bold text-white relative z-10 flex gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {['N', 'P'].map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        style={{ backgroundColor }}
        className="min-h-screen transition-colors duration-1000"
      >
        <Header />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
        <Hero />
        <div id="about"><About /></div>
        <div id="projects"><Projects /></div>
        <div id="experience"><Experience /></div>
        <div id="contact"><Contact /></div>
        </motion.main>
      </motion.div>
    </>
  );
}
