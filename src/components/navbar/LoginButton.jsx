// src/components/Navbar/LoginButton.jsx
import React from "react";

export default function LoginButton() {
  return (
    <a
      className="flex justify-end p-[4px] border-[2px] border-white/40 rounded-full pointer-events-auto"
      href="https://app.jointherealworld.com/auth/login"
    >
      <button className="transition-all duration-500 hidden lg:block w-auto rounded-full border-white/25 border-[2px] switzer px-4 py-1">
        LOG IN
      </button>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        className="lg:hidden h-[25px] w-[25px]"
        aria-hidden
      >
        <path d="M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
      </svg>
    </a>
  );
}
