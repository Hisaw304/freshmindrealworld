// src/components/Campus/VideoOverlay.jsx
import React, { useEffect, useRef, useState } from "react";

/**
 * Robust VideoOverlay
 * - Removes the yellow pill (explicit element removed).
 * - Adds a dark overlay above the thumbnail so any baked-in yellow is hidden.
 * - Injects a tiny one-time CSS override (scoped via `.no-yellow`) to neutralize
 *   pseudo-elements / stray inline gradient DIVs that may come from elsewhere.
 * - Maintains mobile inline vs desktop modal behavior.
 * - Supports props: `iframeSrc` (preferred) or `src` (backwards compatible).
 * - If `ensureControls` is true (default) and the iframe URL lacks controls=,
 *   it appends controls=true so native controls are available after load.
 */
export default function VideoOverlay({
  thumbnail,
  iframeSrc,
  src, // backward-compat
  alt = "video",
  playInlineOnMobile = true,
  ensureControls = true,
}) {
  const overlayRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [inlineLoaded, setInlineLoaded] = useState(false);

  // pick url from either prop
  const rawIframeUrl = iframeSrc || src || "";

  // ensure controls=true if not present (helps pause/play)
  function withControls(url) {
    if (!url) return url;
    if (url.includes("controls=")) return url;
    // relative urls also work with string approach
    return url.includes("?") ? `${url}&controls=true` : `${url}?controls=true`;
  }
  const iframeUrl = ensureControls ? withControls(rawIframeUrl) : rawIframeUrl;

  // inject small CSS override *once* (scoped to .no-yellow)
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.getElementById("video-overlay-no-yellow-style")) return;

    const css = `
      /* scoped: neutralize stray yellow pill/pseudo-elements under .no-yellow */
      .no-yellow::before,
      .no-yellow::after,
      .no-yellow .play-pill,
      .no-yellow .yellow-pill,
      .no-yellow > div[style*="FFCF23"],
      .no-yellow > div[style*="F59E0B"] {
        display: none !important;
        background: transparent !important;
      }
    `;
    const style = document.createElement("style");
    style.id = "video-overlay-no-yellow-style";
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
  }, []);

  // detect mobile breakpoint (matches your earlier logic)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width:1024px)");
    const handler = (e) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    if (mq.addEventListener) mq.addEventListener("change", handler);
    else mq.addListener(handler);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handler);
      else mq.removeListener(handler);
    };
  }, []);

  // ESC to close modal
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpenModal(false);
    };
    if (openModal) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openModal]);

  const onBackdropClick = (e) => {
    if (overlayRef.current && e.target === overlayRef.current)
      setOpenModal(false);
  };

  const handlePlay = () => {
    if (isMobile && playInlineOnMobile) {
      setInlineLoaded(true);
      // accessible: blur any active element
      setTimeout(() => {
        if (document.activeElement && document.activeElement.blur) {
          document.activeElement.blur();
        }
      }, 30);
      return;
    }
    setOpenModal(true);
  };

  // only load iframe when needed
  const shouldShowThumbnail = !inlineLoaded;
  const iframeSrcToUse = inlineLoaded || openModal ? iframeUrl : undefined;

  return (
    <>
      {/* note: .card-media is kept to match your CSS; .no-yellow prevents stray gradients */}
      <div
        className="card-media no-yellow"
        style={{ position: "relative", paddingTop: "56.25%" }}
      >
        {/* thumbnail image */}
        {shouldShowThumbnail && (
          <>
            <img
              alt={alt}
              src={thumbnail}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ zIndex: 1 }}
            />
            {/* dark overlay like original raw markup so play icon pops and any yellow in the image is dimmed */}
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background: "rgba(0,0,0,0.6)",
                zIndex: 2,
                pointerEvents: "none",
              }}
            />
          </>
        )}

        {/* inline iframe (mobile inline or after click if you chose inline) */}
        {inlineLoaded && iframeSrcToUse && (
          <iframe
            src={iframeSrcToUse}
            title={alt}
            frameBorder="0"
            loading="lazy"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            style={{ zIndex: 3 }}
          />
        )}
        {/* centered white circular play button */}
        {!inlineLoaded && (
          <button
            onClick={handlePlay}
            aria-label={`Play ${alt}`}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full shadow-lg"
            style={{
              zIndex: 4,
              width: 72,
              height: 72,
              background: "#fff",
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(0,0,0,0.45)",
            }}
          >
            <svg
              viewBox="0 0 512 512"
              width="34"
              height="34"
              fill="#111"
              aria-hidden="true"
            >
              <path d="M188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9v176c0 8.7 4.7 16.7 12.3 20.9 7.6 4.6 16.8 4 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
            </svg>
          </button>
        )}
      </div>

      {/* desktop modal (lazy-loaded iframe) */}
      {openModal && iframeSrcToUse && (
        <div
          ref={overlayRef}
          onClick={onBackdropClick}
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.8)", padding: 16 }}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-4xl" style={{ zIndex: 60 }}>
            <button
              aria-label="Close video"
              onClick={() => setOpenModal(false)}
              className="absolute top-3 right-3 bg-white/10 rounded-full p-2"
              style={{ zIndex: 70 }}
            >
              ✕
            </button>

            <div style={{ position: "relative", paddingTop: "56.25%" }}>
              <iframe
                src={iframeSrcToUse}
                frameBorder="0"
                title={alt}
                loading="lazy"
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
