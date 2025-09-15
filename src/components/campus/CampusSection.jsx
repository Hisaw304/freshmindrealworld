// src/components/Campus/CampusSection.jsx
import React from "react";
import campusData from "../../data/campusData";
import CampusCard from "./CampusCard";
import NewSkillsBanner from "./NewSkillsBanner";

export default function CampusSection({ data = campusData }) {
  return (
    <section className="w-full relative mt-24 lg:mt-0 mb-[80px] lg:mb-[126px] z-50 overflow-hidden">
      <div className="z-10 relative px-4">
        <h3 className="uppercase text-center mb-3">THE REAL WORLD CAMPUSES</h3>
        <h2 className="text-center texture-text capitalize switzer tracking-[-1px]">
          <span className="gradient-text texture-text">
            10+ wealth creation methods
          </span>
        </h2>
      </div>

      <div className="px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative max-w-[1280px] mx-auto gap-6 lg:gap-[2px] mt-8">
        {data.map((item) => (
          <CampusCard key={item.id} item={item} />
        ))}
      </div>

      <NewSkillsBanner />

      <p className="px-4 text-center mt-6 max-w-3xl mx-auto text-sm leading-relaxed">
        When a new technology revolutionises an industry,
        <br />
        <br />
        <span className="font-bold text-white">
          The Real World will be the first and only place to teach you how to
          take advantage of it.
        </span>
        <br />
        <br />
        Our students receive the latest information at 8am every day.
      </p>
    </section>
  );
}
