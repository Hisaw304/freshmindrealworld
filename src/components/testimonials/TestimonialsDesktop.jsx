// src/components/winning/TestimonialsDesktop.jsx
import React from "react";
import TestimonialImage from "./TestimonialImage";

const TestimonialsDesktop = ({ columns }) => {
  return (
    <div className="w-full hidden lg:grid lg:grid-cols-3 gap-4">
      {columns.map((col, i) => (
        <div
          key={`col-${i}`}
          className="testimonial-column gap-4 flex-col flex"
          style={{ width: "33.3333%" }}
        >
          {col.map((src, idx) => (
            <TestimonialImage key={`${i}-${idx}`} src={src} variant="desktop" />
          ))}
        </div>
      ))}
    </div>
  );
};

export default TestimonialsDesktop;
