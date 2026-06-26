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
                    className={`w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-lg no-underline gpu-accelerated bg-purple-600 text-white`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)',
                      y: -5
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {copied ? 'Copied!' : link.label}
                  </motion.button>
                );
              }
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-lg no-underline gpu-accelerated bg-gray-800 text-white text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: '0 0 20px rgba(75, 85, 99, 0.5)',
                    y: -5
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="bg-transparent py-16 text-center text-gray-400 border-t border-gray-700">
        <motion.div 
          className="flex justify-center gap-6 mb-4 gpu-accelerated"
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
              className="hover:text-white transition-colors gpu-accelerated"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.2, color: '#a855f7' }}
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          © 2025 Nitin Prakash. All rights reserved.
        </motion.p>
      </footer>
    </>
  );
});

export default Contact;
