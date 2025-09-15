import React, { useState, useCallback } from "react";

const TimelineStep = ({
  icon,
  iconAlt,
  title,
  videoSrc,
  desktopImage,
  desktopAlt,
  desktopImageClass,
  glowClass,
  iconSize,
  points,
  reverse = false,
}) => {
  const [isPlaying, setIsPlaying] = useState(true); // autoplay on mobile

  const onPlay = useCallback(() => setIsPlaying(true), []);
  const onKey = useCallback((e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsPlaying(true);
    }
  }, []);

  // Fix duplicate ? in URL
  const iframeSrc = videoSrc.includes("?")
    ? `${videoSrc}&autoplay=1&mute=1&playsinline=1`
    : `${videoSrc}?autoplay=1&mute=1&playsinline=1`;

  return (
    <div
      className={`flex flex-col lg:flex-row items-center justify-between ${
        reverse ? "lg:flex-row-reverse" : ""
      } mt-16 gap-4 lg:gap-12 pl-4 lg:pl-0`}
    >
      {/* Media */}
      <figure className="lg:w-1/2 flex justify-center relative px-4 lg:px-0 w-full">
        <div className={glowClass}></div>

        {/* Mobile video */}
        <div
          className="w-full lg:hidden"
          style={{ position: "relative", paddingTop: "56.25%" }}
        >
          {isPlaying && (
            <iframe
              src={iframeSrc}
              title={title}
              frameBorder="0"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
              }}
            />
          )}
        </div>

        {/* Desktop static image */}
        <div className="hidden lg:block border-[1px] border-white/25 rounded-[25px] bg-white/10 relative w-[520px] h-[320px] overflow-hidden pointer-events-none">
          <img
            alt={desktopAlt}
            loading="lazy"
            decoding="async"
            className={desktopImageClass}
            src={desktopImage}
          />
        </div>
      </figure>

      {/* Content */}
      <div className="lg:w-1/2 lg:pl-16 px-4 lg:pr-0">
        <div className="flex gap-4 px-4 lg:px-0 mb-3 lg:mb-0 items-center">
          <img
            alt={iconAlt}
            loading="lazy"
            width={iconSize?.w || 38}
            height={iconSize?.h || 26}
            className="fill-white"
            src={icon}
          />
          <h2 className="gradient-text capitalize subtitle switzer">{title}</h2>
        </div>

        {points.map((pt, i) => (
          <div
            key={i}
            className="step mt-2 duration-500 transition-all flex items-start gap-2"
          >
            <img
              alt="Checkmark Icon"
              loading="lazy"
              width="20"
              height="15"
              src="./The Real World _ Official Portal by Andrew Tate_files/check2.svg"
            />
            <p
              className="text-pretty switzer"
              dangerouslySetInnerHTML={{ __html: pt }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineStep;
