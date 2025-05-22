"use client";
import { Typography, Box } from "@mui/material";
import { products } from "../productsData";
import Link from "next/link";

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
          gap: { xs: 2, md: 4 },
        }}
      >
        {products.map((product) => {
          const slug = product.name
            .toLowerCase()
            .replace(/ /g, "-")
            .replace(/[^a-z0-9-]/g, "");
          return (
            <Box key={product.name}>
              <Box
                sx={{
                  borderRadius: 3,
                  bgcolor: "#fff",
                  boxShadow: "0 4px 24px #bfa14a18",
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer',
                  transition: 'box-shadow 0.2s',
                  '&:hover': { boxShadow: '0 8px 32px #bfa14a22' },
                }}
                component={Link}
                href={`/products/${slug}`}
              >
                <Box
                  component="img"
                  src={product.image}
                  alt={product.name}
                  sx={{
                    width: "100%",
                    height: { xs: 200, sm: 240, md: 270 },
                    objectFit: "cover", // changed from 'contain' to 'cover' to reduce side space
                    background: "#fff",
                    borderRadius: 4,
                    mb: 2,
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    color: "#171717",
                    fontWeight: 700,
                    textAlign: "center",
                    minHeight: 48,
                    fontSize: { xs: "1rem", md: "1.18rem" },
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
