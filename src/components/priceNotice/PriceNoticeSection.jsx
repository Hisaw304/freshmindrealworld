// src/components/priceNotice/PriceNoticeSection.jsx
import React from "react";
import priceNoticeData from "../../data/priceNoticeData";
import CTAButton from "../shared/CTAButton";
import "../../c/e106afa7b21e01c4.css";

const PriceNoticeSection = () => {
  const { subtitle, title, description, icon, cta } = priceNoticeData;

  return (
    <section className="w-full relative mt-0 lg:mt-[120px] mb-[80px] lg:mb-[120px] z-20">
      {/* Wrapper (animated later) */}
      <div
        className="relative z-10 px-4"
        style={{ opacity: 1, transform: "translateY(0)" }}
      >
        {/* Subtitle */}
        <h3 className="hidden lg:block uppercase text-center">{subtitle}</h3>

        {/* Title + Icon */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-4">
          <img
            src={icon}
            alt={subtitle}
            width={52}
            height={47}
            className="mb-2 lg:mb-0"
          />
          <h3 className="lg:hidden uppercase text-center mt-1 lg:mt-0">
            {subtitle}
          </h3>
          <h2 className="capitalize switzer tracking-[-1px] lg:tracking-[-3px] text-center gradient-text texture-text">
            {title}
          </h2>
        </div>

        {/* Description */}
        <p
          className="text-center max-w-[761px] mx-auto mt-4 lg:mt-8 text-pretty"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        {/* CTA */}
        <div className="flex mx-auto justify-center mt-4">
          <CTAButton href={cta.href} image={cta.image} alt={cta.alt} />
        </div>
      </div>
    </section>
  );
};

export default PriceNoticeSection;
