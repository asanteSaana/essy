"use client";
import { Card, CardActionArea, CardContent, CardMedia, Typography, Box } from "@mui/material";
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
              <Card
                elevation={2}
                sx={{
                  borderRadius: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  bgcolor: "#fff",
                  boxShadow: "0 4px 24px #bfa14a18",
                }}
              >
                <CardActionArea
                  component={Link}
                  href={`/products/${slug}`}
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "stretch",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.name}
                    sx={{
                      width: "100%",
                      height: { xs: 160, sm: 180, md: 200 },
                      objectFit: "contain",
                      background: "#fff",
                      borderRadius: 4,
                      mt: 2,
                    }}
                  />
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      p: 2,
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
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
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#171717",
                        opacity: 0.95,
                        textAlign: "center",
                        minHeight: 44,
                        fontWeight: 500,
                      }}
                    >
                      {product.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
