// src/components/testimonials/TestimonialsGrid.jsx
import React from "react";

const TestimonialsGrid = ({ testimonials }) => {
  return (
    <div className="relative mt-8 lg:mt-10">
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="max-w-[1200px] mx-auto">
          {/* Desktop grid */}
          <div className="w-full hidden lg:grid lg:grid-cols-3 gap-4">
            {testimonials.map((column, colIdx) => (
              <div
                key={colIdx}
                className="testimonial-column gap-4 flex-col flex"
                style={{ width: "33.3333%" }}
              >
                {column.map((img, idx) => (
                  <img
                    key={idx}
                    alt="Testimonial Snapshot"
                    loading="lazy"
                    decoding="async"
                    width="300"
                    height="300"
                    className="w-full cursor-pointer bg-background-b p-[1px] rounded-lg hover:scale-105 duration-300 transition-all"
                    src={img}
                    style={{ color: "transparent" }}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Mobile single column */}
          <div className="w-full grid grid-cols-1 lg:hidden gap-4">
            <div className="testimonial-column gap-4 flex-col flex w-full">
              {testimonials.flat().map((img, idx) => (
                <img
                  key={idx}
                  alt="Testimonial Snapshot"
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="400"
                  className="w-full h-auto cursor-pointer"
                  src={img}
                  style={{ color: "transparent" }}
                />
              ))}
            </div>
          </div>

          {/* Bottom gradient overlay */}
          <div
            className="absolute bottom-[-100px] left-0 w-full h-[100px] lg:h-[600px] pointer-events-none"
            style={{
              background:
                "linear-gradient(360deg, rgb(2, 4, 14) 70%, transparent 100%)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsGrid;
