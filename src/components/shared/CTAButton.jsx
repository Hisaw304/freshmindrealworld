// src/components/shared/CTAButton.jsx
import React from "react";

const CTAButton = ({ href, image, bad }) => {
  return (
    <a className="px-4 relative" href={href}>
      <div
        className={`button-container ${
          bad ? "bad" : ""
        } duration-500 transition-all w-full group overflow-hidden`}
      >
        <img
          alt="Button Join TRW"
          loading="lazy"
          width="380"
          height="100"
          decoding="async"
          className="w-[340px] h-[auto]"
          src={image}
        />
        {!bad && (
          <div className="left-[50%] top-[50%] w-[0px] h-[0px] bg-[#ffffff1a] rounded-full group-hover:w-[500px] group-hover:h-[500px] duration-500 transition-all absolute pointer-events-none text-center group-hover:left-[calc(50%-250px)] group-hover:top-[calc(50%-250px)]" />
        )}
      </div>
    </a>
  );
};

export default CTAButton;
