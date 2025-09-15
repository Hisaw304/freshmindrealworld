// src/components/Navbar/NavItem.jsx
import React from "react";

export default function NavItem({ item, onClick, extraClass = "" }) {
  const { href, icon, label } = item;
  return (
    <a
      href={href}
      onClick={onClick}
      className={`pointer-events-auto ${extraClass}`}
    >
      <div className="text-white text-lg sfpro capitalize min-w-[256px] py-3 border-b-[1px] border-[#ffffff1a] group hover:bg-[#202326] pl-8 hover:border-[#6a6d6f] duration-500 transition-all">
        <div className="group-hover:translate-x-[-16px] duration-500 transition-all flex items-center gap-6">
          {icon && (
            <img
              src={icon}
              alt={`${label} icon`}
              width="17"
              height="17"
              loading="lazy"
            />
          )}
          <div>{label}</div>
        </div>
      </div>
    </a>
  );
}
