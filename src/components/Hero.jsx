import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="bg-black min-h-screen flex flex-col justify-center px-6 sm:px-10 relative">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[60px] sm:text-[90px] md:text-[120px] font-extrabold leading-tight text-white mb-6 sm:mb-8"
        >
          Turning Vision into Interactive Experiences
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl"
        >
          Creative developer crafting seamless digital experiences with modern web technologies.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-sm text-gray-500 uppercase tracking-wider">Scroll</span>
        <div className="w-[1px] h-16 bg-gray-700 animate-pulse" />
      </motion.div>
    </section>
  );
}
