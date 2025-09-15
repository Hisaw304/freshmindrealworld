// src/components/Navbar/NavDropdown.jsx
import React, { useState, useRef } from "react";

export default function NavDropdown({ item }) {
  const [open, setOpen] = useState(false);
  const timer = useRef(null);

  const openMenu = () => {
    clearTimeout(timer.current);
    setOpen(true);
  };
  const closeMenu = () => {
    timer.current = setTimeout(() => setOpen(false), 100);
  };

  return (
    <div
      className="relative group"
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
      onFocus={openMenu}
      onBlur={closeMenu}
    >
      <button
        aria-haspopup="true"
        aria-expanded={open}
        className="text-white text-lg sfpro capitalize min-w-[256px] py-3 flex items-center justify-between border-b-[1px] border-[#ffffff1a] hover:bg-[#D9D9D91A] backdrop-blur-xl pl-8 hover:border-[#6a6d6f] duration-500 transition-all"
      >
        <div className="flex items-center gap-6">
          {item.icon && (
            <img
              src={item.icon}
              alt={`${item.label} icon`}
              width="17"
              height="17"
              loading="lazy"
            />
          )}
          <span className="group-hover:translate-x-[-16px] duration-500 transition-all">
            {item.label}
          </span>
        </div>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 320 512"
          className="h-4 w-4 mr-8"
        >
          <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
        </svg>
      </button>

      {/* Submenu */}
      <div
        className={`absolute top-0 right-[-320px] bg-[#02040EA1] backdrop-blur-2xl border-[#6a6d6f] border-y-[1px] border-r-[1px] w-[320px] transform transition-opacity duration-200 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {item.children?.map((child) => (
          <a key={child.label} href={child.href}>
            <div className="border-b-[1px] border-[#6a6d6f] hover:bg-[#D9D9D91A] bg-[#02040EA1] backdrop-blur-2xl border-l-[1px] pl-8 py-4 text-white sfpro text-[18px]">
              <div className="flex gap-4 items-center">
                {child.icon && (
                  <img
                    src={child.icon}
                    width="17"
                    height="17"
                    loading="lazy"
                    alt={`${child.label} icon`}
                  />
                )}
                <div className="hover:translate-x-[-16px] duration-500 transition-all w-full">
                  {child.label}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
