import React from "react";
import "../../c/e106afa7b21e01c4.css";
import LockInImage from "./LockInImage";
import LockInContent from "./LockInContent";
import data from "../../data/lockin";

const LockInSection = () => {
  return (
    <section className="w-full relative my-[120px]">
      <div>
        <div className="split-info">
          {/* Mobile image */}
          <LockInImage
            src={data.image.src}
            alt={data.image.alt}
            isMobile={true}
          />

          {/* Text + CTA */}
          <LockInContent
            title={data.title}
            subtitle={data.subtitle}
            body={data.body}
            cta={data.cta}
          />

          {/* Desktop image */}
          <LockInImage
            src={data.image.src}
            alt={data.image.alt}
            isMobile={false}
          />
        </div>
      </div>
    </section>
  );
};

export default LockInSection;
