// src/components/winning/HeadingBlock.jsx
import React from "react";

const HeadingBlock = ({ smallTitle, title, swirlSrc }) => {
  return (
    <>
      <h3 className="uppercase text-center mb-3 switzer">{smallTitle}</h3>
      <h2 className="capitalize text-center relative max-w-[320px] lg:max-w-full mx-auto">
        <span className="gradient-text texture-text relative capitalize switzer tracking-[-1px] lg:tracking-[-3px]">
          {title}
          <img
            alt="Winning Circle Swirl"
            loading="lazy"
            decoding="async"
            className="absolute bottom-[-5px] lg:bottom-[-10px] lg:right-[-60px] w-40 lg:w-auto right-[-15px]"
            src={swirlSrc}
            style={{ color: "transparent" }}
          />
        </span>
      </h2>
    </>
  );
};

export default HeadingBlock;
