// src/components/winning/StudentsCounter.jsx
import React from "react";

const StudentsCounter = ({ imgSrc, countText }) => {
  return (
    <div className="flex flex-row items-center gap-2 justify-center px-4 mt-4">
      <img
        alt="Enrolled People"
        loading="lazy"
        decoding="async"
        src={imgSrc}
        width="70"
        height="30"
        style={{ color: "transparent" }}
      />
      <p className="xsmall switzer">
        <span className="text-white font-bold">{countText}</span> like-minded
        students
      </p>
    </div>
  );
};

export default StudentsCounter;
