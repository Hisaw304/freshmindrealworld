// src/components/faq/FAQItem.jsx
import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq w-full flex flex-col rounded-xl gap-3">
      {/* Header */}
      <div
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 cursor-pointer bg-[#0C1021] border-b border-[#FFFFFF1A] rounded-md"
      >
        <h6 className="small text-white">{question}</h6>
        <div
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </div>
      </div>

      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 p-6" : "max-h-0 p-0"
        }`}
      >
        <p
          className={`text-white transition-opacity duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        >
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FAQItem;
