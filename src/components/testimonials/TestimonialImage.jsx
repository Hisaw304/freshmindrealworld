// src/components/winning/TestimonialImage.jsx
import React from "react";

const TestimonialImage = ({ src, alt = "Testimonial Snapshot", variant }) => {
  const desktopCls =
    "w-[100%] cursor-pointer bg-background-b p-[1px] rounded-lg hover:scale-105 duration-300 transition-all";
  const mobileCls = "w-full h-auto cursor-pointer w-full";

  return (
    <img
      alt={alt}
      loading="lazy"
      decoding="async"
      className={variant === "desktop" ? desktopCls : mobileCls}
      src={src}
      style={{ color: "transparent" }}
    />
  );
};

export default TestimonialImage;
