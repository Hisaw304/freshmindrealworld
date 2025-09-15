import React from "react";
import footerData from "../../data/footerData";
import "../../c/e106afa7b21e01c4.css"; // if needed for switzer/sfpro/gradient-text

const Footer = () => {
  return (
    <footer className="w-full relative z-10 mt-8 lg:mt-16 px-4">
      <div className="max-w-[1236px] mx-auto flex flex-col lg:flex-row justify-between py-[24px] border-t-[1px] border-[#FFFFFF1A]">
        {/* Left column */}
        <div className="my-4 lg:my-16 gap-8 flex flex-col">
          {/* Top links */}
          <div className="mt-4 lg:mt-0 flex flex-col lg:flex-row items-center gap-4 lg:gap-[32px]">
            {footerData.links.map((link, idx) => (
              <React.Fragment key={idx}>
                <a href={link.href}>
                  <p className="hover:underline text-white">{link.label}</p>
                </a>
                {/* Divider lines */}
                {idx < footerData.links.length - 1 && (
                  <>
                    <div className="hidden lg:block w-[1px] h-[20px] bg-white/5"></div>
                    <div className="lg:hidden w-[200px] h-[1px] bg-white/5"></div>
                  </>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile-only Support + Login */}
          <div className="lg:hidden w-[200px] h-[1px] bg-white/5 mx-auto"></div>
          <div className="lg:hidden gap-8 flex flex-col">
            <div>
              <div className="text-white/50 text-[12px] text-center sfpro">
                SUPPORT
              </div>
              <a href={`mailto:${footerData.supportEmail}`}>
                <p className="hover:underline text-center text-white">
                  {footerData.supportEmail}
                </p>
              </a>
            </div>
            <a href={footerData.login.href}>
              <div className="bg-[#181e27] py-4 text-white font-semibold sfpro text-center w-52 mx-auto">
                {footerData.login.label}
              </div>
            </a>
          </div>

          {/* Disclaimer */}
          <p className="w-full text-white/50 max-w-xl px-4 lg:px-0 !text-[14px] lg:!text-[16px] text-center lg:text-left">
            {footerData.disclaimer}
          </p>
        </div>

        {/* Right column (desktop) */}
        <div className="hidden lg:block my-16 flex flex-col">
          <div className="relative">
            <p className="text-white/50 small">SUPPORT</p>
            <a href={`mailto:${footerData.supportEmail}`}>
              <p className="hover:underline">{footerData.supportEmail}</p>
            </a>
          </div>
          <div className="relative mt-8">
            <a href={footerData.login.href}>
              <div className="bg-[#181e27] py-4 px-20 text-white font-semibold sfpro text-center">
                {footerData.login.label}
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
