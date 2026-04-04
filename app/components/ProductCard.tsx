"use client";
import { useInView } from "../hooks/useInView";
import ImageCarousel from "./ImageCarousel";
import type { Product } from "./products";

const WA_BASE = "https://wa.me/919825124751?text=";
const BADGE = {
  hot:    { bg: "var(--gold)",  color: "#fff" },
  new:    { bg: "var(--green)", color: "#fff" },
  export: { bg: "var(--ink)",   color: "#fff" },
};

export default function ProductCard({
  product,
  index = 0,
}: {
  product: Product;
  index?: number;
}) {
  const { ref, inView } = useInView(0.08);
  const delay = (index % 3) * 80;
  const msg = encodeURIComponent(
    `Hi, I'm interested in ${product.name}. Can you share pricing and availability?`
  );
  const images = product.images ?? [];

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(36px)",
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      <div
        className="card"
        style={{
          background: "#fff",
          borderRadius: 10,
          overflow: "hidden",
          border: "1px solid var(--border)",
        }}
      >
        {/* Portrait image — 3:4 for vertical phone photos */}
        <div
          className="zoom"
          style={{
            aspectRatio: "3/4",
            position: "relative",
            overflow: "hidden",
            background: "var(--gray)",
          }}
        >
          <ImageCarousel images={images} swatch={product.swatch} name={product.name} />

          {product.badge && (
            <span
              style={{
                position: "absolute", top: 12, left: 12, zIndex: 5,
                fontSize: 9, fontWeight: 600, letterSpacing: "0.12em",
                textTransform: "uppercase", padding: "4px 10px", borderRadius: 20,
                background: BADGE[product.badge.type].bg,
                color: BADGE[product.badge.type].color,
              }}
            >
              {product.badge.label}
            </span>
          )}
        </div>

        {/* Info */}
        <div style={{ padding: "16px 18px 20px" }}>
          <p
            style={{
              fontSize: 10, fontWeight: 600, letterSpacing: "0.14em",
              textTransform: "uppercase", color: "var(--gold)", marginBottom: 5,
            }}
          >
            {product.category}
          </p>
          <h3
            style={{
              fontSize: 15, fontWeight: 500, color: "var(--ink)",
              marginBottom: 5, lineHeight: 1.35,
            }}
          >
            {product.name}
          </h3>
          <p style={{ fontSize: 11, color: "var(--muted)", marginBottom: 14, lineHeight: 1.5 }}>
            {product.meta}
          </p>
          <div
            style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              paddingTop: 14, borderTop: "1px solid var(--border)",
            }}
          >
            <div>
              <span className="f-display" style={{ fontSize: 22, color: "var(--ink)", lineHeight: 1 }}>
                {product.price}
              </span>
              <span style={{ fontSize: 10, color: "var(--muted)", marginLeft: 3 }}>
                / {product.unit}
              </span>
            </div>
            <a
              href={`${WA_BASE}${msg}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#22C55E", color: "#fff",
                fontSize: 10, fontWeight: 600, letterSpacing: "0.08em",
                textTransform: "uppercase", padding: "9px 14px",
                borderRadius: 4, textDecoration: "none",
                display: "flex", alignItems: "center", gap: 5,
              }}
            >
              <svg width={11} height={11} viewBox="0 0 24 24" fill="#fff">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Order
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
