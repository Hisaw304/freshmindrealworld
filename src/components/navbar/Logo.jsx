// src/components/Navbar/Logo.jsx
import React from "react";
import logo from "../../c/jtrw_logo.png";

export default function Logo({ className = "" }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img
        src={logo}
        alt="Join The Real World"
        className="w-[72px] h-[72px] lg:hidden"
        loading="lazy"
      />
    </div>
  );
}
