import { memo } from 'react';
import useInView from '../hooks/useInView';

const skills = [
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'Python', icon: 'python' },
  { name: 'C', icon: 'c' },
  { name: 'C++', icon: 'cplusplus' },
  { name: 'HTML5', icon: 'html5' },
  { name: 'CSS3', icon: 'css3' },
  { name: 'React.js', icon: 'react' },
  { name: 'Tailwind CSS', icon: 'tailwindcss' },
  { name: 'Node.js', icon: 'nodedotjs' },
  { name: 'Express.js', icon: 'express' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'MySQL', icon: 'mysql' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'Redux Toolkit', icon: 'redux' },
  { name: 'Git', icon: 'git' },
  { name: 'GitHub', icon: 'github' },
  { name: 'Socket.io', icon: 'socketdotio' },
];

const About = memo(function About() {
  const [sectionRef, inView] = useInView();

  return (
    <section ref={sectionRef} className="bg-transparent py-16 sm:py-20 px-4 sm:px-6 relative overflow-x-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-12 reveal ${inView ? 'visible' : ''}`}>
          About Me
        </h2>
        <p className={`text-base sm:text-lg text-gray-300 leading-relaxed mb-10 max-w-4xl mx-auto reveal reveal-delay-1 ${inView ? 'visible' : ''}`}>
          Results-driven Full Stack Web Developer skilled in building scalable MERN stack applications using React.js, Node.js, and modern web technologies. Strong problem-solving abilities with hackathon experience and a passion for developing efficient, high-quality solutions. Currently pursuing BCA at IMS Noida, constantly exploring new technologies and refining my skills to build impactful digital experiences.
        </p>
        <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
          {skills.map((skill, i) => (
            <span 
              key={skill.name} 
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-800 text-white rounded-full text-xs sm:text-sm font-medium cursor-pointer transition-all duration-200 hover:bg-purple-700 hover:scale-105 hover:rotate-[4deg] active:rotate-[-4deg] skill-tag ${inView ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.3 + i * 0.04}s` }}
            >
              <img src={`https://cdn.simpleicons.org/${skill.icon}/white`} alt={skill.name} className="w-4 h-4" loading="lazy" />
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
});

export default About;