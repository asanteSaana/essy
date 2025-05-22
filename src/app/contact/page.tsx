"use client";

export default function ContactPage() {
  return (
    <main style={{
      maxWidth: 500,
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
        Contact ESSY
      </h1>
      <p style={{
        color: "#171717",
        fontSize: "1.12rem",
        fontWeight: 500,
        maxWidth: 400,
        margin: '0 auto',
        marginBottom: '1.5rem',
        lineHeight: 1.6,
      }}>
        Have a question or want to connect? Fill out the form below and our team will get back to you soon!
      </p>
      <form style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
        width: '100%',
        maxWidth: 340,
        margin: '0 auto',
      }} onSubmit={e => e.preventDefault()}>
        <input type="text" placeholder="Your Name" required style={{
          padding: '0.9rem 1rem',
          borderRadius: 8,
          border: '1.5px solid #f5e9c5',
          fontSize: '1rem',
          marginBottom: 2,
        }} />
        <input type="email" placeholder="Your Email" required style={{
          padding: '0.9rem 1rem',
          borderRadius: 8,
          border: '1.5px solid #f5e9c5',
          fontSize: '1rem',
          marginBottom: 2,
        }} />
        <input type="tel" placeholder="Your Mobile Number" required style={{
          padding: '0.9rem 1rem',
          borderRadius: 8,
          border: '1.5px solid #f5e9c5',
          fontSize: '1rem',
          marginBottom: 2,
        }} />
        <textarea placeholder="Message" required rows={4} style={{
          padding: '0.9rem 1rem',
          borderRadius: 8,
          border: '1.5px solid #f5e9c5',
          fontSize: '1rem',
          marginBottom: 2,
          resize: 'vertical',
        }} />
        <button type="submit" style={{
          background: '#bfa14a', // solid gold
          color: '#fff',
          fontWeight: 700,
          fontSize: '1.1rem',
          padding: '0.9rem 2.2rem',
          borderRadius: 32,
          boxShadow: '0 4px 24px #bfa14a33',
          border: 'none',
          cursor: 'pointer',
          letterSpacing: '0.04em',
          marginTop: 8,
          transition: 'background 0.2s',
        }}>
          Send Message
        </button>
      </form>
      <div style={{
        marginTop: 32,
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
        Email: <a href="mailto:info@essyhair.com" style={{ color: '#bfa14a', textDecoration: 'underline', fontWeight: 700 }}>info@essyhair.com</a><br />
        Tel: <a href="tel:+1234567890" style={{ color: '#bfa14a', textDecoration: 'underline', fontWeight: 700 }}>+1 234 567 890</a>
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
          form[style] input, form[style] textarea {
            font-size: 0.98rem !important;
            padding: 0.7rem 0.7rem !important;
          }
          button[type='submit'] {
            font-size: 0.98rem !important;
            padding: 0.7rem 1.2rem !important;
            border-radius: 22px !important;
          }
        }
      `}</style>
    </main>
  );
}
