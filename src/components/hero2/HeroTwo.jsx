import React from "react";
import BackgroundLayers from "./BackgroundLayers";
import HeroVideo from "./HeroVideo";
import ProgressSteps from "./ProgressSteps";

export default function HeroTwo() {
  return (
    <main className="relative z-10 overflow-hidden bg-[#02040e] homeC">
      <BackgroundLayers />

      <div className="relative">
        {/* top mobile video */}
        <div style={{ opacity: 1, transform: "translateY(0px)" }}>
          <div className="relative lg:hidden">
            <HeroVideo iframeSrc="/c/a5e71f76f355ba1bef6f98325c0e65a9.html" />
          </div>
        </div>

        {/* content block you pasted (desktop variant and heading + CTA) */}
        <section className="pb-12 lg:pb-4 flex flex-col items-center max-w-[1059px] mx-auto">
          {/* desktop background block (hidden on mobile) */}
          <div className="hidden lg:block absolute top-80 left-0 z-20 pointer-events-none w-full flex justify-center">
            <img
              alt="Background"
              loading="lazy"
              className="w-full h-auto"
              src="/c/video_bg.png"
            />
            <div className="glow-b max-w-full"></div>
            <div className="right-fade-b pointer-events-none"></div>
            <div className="left-fade-b pointer-events-none"></div>
          </div>

          <div className="newglow-c left-0 top-1/2"></div>

          {/* logo + title */}
          <div className="hidden w-full lg:flex flex-col items-center justify-center">
            <img
              alt="Logo"
              loading="lazy"
              className="lg:w-[85px] lg:h-[85px] mt-2"
              src="/c/jtrw_logo.png"
            />
            <h1 className="pagetitle w-full">THE REAL WORLD</h1>

            <div className="rounded-full border-[1px] border-white/50 p-[6px] mt-2 lg:mt-4 relative z-10">
              <div
                className="flex flex-row items-center gap-2 justify-center px-6 py-2 rounded-full"
                style={{
                  background:
                    "linear-gradient(100.33deg, rgba(255,255,255,0.15) 5.1%, rgba(255,255,255,0.016) 83.56%)",
                  border: "1px solid rgba(153,153,153,0.25)",
                }}
              >
                <img
                  alt="Enrolled People"
                  loading="lazy"
                  width="48"
                  height="22"
                  src="/c/students.png"
                />
                <p className="xsmall switzer">
                  <span className="text-white font-extrabold text-lg">
                    155,000+
                  </span>{" "}
                  students
                </p>
              </div>
            </div>
          </div>

          <h2 className="special text-white text-center lg:px-4 max-w-[330px] lg:max-w-full py-2 mt-4 texture-text capitalize switzer tracking-[-1px] lg:tracking-[-3px]">
            <span className="gradient-text-2">money</span> making is a skill
            <span className="gradient-text-2">.</span>
          </h2>

          <p className="px-4 text-center max-w-[744px] switzer mt-2 relative">
            <svg
              className="absolute top-[5px] left-[-4px] text-white"
              viewBox="0 0 512 512"
              width="1em"
              height="1em"
              fill="currentColor"
              stroke="currentColor"
            >
              <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
            </svg>
            <span className="text-white"> The clock is ticking, </span> the
            world is spinning,
            <br />
            and the only constant is relentless change.
          </p>

          <div className="w-full mt-2 px-4 relative max-w-[960px]">
            <div className="hidden lg:block relative z-30 mt-6">
              <div className="glowbox left-[calc(50%-250px)] bottom-[-250px] z-0"></div>
              <h1 className="hidden lg:block absolute bottom-[-28px] right-0">
                THE REAL WORLD
              </h1>

              <div className="border-[2px] border-[rgba(255,255,255,.2)] rounded-[25px] overflow-hidden p-[1px] bg-[rgba(255,255,255,0.09)]">
                <div className="relative">
                  <div className="min-h-[520px] w-full relative">
                    <div className="w-[150%] ml-[-25%]">
                      <div
                        className="w-full min-h-[280px]"
                        style={{ position: "relative" }}
                      >
                        {/* mobile iframe duplicate (optional) */}
                        <HeroVideo iframeSrc="/c/a5e71f76f355ba1bef6f98325c0e65a9(1).html" />
                      </div>

                      <div className="absolute top-0 left-0 h-full w-full bg-top bg-cover bg-[rgba(0,0,0,.6)]">
                        <svg
                          className="absolute h-[65px] w-[65px] lg:h-[83px] lg:w-[83px] cursor-pointer text-white"
                          style={{
                            top: "calc(50% - 32px)",
                            left: "calc(50% - 32px)",
                          }}
                          viewBox="0 0 512 512"
                          fill="currentColor"
                          stroke="currentColor"
                        >
                          <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="glowborder absolute left-[calc(50%-370px)] bottom-[-2px]"></div>
                  <div className="glowborderwhite absolute left-[calc(50%-370px)] top-[-2px]"></div>
                </div>
              </div>
            </div>
          </div>

          <a
            className="px-4 mt-4 lg:mt-8 relative"
            href="https://www.jointherealworld.com/checkout"
          >
            <div className="smallglow"></div>
            <div className="button-container duration-500 transition-all w-full group overflow-hidden">
              <img
                alt="Button Join TRW"
                loading="lazy"
                className="w-[340px] h-auto"
                src="/c/button.png"
              />
              <div
                className="left-[50%] top-[50%] w-[0px] h-[0px] bg-[#ffffff1a] rounded-full group-hover:w-[500px] group-hover:h-[500px] duration-500 transition-all absolute pointer-events-none text-center group-hover:left-[calc(50%-250px)] group-hover:top-[calc(50%-250px)]"
                style={{ willChange: "height, width, top, left" }}
              />
            </div>
          </a>

          {/* progression steps */}
          <ProgressSteps />
        </section>
      </div>

      <div className="glow-c max-w-full"></div>
      <div className="glow-orange-c max-w-full right-[-500px] top-1/4"></div>
      <div className="glow-orange-c max-w-full left-[-500px] top-1/4"></div>
    </main>
  );
}
