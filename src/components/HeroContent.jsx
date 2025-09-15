// // src/components/HeroContent.jsx
// import React from "react";
// import "../c/e106afa7b21e01c4.css";
// /*
//   This mirrors the headline, subheadline, CTA, the bordered video box, and features.
//   Keeps tailwind classes exactly from the snippet.
// */
// export default function HeroContent() {
//   return (
//     <div className="pb-12 lg:pb-4 flex flex-col items-center max-w-[1059px] mx-auto z-30">
//       <h2 class="special text-white text-center lg:px-4 max-w-[330px] lg:max-w-full py-2 mt-4 texture-text capitalize switzer tracking-[-1px] lg:tracking-[-3px]">
//         <span class="gradient-text-2">money</span> making is a skill
//         <span class="gradient-text-2">.</span>
//       </h2>

//       <p className="px-4 text-center max-w-[744px] switzer mt-2 relative">
//         <svg
//           stroke="currentColor"
//           fill="currentColor"
//           strokeWidth="0"
//           viewBox="0 0 512 512"
//           className="absolute top-[5px] left-[-4px] text-white"
//           height="1em"
//           width="1em"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path>
//         </svg>
//         <span className="text-white"> The clock is ticking, </span> the world is
//         spinning,
//         <br /> and the only constant is relentless change.
//       </p>

//       {/* framed video container (desktop) */}
//       <div className="w-full mt-2 px-4 relative max-w-[960px]">
//         <div className="hidden lg:block relative z-30 mt-6">
//           <div className="glowbox left-[calc(50%-250px)] bottom-[-250px] z-0" />

//           <h1 className="hidden lg:block absolute bottom-[-28px] right-0">
//             THE REAL WORLD
//           </h1>

//           <div className="border-[2px] border-[rgba(255,255,255,.2)] rounded-[25px] overflow-hidden p-[1px] bg-[rgba(255,255,255,0.09)]">
//             <div className="relative">
//               <div className="min-h-[520px] w-full relative">
//                 <div className="w-[150%] ml-[-25%]">
//                   {/* desktop video could be the same iframe or a poster. keep placeholder */}
//                   <div
//                     className="w-full min-h-[280px] lg:hidden"
//                     style={{ position: "relative", paddingTop: "56.25%" }}
//                   >
//                     <iframe
//                       src="https://iframe.cloudflarestream.com/a5e71f76f355ba1bef6f98325c0e65a9?muted=true&preload=metadata&loop=true&autoplay=true&controls=false"
//                       frameBorder="0"
//                       height="100%"
//                       width="100%"
//                       allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
//                       allowFullScreen
//                       title="TRW Desktop Intro"
//                       style={{
//                         position: "absolute",
//                         inset: 0,
//                         height: "100%",
//                         width: "100%",
//                       }}
//                     />
//                   </div>

//                   <div className="absolute top-0 left-0 h-full w-full bg-top bg-cover bg-[rgba(0,0,0,.6)]">
//                     <svg
//                       stroke="currentColor"
//                       fill="currentColor"
//                       strokeWidth="0"
//                       viewBox="0 0 512 512"
//                       className="absolute h-[65px] w-[65px] lg:h-[83px] lg:w-[83px] cursor-pointer text-white"
//                       style={{
//                         top: "calc(50% - 32px)",
//                         left: "calc(50% - 32px)",
//                       }}
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"></path>
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="glowborder absolute left-[calc(50%-370px)] bottom-[-2px]" />
//             <div className="glowborderwhite absolute left-[calc(50%-370px)] top-[-2px]" />
//           </div>
//         </div>
//       </div>

//       {/* CTA Button */}
//       <a
//         class="px-4 mt-4 lg:mt-8 relative group"
//         href="https://www.jointherealworld.com/checkout"
//       >
//         {/* <!-- Glow effect behind button --> */}
//         <div class="smallglow"></div>

//         {/* <!-- Button container --> */}
//         <div class="button-container w-full overflow-hidden relative duration-500 transition-all">
//           {/* <!-- Button image --> */}
//           <img
//             src="/c/button.png"
//             alt="Button Join TRW"
//             class="w-[340px] h-auto transition-transform duration-500 group-hover:scale-105"
//           />

//           {/* <!-- Hover glow circle --> */}
//           <div
//             class="absolute w-0 h-0 bg-[#ffffff1a] rounded-full pointer-events-none top-[50%] left-[50%] transition-all duration-500
//              group-hover:w-[500px] group-hover:h-[500px]
//              group-hover:left-[calc(50%-250px)] group-hover:top-[calc(50%-250px)]"
//           ></div>
//         </div>
//       </a>

//       {/* feature cards (three items) */}

//       <div class="flex flex-col lg:flex-row w-full items-center gap-4 mt-8 relative z-20 justify-center">
//         {/* <!-- First Article --> */}
//         <article class="flex flex-col lg:flex-row gap-1 lg:gap-4 items-center relative group">
//           <figure class="relative">
//             <img
//               src="/c/a1_i.png"
//               alt="Learning icon"
//               class="w-[287px] h-[85px] transition-opacity duration-500 group-hover:opacity-0"
//             />
//             <img
//               src="/c/a1.png"
//               alt="Learning icon"
//               class="absolute top-0 left-0 w-[287px] h-[85px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
//             />
//             <div class="flex flex-col justify-center absolute top-4 left-24">
//               <div class="uppercase font-bold text-[12px] switzer text-white/50 transition-all duration-500 group-hover:text-white">
//                 world class
//               </div>
//               <div class="font-bold capitalize text-[25px] switzer text-white/75 transition-all duration-500 group-hover:text-white">
//                 Learning
//               </div>
//             </div>
//           </figure>
//         </article>

//         {/* <!-- Second Article --> */}
//         <article class="flex flex-col lg:flex-row gap-1 lg:gap-4 items-center relative group">
//           <figure class="relative">
//             <img
//               src="/c/arrow_active.png"
//               alt="arrow"
//               class="hidden lg:block"
//             />
//             <img
//               src="/c/arrow_white.png"
//               alt="arrow"
//               class="absolute top-0 left-0 hidden lg:block opacity-0 transition-opacity duration-500 group-hover:opacity-100"
//             />
//             <img src="/c/arrow_down_active.png" alt="arrow" class="lg:hidden" />
//             <img
//               src="/c/arrow_white_down.png"
//               alt="arrow"
//               class="absolute top-0 left-0 lg:hidden opacity-0 transition-opacity duration-500 group-hover:opacity-100"
//             />
//           </figure>
//           <figure class="relative">
//             <img
//               src="/c/a2_i.png"
//               alt="To 10k/mo icon"
//               class="w-[287px] h-[85px] transition-opacity duration-500 group-hover:opacity-0"
//             />
//             <img
//               src="/c/a2.png"
//               alt="To 10k/mo icon"
//               class="absolute top-0 left-0 w-[287px] h-[85px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
//             />
//             <div class="flex flex-col justify-center absolute top-4 left-24">
//               <div class="uppercase font-bold text-[12px] switzer text-white transition-all duration-500 group-hover:text-white">
//                 scale from zero
//               </div>
//               <div class="font-bold capitalize text-[25px] switzer text-white transition-all duration-500 group-hover:text-white">
//                 To 10k/mo
//               </div>
//             </div>
//           </figure>
//         </article>

//         {/* <!-- Third Article --> */}
//         <article class="flex flex-col lg:flex-row gap-1 lg:gap-4 items-center relative group">
//           <figure class="relative">
//             <img
//               src="/c/arrow_active.png"
//               alt="arrow"
//               class="hidden lg:block"
//             />
//             <img
//               src="/c/arrow_white.png"
//               alt="arrow"
//               class="absolute top-0 left-0 hidden lg:block opacity-0 transition-opacity duration-500 group-hover:opacity-100"
//             />
//             <img src="/c/arrow_down_active.png" alt="arrow" class="lg:hidden" />
//             <img
//               src="/c/arrow_white_down.png"
//               alt="arrow"
//               class="absolute top-0 left-0 lg:hidden opacity-0 transition-opacity duration-500 group-hover:opacity-100"
//             />
//           </figure>
//           <figure class="relative">
//             <img
//               src="/c/a3_i.png"
//               alt="From Experts icon"
//               class="w-[287px] h-[85px] transition-opacity duration-500 group-hover:opacity-0"
//             />
//             <img
//               src="/c/a3.png"
//               alt="From Experts icon"
//               class="absolute top-0 left-0 w-[287px] h-[85px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
//             />
//             <div class="flex flex-col justify-center absolute top-4 left-24">
//               <div class="uppercase font-bold text-[12px] switzer text-white/50 transition-all duration-500 group-hover:text-white">
//                 1-on-1 advice
//               </div>
//               <div class="font-bold capitalize text-[25px] switzer text-white/75 transition-all duration-500 group-hover:text-white">
//                 From Experts
//               </div>
//             </div>
//           </figure>
//         </article>
//       </div>
//     </div>
//   );
// }
