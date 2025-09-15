// src/components/winning/WinningSection.jsx
import React from "react";
import "../../c/e106afa7b21e01c4.css"; // keep your global CSS with custom classes

import HeadingBlock from "./HeadingBlock";
import TestimonialsDesktop from "./TestimonialsDesktop";
import TestimonialsMobile from "./TestimonialsMobile";
import BackgroundFades from "./BackgroundFades";
import StudentsCounter from "./StudentsCounter";

import {
  headingData,
  ctaData,
  studentsCounterData,
  desktopColumns,
  mobileList,
} from "../../data/winningData";

// If you already have this common component from earlier sections, keep that one.
// Otherwise, you can create it at src/components/common/CTAButton.jsx (same API).
import CTAButton from "../shared/CTAButton";

const WinningSection = () => {
  return (
    <section className="w-full relative mb-[80px] lg:mb-[196px] z-10">
      {/* Background + soft fades */}
      <BackgroundFades />

      <div className="z-10 relative px-4">
        {/* Heading */}
        <HeadingBlock
          smallTitle={headingData.smallTitle}
          title={headingData.title}
          swirlSrc={headingData.swirlSrc}
        />

        {/* Testimonials */}
        <div className="relative mt-8 lg:mt-10">
          <div className="relative z-10 flex flex-col items-center justify-center">
            <div className="max-w-[1200px] mx-auto">
              {/* Desktop */}
              <TestimonialsDesktop columns={desktopColumns} />

              {/* Mobile */}
              <TestimonialsMobile items={mobileList} />

              {/* Bottom gradient fade overlay */}
              <div
                className="absolute bottom-[-100px] left-0 w-full h-[100px] lg:h-[600px] pointer-events-none"
                style={{
                  background:
                    "linear-gradient(360deg, rgb(2, 4, 14) 70%, transparent 100%)",
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* CTA + Students counter */}
        <div className="flex flex-col items-center justify-center lg:mt-[-300px] z-20 relative">
          <CTAButton
            href={ctaData.href}
            image={ctaData.image}
            alt={ctaData.alt}
          />
          <StudentsCounter
            imgSrc={studentsCounterData.imgSrc}
            countText={studentsCounterData.text}
          />
        </div>
      </div>
    </section>
  );
};

export default WinningSection;
