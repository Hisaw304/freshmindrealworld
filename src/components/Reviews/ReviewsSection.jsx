import React, { useState } from "react";
import ReviewCard from "./ReviewCard";
import CarouselControls from "./CarouselControls";
import CTAButton from "./CTAButton";
import AccessInfo from "./AccessInfo";
import LoaderOverlay from "./LoaderOverlay";
import ReviewGrid from "./ReviewGrid"; // 👈 NEW
import "../../c/e106afa7b21e01c4.css";

const reviews = [
  {
    videoSrc:
      "https://iframe.cloudflarestream.com/45e03b48ec5dc2caf27e99193761f26f?muted=true&preload=metadata&loop=true&controls=false",
    name: "Luke",
    age: "19",
    flagSrc: "/c/flag_usa.png",
    sales: "250K",
  },
  {
    videoSrc:
      "https://iframe.cloudflarestream.com/de951a6359bed8df49031d7ae2c2acb1?muted=true&preload=metadata&loop=true&controls=false",
    name: "Luke",
    age: "19",
    flagSrc: "/c/flag_usa.png",
    sales: "250K",
  },
  {
    videoSrc:
      "https://iframe.cloudflarestream.com/5363cd2b78d0ddce2398996221b15574?muted=true&preload=metadata&loop=true&controls=false",
    name: "Luke",
    age: "19",
    flagSrc: "/c/flag_usa.png",
    sales: "250K",
  },
];

const ReviewsSection = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const getIndex = (offset) =>
    (current + offset + reviews.length) % reviews.length;

  return (
    <section className="px-4 reviews mt-12 lg:mt-28 z-10" id="reviews">
      {/* 👇 MOBILE GRID */}
      <div className="block lg:hidden">
        <ReviewGrid reviews={reviews} />
      </div>

      {/* 👇 DESKTOP CAROUSEL */}
      <div className="hidden lg:block w-full lg:w-[46vw] mx-auto">
        <div className="relative">
          <div className="relative w-full border-[1px] border-[#3B3B3B] rounded-[25px]">
            {/* LEFT (peeking) */}
            <div
              className="hidden lg:block absolute top-0 left-[-92%] w-full z-10 pr-6"
              style={{ minHeight: 233 }}
            >
              <ReviewCard {...reviews[getIndex(-1)]} />

              <div
                className="hidden lg:block blur-2xl w-full h-[150%] absolute z-20 top-[-25%] right-6 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, rgb(2, 4, 14) 60%, transparent 100%)",
                }}
              />

              <CarouselControls
                direction="left"
                position="right"
                onClick={prevSlide}
              />
            </div>

            {/* Loader (left) */}
            <LoaderOverlay position="left" />

            {/* CENTER */}
            <div
              className="overflow-hidden rounded-[25px] p-12 bg-[#02040e] relative"
              style={{ minHeight: 233 }}
            >
              <ReviewCard {...reviews[current]} />
            </div>

            {/* RIGHT (peeking) */}
            <div
              className="hidden lg:block absolute top-0 right-[-92%] w-full z-10 pl-6"
              style={{ minHeight: 233 }}
            >
              <ReviewCard {...reviews[getIndex(1)]} />

              <div
                className="hidden lg:block blur-2xl w-full h-[150%] absolute z-20 top-[-25%] left-6 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(270deg, rgb(2, 4, 14) 60%, transparent 100%)",
                }}
              />

              <CarouselControls
                direction="right"
                position="left"
                onClick={nextSlide}
              />
            </div>

            {/* Loader (right) */}
            <LoaderOverlay position="right" />
          </div>
        </div>

        {/* CTA + Access Info */}
        <div className="flex flex-col items-center justify-center mt-10">
          <CTAButton />
          <div className="mt-4">
            <AccessInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
