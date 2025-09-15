import React from "react";
import "../../c/e106afa7b21e01c4.css";
/**
 * iframeSrc should point at the local html you had in the raw file.
 * If you put that file into public/c/ then use "/c/a5e71f76f355ba1bef6f98325c0e65a9.html"
 */
export default function MobileVideo({
  iframeSrc = "/c/a5e71f76f355ba1bef6f98325c0e65a9.html",
}) {
  return (
    <div className="relative ">
      <div className="relative min-h-[240px]">
        <h1 className="lg:hidden absolute bottom-[-20px] right-0 pointer-events-none">
          THE REAL WORLD
        </h1>

        <div style={{ opacity: 1, transform: "translateY(0px)" }}>
          <div className="relative">
            <div className="w-full relative">
              <div
                className="w-full lg:hidden undefined"
                style={{ position: "relative", paddingTop: "56.338%" }}
              >
                <iframe
                  src={iframeSrc}
                  frameBorder="0"
                  height="100%"
                  width="100%"
                  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    inset: 0,
                    height: "100%",
                    width: "100%",
                  }}
                  title="Hero Video"
                />
              </div>

              <div className="absolute top-0 left-0 h-full w-full bg-top bg-cover bg-[rgba(0,0,0,.6)] min-h-[240px] opacity-100">
                {/* Play icon centered exactly like raw HTML */}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="absolute h-[65px] w-[65px] lg:h-[83px] lg:w-[83px] cursor-pointer text-white"
                  height="1em"
                  width="1em"
                  style={{
                    top: "calc(50% - 32px)",
                    left: "calc(50% - 32px)",
                  }}
                  aria-hidden
                >
                  <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 w-full h-[158px] pointer-events-none"
          style={{
            background:
              "linear-gradient(rgba(0, 0, 0, 0) 80%, rgb(0, 0, 0) 100%)",
          }}
        />
      </div>
    </div>
  );
}
