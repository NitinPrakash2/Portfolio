import { memo, useState } from 'react';
import useInView from '../hooks/useInView';
import { SiGmail } from 'react-icons/si';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';

const SOCIAL_LINKS = [
  { href: 'https://www.linkedin.com/in/nitin-prakash-3b8a01373/', label: 'LinkedIn' },
  { href: 'https://github.com/NitinPrakash2', label: 'GitHub' },
];

const CONTACT_LINKS = [
  { href: 'mailto:nitinprakash268@gmail.com', icon: SiGmail, label: 'Email', isCopy: true },
  { href: 'https://www.linkedin.com/in/nitin-prakash-3b8a01373/', icon: FaLinkedin, label: 'LinkedIn' },
  { href: 'https://github.com/NitinPrakash2', icon: FaGithub, label: 'GitHub' },
  { href: 'tel:+919304701381', icon: FiPhone, label: 'Phone' },
];

const Contact = memo(function Contact() {
  const [copied, setCopied] = useState(false);
  const [sectionRef, inView] = useInView();
  const [footerRef, footerInView] = useInView();

  return (
    <>
      <section ref={sectionRef} className="bg-transparent py-16 sm:py-20 px-6 sm:px-8 relative overflow-hidden">

        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 reveal ${inView ? 'visible' : ''}`}>
            Let's Work Together
          </h2>
          <p className={`text-lg sm:text-xl text-gray-400 mb-10 sm:mb-12 reveal reveal-delay-1 ${inView ? 'visible' : ''}`}>
            Have a project in mind or just want to say hi?
          </p>
          <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
            {CONTACT_LINKS.map((link, i) => {
              const common = `relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:shadow-md hover:shadow-purple-500/20 reveal ${inView ? 'visible' : ''}`;
              const iconClass = "w-5 h-5 relative z-10";

              if (link.isCopy) {
                return (
                  <button key={link.label}
                    onClick={() => { navigator.clipboard.writeText('nitinprakash268@gmail.com'); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
                    className={`${common} bg-purple-600/10 border border-purple-500/30 hover:bg-purple-600/20`}
                    style={{ transitionDelay: `${0.3 + i * 0.1}s` }}
                    title={copied ? 'Copied!' : link.label}
                  >
                    <link.icon className={iconClass} />
                  </button>
                );
              }
              return (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                  className={`${common} bg-white/[0.04] border border-white/10 hover:bg-white/[0.08]`}
                  style={{ transitionDelay: `${0.3 + i * 0.1}s` }}
                  title={link.label}
                >
                  <link.icon className={iconClass} />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <footer ref={footerRef} className="relative bg-transparent py-16 text-center overflow-hidden">
        <div className={`absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50 reveal ${footerInView ? 'visible' : ''}`} />
        <div className={`flex justify-center items-center gap-2 mb-6 reveal ${footerInView ? 'visible' : ''}`}>
          {SOCIAL_LINKS.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-gray-400 hover:text-white transition-all rounded-md hover:bg-white/[0.06] border border-transparent hover:border-purple-500/20"
            >
              <span className="w-1 h-1 rounded-full bg-purple-500/0 group-hover:bg-purple-500 transition-all duration-300" />
              {link.label}
            </a>
          ))}
        </div>
        <div className={`w-16 h-[1px] bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 rounded-full reveal reveal-delay-1 ${footerInView ? 'visible' : ''}`} />
        <p className={`text-gray-500 text-sm tracking-wide reveal reveal-delay-2 ${footerInView ? 'visible' : ''}`}>© 2025 Nitin Prakash. All rights reserved.</p>
      </footer>
    </>
  );
});

export default Contact;