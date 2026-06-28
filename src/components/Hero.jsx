import { memo, useEffect, useState } from 'react';

const Hero = memo(function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="bg-transparent min-h-screen flex flex-col justify-center px-6 sm:px-10 relative overflow-hidden">
      
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full opacity-10 animate-blob" />
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-pink-500 rounded-full opacity-[0.08] animate-blob-drift blur-2xl" style={{ animationDuration: '15s' }} />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-500 rounded-full opacity-[0.06] animate-blob-breathe blur-2xl" style={{ animationDelay: '-3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-purple-600/0 via-purple-600/[0.04] to-pink-600/0 animate-blob-spin blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white mb-6 sm:mb-8 reveal ${mounted ? 'visible' : ''}`}>
          Building Scalable Web Solutions with Clean Code
        </h1>
        <p className={`text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl reveal reveal-delay-1 ${mounted ? 'visible' : ''}`}>
          Full Stack Developer skilled in building scalable MERN stack applications using React.js, Node.js, and modern web technologies.
        </p>
        <button
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          className={`mt-8 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/40 transition-all no-underline relative overflow-hidden group reveal reveal-delay-2 ${mounted ? 'visible' : ''}`}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 transition-transform duration-300 -translate-x-full group-hover:translate-x-0" />
          <span className="relative z-10">View My Work</span>
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