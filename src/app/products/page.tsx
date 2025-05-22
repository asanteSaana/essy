"use client";
import { Typography, Box } from "@mui/material";
import { products } from "../productsData";
import Link from "next/link";
import Image from "next/image";

export default function ProductsPage() {
  return (
    <Box
      sx={{
        maxWidth: 1200,
        mx: "auto",
        p: { xs: 1, md: 3 },
        minHeight: "100vh",
        bgcolor: "transparent",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 900,
          color: "#bfa14a",
          textAlign: "center",
          mb: 4,
          letterSpacing: "0.12em",
          fontFamily: "inherit",
          textShadow: "0 2px 12px #bfa14a33",
          lineHeight: 1.1,
          fontSize: { xs: "2rem", md: "2.2rem" },
        }}
      >
        Our Hair Extensions
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
          gap: { xs: 3, md: 5 },
        }}
      >
        {products.map((product) => {
          const slug = product.name
            .toLowerCase()
            .replace(/ /g, "-")
            .replace(/[^a-z0-9-]/g, "");
          return (
            <Box key={product.name} sx={{ width: '100%', maxWidth: 500, mx: 'auto' }}>
              <Box
                sx={{
                  borderRadius: 5,
                  bgcolor: "#fff",
                  boxShadow: "0 6px 32px #bfa14a22",
                  p: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer',
                  transition: 'box-shadow 0.2s',
                  '&:hover': { boxShadow: '0 12px 48px #bfa14a33' },
                  width: '100%',
                  minHeight: { xs: 340, sm: 400, md: 440 },
                  overflow: 'hidden',
                }}
                component={Link}
                href={`/products/${slug}`}
              >
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
                    borderRadius: 0,
                    display: 'block',
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    color: "#171717",
                    fontWeight: 700,
                    textAlign: "center",
                    minHeight: 48,
                    fontSize: { xs: "1.08rem", md: "1.22rem" },
                    py: 2,
                    width: '100%',
                    bgcolor: 'transparent',
                  }}
                >
                  {product.name}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
