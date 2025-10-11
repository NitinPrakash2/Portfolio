import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Tech Solutions Inc.',
    period: '2023 - Present',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 2,
    title: 'Web Developer Intern',
    company: 'Digital Agency',
    period: '2022 - 2023',
    technologies: ['JavaScript', 'HTML', 'CSS', 'GSAP'],
  },
  {
    id: 3,
    title: 'Freelance Developer',
    company: 'Self-Employed',
    period: '2021 - 2022',
    technologies: ['WordPress', 'PHP', 'JavaScript'],
  },
];

export default function Experience() {
  const titleRef = useRef(null);
  const timelineRef = useRef(null);

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

      if (timelineRef.current) {
        const blocks = timelineRef.current.querySelectorAll('.experience-block');
        gsap.fromTo(
          blocks,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            stagger: 0.3,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: timelineRef.current,
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
          Experience
        </h2>

        <div ref={timelineRef} className="border-l-2 border-gray-700 pl-6 sm:pl-8 space-y-10 sm:space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-block relative">
              <div className="absolute -left-[29px] sm:-left-[37px] top-2 w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 rounded-full border-4 border-black" />
              
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{exp.title}</h3>
              <p className="text-lg sm:text-xl text-gray-400 mb-1">{exp.company}</p>
              <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
