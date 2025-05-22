"use client";
import { Box, Typography, Button } from "@mui/material";
import { products } from "../../productsData";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";

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
      <Box sx={{ p: 5, textAlign: 'center', color: '#bfa14a' }}>
        <Typography variant="h5">Product Not Found</Typography>
        <Button onClick={() => router.push('/products')} sx={{ mt: 3, background: '#bfa14a', color: '#fff', borderRadius: 2, fontWeight: 700, px: 3, py: 1.5, '&:hover': { background: '#a88c36' } }}>Back to Products</Button>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 700, mx: 'auto', p: { xs: 1, md: 3 }, minHeight: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <div style={{
        width: '100%',
        aspectRatio: '16/9',
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        border: 'none', // removed border line
        borderRadius: 18,
        marginBottom: 28,
        boxShadow: '0 2px 12px #bfa14a11',
      }}>
        <Image
          src={product.image}
          alt={product.name}
          width={800}
          height={340}
          style={{
            width: '100%',
            height: '340px',
            objectFit: 'cover',
            background: '#fff',
            borderRadius: 16,
            display: 'block',
          }}
        />
      </div>
      <Typography variant="h4" sx={{ fontWeight: 900, color: '#bfa14a', mb: 2, letterSpacing: '0.12em', fontFamily: 'inherit', textShadow: '0 2px 12px #bfa14a33', lineHeight: 1.1, fontSize: { xs: '1.3rem', md: '2rem' } }}>{product.name}</Typography>
      <Typography sx={{ color: '#000', background: '#fff', fontSize: { xs: '1.01rem', md: '1.18rem' }, fontWeight: 500, maxWidth: 540, mx: 'auto', mb: 3, lineHeight: 1.6 }}>{product.description}</Typography>
      <Box sx={{ mt: 2, color: '#000', fontWeight: 600, fontSize: '1.05rem', letterSpacing: '0.04em', background: '#fff', borderRadius: 2, p: 2, boxShadow: '0 2px 12px #bfa14a11', maxWidth: 520, textAlign: 'justify' }}>{writeup}</Box>
    </Box>
  );
}
