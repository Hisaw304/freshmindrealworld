// src/components/Navbar/MobileMenu.jsx
import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";

export default function MobileMenu({ open, onClose, items = [] }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
      setExpandedIndex(null);
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="lg:hidden fixed left-0 top-[65px] z-50 w-full h-[100vh] bg-[#02040EA1] backdrop-blur-2xl overflow-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="p-4">
        {items.map((it, idx) => {
          if (it.children) {
            return (
              <div key={it.label} className="border-b border-[#ffffff1a]">
                <button
                  className="w-full text-left py-4 flex items-center justify-between text-white gap-4 pl-2"
                  onClick={() =>
                    setExpandedIndex(expandedIndex === idx ? null : idx)
                  }
                  aria-expanded={expandedIndex === idx}
                >
                  <div className="flex items-center gap-4">
                    {it.icon && (
                      <img
                        src={it.icon}
                        alt=""
                        width="17"
                        height="17"
                        loading="lazy"
                      />
                    )}
                    <span>{it.label}</span>
                  </div>
                  <span className="mr-4">
                    {expandedIndex === idx ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`transition-all ${
                    expandedIndex === idx
                      ? "max-h-screen"
                      : "max-h-0 overflow-hidden"
                  }`}
                >
                  {it.children.map((child) => (
                    <a key={child.label} href={child.href}>
                      <div className="pl-8 py-4 text-white sfpro border-t border-[#6a6d6f] hover:bg-[#525252]">
                        <div className="flex items-center gap-4">
                          {child.icon && (
                            <img
                              src={child.icon}
                              width="17"
                              height="17"
                              loading="lazy"
                            />
                          )}
                          <div>{child.label}</div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            );
          }

          return <NavItem key={it.label} item={it} onClick={onClose} />;
        })}
      </div>
    </div>
  );
}
