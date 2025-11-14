import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState, memo, useCallback } from 'react';

const projects = [
  { id: 1, name: 'E-Commerce', description: 'Next.js + Stripe', image: '/projects/project1.jpg', color: 'from-purple-600 to-pink-600' },
  { id: 2, name: 'Portfolio Dashboard', description: 'Interactive analytics', image: '/projects/project2.jpg', color: 'from-blue-600 to-cyan-600' },
  { id: 3, name: 'Social Media App', description: 'Real-time messaging', image: '/projects/project3.jpg', color: 'from-green-600 to-teal-600' },
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
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onHoverStart={() => setHoveredId(project.id)}
      onHoverEnd={() => setHoveredId(null)}
      style={{ rotateX: hoveredId === project.id ? rotateX : 0, rotateY: hoveredId === project.id ? rotateY : 0, transformStyle: 'preserve-3d' }}
      className="group relative overflow-hidden rounded-lg bg-gray-900 cursor-pointer gpu-accelerated"
    >
      <motion.div
        className={`aspect-video bg-gradient-to-br ${project.color} relative`}
        animate={{ scale: hoveredId === project.id ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute inset-0 bg-black"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: hoveredId === project.id ? 0 : 0.3 }}
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
          className="text-gray-400 text-sm"
          animate={{ x: hoveredId === project.id ? 5 : 0 }}
          transition={{ duration: 0.2, delay: 0.05 }}
        >
          {project.description}
        </motion.p>
        <motion.div
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
          animate={{
            scale: hoveredId === project.id ? 1.2 : 1,
            rotate: hoveredId === project.id ? 45 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-white text-xl">→</span>
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
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-12 animate"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" style={{ perspective: '1000px' }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
});

export default Projects;
