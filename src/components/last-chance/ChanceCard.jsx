// src/components/last-chance/ChanceCard.jsx
import React from "react";

const ChanceCard = ({ number, bgImage, icon, alt, title, body }) => {
  return (
    <article className="border-[1px] border-[rgba(255,255,255,.27)] rounded-[25px] relative chance mt-12 lg:mt-0">
      {/* Background image with fade overlays */}
      <div className="lg:block w-full absolute top-0 left-0 z-0 pointer-events-none overflow-hidden h-[80%] rounded-t-[25px]">
        <img
          alt={alt}
          loading="lazy"
          decoding="async"
          className="w-full object-cover h-full"
          src={bgImage}
        />
        <div className="top-fade-b pointer-events-none"></div>
        <div className="bottom-fade-b pointer-events-none"></div>
        <div className="right-fade-b pointer-events-none"></div>
        <div className="left-fade-b pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex justify-center mt-[-40px]">
          <div className="number rounded-full switzer">{number}</div>
        </div>
        <figure className="mt-6 lg:mt-[90px]">
          <img
            alt={alt}
            loading="lazy"
            decoding="async"
            className="mx-auto"
            src={icon}
          />
        </figure>
        <div className="title capitalize px-4 switzer">{title}</div>

        {/* Divider */}
        <div
          className="w-full h-[1px]"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgb(255,255,255) 50%, rgba(255,255,255,0) 100%)",
          }}
        ></div>

        {/* Body */}
        <div
          className="py-4 px-4 text-center text-pretty switzer"
          dangerouslySetInnerHTML={{ __html: body }}
        ></div>
      </div>
    </article>
  );
};

export default ChanceCard;
