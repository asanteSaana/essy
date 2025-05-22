'use client';

import "./globals.css";
import { AppBar, Toolbar, IconButton, Typography, Box, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

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
        <AppBar position="sticky" elevation={0} sx={{ bgcolor: '#fff', color: '#bfa14a', borderBottom: '1px solid #f5e9c5', boxShadow: '0 2px 12px #bfa14a11', mb: 4 }}>
          <Toolbar sx={{ maxWidth: 1300, mx: 'auto', width: '100%', px: { xs: 2, md: 5 }, minHeight: 64, display: 'flex', justifyContent: 'space-between', gap: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, letterSpacing: '0.12em', color: '#bfa14a', fontFamily: 'inherit', flexShrink: 0 }}>
              <Link href="/" style={{ color: '#bfa14a', textDecoration: 'none' }}>ESSY</Link>
            </Typography>
            {/* Desktop nav */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 5, alignItems: 'center' }}>
              {navLinks.map(link => (
                <Link key={link.href} href={link.href} style={{ textDecoration: 'none', color: '#bfa14a', fontWeight: 600, fontSize: '1.1rem', letterSpacing: '0.03em', transition: 'color 0.2s' }}>{link.label}</Link>
              ))}
            </Box>
            {/* Hamburger for mobile */}
            <IconButton
              aria-label="Open menu"
              onClick={() => setSidebarOpen(true)}
              sx={{ display: { xs: 'block', md: 'none' }, color: '#bfa14a', ml: 'auto', p: 1, background: 'none' }}
              className="essy-hamburger"
            >
              <MenuIcon fontSize="large" sx={{ color: '#bfa14a' }} />
            </IconButton>
          </Toolbar>
        </AppBar>
        {/* Sidebar for mobile using MUI Drawer */}
        <Drawer
          anchor="left"
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          PaperProps={{
            sx: {
              width: 240,
              bgcolor: '#fff',
              boxShadow: '2px 0 16px #bfa14a22',
              p: 0,
            },
          }}
        >
          <List sx={{ mt: 4 }}>
            {navLinks.map((link) => (
              <ListItem key={link.href} disablePadding>
                <ListItemButton component={Link} href={link.href} onClick={() => setSidebarOpen(false)}>
                  <ListItemText
                    primary={link.label}
                    primaryTypographyProps={{
                      fontWeight: 700,
                      fontSize: '1.15rem',
                      color: '#bfa14a',
                      sx: { mb: 0.5 },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        {children}
      </body>
    </html>
  );
}
