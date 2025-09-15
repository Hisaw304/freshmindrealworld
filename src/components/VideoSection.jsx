// // src/components/VideoSection.jsx
// import React from "react";
// import "../c/e106afa7b21e01c4.css";
// /*
//   This closely follows the mobile and desktop video wrappers from your paste.
//   - Mobile: lg:hidden iframe block with padding-top aspect ratio
//   - Desktop: hidden on mobile, big bordered video container
// */
// export default function VideoSection() {
//   return (
//     <div className="relative">
//       {/* mobile video area (lg:hidden) */}
//       <div className="relative lg:hidden">
//         <div className="relative min-h-[240px]">
//           <h1 className="lg:hidden absolute bottom-[-20px] right-0 pointer-events-none">
//             THE REAL WORLD
//           </h1>

//           <div
//             className="w-full lg:hidden"
//             style={{ position: "relative", paddingTop: "56.338%" }}
//           >
//             <iframe
//               src="https://iframe.cloudflarestream.com/a5e71f76f355ba1bef6f98325c0e65a9?muted=true&preload=metadata&loop=true&autoplay=true&controls=false"
//               frameBorder="0"
//               height="100%"
//               width="100%"
//               allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
//               allowFullScreen
//               style={{
//                 position: "absolute",
//                 inset: 0,
//                 height: "100%",
//                 width: "100%",
//               }}
//               title="TRW Intro"
//             />
//           </div>

//           <div className="absolute top-0 left-0 h-full w-full bg-top bg-cover bg-[rgba(0,0,0,.6)] min-h-[240px] opacity-100">
//             {/* play icon (same svg from snippet) */}
//             <svg
//               stroke="currentColor"
//               fill="currentColor"
//               strokeWidth="0"
//               viewBox="0 0 512 512"
//               className="absolute h-[65px] w-[65px] lg:h-[83px] lg:w-[83px] cursor-pointer text-white"
//               style={{ top: "calc(50% - 32px)", left: "calc(50% - 32px)" }}
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"></path>
//             </svg>
//           </div>
//         </div>

//         <div
//           className="absolute bottom-0 left-0 w-full h-[158px] pointer-events-none"
//           style={{
//             background: "linear-gradient(rgba(0,0,0,0) 80%, rgb(0,0,0) 100%)",
//           }}
//         />
//       </div>

//       {/* desktop area: larger video + framed container (hidden on mobile) */}
//       <section className="pb-12 lg:pb-4 flex flex-col items-center max-w-[1059px] mx-auto">
//         <div className="hidden lg:block absolute top-80 left-0 z-20 pointer-events-none w-full flex justify-center">
//           <img
//             alt="Background C"
//             loading="lazy"
//             className="w-full h-auto"
//             src="/c/video_bg.png"
//           />
//           <div className="glow-b max-w-full" />
//           <div className="right-fade-b pointer-events-none" />
//           <div className="left-fade-b pointer-events-none" />
//         </div>

//         <div className="newglow-c left-0 top-1/2" />

//         <div className="hidden w-full lg:flex flex-col items-center justify-center">
//           <img
//             alt="Join The Real World Logo"
//             loading="lazy"
//             className="lg:w-[85px] lg:h-[85px] mt-2"
//             src="/c/jtrw_logo.png"
//           />
//           <h1 className="pagetitle w-full">THE REAL WORLD</h1>

//           <div className="rounded-full border-[1px] border-white/50 p-[6px] mt-2 lg:mt-4 relative z-10">
//             <div
//               className="flex flex-row items-center gap-2 justify-center px-6 py-2 rounded-full"
//               style={{
//                 background:
//                   "linear-gradient(100.33deg, rgba(255, 255, 255, 0.15) 5.1%, rgba(255, 255, 255, 0.016) 83.56%)",
//                 border: "1px solid rgba(153, 153, 153, 0.25)",
//               }}
//             >
//               <img
//                 alt="Enrolled People"
//                 loading="lazy"
//                 width="48"
//                 height="22"
//                 src="/c/students.png"
//               />
//               <p className="xsmall switzer">
//                 <span className="text-white font-extrabold text-lg">
//                   155,000+
//                 </span>{" "}
//                 students
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* headline + subtext moved below (these are handled in Hero content normally) */}
//       </section>
//     </div>
//   );
// }
