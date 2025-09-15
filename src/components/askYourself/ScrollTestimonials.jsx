import { useEffect, useRef, useState } from "react";

const ScrollTestimonials = ({ testimonials }) => {
  const [offset, setOffset] = useState(0);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    let animationFrame;

    const step = () => {
      if (!paused) {
        setOffset((prev) => {
          const container = containerRef.current;
          if (!container) return prev;

          const scrollWidth = container.scrollWidth / 2;
          let next = prev - 0.4; // scroll speed
          if (Math.abs(next) >= scrollWidth) {
            next = 0; // reset for seamless loop
          }
          return next;
        });
      }
      animationFrame = requestAnimationFrame(step);
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [paused]);

  return (
    <div className="relative mt-2 lg:hidden h-[240px] w-full mb-4">
      <div
        ref={containerRef}
        className="w-full flex flex-nowrap h-[240px] my-16 relative scrollelement lg:hidden"
        style={{
          transform: `translateX(${offset}px)`,
          transition: "transform 0.1s linear",
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        {[...testimonials, ...testimonials].map((item, idx) => (
          <img
            key={idx}
            alt={item.alt}
            src={item.src}
            className="shrink-0 h-[240px] w-[201px]"
          />
        ))}
      </div>
      <div className="top-fade-b pointer-events-none"></div>
      <div className="left-fade-b pointer-events-none"></div>
      <div className="right-fade-b pointer-events-none"></div>
      <div className="bottom-fade-b pointer-events-none"></div>
    </div>
  );
};

export default ScrollTestimonials;
