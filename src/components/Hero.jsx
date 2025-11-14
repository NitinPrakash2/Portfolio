import { motion } from 'framer-motion';
import { useEffect, useRef, useState, memo, useCallback } from 'react';
import gsap from 'gsap';

const Hero = memo(function Hero() {
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const letters = textRef.current.querySelectorAll('.letter');
    gsap.fromTo(letters, 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.015, duration: 0.4, ease: 'power2.out', force3D: true }
    );
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    setMousePos({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMousePos({ x: 0, y: 0 });
  }, []);

  return (
    <section className="bg-transparent min-h-screen flex flex-col justify-center px-6 sm:px-10 relative overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[120px]"
      />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <h1 ref={textRef} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white mb-6 sm:mb-8">
          {'Empowering the Web with Clean Code'.split('').map((char, i) => (
            <span key={i} className="letter inline-block" style={{ display: char === ' ' ? 'inline' : 'inline-block' }}>
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl gpu-accelerated"
        >
          Creative developer crafting seamless digital experiences with modern web technologies.
        </motion.p>
        <motion.button
          ref={buttonRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, x: mousePos.x, y: mousePos.y }}
          transition={{ opacity: { duration: 0.6, delay: 0.8 }, x: { duration: 0.2 }, y: { duration: 0.2 } }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(168, 85, 247, 0.4)' }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all no-underline relative overflow-hidden group gpu-accelerated"
        >
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400"
            initial={{ x: '-100%' }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
            style={{ zIndex: 0 }}
          />
          <span className="relative z-10">View My Work</span>
        </motion.button>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { duration: 0.6, delay: 1 }, y: { duration: 2, repeat: Infinity } }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-sm text-gray-500 uppercase tracking-wider">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-purple-500 to-transparent" />
      </motion.div>
    </section>
  );
});

export default Hero;
