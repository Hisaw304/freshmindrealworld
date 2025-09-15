// src/components/Hero/StepCard.jsx
import React from "react";

export default function StepCard({
  smallImg,
  bigImg,
  titleTop,
  titleBottom,
  active = false,
  onEnter = () => {},
  onLeave = () => {},
  onFocus = () => {},
  onBlur = () => {},
}) {
  return (
    <article className="flex flex-col lg:flex-row gap-1 lg:gap-4 items-center">
      <figure
        className="relative"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onFocus={onFocus}
        onBlur={onBlur}
        tabIndex={0} // make focusable
        aria-label={`${titleTop} ${titleBottom}`}
      >
        {/* base image */}
        <img
          alt={`${titleBottom} icon`}
          loading="lazy"
          width="287"
          height="85"
          className="w-[287px] h-[85px]"
          src={smallImg}
        />

        {/* overlay image — visible when active */}
        <img
          alt={`${titleBottom} icon overlay`}
          loading="lazy"
          width="287"
          height="85"
          className={`duration-500 transition-all w-[287px] h-[85px] absolute top-0 left-0 ${
            active ? "opacity-100" : "opacity-0"
          }`}
          src={bigImg}
        />

        {/* text labels — change color when active */}
        <div className="flex flex-col justify-center absolute top-4 left-24 pointer-events-none">
          <div
            className={`uppercase font-bold text-[12px] switzer transition-all duration-500 ${
              active ? "text-white" : "text-white/50"
            }`}
          >
            {titleTop}
          </div>
          <div
            className={`font-bold capitalize text-[25px] switzer transition-all duration-500 ${
              active ? "text-white" : "text-white/75"
            }`}
          >
            {titleBottom}
          </div>
        </div>
      </figure>
    </article>
  );
}
