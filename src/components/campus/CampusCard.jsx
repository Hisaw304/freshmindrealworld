// src/components/Campus/CampusCard.jsx
import React from "react";
import VideoOverlay from "./VideoOverlay";

export default function CampusCard({ item }) {
  const { id, title, description, icon, overlay, iframe, bg } = item;

  return (
    <article
      className="bg-[#09111B] hover:bg-[#171D27] group relative campus duration-300 transition-all rounded-sm"
      aria-labelledby={`campus-${id}-title`}
      style={{ overflow: "hidden" }}
    >
      {/* video area – now on top */}
      <div className="relative">
        <VideoOverlay thumbnail={overlay} iframeSrc={iframe} alt={title} />
      </div>

      {/* text info – now below */}
      <div className="relative pb-6">
        {/* decorative hover lines */}
        <div
          className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 w-0 group-hover:w-full h-0 group-hover:h-[1px] duration-300 transition-all"
          style={{
            background:
              "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.54) 52%, rgba(255, 255, 255, 0) 89%)",
          }}
        />
        <div
          className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 h-0 group-hover:h-full wh-0 group-hover:w-[1px] duration-300 transition-all"
          style={{
            background:
              "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.63) 20%, rgba(255, 255, 255, 0) 38%)",
          }}
        />

        {/* background image */}
        <img
          alt="Campus Background"
          loading="lazy"
          width="577"
          height="406"
          decoding="async"
          className="w-full h-full absolute top-0 left-0 z-0 lg:opacity-0 group-hover:opacity-100 transition-all duration-500"
          src={bg}
          style={{ color: "transparent" }}
        />

        {/* icon + text */}
        <figure className="pt-6 px-6 z-10 relative">
          <img
            alt={`${title} icon`}
            loading="lazy"
            width="20"
            height="20"
            decoding="async"
            src={icon}
            style={{ color: "transparent" }}
          />
        </figure>

        <div
          className="title px-6 mt-8 gradient-text capitalize z-10 relative switzer"
          id={`campus-${id}-title`}
        >
          {title}
        </div>

        <div className="description group-hover:text-white mt-4 px-6 z-10 relative switzer">
          <span>{description}</span>
        </div>
      </div>
    </article>
  );
}
