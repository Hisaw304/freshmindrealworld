// src/components/faq/FAQSection.jsx
import React from "react";
import faqData from "../../data/faqData";
import FAQItem from "./FAQItem";
// If your gradient-text / switzer classes live in a CSS bundle, import it here:
import "../../c/e106afa7b21e01c4.css";

const FAQSection = () => {
  return (
    <section className="w-full relative mb-14">
      <div className="z-10 relative flex flex-col items-center px-4">
        {/* Heading */}
        <h3 className="uppercase text-center mb-3">{faqData.subtitle}</h3>
        <h2 className="text-center mb-8 capitalize switzer tracking-[-1px] lg:tracking-[-3px] text-[44px] lg:text-[55px]">
          <span className="gradient-text">{faqData.title}</span>
        </h2>

        {/* FAQ List */}
        <div className="max-w-[856px] mx-auto fade-in w-full">
          <article className="w-full flex flex-col rounded-xl faqlist gap-3">
            {faqData.questions.map((q, idx) => (
              <FAQItem key={idx} question={q.question} answer={q.answer} />
            ))}
          </article>
        </div>

        {/* CTA + Footer note */}
        <div className="flex justify-center relative flex-col">
          {/* Button (kept as raw HTML structure to match visuals precisely) */}
          <div className="flex justify-center mt-4">
            <a className="px-4 relative" href={faqData.cta.href}>
              <div className="smallglow"></div>
              <div className="button-container duration-500 transition-all w-full group overflow-hidden">
                <img
                  alt={faqData.cta.alt}
                  loading="lazy"
                  width="380"
                  height="100"
                  decoding="async"
                  className="w-[340px] h-[auto]"
                  src={faqData.cta.imgSrc}
                  style={{ color: "transparent" }}
                />
                <div
                  className="left-[50%] top-[50%] w-[0px] h-[0px] bg-[#ffffff1a] rounded-full group-hover:w-[500px] group-hover:h-[500px] duration-500 transition-all absolute pointer-events-none text-center group-hover:left-[calc(50%-250px)] group-hover:top-[calc(50%-250px)]"
                  style={{ willChange: "height, width, top, left" }}
                />
              </div>
            </a>
          </div>

          {/* “Access 12+ methods” row */}
          <div className="flex flex-row items-center gap-2 justify-center mt-[25px] px-4">
            <img
              alt="Access 12+"
              loading="lazy"
              width="22"
              height="22"
              decoding="async"
              src={faqData.footer.icon}
              style={{ color: "transparent" }}
            />
            <p className="xsmall">
              <span className="text-white font-bold text-lg">Access 12+</span>{" "}
              {faqData.footer.text.replace("Access 12+ ", "")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
