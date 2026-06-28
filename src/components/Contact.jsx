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
  const [copied, setCopied] = useState(false);

  return (
    <>
      <section className="bg-transparent py-16 sm:py-20 px-6 sm:px-8 relative overflow-hidden">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600 rounded-full opacity-20 pointer-events-none"
        />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Let's Work Together
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-gray-400 mb-10 sm:mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
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
                      navigator.clipboard.writeText('nitinprakash268@gmail.com');
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                    className="relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-lg no-underline bg-gradient-to-r from-purple-600 to-pink-600 text-white overflow-hidden group transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/40"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 transition-transform duration-500 -translate-x-full group-hover:translate-x-full" />
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
                  className="relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-lg no-underline text-white text-center overflow-hidden group border border-gray-700 hover:border-purple-500/50 transition-all bg-gray-900/80"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/10 to-purple-600/20 transition-transform duration-500 -translate-x-full group-hover:translate-x-full" />
                  <span className="relative z-10">{link.label}</span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="relative bg-transparent py-16 text-center overflow-hidden">
        <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
        <div className="flex justify-center items-center gap-2 mb-6">
          {SOCIAL_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-gray-400 hover:text-white transition-all rounded-md hover:bg-white/[0.06] border border-transparent hover:border-purple-500/20"
            >
              <span className="w-1 h-1 rounded-full bg-purple-500/0 group-hover:bg-purple-500 transition-all duration-300" />
              {link.label}
            </a>
          ))}
        </div>
        <div className="w-16 h-[1px] bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 rounded-full" />
        <p className="text-gray-500 text-sm tracking-wide">
          © 2025 Nitin Prakash. All rights reserved.
        </p>
      </footer>
    </>
  );
});

export default Contact;