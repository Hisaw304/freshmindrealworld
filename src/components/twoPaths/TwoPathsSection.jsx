// src/components/twoPaths/TwoPathsSection.jsx
import React from "react";
import VideoOverlay from "./VideoOverlay";
import DividerGraphic from "./DividerGraphic";
import PathCard from "./PathCard";
import VSIcon from "./VSIcon";
import twoPathsData from "../../data/twoPathsData";
import "../../c/e106afa7b21e01c4.css"; // keep original CSS

const TwoPathsSection = () => {
  return (
    <section className="w-full relative mb-[80px] lg:mb-[196px] z-20 overflow-hidden">
      {/* Background image */}
      <div className="lg:block w-full absolute top-0 left-0 z-0 max-h-[1020px]">
        <img
          alt="Background C"
          loading="lazy"
          width="1728"
          height="1669"
          decoding="async"
          className="w-full lg:w-full h-[800px] lg:h-auto mx-auto"
          src="/c/hero_bg.png"
        />
        <div className="top-fade-b pointer-events-none" />
        <div className="left-fade-b pointer-events-none" />
        <div className="right-fade-b pointer-events-none" />
        <div className="bottom-fade-b pointer-events-none" />
      </div>

      <div className="z-10 relative px-4">
        {/* Heading */}
        <h3 className="uppercase text-center py-4 mb-3 switzer">
          YOU MUST CHOOSE
        </h3>
        <h2
          className="capitalize switzer tracking-[-1px] lg:tracking-[-3px] text-center gradient-text texture-text 
             max-w-[280px] mx-auto lg:max-w-full py-4 
             !text-[36px] lg:!text-[55px] leading-[1.4] lg:leading-[1.2]"
        >
          two paths lie before you
        </h2>

        {/* Video */}
        <div className="max-w-[832px] mx-auto w-full pt-4 relative z-10">
          <VideoOverlay src="https://iframe.cloudflarestream.com/ded5df3a439e7f8419ccbd653cffae1b?muted=true&preload=metadata&loop=true&autoplay=true&controls=true" />
        </div>

        {/* Divider graphic */}
        <DividerGraphic />

        {/* Path cards */}
        <div className="flex w-full gap-12 lg:gap-0 flex-col lg:flex-row items-center justify-evenly mt-4 lg:mt-32 max-w-[1280px] mx-auto">
          <PathCard {...twoPathsData[0]} />
          <VSIcon />
          <PathCard {...twoPathsData[1]} />
        </div>
      </div>
    </section>
  );
};

export default TwoPathsSection;
