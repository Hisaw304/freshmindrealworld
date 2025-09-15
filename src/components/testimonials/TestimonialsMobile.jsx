// src/components/winning/TestimonialsMobile.jsx
import React from "react";
import TestimonialImage from "./TestimonialImage";

const TestimonialsMobile = ({ items }) => {
  return (
    <div className="w-full grid grid-cols-1 lg:hidden gap-4">
      <div
        className="testimonial-column gap-4 flex-col flex"
        style={{ width: "100%" }}
      >
        {items.map((src, idx) => (
          <TestimonialImage key={idx} src={src} variant="mobile" />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsMobile;
