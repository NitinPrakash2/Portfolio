import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      
      cursorDot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      
      gsap.to(cursor, {
        x: x,
        y: y,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseDown = () => {
      gsap.to(cursor, { scale: 0.8, duration: 0.2 });
    };

    const handleMouseUp = () => {
      gsap.to(cursor, { scale: 1, duration: 0.2 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="hidden lg:block fixed top-0 left-0 w-8 h-8 border-2 border-purple-500 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ opacity: 1, mixBlendMode: 'difference' }}
      />
      <div
        ref={cursorDotRef}
        className="hidden lg:block fixed top-0 left-0 w-2 h-2 bg-purple-500 rounded-full pointer-events-none z-[9999]"
        style={{ opacity: 1 }}
      />
    </>
  );
}
