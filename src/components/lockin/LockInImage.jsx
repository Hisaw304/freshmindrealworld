import React from "react";

const LockInImage = ({ src, alt, isMobile }) => {
  return (
    <figure
      className={`relative w-full ${
        isMobile ? "lg:hidden mb-4" : "hidden lg:block"
      }`}
    >
      <img
        alt={alt}
        loading="lazy"
        decoding="async"
        className="w-full opacity-100 relative z-10 h-[256px] lg:h-auto object-cover"
        src={src}
      />
      <div className="left-fade-b pointer-events-none"></div>
      {isMobile ? (
        <div className="lright-fade-b pointer-events-none"></div>
      ) : (
        <div className="lg:hidden right-fade-b pointer-events-none"></div>
      )}
      <div className="bottom-fade-b pointer-events-none"></div>
      <div className="top-fade-b pointer-events-none"></div>
    </figure>
  );
};

export default LockInImage;
