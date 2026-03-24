import { colors, fonts } from '../styles/theme';
import logoImage from './logo/NEWTRON LOGO TALENT.png';

const FOOTER_COLS = [
  {
    heading: 'Company',
    links: [
      { label: 'About Us', page: 'about' },
      { label: 'Services', page: 'services' },
     
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', page: 'privacy' },
      { label: 'Terms and Conditions', page: 'terms' },
    ],
  },
  {
    heading: 'Contact',
    links: [
      { label: 'placements@newtron.in' },
      { label: '+91 +91 99406 84918' },
      { label: 'Get in Touch', page: 'contact' },
    ],
  },
];

export default function Footer({ setPage }) {
  return (
    <div style={{ background: colors.mid, borderTop: `1px solid ${colors.border}` }}>
      <div
        className="footer-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: 'clamp(30px, 5vw, 60px)',
          padding: 'clamp(40px, 5vw, 60px) clamp(20px, 4vw, 60px)',
          maxWidth: 1200,
          margin: '0 auto',
        }}
      >
        <div>
          <img
            src={logoImage}
            alt="Newtron logo"
            onClick={() => setPage('home')}
            style={{ height: 52, width: 'auto', cursor: 'pointer', display: 'block', marginBottom: 12 }}
          />
          <p style={{ fontSize: 'clamp(13px, 2vw, 14px)', color: '#000', lineHeight: 1.6, maxWidth: 260, fontFamily: fonts.body }}>
            Tier 2 SME Hiring Partner. Connecting ambitious businesses with the talent they need to grow.
          </p>
        </div>

        {FOOTER_COLS.map((col) => (
          <div key={col.heading}>
            <h4 style={{ fontFamily: fonts.body, fontSize: 'clamp(14px, 2vw, 16px)', letterSpacing: 0, color: '#000', marginBottom: 12 }}>
              {col.heading}
            </h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {col.links.map((l) => (
                <li key={l.label} style={{ marginBottom: 10 }}>
                  <span
                    onClick={l.page ? () => setPage(l.page) : undefined}
                    style={{
                      fontSize: 'clamp(13px, 2vw, 14px)',
                      color: '#000',
                      cursor: l.page ? 'pointer' : 'default',
                      transition: 'color .2s',
                      fontFamily: fonts.body,
                    }}
                    onMouseEnter={(e) => {
                      if (l.page) e.target.style.color = colors.electric;
                    }}
                    onMouseLeave={(e) => {
                      if (l.page) e.target.style.color = '#000';
                    }}
                  >
                    {l.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Social Media Icons */}
      <div
        className="footer-middle"
        style={{
          padding: '0 clamp(20px, 4vw, 60px) 20px',
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          gap: 20,
        }}
      >
        <div />
        <div
          className="footer-socials"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 20,
            flexWrap: 'wrap',
          }}
        >
          <a
            href="https://www.instagram.com/newtron_talent_solutions?igsh=MWEzNnhjbmpsdXJvYQ=="
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: 40,
              height: 40,
              background: 'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.1)';
              e.target.style.boxShadow = '0 4px 12px rgba(225, 48, 108, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = 'none';
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-3.353-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/share/1DKra4Rpzf/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: 40,
              height: 40,
              background: '#1877F2',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.1)';
              e.target.style.boxShadow = '0 4px 12px rgba(24, 119, 242, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = 'none';
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/newtron-talent-solution/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: 40,
              height: 40,
              background: '#0077B5',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.1)';
              e.target.style.boxShadow = '0 4px 12px rgba(0, 119, 181, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = 'none';
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <div
            className="footer-msme-badge"
            style={{
              display: 'inline-flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: 12,
              padding: '25px 25px',
              // background: colors.surface,
              // border: `1px solid ${colors.border}`,
              // borderRadius: 14,
              width: 360,
              minHeight: 0,
              marginLeft: 20,
              boxShadow: '0 8px 24px rgba(237, 228, 228, 0.06)',
            }}
          >
            <img
              src="/MSME_Logo Big.png"
              alt="MSME Registration Logo"
              style={{ width: 92, height: 'auto', objectFit: 'contain', display: 'block', flexShrink: 0 }}
            />
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                flexWrap: 'wrap',
                fontFamily: fonts.body,
                lineHeight: 5,
                color: '#f5f1f1',
                padding: '16px 18px',
                // background: '#fff(253, 231, 231, 0)',
                borderRadius: 15,
                // border: `2px solid ${colors.white}`,
                boxShadow: '0 15px 24px rgb(253, 253, 253)',
              }}
            >
              <h1 style={{ color: colors.black, fontSize: 10 }}>UAM : UDYAM-TN-02-0317513</h1>
              {/* <span style={{ fontFamily: fonts.body, fontSize: 15, color: colors.electric, fontWeight: 700, letterSpacing: 0.2 }}>
             
              </span> */}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .footer-grid { 
            grid-template-columns: 1fr 1fr !important; 
            gap: 30px !important;
          }
          .footer-grid > div:first-child {
            grid-column: 1 / -1;
          }
          .footer-middle {
            grid-template-columns: 1fr !important;
            justify-items: center !important;
          }
          .footer-msme-badge {
            margin-left: 0 !important;
            width: auto !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid { 
            grid-template-columns: 1fr !important; 
          }
          .footer-socials {
            gap: 14px !important;
          }
          .footer-msme-badge {
            width: 100% !important;
            justify-content: center !important;
            align-items: center !important;
          }
        }
      `}</style>

      <div
        className="footer-bottom"
        style={{
          borderTop: `1px solid ${colors.border}`,
          padding: '24px clamp(20px, 4vw, 60px)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: 1200,
          margin: '0 auto',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <p style={{ fontFamily: fonts.body, fontSize: 'clamp(12px, 2vw, 14px)', color: '#000', letterSpacing: 0 }}>
          (C) {new Date().getFullYear()} NEWTRON RECRUITMENT. ALL RIGHTS RESERVED.
        </p>
        <div style={{ fontFamily: fonts.body, fontSize: 'clamp(12px, 2vw, 14px)', color: '#000', letterSpacing: 0, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <span onClick={() => setPage('privacy')} style={{ cursor: 'pointer' }}>PRIVACY POLICY</span>
          <span>|</span>
          <span onClick={() => setPage('terms')} style={{ cursor: 'pointer' }}>TERMS OF SERVICE</span>
        </div>
      </div>
      <style>{`
        @media (max-width: 480px) {
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
