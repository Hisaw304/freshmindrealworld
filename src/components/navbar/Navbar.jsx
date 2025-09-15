// src/components/Navbar/Navbar.jsx
import React, { useState } from "react";
import { NAV_ITEMS } from "../../data/navData";
import NavItem from "./NavItem";
import NavDropdown from "./NavDropdown";
import MobileMenu from "./MobileMenu";
import MenuButton from "./MenuButton";
import Logo from "./Logo";
import LoginButton from "./LoginButton";
import TopBanner from "../TopBanner";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <TopBanner />
      <header className="rootc">
        <nav className="text-sm p-4 z-20" role="navigation" aria-label="Main">
          <div className="w-full max-w-[1540px] mx-auto relative">
            <div className="items-center justify-between flex w-full relative">
              {/* left area (desktop sidebar placeholder) */}
              <div className="hidden pointer-events-none z-30 lg:pointer-events-auto duration-300 transition-all opacity-0 absolute left-[-22px] top-0 border-[1px] border-[#ffffff1a] bg-[#02040EA1] backdrop-blur-xl pt-[53px] pointer-events-auto w-[352px]">
                {/* replicate left desktop sidebar contents if needed */}
                {/* Data-driven rendering */}
                <div className="pt-2">
                  {NAV_ITEMS.map((it) =>
                    it.children ? (
                      <NavDropdown key={it.label} item={it} />
                    ) : (
                      <NavItem key={it.label} item={it} />
                    )
                  )}
                </div>
              </div>

              {/* menu button */}
              <div className="w-1/3 lg:w-1/5 relative z-40 flex">
                <MenuButton onClick={() => setMobileOpen(true)} />
              </div>

              {/* logo center (mobile only) */}
              <div className="flex flex-col items-center w-1/3 lg:hidden">
                <Logo />
              </div>

              {/* right side */}
              <div className="flex w-1/3 justify-end">
                <LoginButton />
              </div>
            </div>
          </div>
        </nav>

        {/* mobile menu overlay */}
        <MobileMenu
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          items={NAV_ITEMS}
        />
      </header>
    </>
  );
}
