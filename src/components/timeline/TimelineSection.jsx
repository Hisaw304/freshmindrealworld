// src/components/timeline/TimelineSection.jsx
import React from "react";
import "../../c/e106afa7b21e01c4.css"; // required custom classes

import TimelineTrail from "./TimelineTrail";
import TimelineStep from "./TimelineStep";
import TimelineCTA from "./TimelineCTA";
import timelineSteps from "../../data/timelineSteps";

/**
 * Full timeline section: background + headings + trail + steps + CTA.
 * Preserves all non-Tailwind classes and exact asset paths.
 */
const TimelineSection = () => {
  return (
    <section className="w-full relative z-20 mt-24 lg:mt-[144px] mb-[126px] flex flex-col items-center timeline">
      {/* Background with fades */}
      <div className="lg:block w-full absolute top-0 left-0 z-0 max-h-[1728px] h-full lg:h-auto">
        <img
          alt="Background 1"
          loading="lazy"
          width="1729"
          height="1728"
          className="w-full h-[2000px] lg:h-[1450px] object-cover"
          src={
            "./The Real World _ Official Portal by Andrew Tate_files/bg_2.png"
          }
        />
        <div className="top-fade-b pointer-events-none"></div>
        <div className="left-fade-b pointer-events-none"></div>
        <div className="right-fade-b pointer-events-none"></div>
        <div className="bottom-fade-b pointer-events-none"></div>
      </div>

      {/* Headings */}
      <div className="max-w-[1236px] mx-auto flex flex-col items-center relative z-10">
        <h3 className="uppercase switzer text-center lg:text-[16px] mb-3">
          A STEP-BY-STEP PATH
        </h3>
        <h2 className="mb-8 text-center lg:px-4 max-w-[668px] capitalize switzer tracking-[-1px] lg:tracking-[-3px] !text-[44px] lg:!text-[55px]">
          <span className="gradient-text texture-text">
            Tools To Maximize Your Income
          </span>
        </h2>
      </div>

      {/* Trail + Steps + CTA */}
      <div className="relative">
        <TimelineTrail />

        {timelineSteps.map((s) => (
          <TimelineStep
            key={s.id}
            icon={s.icon}
            iconAlt={s.iconAlt}
            title={s.title}
            videoSrc={s.videoSrc}
            desktopImage={s.desktopImage}
            desktopAlt={s.desktopAlt}
            desktopImageClass={s.desktopImageClass}
            glowClass={s.glowClass}
            iconSize={s.iconSize}
            points={s.points}
          />
        ))}

        <TimelineCTA />
      </div>
    </section>
  );
};

export default TimelineSection;
