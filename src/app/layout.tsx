'use client';

import "./globals.css";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <html lang="en">
      <body
        className="antialiased"
        style={{ background: '#fff', color: '#bfa14a', fontFamily: 'system-ui, sans-serif' }}
      >
        <header style={{ padding: '1.5rem 0', borderBottom: '1px solid #f5e9c5', marginBottom: '2rem', background: '#fff', boxShadow: '0 2px 12px #bfa14a11', position: 'sticky', top: 0, zIndex: 100 }}>
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            maxWidth: 1300,
            margin: '0 auto',
            padding: '0 2.5rem',
            minHeight: 64,
            gap: '2rem',
            transition: 'box-shadow 0.3s',
          }}>
            <span style={{ fontWeight: 800, fontSize: '2rem', letterSpacing: '0.12em', color: '#bfa14a', flexShrink: 0, fontFamily: 'inherit', transition: 'color 0.2s' }}>
              <a href="/" style={{ color: '#bfa14a', textDecoration: 'none' }}>ESSY</a>
            </span>
            {/* Hamburger for mobile */}
            <button
              aria-label="Open menu"
              onClick={() => setSidebarOpen(true)}
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 8,
                marginLeft: 'auto',
              }}
              className="essy-hamburger"
            >
              <span style={{ display: 'block', width: 28, height: 3, background: '#bfa14a', borderRadius: 2, marginBottom: 6 }}></span>
              <span style={{ display: 'block', width: 28, height: 3, background: '#bfa14a', borderRadius: 2, marginBottom: 6 }}></span>
              <span style={{ display: 'block', width: 28, height: 3, background: '#bfa14a', borderRadius: 2 }}></span>
            </button>
            {/* Desktop nav */}
            <div className="essy-desktop-nav" style={{ display: 'flex', gap: '3.5rem', alignItems: 'center' }}>
              <a href="/" style={{ textDecoration: 'none', color: '#bfa14a', fontWeight: 600, fontSize: '1.1rem', letterSpacing: '0.03em', transition: 'color 0.2s', position: 'relative' }}>Home</a>
              <a href="/products" style={{ textDecoration: 'none', color: '#bfa14a', fontWeight: 600, fontSize: '1.1rem', letterSpacing: '0.03em', transition: 'color 0.2s' }}>Products</a>
              <a href="/about" style={{ textDecoration: 'none', color: '#bfa14a', fontWeight: 600, fontSize: '1.1rem', letterSpacing: '0.03em', transition: 'color 0.2s' }}>About</a>
              <a href="/contact" style={{ textDecoration: 'none', color: '#bfa14a', fontWeight: 600, fontSize: '1.1rem', letterSpacing: '0.03em', transition: 'color 0.2s' }}>Contact</a>
            </div>
          </nav>
          {/* Sidebar for mobile */}
          {sidebarOpen && (
            <div style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0,0,0,0.25)',
              zIndex: 9999,
            }} onClick={() => setSidebarOpen(false)}>
              <aside style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: 240,
                height: '100vh',
                background: '#fff',
                boxShadow: '2px 0 16px #bfa14a22',
                padding: '2.5rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '2.2rem',
                zIndex: 10000,
                animation: 'slideInSidebar 0.3s',
              }} onClick={e => e.stopPropagation()}>
                <button aria-label="Close menu" onClick={() => setSidebarOpen(false)} style={{ alignSelf: 'flex-end', background: 'none', border: 'none', fontSize: 28, color: '#bfa14a', cursor: 'pointer', marginBottom: 24 }}>&times;</button>
                <a href="/" style={{ textDecoration: 'none', color: '#bfa14a', fontWeight: 700, fontSize: '1.15rem', marginBottom: 8 }}>Home</a>
                <a href="/products" style={{ textDecoration: 'none', color: '#bfa14a', fontWeight: 700, fontSize: '1.15rem', marginBottom: 8 }}>Products</a>
                <a href="/about" style={{ textDecoration: 'none', color: '#bfa14a', fontWeight: 700, fontSize: '1.15rem', marginBottom: 8 }}>About</a>
                <a href="/contact" style={{ textDecoration: 'none', color: '#bfa14a', fontWeight: 700, fontSize: '1.15rem' }}>Contact</a>
              </aside>
            </div>
          )}
          <style>{`
            @media (max-width: 800px) {
              .essy-desktop-nav { display: none !important; }
              .essy-hamburger { display: block !important; }
            }
            @media (min-width: 801px) {
              .essy-desktop-nav { display: flex !important; }
              .essy-hamburger { display: none !important; }
            }
            @keyframes slideInSidebar {
              from { transform: translateX(-100%); }
              to { transform: none; }
            }
          `}</style>
        </header>
        {children}
      </body>
    </html>
  );
}
