"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { products } from "./productsData";
import { Box, Typography } from "@mui/material";

export default function Home() {
	// Confetti state for client-only rendering
	type Confetti = {
		left: number;
		top: number;
		duration: number;
		delay: number;
		color: string;
	};

	const [confetti, setConfetti] = useState<Confetti[]>([]);
	useEffect(() => {
		const makeConfetti = () => Array.from({ length: 40 }).map((_, i) => ({
			left: Math.random() * 100,
			top: -(Math.random() * 20 + 5),
			duration: 2.5 + Math.random() * 1.5,
			delay: Math.random(),
			color: i % 2 === 0 ? '#bfa14a' : '#fffbe6',
		}));
		setConfetti(makeConfetti());
		const interval = setInterval(() => setConfetti(makeConfetti()), 10000); // 10 seconds
		return () => clearInterval(interval);
	}, []);

	return (
		<main
			style={{
				maxWidth: 1200,
				margin: "0 auto",
				padding: "2.5rem 1.5rem 2rem 1.5rem",
				background: "transparent",
				minHeight: "100vh",
				overflow: 'hidden',
				position: 'relative',
			}}
		>
			{/* Confetti Animation Layer */}
			<div id="confetti-launch" style={{
				pointerEvents: 'none',
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				zIndex: 10,
				overflow: 'hidden',
			}}>
				{confetti.map((c, i) => (
					<span key={i} style={{
						position: 'absolute',
						left: `${c.left}%`,
						top: `${c.top}%`,
						width: 12,
						height: 12,
						borderRadius: '50%',
						background: c.color,
						opacity: 0.8,
						animation: `confettiDrop ${c.duration}s ${c.delay}s cubic-bezier(.4,2,.6,1) forwards`,
						zIndex: 10,
					}} />
				))}
			</div>
			{/* Launch Banner Animation */}
			<div style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				marginBottom: '2.5rem',
				marginTop: '1.5rem',
				position: 'relative',
				zIndex: 20,
			}}>
				<h1
					style={{
						fontSize: "2.7rem",
						fontWeight: 900,
						color: "#bfa14a", // solid gold
						textAlign: "center",
						marginBottom: "0.7rem",
						letterSpacing: "0.12em",
						fontFamily: 'inherit',
						textShadow: '0 2px 12px #bfa14a33',
						animation: 'popIn 1.2s cubic-bezier(.4,2,.6,1)',
						lineHeight: 1.1,
					}}
				>
					ESSENCE
				</h1>
        	<h5
					style={{
						fontSize: "1.7rem",
						fontWeight: 900,
						color: "#bfa14a", // solid gold
						textAlign: "center",
						marginBottom: "0.7rem",
						letterSpacing: "0.12em",
						fontFamily: 'inherit',
						textShadow: '0 2px 12px #bfa14a33',
						animation: 'popIn 1.2s cubic-bezier(.4,2,.6,1)',
						lineHeight: 1.1,
					}}
				>
					BY
				</h5>
        	<h1
					style={{
						fontSize: "3.7rem",
						fontWeight: 900,
						color: "#bfa14a", // solid gold
						textAlign: "center",
						marginBottom: "0.7rem",
						letterSpacing: "0.12em",
						fontFamily: 'inherit',
						textShadow: '0 2px 12px #bfa14a33',
						animation: 'popIn 1.2s cubic-bezier(.4,2,.6,1)',
						lineHeight: 1.1,
					}}
				>
					🎉ESSY 🎉
				</h1>
				<p
					style={{
						textAlign: "center",
						color: "#bfa14a",
						fontSize: "1.25rem",
						fontWeight: 600,
						maxWidth: 600,
						margin: '0 auto',
						marginBottom: '1.2rem',
						background: '#fff', // white background
						borderRadius: 8,
						padding: '0.7rem 0',
					}}
				>
					Discover our premium range of hair extensions for every style.<br />
					<span style={{ color: '#7d6b2b', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '0.04em', background: '#fff' }}>
						Premium Quality • Ethically Sourced • Made for You
					</span>
				</p>
				<button type="button" style={{
					display: 'inline-block',
					background: '#bfa14a', // solid gold
					color: '#fff',
					fontWeight: 700,
					fontSize: '1.1rem',
					padding: '0.9rem 2.2rem',
					borderRadius: 32,
					boxShadow: '0 4px 24px #bfa14a33',
					textDecoration: 'none',
					marginTop: '0.5rem',
					letterSpacing: '0.04em',
					transition: 'background 0.2s',
					border: 'none',
					cursor: 'pointer',
				}} disabled>
					Coming Soon!!!
				</button>
			</div>
			<Box
				sx={{
					maxWidth: 1200,
					mx: "auto",
					p: { xs: 1, md: 3 },
					minHeight: "100vh",
					bgcolor: "transparent",
				}}
			>
				{/* <Typography
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
				</Typography> */}
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
									component={Link}
									href={`/products/${slug}`}
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
			<style>{`
				@keyframes fadeInDown {
					from { opacity: 0; transform: translateY(-30px); }
					to { opacity: 1; transform: none; }
				}
				@keyframes cardFadeIn {
					from { opacity: 0; transform: translateY(40px) scale(0.98); }
					to { opacity: 1; transform: none; }
				}
				@keyframes popIn {
					0% { opacity: 0; transform: scale(0.7); }
					60% { opacity: 1; transform: scale(1.1); }
					100% { opacity: 1; transform: scale(1); }
				}
				@keyframes bounceIn {
					0% { opacity: 0; transform: scale(0.7) translateY(40px); }
					60% { opacity: 1; transform: scale(1.1) translateY(-10px); }
					100% { opacity: 1; transform: scale(1) translateY(0); }
				}
				@keyframes confettiDrop {
					0% { opacity: 0.8; transform: translateY(0) scale(1); }
					80% { opacity: 0.8; }
					100% { opacity: 0; transform: translateY(110vh) scale(0.7); }
				}
				@media (max-width: 900px) {
					section[style*='grid'] {
						grid-template-columns: 1fr !important;
						gap: 1.2rem !important;
					}
					section[style*='grid'] > div > div {
						aspect-ratio: 16/9 !important;
						height: 140px !important;
					}
					section[style*='grid'] img {
						object-fit: contain !important;
						height: 100% !important;
						width: 100% !important;
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
					section[style*='grid'] > div > div {
						aspect-ratio: 16/9 !important;
						height: 120px !important;
					}
					section[style*='grid'] img {
						object-fit: contain !important;
						height: 100% !important;
						width: 100% !important;
					}
				}
			`}</style>
		</main>
	);
}
