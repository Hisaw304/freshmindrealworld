import React, { useState } from "react";

export default function HeroVideo({
  iframeSrc = "/c/a5e71f76f355ba1bef6f98325c0e65a9.html",
}) {
  const [showOverlay, setShowOverlay] = useState(true);

  return (
    <div className="relative">
      <div className="relative min-h-[240px]">
        <h1 className="absolute bottom-[-20px] right-0 pointer-events-none">
          THE REAL WORLD
        </h1>

        {/* Responsive video wrapper */}
        <div className="relative w-full aspect-video max-h-[80vh]">
          <iframe
            src={`${iframeSrc}?autoplay=1&mute=1&loop=1&playsinline=1`}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            title="Hero Video"
          />

          {/* Optional overlay */}
          {showOverlay && (
            <div
              className="absolute inset-0 bg-[rgba(0,0,0,.4)] flex items-center justify-center cursor-pointer transition-opacity duration-500"
              onClick={() => setShowOverlay(false)}
            >
              <svg
                viewBox="0 0 512 512"
                className="h-[65px] w-[65px] lg:h-[83px] lg:w-[83px] text-white"
                fill="currentColor"
              >
                <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
              </svg>
            </div>
          )}
        </div>

        {/* bottom gradient */}
        <div
          className="absolute bottom-0 left-0 w-full h-[158px] pointer-events-none"
          style={{
            background: "linear-gradient(rgba(0,0,0,0) 80%, rgb(0,0,0) 100%)",
          }}
        />
      </div>
    </div>
  );
}
