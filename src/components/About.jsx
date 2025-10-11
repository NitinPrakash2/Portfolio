import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const skillsRef = useRef(null);

  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Next.js',
    'TypeScript', 'GSAP', 'Tailwind CSS', 'Node.js', 'Git'
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }

      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }

      if (skillsRef.current) {
        const pills = skillsRef.current.querySelectorAll('.skill-pill');
        gsap.fromTo(
          pills,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: skillsRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section data-aos="fade-up" className="bg-black py-16 sm:py-20 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-12 sm:mb-16"
        >
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          <div ref={textRef}>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm Nitin Prakash, a passionate BCA student with a deep love for web development 
              and creating interactive digital experiences. I specialize in building modern, 
              responsive websites using cutting-edge technologies. My goal is to craft seamless 
              user experiences that blend creativity with functionality.
            </p>
          </div>

          <div ref={skillsRef}>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="skill-pill px-5 py-2 bg-gray-800 text-white rounded-full text-sm font-medium hover:bg-gray-700 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
