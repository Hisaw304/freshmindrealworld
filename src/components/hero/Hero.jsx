import React from "react";
import BackgroundLayers from "./BackgroundLayers";
import MobileVideo from "./MobileVideo";

export default function Hero() {
  return (
    <main className="relative z-10 overflow-hidden bg-[#02040e] homeC">
      <BackgroundLayers />

      <div className="relative">
        <div style={{ opacity: 1, transform: "translateY(0px)" }}>
          {/* mobile video section exactly as in the raw HTML */}
          <MobileVideo iframeSrc="/c/a5e71f76f355ba1bef6f98325c0e65a9.html" />
        </div>
      </div>
    </main>
  );
}
