// src/components/Navbar/MenuButton.jsx
import React from "react";
import menuIcon from "../../c/menu_icon.svg";

export default function MenuButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="justify-between relative group cursor-pointer text-white flex items-center gap-4 pointer-events-auto transition-all duration-300 border-[1px] border-transparent hover:bg-[#202326] hover:border-[#6a6d6f] py-1 px-2"
      aria-label="Open menu"
    >
      <div className="flex items-center gap-4">
        <img
          src={menuIcon}
          alt="menu icon"
          width="28"
          height="28"
          className="w-[28px] h-[28px]"
        />
        <p className="text-sm">MENU</p>
      </div>
    </button>
  );
}
