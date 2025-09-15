import React from "react";
import "../../c/e106afa7b21e01c4.css";

const CarouselControls = ({ direction, onClick, position = "right" }) => {
  const isLeft = direction === "left";
  const edgeClass = position === "left" ? "left-10" : "right-10";

  return (
    <div
      onClick={onClick}
      className={`hidden lg:flex z-30 text-white hover:text-[#ffbb38]
        border border-white rounded-full h-[84px] w-[84px]
        items-center justify-center cursor-pointer
        transition-transform duration-300 hover:scale-105 absolute ${edgeClass}`}
      style={{ top: "50%", transform: "translateY(-50%)" }}
    >
      {isLeft ? (
        <svg
          viewBox="0 0 512 512"
          fill="currentColor"
          className="h-8 w-8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 512 512"
          fill="currentColor"
          className="h-8 w-8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
        </svg>
      )}
    </div>
  );
};

export default CarouselControls;
