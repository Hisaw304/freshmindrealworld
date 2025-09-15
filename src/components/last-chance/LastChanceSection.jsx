// src/components/last-chance/LastChanceSection.jsx
import React from "react";
import "../../c/e106afa7b21e01c4.css";
import lastChanceItems from "../../data/lastChance";
import LastChanceGrid from "./LastChanceGrid";
import LastChanceCTA from "./LastChanceCTA";

const LastChanceSection = () => {
  return (
    <div className="mt-20">
      <section className="w-full relative mb-[80px] lg:mb-[196px] z-20">
        <div className="z-10 relative px-4">
          {/* Section Heading */}
          <h2 className="uppercase text-center gradient-text capitalize switzer tracking-[-1px] lg:tracking-[-3px]">
            This is your <span className="gradient-text-2">last chance</span>
          </h2>

          {/* Grid of cards */}
          <LastChanceGrid items={lastChanceItems} />

          {/* CTA button */}
          <LastChanceCTA />
        </div>
      </section>
    </div>
  );
};

export default LastChanceSection;
