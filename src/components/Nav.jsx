import { useState } from 'react';
import { colors, fonts } from '../styles/theme';
import logoImage from './logo/NEWTRON LOGO TALENT.png';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'clients', label: 'Clients' },
  { id: 'careers', label: 'Job Openings' },
];

export default function Nav({ page, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    setPage(id);
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '20px 60px',
        background: '#ffffff',
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      {/* Logo */}
      <img
        src={logoImage}
        alt="Newtron logo"
        onClick={() => handleNavClick('home')}
        style={{ height: 44, width: 'auto', cursor: 'pointer', display: 'block' }}
      />

      {/* Desktop Links */}
      <ul style={{ 
        display: 'flex', 
        gap: 36, 
        listStyle: 'none', 
        alignItems: 'center',
        margin: 0,
        padding: 8,
        background: '#ffffff',
        borderRadius: 4,
      }}>
        {NAV_LINKS.map(l => (
          <li key={l.id} className="nav-link-desktop">
            <button
              onClick={() => handleNavClick(l.id)}
              style={{
                fontFamily: fonts.body,
                fontSize: 16,
                letterSpacing: 0,
                color: page === l.id ? colors.electric : colors.muted,
                fontWeight: 600,
                textDecoration: page === l.id ? 'underline' : 'none',
                textUnderlineOffset: 6,
                textDecorationThickness: 1,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                transition: 'color .2s, text-decoration-color .2s',
              }}
            >
              {l.label}
            </button>
          </li>
        ))}
        <li className="nav-link-desktop">
          <button
            onClick={() => handleNavClick('contact')}
            style={{
              background: colors.electric,
              color: colors.black,
              padding: '8px 20px',
              borderRadius: 2,
              fontFamily: fonts.body,
              fontSize: 16,
              letterSpacing: 0,
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Partner With Us
          </button>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none',
          background: '#ffffff',
          border: 'none',
          cursor: 'pointer',
          padding: 8,
          flexDirection: 'column',
          gap: 5,
        }}
        className="mobile-menu-btn"
        aria-label="Toggle menu"
      >
        <span style={{
          width: 24,
          height: 2,
          background: colors.black,
          transition: 'transform 0.3s',
          transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
        }} />
        <span style={{
          width: 24,
          height: 2,
          background: colors.black,
          transition: 'opacity 0.3s',
          opacity: menuOpen ? 0 : 1,
        }} />
        <span style={{
          width: 24,
          height: 2,
          background: colors.black,
          transition: 'transform 0.3s',
          transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
        }} />
      </button>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            padding: '16px 16px 32px',
            gap: 16,
            zIndex: 2000,
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
            overflowY: 'auto',
            width: '100vw',
            height: '100vh',
          }}
          className="mobile-menu"
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 4px 16px' }}>
            <img
              src={logoImage}
              alt="Newtron logo"
              onClick={() => handleNavClick('home')}
              style={{ height: 36, width: 'auto', cursor: 'pointer', display: 'block' }}
            />
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              style={{
                background: 'none',
                border: 'none',
                fontSize: 24,
                cursor: 'pointer',
                lineHeight: 1,
                padding: 8,
              }}
            >
              ×
            </button>
          </div>
          <div style={{ height: 1, background: colors.border, marginBottom: 8 }} />
          <div style={{ background: '#f8f8f8', border: `1px solid ${colors.border}`, borderRadius: 6, overflow: 'hidden' }}>
            {NAV_LINKS.map((l, idx) => (
              <button
                key={l.id}
                onClick={() => handleNavClick(l.id)}
                style={{
                  width: '100%',
                  fontFamily: fonts.body,
                  fontSize: 20,
                  letterSpacing: 0,
                  color: page === l.id ? colors.electric : colors.black,
                  fontWeight: 600,
                  background: '#f8f8f8',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  padding: '14px 16px',
                  borderBottom: idx === NAV_LINKS.length - 1 ? 'none' : `1px solid ${colors.border}`,
                }}
              >
                {l.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => handleNavClick('contact')}
            style={{
              background: colors.electric,
              color: colors.black,
              padding: '16px 24px',
              borderRadius: 4,
              fontFamily: fonts.body,
              fontSize: 18,
              letterSpacing: 0,
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Partner With Us
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          nav {
            padding: 16px 20px !important;
          }
          .mobile-menu {
            background: #ffffff !important;
          }
          .nav-link-desktop {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
         
        }
      `}</style>
    </nav>
  );
}
