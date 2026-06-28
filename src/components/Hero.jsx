import { memo, useEffect, useState } from 'react';
import { FiArrowDown } from 'react-icons/fi';

const Hero = memo(function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="bg-transparent min-h-screen flex flex-col justify-center px-6 sm:px-10 relative overflow-hidden">
      
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white mb-6 sm:mb-8 reveal ${mounted ? 'visible' : ''}`}>
          Building Scalable Web Solutions with Clean Code
        </h1>
        <p className={`text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl reveal reveal-delay-1 ${mounted ? 'visible' : ''}`}>
          Full Stack Developer skilled in building scalable MERN stack applications using React.js, Node.js, and modern web technologies.
        </p>
        <button
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          className={`mt-8 px-6 py-3 bg-white/[0.04] border border-white/10 text-white font-medium rounded-full flex items-center gap-2.5 transition-all hover:bg-white/[0.08] no-underline reveal reveal-delay-2 ${mounted ? 'visible' : ''}`}
        >
          <span>View My Work</span>
          <FiArrowDown className="w-4 h-4" />
        </button>
      </div>
      
      <div className={`absolute bottom-10 left-0 right-0 mx-auto w-max flex flex-col items-center gap-2 reveal reveal-delay-3 ${mounted ? 'visible' : ''}`}>
        <span className="text-sm text-gray-500 uppercase tracking-wider">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-purple-500 to-transparent" />
      </div>
    </section>
  );
});

export default Hero;