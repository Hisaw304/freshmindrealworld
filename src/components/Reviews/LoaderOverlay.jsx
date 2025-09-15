import React from "react";
import "../../c/e106afa7b21e01c4.css";

const LoaderOverlay = ({ position = "left", active = false }) => {
  return (
    <div
      className={`${
        active ? "opacity-100" : "opacity-0 pointer-events-none"
      } duration-500 transition-all absolute w-full h-full top-0 ${
        position === "left"
          ? "left-[calc(-100%-24px)]"
          : "right-[calc(-100%-24px)]"
      } z-20 bg-[rgba(0,0,0,1)]`}
      style={{ minHeight: "233px" }}
    >
      <div className="loader absolute"></div>
    </div>
  );
};

export default LoaderOverlay;
