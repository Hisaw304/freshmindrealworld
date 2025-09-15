// src/components/twoPaths/DividerGraphic.jsx
import React from "react";

const DividerGraphic = () => {
  return (
    <>
      {/* Desktop */}
      <div className="w-full relative max-w-[1280px] mx-auto hidden lg:block">
        <div
          className="mx-auto relative h-[30px] w-[1px]"
          style={{
            background:
              "linear-gradient(rgba(255,255,255,0.05), rgba(255,255,255,0.25))",
          }}
        />
        <div className="h-[1px] w-[54%] bg-white/25 mx-auto relative">
          <div className="absolute top-0 left-0 h-[100px] w-[1px] bg-white/25">
            <div className="absolute bottom-[-15px] left-[-7px] border-[1px] rounded-full p-[5px] border-white/25">
              <div className="w-[3px] h-[3px] rounded-full bg-white/25" />
            </div>
          </div>
          <div
            className="absolute top-0 right-0 h-[100px] w-[1px]"
            style={{
              background:
                "linear-gradient(rgba(255,255,255,0.25), rgb(255,207,35))",
            }}
          >
            <div className="absolute bottom-[-15px] right-[-7px] border-[1px] rounded-full p-[5px] border-[#FFCF23]">
              <div className="w-[3px] h-[3px] rounded-full bg-[#FFCF23]" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="w-full relative max-w-[1280px] mx-auto lg:hidden">
        <div
          className="mx-auto relative h-[30px] w-[1px]"
          style={{
            background:
              "linear-gradient(rgba(255,255,255,0.05), rgba(255,255,255,0.25))",
          }}
        />
        <div className="h-[1px] w-[50%] bg-white/25 mx-auto relative ml-0">
          <div className="absolute top-0 left-0 h-[60px] w-[1px] bg-white/25">
            <div className="absolute bottom-[-15px] left-[-7px] border-[1px] rounded-full p-[5px] border-white/25">
              <div className="w-[3px] h-[3px] rounded-full bg-white/25">
                <div
                  className="absolute top-[14px] left-[6px] h-[300px] w-[1px]"
                  style={{
                    background:
                      "linear-gradient(rgba(255,255,255,0.25), rgb(255,207,35))",
                  }}
                >
                  <div className="absolute bottom-[-15px] right-[-7px] border-[1px] rounded-full p-[5px] border-[#FFCF23]">
                    <div className="w-[3px] h-[3px] rounded-full bg-[#FFCF23]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DividerGraphic;
