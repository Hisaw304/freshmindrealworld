import React, { useState } from "react";

const VideoOverlay = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
      {/* Video iframe always rendered */}
      <iframe
        src={src} // no autoplay param
        frameBorder="0"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
        title="Two Paths Video"
      />

      {/* Click overlay */}
      {!isPlaying && (
        <div
          className="absolute inset-0 flex items-center justify-center cursor-pointer"
          onClick={() => setIsPlaying(true)} // just hides overlay
          role="button"
          aria-label="Play video"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setIsPlaying(true)}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            viewBox="0 0 512 512"
            className="h-[65px] w-[65px] lg:h-[83px] lg:w-[83px] text-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9v176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default VideoOverlay;
