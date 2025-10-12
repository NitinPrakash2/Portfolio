import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { memo, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'MongoDB', 'Express.js', 'Tailwind', 'Node.js'];

const About = memo(function About() {
  const sectionRef = useScrollAnimation({ stagger: 0.1 });
  const parallaxRef = useRef(null);

  useEffect(() => {
    gsap.to(parallaxRef.current, {
      y: -80,
      scrollTrigger: {
        trigger: parallaxRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.5,
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="bg-transparent py-16 sm:py-20 px-6 sm:px-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      </div>
      
      <motion.div 
        ref={parallaxRef}
        className="absolute -top-20 -left-20 w-72 h-72 bg-blue-600 rounded-full blur-[100px] opacity-20"
      />
      
      <motion.div
        className="absolute bottom-20 right-20 w-64 h-64 bg-purple-600 rounded-full blur-[100px] opacity-20"
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-12 animate gpu-accelerated"
          whileInView={{ scale: [0.9, 1] }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-300 leading-relaxed mb-10 max-w-4xl mx-auto animate gpu-accelerated"
          whileInView={{ x: [-50, 0], opacity: [0, 1] }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          I'm Nitin Prakash, a passionate MERN Stack Developer and tech enthusiast currently expanding my expertise in Java, focusing on Data Structures and Algorithms (DSA) and Object-Oriented Programming (OOPs). With a solid foundation in JavaScript, React, Node.js, Express, and MongoDB, I enjoy building fast, functional, and user-friendly web applications. My goal is to combine clean code with creative design to deliver impactful digital experiences. I'm constantly exploring new technologies and refining my problem-solving skills to grow as a well-rounded full-stack developer.
        </motion.p>
        <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
          {skills.map((skill, i) => (
            <motion.span 
              key={skill} 
              className="px-5 py-2 bg-gray-800 text-white rounded-full text-sm font-medium animate cursor-pointer gpu-accelerated"
              whileHover={{ scale: 1.1, backgroundColor: '#7c3aed', rotate: [0, -5, 5, 0] }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.05 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
});

export default About;
