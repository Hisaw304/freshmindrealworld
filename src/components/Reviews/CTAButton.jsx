import React from "react";
import "../../c/e106afa7b21e01c4.css";

const CTAButton = () => {
  return (
    <a
      className="relative flex justify-center"
      href="https://www.jointherealworld.com/checkout"
    >
      {/* Glow effect */}
      <div className="smallglow absolute inset-0"></div>

      {/* Button container */}
      <div className="button-container relative group overflow-hidden">
        <img
          alt="Button Join TRW"
          width="380"
          height="100"
          className="w-[380px] h-auto relative z-10"
          src="/c/button.png"
        />

        {/* Expanding hover circle */}
        <div
          className="absolute left-1/2 top-1/2 w-0 h-0 bg-[#ffffff1a] rounded-full 
          group-hover:w-[500px] group-hover:h-[500px] 
          group-hover:left-[calc(50%-250px)] group-hover:top-[calc(50%-250px)] 
          transition-all duration-700 ease-out pointer-events-none z-0"
        ></div>
      </div>
    </a>
  );
};

export default CTAButton;
