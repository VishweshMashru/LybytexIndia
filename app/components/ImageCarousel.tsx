"use client";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const AUTO_INTERVAL = 3000; // ms between auto-slides

export default function ImageCarousel({
  images,
  swatch,
  name,
}: {
  images: string[];
  swatch: string;
  name: string;
}) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setIdx(i => (i + 1) % images.length), [images.length]);
  const prev = useCallback(() => setIdx(i => (i - 1 + images.length) % images.length), [images.length]);

  // Auto-rotate
  useEffect(() => {
    if (images.length <= 1 || paused) return;
    const t = setInterval(next, AUTO_INTERVAL);
    return () => clearInterval(t);
  }, [images.length, paused, next]);

  if (!images.length) {
    return <div className={swatch} style={{ position: "absolute", inset: 0 }} />;
  }

  return (
    <div
      style={{ position: "absolute", inset: 0 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setTimeout(() => setPaused(false), 2000)}
    >
      {/* Images */}
      {images.map((src, i) => (
        <div
          key={src}
          style={{
            position: "absolute", inset: 0,
            opacity: i === idx ? 1 : 0,
            transition: "opacity 0.6s ease",
          }}
        >
          <Image
            src={src}
            alt={`${name} ${i + 1}`}
            fill
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            priority={i === 0}
          />
        </div>
      ))}

      {/* Prev / Next arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={e => { e.stopPropagation(); prev(); setPaused(true); setTimeout(() => setPaused(false), 4000); }}
            aria-label="Previous"
            style={{
              position: "absolute", left: 10, top: "50%",
              transform: "translateY(-50%)", zIndex: 4,
              background: "rgba(0,0,0,0.38)", border: "none",
              color: "#fff", width: 32, height: 32, borderRadius: "50%",
              cursor: "pointer", fontSize: 18, lineHeight: 1,
              display: "flex", alignItems: "center", justifyContent: "center",
              backdropFilter: "blur(4px)",
              transition: "background 0.2s",
            }}
          >‹</button>
          <button
            onClick={e => { e.stopPropagation(); next(); setPaused(true); setTimeout(() => setPaused(false), 4000); }}
            aria-label="Next"
            style={{
              position: "absolute", right: 10, top: "50%",
              transform: "translateY(-50%)", zIndex: 4,
              background: "rgba(0,0,0,0.38)", border: "none",
              color: "#fff", width: 32, height: 32, borderRadius: "50%",
              cursor: "pointer", fontSize: 18, lineHeight: 1,
              display: "flex", alignItems: "center", justifyContent: "center",
              backdropFilter: "blur(4px)",
              transition: "background 0.2s",
            }}
          >›</button>
        </>
      )}

      {/* Dot indicators */}
      {images.length > 1 && (
        <div style={{
          position: "absolute", bottom: 10, left: 0, right: 0,
          display: "flex", justifyContent: "center", gap: 5, zIndex: 4,
        }}>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={e => { e.stopPropagation(); setIdx(i); setPaused(true); setTimeout(() => setPaused(false), 4000); }}
              aria-label={`Photo ${i + 1}`}
              style={{
                width: i === idx ? 20 : 6, height: 6, borderRadius: 3,
                background: i === idx ? "#fff" : "rgba(255,255,255,0.4)",
                border: "none", cursor: "pointer", padding: 0,
                transition: "width 0.3s ease, background 0.3s ease",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
