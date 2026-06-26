import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { memo } from 'react';

const experiences = [
  { 
    id: 1, 
    title: 'Hackathon Runner-up — GeeksforGeeks', 
    period: '2025',
    description: [
      'Secured 2nd position in a hackathon organized by GeeksforGeeks for developing an innovative, problem-solving based project.',
      'Demonstrated strong teamwork, rapid prototyping, and technical skills under competitive time constraints.'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Teamwork']
  },
  { 
    id: 2, 
    title: 'Full Stack Developer — Self Projects', 
    period: '2024–Present',
    description: [
      'Built NeuroDesk: Full-stack AI-powered productivity app with real-time data sync, JWT auth, task/goal/note management, and multi-provider AI integration.',
      'Built Resumate: AI-powered resume analyzer with ATS scoring, job matching, and multi-AI provider support.',
      'Integrated WebSocket for real-time features and third-party APIs (OpenRouter, Gemini, Groq, Mistral).'
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'WebSocket', 'JWT', 'Tailwind CSS']
  },
  { 
    id: 3, 
    title: 'Competitive Programming & Problem Solving', 
    period: 'Ongoing',
    description: [
      'Actively participate in hackathons and coding competitions to sharpen analytical and problem-solving skills.',
      'Runner-up in multiple hackathons for developing innovative solutions.'
    ],
    technologies: ['JavaScript', 'Python', 'C++', 'DSA']
  },
];

const Experience = memo(function Experience() {
  const sectionRef = useScrollAnimation({ stagger: 0.2, y: 30 });

  return (
    <section ref={sectionRef} className="bg-transparent py-16 sm:py-20 px-6 sm:px-8 relative overflow-hidden">
      <motion.div 
        className="absolute top-1/2 right-0 w-96 h-96 bg-purple-600 rounded-full blur-[120px] opacity-10"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-12 animate gpu-accelerated"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>
        <div className="border-l-2 border-gray-700 pl-6 sm:pl-8 space-y-10 sm:space-y-12 relative">
          <motion.div 
            className="absolute left-0 top-0 w-0.5 bg-gradient-to-b from-purple-500 to-transparent gpu-accelerated"
            initial={{ height: '0%' }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
          
          {experiences.map((exp, i) => (
            <motion.div 
              key={exp.id} 
              className="experience-block relative animate gpu-accelerated"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              whileHover={{ x: 10 }}
            >
              <motion.div 
                className="absolute -left-[29px] sm:-left-[37px] top-2 w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 rounded-full border-4 border-black gpu-accelerated"
                initial={{ scale: 0, boxShadow: '0 0 0 0 rgba(168, 85, 247, 0.7)' }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                animate={{ boxShadow: ['0 0 0 0 rgba(168, 85, 247, 0.7)', '0 0 0 10px rgba(168, 85, 247, 0)'] }}
                transition={{ 
                  scale: { delay: i * 0.2 + 0.3, type: 'spring', stiffness: 200 },
                  boxShadow: { duration: 2, repeat: Infinity }
                }}
              />
              <motion.h3 
                className="text-2xl sm:text-3xl font-bold text-white mb-2"
                whileHover={{ color: '#a855f7' }}
              >
                {exp.title}
              </motion.h3>
              <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
              {exp.description && (
                <ul className="text-gray-300 mb-4 space-y-2">
                  {exp.description.map((desc, idx) => (
                    <li key={idx} className="text-sm leading-relaxed">• {desc}</li>
                  ))}
                </ul>
              )}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, j) => (
                  <motion.span 
                    key={tech} 
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs cursor-pointer gpu-accelerated"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + j * 0.1 + 0.5 }}
                    whileHover={{ scale: 1.1, backgroundColor: '#374151' }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Experience;
