"use client";
import { products } from "../productsData";
import Image from "next/image";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <main
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "2.5rem 1.5rem 2rem 1.5rem",
        background: "transparent",
        minHeight: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <h1
        style={{
          fontSize: "2.2rem",
          fontWeight: 900,
          color: "#bfa14a",
          textAlign: "center",
          marginBottom: "2.2rem",
          letterSpacing: "0.12em",
          fontFamily: "inherit",
          textShadow: "0 2px 12px #bfa14a33",
          lineHeight: 1.1,
        }}
      >
        Our Hair Extensions
      </h1>
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "2.2rem",
          maxWidth: 1000,
          margin: "0 auto",
          zIndex: 5,
        }}
      >
        {products.map((product, i) => {
          const slug = product.name
            .toLowerCase()
            .replace(/ /g, "-")
            .replace(/[^a-z0-9-]/g, "");
          return (
            <div
              key={product.name}
              style={{
                background: "#fff",
                borderRadius: 20,
                boxShadow: "0 4px 24px #bfa14a18",
                padding: 28,
                textAlign: "center",
                transition:
                  "transform 0.3s cubic-bezier(.4,2,.6,1), box-shadow 0.3s cubic-bezier(.4,2,.6,1)",
                cursor: "pointer",
                height: "100%",
                position: "relative",
                overflow: "hidden",
                animation: `cardFadeIn 0.7s ${0.2 + i * 0.08}s both`,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-8px) scale(1.04)";
                e.currentTarget.style.boxShadow = "0 8px 32px #bfa14a33";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "0 4px 24px #bfa14a18";
              }}
            >
              <Link href={`/products/${slug}`} style={{ display: "block" }}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={180}
                  style={{
                    borderRadius: 16,
                    objectFit: "cover",
                    marginBottom: 14,
                    boxShadow: "0 2px 12px #bfa14a22",
                    width: "100%",
                    height: "auto",
                    aspectRatio: "16/9",
                    transition: "box-shadow 0.3s",
                    display: "block",
                    maxHeight: 220,
                  }}
                />
              </Link>
              <Link href={`/products/${slug}`} style={{ textDecoration: "none" }}>
                <h2
                  style={{
                    color: "#171717",
                    fontWeight: 700,
                    fontSize: "1.18rem",
                    margin: "1rem 0 0.5rem",
                    letterSpacing: "0.03em",
                    textShadow: "none",
                    minHeight: 48,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {product.name}
                </h2>
              </Link>
              <p
                style={{
                  color: "#171717",
                  fontSize: "1.01rem",
                  fontWeight: 500,
                  opacity: 0.95,
                  minHeight: 44,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {product.description}
              </p>
            </div>
          );
        })}
      </section>
      <style>{`
        @keyframes cardFadeIn {
          from { opacity: 0; transform: translateY(40px) scale(0.98); }
          to { opacity: 1; transform: none; }
        }
        @media (max-width: 900px) {
          section[style*='grid'] {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.2rem !important;
          }
          section[style*='grid'] img, section[style*='grid'] [style*='aspect-ratio'] {
            height: 140px !important;
            max-width: 100% !important;
            object-fit: cover !important;
            aspect-ratio: 16/9 !important;
          }
        }
        @media (max-width: 600px) {
          main[style] {
            padding: 1.2rem 0.2rem 1.5rem 0.2rem !important;
            border-radius: 10px !important;
            box-shadow: 0 2px 12px #bfa14a22 !important;
          }
          section[style*='grid'] {
            grid-template-columns: 1fr !important;
            gap: 0.7rem !important;
          }
          section[style*='grid'] > div {
            padding: 14px !important;
            border-radius: 10px !important;
          }
          section[style*='grid'] img, section[style*='grid'] [style*='aspect-ratio'] {
            max-width: 100% !important;
            height: 120px !important;
            border-radius: 8px !important;
            object-fit: cover !important;
            aspect-ratio: 16/9 !important;
          }
        }
      `}</style>
    </main>
  );
}
