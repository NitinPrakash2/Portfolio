import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FiDownload, FiMenu, FiX, FiUser, FiBriefcase, FiFolder, FiMail } from 'react-icons/fi';

const navItems = [
  { name: 'About', id: 'about', icon: FiUser },
  { name: 'Experience', id: 'experience', icon: FiBriefcase },
  { name: 'Projects', id: 'projects', icon: FiFolder },
  { name: 'Contact', id: 'contact', icon: FiMail },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/NitinPrakashResume.pdf';
    link.download = 'NitinPrakashResume.pdf';
    link.click();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg">
      <div className={`absolute inset-0 bg-black/70 border-b transition-all duration-300 ${
        isScrolled || mobileMenuOpen ? 'border-purple-500/30' : 'border-transparent'
      }`} />
      
      <div className="px-4 sm:px-6 py-4 relative z-10">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMobileMenuOpen(false); }}
          >
            <img
              src="/favicon.png"
              alt="Nitin Prakash"
              className="w-8 h-8 rounded-full object-cover border border-purple-500/30 hover:scale-110 hover:border-purple-500/80 transition-all duration-200"
            />
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Nitin Prakash
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-white transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <button
              onClick={handleDownloadResume}
              className="flex items-center gap-2 px-4 py-2 bg-white/[0.04] border border-white/10 text-white rounded-full font-medium text-sm transition-all hover:bg-white/[0.08]"
            >
              <FiDownload className="w-4 h-4" />
              Download Resume
            </button>
          </nav>

          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX className="w-5 h-5 text-white" /> : <FiMenu className="w-5 h-5 text-white" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && createPortal(
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-40 md:hidden animate-fade-in"
          style={{ backgroundColor: 'rgba(0,0,0,0.6)', WebkitBackdropFilter: 'blur(12px)', backdropFilter: 'blur(12px)' }}
        >
          <div className="relative h-full flex flex-col">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full opacity-20 animate-blob" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-600 rounded-full opacity-20 animate-blob" style={{ animationDelay: '-4s' }} />
            
            <div className="flex items-center justify-between px-6 pt-6 pb-4 relative z-10">
              <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Nitin Prakash
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <FiX className="w-5 h-5 text-white" />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-6 relative z-10">
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="group relative w-full text-left py-4 px-4 rounded-xl text-white/70 hover:text-white transition-all flex items-center gap-3"
                  >
                    <item.icon className="w-5 h-5 text-purple-400/70 group-hover:text-purple-300 transition-colors" />
                    <span className="relative z-10 text-lg font-medium tracking-wide">{item.name}</span>
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 rounded-full bg-gradient-to-b from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 group-hover:h-8 transition-all duration-300" />
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                ))}
              </nav>
            </div>

            <div className="px-6 pb-8 relative z-10">
              <button
                onClick={() => { handleDownloadResume(); setMobileMenuOpen(false); }}
                className="group relative w-full py-3.5 rounded-xl font-semibold text-sm overflow-hidden bg-white/[0.04] border border-white/10 text-white flex items-center justify-center gap-2 transition-all hover:bg-white/[0.08]"
              >
                <FiDownload className="w-4 h-4" />
                Download Resume
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
};

export default Header;
