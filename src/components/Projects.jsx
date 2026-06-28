import { memo, useRef } from 'react';

const projects = [
  { id: 1, name: 'NeuroDesk',
    description: 'AI-powered productivity management system with real-time data sync, task management with priority filtering, note-taking, goal tracking with AI roadmaps, secure memory vault, analytics dashboard, and intelligent AI assistant with multi-provider fallback.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'WebSocket', 'JWT', 'Tailwind CSS'],
    link: 'https://neuro-desk2.vercel.app/',
    github: 'https://github.com/NitinPrakash2/NeuroDesk2',
    image: '/projects/neurodesk.png',
    color: 'from-purple-600 to-pink-600'
  },
  { id: 2, name: 'Resumate',
    description: 'AI-powered resume analyzer that evaluates resumes against job descriptions using multiple AI providers. Features ATS scoring, missing keyword detection, job matching via Adzuna API, user-configurable API keys, and interview preparation tools.',
    tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Sequelize ORM', 'Gemini AI', 'JWT'],
    link: 'https://resume-ai-checker-two.vercel.app/',
    github: 'https://github.com/NitinPrakash2/Resume_AI_Checker',
    image: '/projects/resumate.png',
    color: 'from-blue-600 to-cyan-600'
  },
];

const ProjectCard = memo(function ProjectCard({ project }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(1000px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
  };

  return (
    <div
      ref={cardRef}
      onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative overflow-hidden rounded-lg bg-gray-900 cursor-pointer transition-shadow duration-300 hover:shadow-xl hover:shadow-purple-500/20 animate-fade-in"
      style={{ transformStyle: 'preserve-3d', transition: 'transform 0.1s ease-out' }}
    >
      <div className={`aspect-video bg-gradient-to-br ${project.color} relative overflow-hidden`} style={{ transformStyle: 'preserve-3d' }}>
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
          style={{ background: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.3), transparent 70%)' }}
        />
      </div>
      <div className="p-6" style={{ transformStyle: 'preserve-3d' }}>
        <h3 className="text-2xl font-bold text-white mb-2" style={{ transform: 'translateZ(30px)' }}>
          {project.name}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4" style={{ transform: 'translateZ(20px)' }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4" style={{ transform: 'translateZ(15px)' }}>
          {project.tech.map((t) => (
            <span key={t} className="px-2 py-0.5 bg-gray-800 text-gray-300 rounded text-xs">{t}</span>
          ))}
        </div>
        <div className="flex items-center gap-4" onClick={(e) => e.stopPropagation()} style={{ transform: 'translateZ(25px)' }}>
          <a href={project.link} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300 transition-colors">
            Live Demo <span className="text-lg">→</span>
          </a>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors">
              Source Code <span className="text-lg">↗</span>
            </a>
          )}
        </div>
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center" style={{ transform: 'translateZ(35px)' }}>
          <span className="text-white text-xl">↗</span>
        </div>
      </div>
    </div>
  );
});

const Projects = memo(function Projects() {
  return (
    <section className="bg-transparent py-16 sm:py-20 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-12 animate-fade-in">
          Featured Projects
        </h2>
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
});

export default Projects;