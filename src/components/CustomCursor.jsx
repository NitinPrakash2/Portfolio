import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    const handleMouseMove = (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div ref={cursorRef}
        className="hidden lg:block fixed top-0 left-0 w-8 h-8 border-2 border-purple-500 rounded-full pointer-events-none z-[9999] transition-transform duration-75 ease-linear"
      />
      <div ref={cursorDotRef}
        className="hidden lg:block fixed top-0 left-0 w-2 h-2 bg-purple-500 rounded-full pointer-events-none z-[9999] transition-transform duration-75 ease-linear"
      />
    </>
  );
}