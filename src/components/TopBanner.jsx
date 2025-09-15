import React from "react";
import bannerIcon from "../c/icon.svg";

export default function TopBanner() {
  return (
    <>
      {/* Hidden H1 for SEO / accessibility */}
      <h1 className="w-2 h-1 pointer-events-none absolute top-0 left-0 rgba(255,255,255,0) sitetitle">
        THE REAL WORLD
      </h1>

      {/* Visible Top Banner */}
      <div className="rootc">
        <div className="lg:fixed top-0 lg:mb-0 z-30 w-full pointer-events-none relative">
          <div>
            <div className="py-2 px-4 lg:py-4 flex flex-row items-center justify-center gap-2 timer CountdownTimerComponent complete duration-300 transition-all opacity-100">
              <a
                className="pointer-events-auto hover:scale-105 duration-300 transition-all hover:underline text-white"
                href="https://www.jointherealworld.com/checkout"
              >
                <div className="flex flex-row items-center gap-4">
                  <img
                    src={bannerIcon}
                    alt="JTRW 2.0 Upgrade In Progress"
                    width="29"
                    height="26"
                    loading="lazy"
                    style={{ color: "transparent" }}
                  />
                  <p className="uppercase text-sm font-bold text-white lg:text-2xl">
                    TRW 2.0 UPGRADE IN PROGRESS
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
