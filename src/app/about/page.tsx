"use client";

export default function AboutPage() {
  return (
    <main style={{
      maxWidth: 700,
      margin: "0 auto",
      padding: "2.5rem 1.5rem 2rem 1.5rem",
      background: "#fff",
      minHeight: "70vh",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    }}>
      <h1 style={{
        fontSize: "2.2rem",
        fontWeight: 900,
        color: "#bfa14a",
        marginBottom: "1.2rem",
        letterSpacing: "0.12em",
        fontFamily: 'inherit',
        textShadow: '0 2px 12px #bfa14a33',
        lineHeight: 1.1,
      }}>
        About ESSY
      </h1>
      <p style={{
        color: "#171717",
        fontSize: "1.18rem",
        fontWeight: 500,
        maxWidth: 540,
        margin: '0 auto',
        marginBottom: '1.5rem',
        lineHeight: 1.6,
        background: "#fff",
        borderRadius: "0.5rem",
        padding: "1rem",
      }}>
        <span style={{ color: '#bfa14a', fontWeight: 700 }}>ESSY</span> is dedicated to empowering confidence and beauty with the finest hair extensions. Our mission is to deliver premium, ethically sourced hair that blends seamlessly and feels natural—so you can express your unique style every day.<br /><br />
        We believe in quality, luxury, and authenticity. Each ESSY extension is carefully selected and crafted for a flawless, long-lasting look. Join us on our journey to redefine hair beauty, one strand at a time.
      </p>
      <div style={{
        marginTop: 24,
        color: '#bfa14a',
        fontWeight: 600,
        fontSize: '1.05rem',
        letterSpacing: '0.04em',
        background: '#fffbe6',
        borderRadius: 12,
        padding: '1.1rem 1.5rem',
        boxShadow: '0 2px 12px #bfa14a11',
        maxWidth: 420,
      }}>
        Premium Quality • Ethically Sourced • Made for You
      </div>
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
        }
      `}</style>
    </main>
  );
}
