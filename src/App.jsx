import { lazy, Suspense } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, LazyMotion, domAnimation } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';

const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));
const CustomCursor = lazy(() => import('./components/CustomCursor'));

function SectionFallback() {
  return <div className="py-16" />;
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    ['#000000', '#1a0a2e', '#2d1b4e', '#3d2463']
  );

  return (
    <LazyMotion features={domAnimation} strict>
      <Suspense fallback={null}>
        <CustomCursor />
      </Suspense>

      <motion.div
        style={{ backgroundColor }}
        className="min-h-screen"
      >
        <Header />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
        <Hero />
        <div id="about">
          <Suspense fallback={<SectionFallback />}>
            <About />
          </Suspense>
        </div>
        <div id="projects">
          <Suspense fallback={<SectionFallback />}>
            <Projects />
          </Suspense>
        </div>
        <div id="experience">
          <Suspense fallback={<SectionFallback />}>
            <Experience />
          </Suspense>
        </div>
        <div id="contact">
          <Suspense fallback={<SectionFallback />}>
            <Contact />
          </Suspense>
        </div>
        </motion.main>
      </motion.div>
    </LazyMotion>
  );
}
