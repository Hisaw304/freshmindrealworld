// src/components/twoPaths/PathCard.jsx
import React from "react";
import CTAButton from "../shared/CTAButton";

const PathCard = ({ subtitle, title, description, link, buttonImage, bad }) => {
  return (
    <div className={`path pt-2 mt-0 ${bad ? "" : ""}`}>
      <div
        className={`subtitle uppercase switzer ${bad ? "" : "gradient-text-2"}`}
      >
        {subtitle}
      </div>
      <div className={`title switzer ${bad ? "" : "gradient-text-2"}`}>
        {title}
      </div>
      <div className={`description switzer ${bad ? "" : "text-white"}`}>
        {description}
      </div>
      <div className="mt-4">
        <CTAButton href={link} image={buttonImage} bad={bad} />
      </div>
    </div>
  );
};

export default PathCard;
