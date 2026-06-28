import { memo } from 'react';
import useInView from '../hooks/useInView';
import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiSocketdotio, SiTailwindcss, SiJavascript, SiPython, SiCplusplus } from 'react-icons/si';

const experiences = [
  { id: 1, title: 'Hackathon Runner-up — GeeksforGeeks', period: '2025',
    description: [
      'Secured 2nd position in a hackathon organized by GeeksforGeeks for developing an innovative, problem-solving based project.',
      'Demonstrated strong teamwork, rapid prototyping, and technical skills under competitive time constraints.'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Teamwork']
  },
  { id: 2, title: 'Full Stack Developer — Self Projects', period: '2024–Present',
    description: [
      'Built NeuroDesk: Full-stack AI-powered productivity app with real-time data sync, JWT auth, task/goal/note management, and multi-provider AI integration.',
      'Built Resumate: AI-powered resume analyzer with ATS scoring, job matching, and multi-AI provider support.',
      'Integrated WebSocket for real-time features and third-party APIs (OpenRouter, Gemini, Groq, Mistral).'
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'WebSocket', 'JWT', 'Tailwind CSS']
  },
  { id: 3, title: 'Competitive Programming & Problem Solving', period: 'Ongoing',
    description: [
      'Actively participate in hackathons and coding competitions to sharpen analytical and problem-solving skills.',
      'Runner-up in multiple hackathons for developing innovative solutions.'
    ],
    technologies: ['JavaScript', 'Python', 'C++', 'DSA']
  },
];

const techIcons = {
  'React': SiReact,
  'React.js': SiReact,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  'MongoDB': SiMongodb,
  'PostgreSQL': SiPostgresql,
  'WebSocket': SiSocketdotio,
  'Tailwind CSS': SiTailwindcss,
  'JavaScript': SiJavascript,
  'Python': SiPython,
  'C++': SiCplusplus,
};

const Experience = memo(function Experience() {
  const [sectionRef, inView] = useInView();

  return (
    <section ref={sectionRef} className="bg-transparent py-16 sm:py-20 px-4 sm:px-6 relative">

      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-12 reveal ${inView ? 'visible' : ''}`}>
          Experience
        </h2>
        <div className="border-l-2 border-gray-700 pl-6 sm:pl-8 space-y-10 sm:space-y-12 relative">
          <div className="absolute left-0 top-0 w-0.5 bg-gradient-to-b from-purple-500 to-transparent" />
          
          {experiences.map((exp, i) => (
            <div key={exp.id} className={`relative hover:translate-x-2 transition-transform duration-300 reveal reveal-left ${inView ? 'visible' : ''}`} style={{ transitionDelay: `${0.1 + i * 0.2}s` }}>
              <div className="absolute -left-[31px] sm:-left-[41px] top-2 w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 rounded-full border-4 border-black animate-dot-pulse" />
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 transition-colors duration-200 hover:text-purple-500">
                {exp.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
              {exp.description && (
                <ul className="text-gray-300 mb-4 space-y-2">
                  {exp.description.map((desc, idx) => (
                    <li key={idx} className="text-sm leading-relaxed">• {desc}</li>
                  ))}
                </ul>
              )}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => {
                  const Icon = techIcons[tech];
                  return (
                    <span key={tech} className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs transition-all duration-200 hover:bg-gray-700 hover:scale-105">
                      {Icon && <Icon className="w-3.5 h-3.5 flex-shrink-0" />}
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Experience;