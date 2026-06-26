import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState, memo, useCallback } from 'react';

const projects = [
  {
    id: 1,
    name: 'NeuroDesk',
    description: 'AI-powered productivity management system with real-time data sync, task management with priority filtering, note-taking, goal tracking with AI roadmaps, secure memory vault, analytics dashboard, and intelligent AI assistant with multi-provider fallback.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'WebSocket', 'JWT', 'Tailwind CSS'],
    link: 'https://neuro-desk2.vercel.app/',
    github: 'https://github.com/NitinPrakash2/NeuroDesk2',
    image: '/projects/neurodesk.png',
    color: 'from-purple-600 to-pink-600'
  },
  {
    id: 2,
    name: 'Resumate',
    description: 'AI-powered resume analyzer that evaluates resumes against job descriptions using multiple AI providers. Features ATS scoring, missing keyword detection, job matching via Adzuna API, user-configurable API keys, and interview preparation tools.',
    tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Sequelize ORM', 'Gemini AI', 'JWT'],
    link: 'https://resume-ai-checker-two.vercel.app/',
    image: '/projects/resumate.png',
    color: 'from-blue-600 to-cyan-600'
  },
];

const ProjectCard = memo(function ProjectCard({ project, i }) {
  const [hoveredId, setHoveredId] = useState(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['5deg', '-5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-5deg', '5deg']);

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }, [x, y]);

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: i * 0.1, duration: 0.5 }}
      onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onHoverStart={() => setHoveredId(project.id)}
      onHoverEnd={() => setHoveredId(null)}
      style={{ rotateX: hoveredId === project.id ? rotateX : 0, rotateY: hoveredId === project.id ? rotateY : 0, transformStyle: 'preserve-3d' }}
      className="group relative overflow-hidden rounded-lg bg-gray-900 cursor-pointer gpu-accelerated"
    >
      <motion.div
        className={`aspect-video bg-gradient-to-br ${project.color} relative overflow-hidden`}
        animate={{ scale: hoveredId === project.id ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      >
        {project.image && (
          <img
            src={project.image}
            alt={project.name}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        )}
        <motion.div
          className="absolute inset-0 bg-black"
          initial={{ opacity: 0.4 }}
          animate={{ opacity: hoveredId === project.id ? 0 : 0.4 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.3), transparent 70%)',
            transform: 'translateZ(20px)',
          }}
        />
      </motion.div>
      <div className="p-6 relative" style={{ transform: 'translateZ(30px)' }}>
        <motion.h3
          className="text-2xl font-bold text-white mb-2"
          animate={{ x: hoveredId === project.id ? 5 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {project.name}
        </motion.h3>
        <motion.p
          className="text-gray-400 text-sm leading-relaxed mb-4"
          animate={{ x: hoveredId === project.id ? 5 : 0 }}
          transition={{ duration: 0.2, delay: 0.05 }}
        >
          {project.description}
        </motion.p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="px-2 py-0.5 bg-gray-800 text-gray-300 rounded text-xs">
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4" onClick={(e) => e.stopPropagation()}>
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300 transition-colors"
            animate={{ x: hoveredId === project.id ? 5 : 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
          >
            Live Demo
            <span className="text-lg">→</span>
          </motion.a>
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
              animate={{ x: hoveredId === project.id ? 5 : 0 }}
              transition={{ duration: 0.2, delay: 0.15 }}
            >
              Source Code
              <span className="text-lg">↗</span>
            </motion.a>
          )}
        </div>
        <motion.div
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
          animate={{
            scale: hoveredId === project.id ? 1.2 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-white text-xl">↗</span>
        </motion.div>
      </div>
    </motion.div>
  );
});

const Projects = memo(function Projects() {
  const sectionRef = useScrollAnimation({ stagger: 0.15, y: 30 });

  return (
    <section ref={sectionRef} className="bg-transparent py-16 sm:py-20 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto" style={{ perspective: '1000px' }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
});

export default Projects;
