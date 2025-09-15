// src/components/Campus/VideoOverlay.jsx
import React, { useEffect, useRef, useState } from "react";

/*
  Behavior:
   - Renders a thumbnail + play overlay (always visible).
   - On mobile (<=1024px) clicking the play overlay will replace the thumbnail with the iframe inline (preserves original mobile behaviour).
   - On desktop clicking the play overlay opens a modal and lazy-loads the iframe.
   - The media container uses padding-top (56.25%) so it NEVER collapses.
   - Preserves any external classes you already use.
*/
export default function VideoOverlay({
  thumbnail,
  iframeSrc,
  alt = "video",
  playInlineOnMobile = true, // preserves your original mobile inline iframe if true
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [inlineLoaded, setInlineLoaded] = useState(false);
  const overlayRef = useRef(null);

  // detect mobile breakpoint consistent with your earlier code
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

  // keep escape to close modal
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpenModal(false);
    };
    if (openModal) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openModal]);

  // click outside modal to close
  const onBackdropClick = (e) => {
    if (overlayRef.current && e.target === overlayRef.current)
      setOpenModal(false);
  };

  const onPlay = () => {
    if (isMobile && playInlineOnMobile) {
      // swap thumbnail -> iframe inline
      setInlineLoaded(true);
      // scroll into view slightly (optional)
      window.setTimeout(() => {
        const el = document.activeElement;
        if (el) el.blur();
      }, 50);
      return;
    }
    // desktop: open modal and lazy-load iframe inside it
    setOpenModal(true);
  };

  const shouldShowThumbnail = !inlineLoaded;
  const iframeSrcToUse = inlineLoaded || openModal ? iframeSrc : undefined;

  return (
    <>
      {/* media container: uses padding-top to create aspect ratio so it never collapses */}
      <div
        className="card-media"
        style={{ position: "relative", paddingTop: "56.25%" }}
      >
        {/* thumbnail (absolute) */}
        {shouldShowThumbnail && (
          <img
            alt={alt}
            src={thumbnail}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: 1 }}
          />
        )}

        {/* inline iframe (if mobile inline or user clicked inline) */}
        {inlineLoaded && (
          <iframe
            src={iframeSrcToUse}
            title={alt}
            frameBorder="0"
            loading="lazy"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            style={{ zIndex: 2 }}
          />
        )}

        {/* Play pill (visual) - sits behind the white circle, centered */}
        {!inlineLoaded && (
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: 220,
              height: 84,
              borderRadius: 8,
              background: "linear-gradient(90deg,#FFCF23 0%, #F59E0B 100%)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.45)",
              zIndex: 10,
              pointerEvents: "none", // pill should not intercept click; button will handle it
            }}
          />
        )}

        {/* play button (always visible above thumbnail) */}
        {!inlineLoaded && (
          <button
            onClick={onPlay}
            aria-label={`Play ${alt}`}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              zIndex: 20,
              width: 72,
              height: 72,
              borderRadius: "9999px",
              background: "#fff",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 10px 30px rgba(0,0,0,0.45)",
              cursor: "pointer",
            }}
          >
            <svg
              viewBox="0 0 512 512"
              width="34"
              height="34"
              fill="#111"
              aria-hidden
            >
              <path d="M188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9v176c0 8.7 4.7 16.7 12.3 20.9 7.6 4.6 16.8 4 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
            </svg>
          </button>
        )}
      </div>

      {/* desktop modal (only when opened) */}
      {openModal && (
        <div
          ref={overlayRef}
          onClick={onBackdropClick}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-4xl" style={{ zIndex: 60 }}>
            <button
              aria-label="Close video"
              onClick={() => setOpenModal(false)}
              className="absolute top-3 right-3 z-70 bg-white/10 rounded-full p-2"
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
