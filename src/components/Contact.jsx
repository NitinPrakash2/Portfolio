import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { memo, useState } from 'react';

const CONTACT_LINKS = [
  { href: 'mailto:nitinprakash268@gmail.com', label: 'Email', primary: true },
  { href: 'https://www.linkedin.com/in/nitin-prakash-3b8a01373/', label: 'LinkedIn' },
  { href: 'https://github.com/NitinPrakash2', label: 'GitHub' },
  { href: 'tel:+919304701381', label: '+91-9304701381' },
];

const SOCIAL_LINKS = [
  { href: 'https://www.linkedin.com/in/nitin-prakash-3b8a01373/', label: 'LinkedIn' },
  { href: 'https://github.com/NitinPrakash2', label: 'GitHub' },
];

const Contact = memo(function Contact() {
  const sectionRef = useScrollAnimation({ y: 50 });
  const [copied, setCopied] = useState(false);

  return (
    <>
      <section ref={sectionRef} className="bg-transparent py-16 sm:py-20 px-6 sm:px-8 relative overflow-hidden">
        <motion.div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600 rounded-full blur-[120px] opacity-20"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 gpu-accelerated"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Let's Work Together
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-gray-400 mb-10 sm:mb-12 gpu-accelerated"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have a project in mind or just want to say hi?
          </motion.p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            {CONTACT_LINKS.map((link, i) => {
              if (link.href.startsWith('mailto')) {
                return (
                  <motion.button
                    key={link.label}
                    onClick={() => {
                      const email = 'nitinprakash268@gmail.com';
                      navigator.clipboard.writeText(email);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                    className={`relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-lg no-underline gpu-accelerated bg-gradient-to-r from-purple-600 to-pink-600 text-white overflow-hidden group`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: '0 0 40px rgba(168, 85, 247, 0.6), 0 0 80px rgba(168, 85, 247, 0.2)',
                      y: -5
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                    <span className="relative z-10">{copied ? 'Copied!' : link.label}</span>
                  </motion.button>
                );
              }
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-lg no-underline gpu-accelerated text-white text-center overflow-hidden group border border-gray-700 hover:border-purple-500/50 transition-colors bg-gray-900/80 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: '0 0 30px rgba(168, 85, 247, 0.3), 0 0 60px rgba(168, 85, 247, 0.1)',
                    y: -5,
                    borderColor: 'rgba(168, 85, 247, 0.5)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/10 to-purple-600/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10">{link.label}</span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="relative bg-transparent py-16 text-center overflow-hidden">
        <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
        <motion.div 
          className="flex justify-center items-center gap-2 mb-6 gpu-accelerated"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {SOCIAL_LINKS.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-gray-400 hover:text-white transition-all gpu-accelerated rounded-md hover:bg-white/[0.06] border border-transparent hover:border-purple-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, color: '#a855f7', y: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="w-1 h-1 rounded-full bg-purple-500/0 group-hover:bg-purple-500 transition-all duration-300" />
              {link.label}
            </motion.a>
          ))}
        </motion.div>
        <motion.div
          className="w-16 h-[1px] bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 rounded-full"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        <motion.p
          className="text-gray-500 text-sm tracking-wide"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          © 2025 Nitin Prakash. All rights reserved.
        </motion.p>
      </footer>
    </>
  );
});

export default Contact;
