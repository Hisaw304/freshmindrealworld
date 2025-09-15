import React from "react";
import CTAButton from "./CTAButton";

const LockInContent = ({ title, subtitle, body, cta }) => {
  return (
    <div
      className="w-full lg:w-[600px] z-10 relative lg:pr-28 flex flex-col justify-center items-start px-4"
      style={{ placeSelf: "center end" }}
    >
      <h3 className="w-full uppercase px-4 lg:px-0 text-center lg:text-left mt-3 lg:mt-0 switzer">
        {title}
      </h3>
      <h2
        className="mt-3 mb-6 lg:mb-8 px-4 lg:px-0 text-center lg:text-left mx-auto capitalize switzer tracking-[-1px] lg:tracking-[-3px]"
        dangerouslySetInnerHTML={{
          __html: `<span class="texture-text">${subtitle}</span>`,
        }}
      />
      <div className="flex">
        <p
          className="text-center lg:text-left text-pretty switzer"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
      <div className="flex w-full justify-center lg:justify-start mt-8">
        <CTAButton href={cta.href} img={cta.img} alt={cta.alt} />
      </div>
    </div>
  );
};

export default LockInContent;
