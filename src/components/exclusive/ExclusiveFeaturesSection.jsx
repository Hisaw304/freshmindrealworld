import React from "react";
import FeatureCard from "./FeatureCard";
import CTAButton from "../shared/CTAButton";
import exclusiveFeaturesData from "../../data/exclusiveFeaturesData";
import "../../c/e106afa7b21e01c4.css";

const ExclusiveFeaturesSection = () => {
  const { bgImage, lockIcon, headingKicker, headingTitle, cta, features } =
    exclusiveFeaturesData;

  return (
    <section className="w-full relative mt-24 lg:mt-0 mb-12 z-20">
      <div
        /* reveal anim wrapper from raw HTML */ style={{
          // opacity: 0,
          transform: "translateY(20px)",
        }}
      >
        <div className="z-10 py-2 relative px-4">
          {/* Background image + fades */}
          <div className="absolute top-0 left-0 z-0 pointer-events-none w-full flex justify-center">
            <img
              alt="Background C"
              className="w-full lg:w-full h-[800px] lg:h-auto mx-auto"
              src={bgImage}
            />
            <div className="top-fade-b pointer-events-none"></div>
            <div className="bottom-fade-b pointer-events-none"></div>
            <div className="right-fade-b pointer-events-none"></div>
            <div className="left-fade-b pointer-events-none"></div>
          </div>

          {/* Headings */}
          <h3 className="uppercase text-center text-[16px] mb-2 hidden lg:block relative z-10">
            {headingKicker}
          </h3>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-4 relative z-10">
            <img
              alt="Exclusive Features"
              className="h-[30px] lg:h-[52px]"
              src={lockIcon}
            />
            <h3 className="uppercase text-center my-2 lg:hidden">
              {headingKicker}
            </h3>
            <h2 className="capitalize switzer tracking-[-1px] lg:tracking-[-3px] text-center gradient-text texture-text max-w-[280px] lg:max-w-[740px] mx-auto lg:mx-0">
              {headingTitle}
            </h2>
          </div>

          {/* Feature list */}
          <div className="max-w-[1170px] mx-auto flex flex-col gap-4 mt-6 relative z-10">
            {features.map((f, i) => (
              <FeatureCard
                key={i}
                image={f.image}
                alt={f.alt}
                title={f.title}
                points={f.points}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center w-full relative z-10 mt-4">
          <CTAButton href={cta.href} image={cta.image} alt={cta.alt} />
        </div>
      </div>
    </section>
  );
};

export default ExclusiveFeaturesSection;
