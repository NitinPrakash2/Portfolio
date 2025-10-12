import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const { target = '.animate', y = 50, stagger = 0.2, duration = 0.8, ease = 'power2.out', start = 'top 80%' } = options;

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (ref.current) {
        const targets = ref.current.querySelectorAll(target);
        gsap.fromTo(
          targets,
          { opacity: 0, y },
          {
            opacity: 1,
            y: 0,
            stagger,
            duration,
            ease,
            scrollTrigger: {
              trigger: ref.current,
              start,
              once: true,
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, [target, y, stagger, duration, ease, start]);

  return ref;
};
