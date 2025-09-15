// src/components/Hero/ProgressSteps.jsx
import React, { useState } from "react";
import StepCard from "./StepCard";

const STEPS = [
  {
    small: "/c/a1_i.png",
    big: "/c/a1.png",
    top: "world class",
    bottom: "Learning",
  },
  {
    small: "/c/a2_i.png",
    big: "/c/a2.png",
    top: "scale from zero",
    bottom: "To 10k/mo",
  },
  {
    small: "/c/a3_i.png",
    big: "/c/a3.png",
    top: "1-on-1 advice",
    bottom: "From Experts",
  },
];

function Arrow({ active }) {
  return (
    <figure className="relative flex-shrink-0">
      {/* Desktop: right-pointing arrow (two stacked images — base + white overlay whose opacity we toggle) */}
      <img src="/c/arrow_active.png" alt="" className="hidden lg:block" />
      <img
        src="/c/arrow_white.png"
        alt=""
        className={`hidden lg:block absolute top-0 left-0 transition-all duration-500 ${
          active ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Mobile: down arrow */}
      <img src="/c/arrow_down_active.png" alt="" className="lg:hidden" />
      <img
        src="/c/arrow_white_down.png"
        alt=""
        className={`lg:hidden absolute top-0 left-0 transition-all duration-500 ${
          active ? "opacity-100" : "opacity-0"
        }`}
      />
    </figure>
  );
}

export default function ProgressSteps() {
  const defaultActive = STEPS.length - 1; // last step active by default (matches raw)
  const [activeIndex, setActiveIndex] = useState(defaultActive);

  const handleEnter = (i) => setActiveIndex(i);
  const handleLeave = () => setActiveIndex(defaultActive);
  const handleFocus = (i) => setActiveIndex(i);
  const handleBlur = () => setActiveIndex(defaultActive);

  return (
    <div className="flex flex-col lg:flex-row w-full items-center gap-4 mt-8 relative z-20 justify-center">
      {STEPS.map((s, i) => (
        <React.Fragment key={s.bottom}>
          <StepCard
            smallImg={s.small}
            bigImg={s.big}
            titleTop={s.top}
            titleBottom={s.bottom}
            active={i === activeIndex}
            onEnter={() => handleEnter(i)}
            onLeave={handleLeave}
            onFocus={() => handleFocus(i)}
            onBlur={handleBlur}
          />
          {i < STEPS.length - 1 && <Arrow active={activeIndex === i} />}
        </React.Fragment>
      ))}
    </div>
  );
}
