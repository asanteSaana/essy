"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { products } from "./productsData";

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
					🎉 ESSENCE BY ESSY 🎉
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
					}}
				>
					Discover our premium range of hair extensions for every style.<br />
					<span style={{ color: '#7d6b2b', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '0.04em' }}>
						Launching soon! Sign up to be the first to know and get exclusive offers.
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
					Coming Soon
				</button>
			</div>
			<section
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(3, 1fr)",
					gap: "2.2rem",
					maxWidth: 1000,
					margin: '0 auto',
					zIndex: 5,
				}}
			>
				{products.map((product, i) => {
					const slug = product.name.toLowerCase().replace(/ /g, "-").replace(/[^a-z0-9-]/g, "");
					return (
						<div
							key={product.name}
							style={{
								background: "#fff",
								borderRadius: 20,
								boxShadow: "0 4px 24px #bfa14a18",
								padding: 28,
								textAlign: "center",
								transition: "transform 0.3s cubic-bezier(.4,2,.6,1), box-shadow 0.3s cubic-bezier(.4,2,.6,1)",
								cursor: "pointer",
								height: "100%",
								position: 'relative',
								overflow: 'hidden',
								animation: `cardFadeIn 0.7s ${0.2 + i * 0.08}s both`,
							}}
							onMouseOver={e => {
								e.currentTarget.style.transform = 'translateY(-8px) scale(1.04)';
								e.currentTarget.style.boxShadow = '0 8px 32px #bfa14a33';
							}}
							onMouseOut={e => {
								e.currentTarget.style.transform = '';
								e.currentTarget.style.boxShadow = '0 4px 24px #bfa14a18';
							}}
						>
							<Link href={`/products/${slug}`} style={{ display: 'block' }}>
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
										width: '100%',
										height: 'auto',
										aspectRatio: '16/9',
										transition: 'box-shadow 0.3s',
										display: 'block',
										maxHeight: 220,
									}}
								/>
							</Link>
							<Link href={`/products/${slug}`} style={{ textDecoration: 'none' }}>
								<h2
									style={{
										color: "#171717",
										fontWeight: 700,
										fontSize: "1.18rem",
										margin: "1rem 0 0.5rem",
										letterSpacing: '0.03em',
										textShadow: 'none',
										minHeight: 48,
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
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
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								{product.description}
							</p>
						</div>
					);
				})}
			</section>
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
					/* Product card tweaks */
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
					/* Launch banner spacing */
					div[style*='flex-direction:column'] {
						margin-bottom: 1.2rem !important;
						margin-top: 0.7rem !important;
					}
					/* Notify Me button */
					a[style*='Notify Me'] {
						font-size: 0.98rem !important;
						padding: 0.7rem 1.2rem !important;
						border-radius: 22px !important;
					}
					h1[style] {
						font-size: 1.25rem !important;
						padding: 0 0.1rem;
						line-height: 1.15;
						margin-bottom: 0.5rem !important;
						letter-spacing: 0.08em !important;
					}
				}
			`}</style>
		</main>
	);
}
