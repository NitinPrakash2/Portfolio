import { motion } from 'framer-motion';
import { memo } from 'react';

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
    github: 'https://github.com/NitinPrakash2/Resume_AI_Checker',
    image: '/projects/resumate.png',
    color: 'from-blue-600 to-cyan-600'
  },
];

const ProjectCard = memo(function ProjectCard({ project, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: i * 0.1, duration: 0.5 }}
      onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
      className="group relative overflow-hidden rounded-lg bg-gray-900 cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/20"
    >
      <div className={`aspect-video bg-gradient-to-br ${project.color} relative overflow-hidden`}>
        {project.image && (
          <img
            src={project.image}
            alt={project.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors duration-300" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.3), transparent 70%)',
          }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2 transition-transform duration-200 group-hover:translate-x-1">
          {project.name}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 transition-transform duration-200 group-hover:translate-x-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="px-2 py-0.5 bg-gray-800 text-gray-300 rounded text-xs">
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4" onClick={(e) => e.stopPropagation()}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300 transition-colors"
          >
            Live Demo
            <span className="text-lg">→</span>
          </a>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
            >
              Source Code
              <span className="text-lg">↗</span>
            </a>
          )}
        </div>
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <span className="text-white text-xl">↗</span>
        </div>
      </div>
    </motion.div>
  );
});

const Projects = memo(function Projects() {
  return (
    <section className="bg-transparent py-16 sm:py-20 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
});

export default Projects;