"use client";
import { products } from "../../productsData";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const brandWriteups: Record<string, string> = {
  "straight-hair-extensions":
    "Experience the ultimate in sleek sophistication. Our Straight Hair Extensions are crafted from the finest, ethically sourced hair for a flawless, natural blend. ESSY stands for premium quality and authenticity—every strand is designed to empower your confidence and elevate your style.",
  "body-wave-extensions":
    "Indulge in luxurious volume and effortless movement. The Body Wave Extensions by ESSY are a celebration of bounce and beauty, made for those who demand only the best. Discover the difference of true premium hair—soft, full, and always authentic.",
  "curly-hair-extensions":
    "Bold, beautiful, and full of life. Our Curly Hair Extensions are meticulously selected for texture and vibrancy, giving you a look that’s as unique as you are. ESSY’s commitment to quality ensures every curl is a statement of authenticity.",
  "blonde-hair-extensions":
    "Radiate confidence with our Blonde Hair Extensions. Ethically sourced and expertly crafted, these extensions deliver a sun-kissed glow and seamless blend. ESSY is your source for premium, natural beauty.",
  "deep-wave-extensions":
    "Defined, voluminous, and irresistibly touchable. Deep Wave Extensions from ESSY are the epitome of luxury, offering a look that’s both glamorous and genuine. Trust in our brand’s promise of quality and authenticity.",
  "kinky-curly-extensions":
    "Celebrate your natural texture with Kinky Curly Extensions by ESSY. Each piece is chosen for its authenticity and premium feel, empowering you to embrace your beauty with confidence and pride.",
  "ombre-hair-extensions":
    "Make a statement with our Ombre Hair Extensions. ESSY’s ombre collection is crafted for those who love a stylish color blend without compromise. Premium, authentic, and always on trend.",
  "afro-puff-extensions":
    "Bold, beautiful, and unapologetically you. Afro Puff Extensions from ESSY are designed for those who want to stand out with confidence. Our premium quality ensures every puff is a celebration of authenticity.",
  "tape-in-hair-extensions":
    "Seamless, easy, and stunningly natural. ESSY’s Tape-In Hair Extensions are the choice for effortless beauty and premium quality. Discover the difference of authentic, ethically sourced hair.",
};

function slugify(name: string) {
  return name.toLowerCase().replace(/ /g, "-").replace(/[^a-z0-9-]/g, "");
}

export default function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const product = products.find(
    (p) => slugify(p.name) === slug
  );
  const writeup = brandWriteups[slug] || "Discover the ESSY difference: premium, authentic, and made for you.";
  const router = useRouter();

  if (!product) {
    return (
      <main style={{ padding: 40, textAlign: 'center', color: '#bfa14a' }}>
        <h1>Product Not Found</h1>
        <button onClick={() => router.push('/products')} style={{ marginTop: 24, background: '#bfa14a', color: '#fff', border: 'none', borderRadius: 8, padding: '0.7rem 1.5rem', fontWeight: 700, cursor: 'pointer' }}>Back to Products</button>
      </main>
    );
  }

  return (
    <main style={{
      maxWidth: 700,
      margin: "0 auto",
      padding: "2.5rem 1.5rem 2rem 1.5rem",
      background: "transparent",
      minHeight: "70vh",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    }}>
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={220}
        style={{
          borderRadius: 16,
          objectFit: "cover",
          marginBottom: 24,
          boxShadow: "0 2px 12px #bfa14a22",
          width: '100%',
          height: 'auto',
          aspectRatio: '16/9',
          maxHeight: 260,
        }}
      />
      <h1 style={{
        fontSize: "2rem",
        fontWeight: 900,
        color: "#bfa14a",
        marginBottom: "1.2rem",
        letterSpacing: "0.12em",
        fontFamily: 'inherit',
        textShadow: '0 2px 12px #bfa14a33',
        lineHeight: 1.1,
      }}>{product.name}</h1>
      <p style={{
        color: "#171717",
        fontSize: "1.18rem",
        fontWeight: 500,
        maxWidth: 540,
        margin: '0 auto',
        marginBottom: '1.5rem',
        lineHeight: 1.6,
      }}>{product.description}</p>
      <div style={{
        marginTop: 12,
        color: '#bfa14a',
        fontWeight: 600,
        fontSize: '1.05rem',
        letterSpacing: '0.04em',
        background: '#fffbe6',
        borderRadius: 12,
        padding: '1.1rem 1.5rem',
        boxShadow: '0 2px 12px #bfa14a11',
        maxWidth: 520,
      }}>{writeup}</div>
      <style>{`
        @media (max-width: 600px) {
          main[style] {
            padding: 1.2rem 0.2rem 1.5rem 0.2rem !important;
            border-radius: 10px !important;
            box-shadow: 0 2px 12px #bfa14a22 !important;
          }
          h1[style] {
            font-size: 1.3rem !important;
          }
          p[style] {
            font-size: 1.01rem !important;
          }
          div[style*='background: #fffbe6'] {
            font-size: 0.98rem !important;
            padding: 0.7rem 0.7rem !important;
          }
          img {
            height: 140px !important;
            border-radius: 8px !important;
            object-fit: cover !important;
            aspect-ratio: 16/9 !important;
          }
        }
      `}</style>
    </main>
  );
}
