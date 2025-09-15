// src/components/winning/BackgroundFades.jsx
import React from "react";

const BackgroundFades = () => {
  return (
    <div className="lg:block w-full absolute top-0 left-0 z-0 max-h-[1900px] bg-background-b">
      <div className="top-fade-b pointer-events-none"></div>
      <div className="left-fade-b pointer-events-none"></div>
      <div className="right-fade-b pointer-events-none"></div>
      <div className="bottom-fade-b pointer-events-none"></div>
    </div>
  );
};

export default BackgroundFades;
