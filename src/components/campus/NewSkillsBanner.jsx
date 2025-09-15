// src/components/Campus/NewSkillsBanner.jsx
import React from "react";

export default function NewSkillsBanner() {
  return (
    <div className="flex mx-auto items-center justify-center mb-2 mt-12 gap-4 px-4">
      <img
        alt="New Skills Added Regularly"
        loading="lazy"
        width="28"
        height="28"
        decoding="async"
        src="/c/new_skills.svg"
      />
      <h5 className="gradient-text !text-[16px]">NEW SKILLS REGULARLY ADDED</h5>
    </div>
  );
}
