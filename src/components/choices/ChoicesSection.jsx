import React from "react";
import choicesData from "../../data/choicesData";
import ChoiceCard from "./ChoiceCard";

const ChoicesSection = () => {
  const { background, eyebrow, title, cards } = choicesData;

  return (
    <section className="w-full relative z-20 pb-24 lg:pb-[120px] flex flex-col items-center pt-20">
      {/* Background */}
      <div className="h-full w-full absolute top-0 left-0 z-0 pointer-events-none flex justify-center">
        <img
          src={background.src}
          alt="Background Choices"
          className="lg:w-full object-cover"
        />
        {background.darkOverlayOnLg && (
          <div
            className="hidden lg:block w-full absolute h-full top-0 left-0"
            style={{ background: "rgba(0,0,0,0.8)" }}
          ></div>
        )}
        <div className="top-fade-b pointer-events-none"></div>
        <div className="hidden lg:block left-fade-b pointer-events-none"></div>
        <div className="hidden lg:block right-fade-b pointer-events-none"></div>
        <div className="bottom-fade-b pointer-events-none"></div>
      </div>

      {/* Content */}
      <div
        className="relative z-10"
        style={{ opacity: 1, transform: "translateY(20px)" }}
      >
        <div className="max-w-[1236px] mx-auto">
          <h3 className="uppercase text-center">{eyebrow}</h3>
          <h2 className="capitalize switzer tracking-[-1px] lg:tracking-[-3px] mb-4 lg:mb-8 text-center mx-4 mt-3">
            <span className="gradient-text texture-text">{title}</span>
          </h2>
        </div>

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-4 w-full lg:mt-12 px-4">
          {cards.map((card, i) => (
            <ChoiceCard key={i} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChoicesSection;
