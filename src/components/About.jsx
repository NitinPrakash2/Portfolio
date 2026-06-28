import { motion } from 'framer-motion';
import { memo } from 'react';

const skills = ['JavaScript', 'Python', 'C', 'C++', 'HTML5', 'CSS3', 'React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'PostgreSQL', 'Redux Toolkit', 'Git', 'GitHub', 'Socket.io'];

const About = memo(function About() {
  return (
    <section className="bg-transparent py-16 sm:py-20 px-4 sm:px-6 relative overflow-x-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      </div>
      
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-600 rounded-full opacity-20 pointer-events-none" />
      
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-600 rounded-full opacity-20 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.p 
          className="text-base sm:text-lg text-gray-300 leading-relaxed mb-10 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Results-driven Full Stack Web Developer skilled in building scalable MERN stack applications using React.js, Node.js, and modern web technologies. Strong problem-solving abilities with hackathon experience and a passion for developing efficient, high-quality solutions. Currently pursuing BCA at IMS Noida, constantly exploring new technologies and refining my skills to build impactful digital experiences.
        </motion.p>
        <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
          {skills.map((skill) => (
            <span 
              key={skill} 
              className="px-3 py-1.5 bg-gray-800 text-white rounded-full text-xs sm:text-sm font-medium cursor-pointer transition-all duration-200 hover:bg-purple-700 hover:scale-105"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
});

export default About;