import React from "react";

const ChoiceCard = ({ card }) => {
  const {
    variant,
    icon,
    title,
    titleClass,
    subtitle,
    priceArea,
    features = [],
    cta,
  } = card;

  const isGood = variant === "good";

  return (
    <div
      className={`rounded-lg pricesheet border-[1px] ${
        isGood
          ? "border-[#ffffff16] group duration-500 transition-all"
          : "border-[#ffffff1a]"
      } relative flex flex-col items-center`}
    >
      <div className="flex flex-col items-center w-full relative">
        {icon && <img src={icon} alt={title} className="mb-4" />}
        <h2 className={titleClass}>{title}</h2>
        {subtitle && (
          <h3 className={`mt-3 switzer ${isGood ? "text-white" : ""}`}>
            {subtitle}
          </h3>
        )}
        <div className="w-[240px] mx-auto h-[1px] bg-[#383531] mt-8" />
        {priceArea && (
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className={priceArea.className}>{priceArea.text}</div>
          </div>
        )}

        <div className="w-full justify-start px-4 lg:px-0">
          {features.map((f, i) => {
            if (f.divider) {
              return (
                <div key={i} className="w-full h-[1px] bg-[#383531] my-8" />
              );
            }
            return (
              <div
                key={i}
                className={`flex items-center description gap-4 mt-4 ${
                  f.isSmall ? "justify-center" : ""
                }`}
              >
                {f.icon && (
                  <img
                    src={f.icon}
                    alt="Checkmark"
                    className="w-[22px] h-[18px]"
                  />
                )}
                <div
                  className={`${f.isBad ? "bad" : ""} ${f.textClass || ""} ${
                    f.isSmall ? "small" : ""
                  }`}
                >
                  {f.text}
                </div>
              </div>
            );
          })}
        </div>

        {isGood && (
          <div
            className="opacity-0 group-hover:opacity-30 bg-[#ffbb38] h-48 w-full pointer-events-none rounded-xl absolute bottom-0 left-0 duration-500 transition-all"
            style={{ filter: "blur(100px)" }}
          ></div>
        )}
      </div>

      {cta && (
        <div className="text-center w-full mt-6">
          <a className="px-4 relative" href={cta.href}>
            {isGood && <div className="smallglow"></div>}
            <div
              className={`${cta.buttonContainerClass} duration-500 transition-all w-full group overflow-hidden`}
            >
              <img
                src={cta.image}
                alt={cta.alt}
                className="w-[340px] h-auto mx-auto"
              />
              {isGood && (
                <div
                  className="left-[50%] top-[50%] w-[0px] h-[0px] bg-[#ffffff1a] rounded-full group-hover:w-[500px] group-hover:h-[500px] duration-500 transition-all absolute pointer-events-none text-center group-hover:left-[calc(50%-250px)] group-hover:top-[calc(50%-250px)]"
                  style={{ willChange: "height, width, top, left" }}
                ></div>
              )}
            </div>
          </a>
        </div>
      )}
    </div>
  );
};

export default ChoiceCard;
