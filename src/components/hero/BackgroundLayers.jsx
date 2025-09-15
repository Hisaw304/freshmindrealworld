import React from "react";
import "../../c/e106afa7b21e01c4.css";
// If hero_bg is in src/c you can import it; if it's in public/c use the public path in <img src="">
// import heroBg from "../../c/hero_bg.png";

export default function BackgroundLayers() {
  return (
    <div className="absolute top-0 left-0 z-0 pointer-events-none w-full flex justify-center">
      {/* If you put hero_bg.png in public/c use src="/c/hero_bg.png" so srcset remains simple */}
      <img
        alt="Background C"
        loading="lazy"
        width="1728"
        height="1669"
        decoding="async"
        className="w-full lg:w-full h-[800px] lg:h-auto mx-auto"
        src="/c/hero_bg.png"
        srcSet="/c/hero_bg.png 1x, /c/hero_bg.png 2x"
        style={{ color: "transparent" }}
      />

      <div className="glow-b max-w-full"></div>
      <div className="top-fade-b pointer-events-none"></div>
      <div className="bottom-fade-b pointer-events-none"></div>
      <div className="right-fade-b pointer-events-none"></div>
      <div className="left-fade-b pointer-events-none"></div>
    </div>
  );
}
