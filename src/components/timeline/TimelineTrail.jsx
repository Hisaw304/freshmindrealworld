// src/components/timeline/TimelineTrail.jsx
import React, { useEffect, useRef, useState } from "react";

/**
 * Preserves .trail, .highlight, .ball classes and animates them on scroll.
 * Highlight grows from 0 to 100% as the user scrolls the timeline area.
 */
const TimelineTrail = () => {
  const trailRef = useRef(null);
  const [highlight, setHighlight] = useState(0); // px
  const [ballTop, setBallTop] = useState(0); // px

  useEffect(() => {
    const onScroll = () => {
      const el = trailRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportH =
        window.innerHeight || document.documentElement.clientHeight;

      // Use viewport center to drive progress for a smooth feel
      const anchor = viewportH * 0.4; // 40% from top feels close to original
      const progress = (anchor - rect.top) / rect.height;

      const clamped = Math.max(0, Math.min(1, progress));
      const h = rect.height * clamped;

      setHighlight(h);
      setBallTop(h);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="trail" ref={trailRef}>
      <div className="highlight" style={{ height: `${highlight}px` }}></div>
      <div className="ball" style={{ top: `${ballTop}px` }}>
        <img
          alt="Arrow down"
          loading="lazy"
          width="22"
          height="22"
          className="absolute top-0 left-[-5px] max-w-[300px]"
          src="./The Real World _ Official Portal by Andrew Tate_files/arrowdown.png"
        />
      </div>
    </div>
  );
};

export default TimelineTrail;
