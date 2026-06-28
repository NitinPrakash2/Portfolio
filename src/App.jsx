import { lazy, Suspense, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import useDeviceOrientation from './hooks/useDeviceOrientation';

const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));
const CustomCursor = lazy(() => import('./components/CustomCursor'));

function SectionFallback() {
  return <div className="py-16" />;
}

export default function App() {
  const bgRef = useRef(null);
  const contentRef = useRef(null);
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
  const { gamma, beta } = useDeviceOrientation();

  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const opacity = Math.min(window.scrollY / 800, 1);
          el.style.backgroundColor = `rgb(${10 + Math.round(opacity * 10)}, ${10 + Math.round(opacity * 15)}, ${10 + Math.round(opacity * 40)})`;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const rotateX = beta * 0.03;
    const rotateY = gamma * 0.03;

    if (contentRef.current) {
      contentRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
    if (blob1Ref.current) {
      blob1Ref.current.style.transform = `translate(${gamma * 0.15}px, ${beta * 0.1}px)`;
    }
    if (blob2Ref.current) {
      blob2Ref.current.style.transform = `translate(${gamma * -0.2}px, ${beta * -0.15}px)`;
    }
  }, [gamma, beta]);

  return (
    <>
      <Suspense fallback={null}>
        <CustomCursor />
      </Suspense>

      <div
        ref={bgRef}
        className="min-h-screen transition-colors duration-700 relative overflow-hidden"
        style={{ backgroundColor: 'rgb(10, 10, 10)' }}
      >
        <div ref={blob1Ref} className="fixed top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-purple-600 opacity-[0.04] animate-blob-drift blur-2xl pointer-events-none z-0" style={{ transition: 'transform 0.4s ease-out' }} />
        <div ref={blob2Ref} className="fixed bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-pink-500 opacity-[0.03] animate-blob-breathe blur-2xl pointer-events-none z-0" style={{ transition: 'transform 0.4s ease-out', animationDelay: '-2s' }} />
        <Header />
        <main ref={contentRef} className="relative z-10" style={{ transition: 'transform 0.4s ease-out' }}>
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