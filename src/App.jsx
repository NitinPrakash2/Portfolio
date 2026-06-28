import { lazy, Suspense, useEffect, useState } from 'react';
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
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const opacity = Math.min(scrollY / 600, 1);
  const bgColor = `rgb(${10 + Math.round(opacity * 25)}, ${10 + Math.round(opacity * 12)}, ${10 + Math.round(opacity * 20)})`;

  return (
    <>
      <Suspense fallback={null}>
        <CustomCursor />
      </Suspense>

      <div
        style={{ backgroundColor: bgColor }}
        className="min-h-screen transition-colors duration-700"
      >
        <Header />
        <main>
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
        </main>
      </div>
    </>
  );
}