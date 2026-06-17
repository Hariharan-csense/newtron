import { useEffect, useState } from 'react';
import { colors, fonts, sectionBase, sectionTitleStyle, sectionSubStyle } from '../../styles/theme';
import { LiveDot, SectionTag, Em, BtnPrimary, BtnGhost, ServiceCard } from '../ui';
import Footer from '../Footer';
import EnquiryForm from '../EnquiryForm';

// const STATS = [
//   ['850+', 'Placements / Year', '92%', 'Offer Acceptance'],
//   ['18', 'Avg. Days to Hire', '200+', 'SME Clients'],
// ];

const HIGHLIGHTS = [
  { icon: '01', label: '18-day', text: 'average time-to-fill' },
  { icon: '02', label: 'Zero', text: 'placement fee on replacement guarantee' },
  { icon: '03', label: '45-day', text: 'retention guarantee' },
  { icon: '04', label: 'Pan-India', text: 'talent network' },
];

const WHY_CARDS = [
  { icon: '01', title: 'SME-First Approach', desc: 'We understand small business budgets, timelines, and culture. No cookie-cutter JDs. No bloated retainers.' },
  { icon: '02', title: 'Speed Without Sacrifice', desc: 'Our pre-vetted talent pool and parallel screening pipeline means you get shortlists in 72 hours, not 3 weeks.' },
  { icon: '03', title: 'Local Talent Advantage ', desc: 'We maintain deep, active talent networks across Tier 2 cities.' },
  { icon: '04', title: 'Data-Driven Matching', desc: 'Personality assessment, skills assessment, and culture-fit scoring, so every shortlist is a quality shortlist.' },
  { icon: '05', title: '45-Day Guarantee', desc: "If any placement does not work out within 45   days, we replace at zero additional cost. No debates, no fine print." },
];

const VERTICALS = ['Restaurant', 'Manufacturing', 'Jewellery', 'Textiles', 'Healthcare'];

export default function HomePage({ setPage }) {
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(true);

  useEffect(() => {
    if (!showEnquiryPopup) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [showEnquiryPopup]);

  return (
    <>
      {showEnquiryPopup ? (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.45)',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: 20,
            paddingTop: 120,
            zIndex: 300,
          }}
        >
          <div
            style={{
              width: 'min(640px, 94vw)',
              maxHeight: '88vh',
              overflowY: 'auto',
              background: '#fff',
              borderRadius: 12,
              border: `1px solid ${colors.border}`,
              boxShadow: '0 20px 50px rgba(0,0,0,0.18)',
              padding: 24,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <h3 style={{ fontFamily: fonts.body, fontSize: 34, letterSpacing: 0, margin: 0 }}>
                QUICK <Em>ENQUIRY</Em>
              </h3>
              <button
                onClick={() => setShowEnquiryPopup(false)}
                style={{
                  border: 'none',
                  background: 'transparent',
                  fontSize: 28,
                  lineHeight: 1,
                  cursor: 'pointer',
                  color: '#000',
                }}
                aria-label="Close enquiry popup"
              >
                x
              </button>
            </div>
            <EnquiryForm />
          </div>
        </div>
      ) : null}

      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          padding: 'clamp(80px, 15vh, 120px) clamp(20px, 5vw, 60px) 48px',
          position: 'relative',
          overflow: 'hidden',
          backgroundImage: "linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('/bg-image.png')",
          backgroundBlendMode: 'lighten',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll',
        }}
        className="hero-bg"
      >
        <style>{`
          @media (max-width: 900px) {
            .hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
            .hero-text { text-align: center; }
            .hero-text p { max-width: 100%; margin-left: auto; margin-right: auto; }
            .hero-buttons { flex-direction: column; align-items: stretch; }
            .hero-buttons button { width: 100%; }
            .hero-metrics { margin-top: 8px; }
          }
          @media (max-width: 480px) {
            .hero-grid { gap: 24px !important; }
            .hero-metrics > div { padding: 32px 24px !important; }
          }
        `}</style>
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 80,
            alignItems: 'flex-start',
            maxWidth: 1200,
            margin: 'auto',
            width: '100%',
          }}
        >
          <div className="hero-text">
            <div
              className="fade-up"
              style={{ fontFamily: fonts.body, fontSize: 14, letterSpacing: 0, color: colors.electric, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}
            >
              <span style={{ width: 32, height: 1, background: colors.electric, display: 'inline-block' }} />
              <LiveDot /> Tier 2 SME Hiring Partner
            </div>

            <h2
              className="fade-up delay-1"
              style={{ fontFamily: fonts.body, fontSize: 'clamp(40px,6vw,52px)', lineHeight: 1.05, letterSpacing: 0.2, marginBottom: 24 }}
            >
              HIRE <Em>RIGHT</Em><br />GROW <Em>FAST</Em>
            </h2>

            <p className="fade-up delay-2" style={{ fontSize: 20, color: '#000', lineHeight: 1.6, maxWidth: 520, marginBottom: 32 }}>
              Newtron connects growing small and mid-size enterprises with skilled, culture-fit talent, faster and smarter, with zero compromise on quality.
            </p>

            <div className="fade-up delay-3 hero-buttons" style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              <BtnPrimary onClick={() => setPage('contact')}>Start Hiring</BtnPrimary>
              <BtnGhost onClick={() => setPage('services')}>Our Services</BtnGhost>
            </div>
          </div>

          {/* <div className="fade-up delay-4 hero-metrics" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ background: colors.surface, border: `1px solid ${colors.border}`, borderRadius: 4, padding: '48px 40px', width: '100%' }}>
              {
              STATS.map((row, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', gap: 20, marginBottom: i === 0 ? 40 : 0 }}>
                  <div>
                    <div style={{ fontFamily: fonts.body, fontSize: 40, color: colors.electric, lineHeight: 1 }}>{row[0]}</div>
                    <div style={{ fontFamily: fonts.body, fontSize: 15, color: '#000', letterSpacing: 0.2, marginTop: 8 }}>{row[1]}</div>
                  </div>
                  <div style={{ width: 1, background: colors.border, alignSelf: 'stretch' }} />
                  <div>
                    <div style={{ fontFamily: fonts.body, fontSize: 40, color: colors.electric, lineHeight: 1 }}>{row[2]}</div>
                    <div style={{ fontFamily: fonts.body, fontSize: 15, color: '#000', letterSpacing: 0.2, marginTop: 8 }}>{row[3]}</div>
                  </div>
                </div>
              ))}

              <div style={{ borderTop: `1px solid ${colors.border}`, paddingTop: 28, marginTop: 28 }}>
                <div style={{ fontFamily: fonts.body, fontSize: 16, color: '#000', letterSpacing: 0.2, marginBottom: 12, fontWeight: 600 }}>Active Verticals</div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {VERTICALS.map((v, i) => (
                    <span
                      key={v}
                      style={{
                        background: colors.mid,
                        border: `1px solid ${i < 2 ? colors.electric : colors.border}`,
                        padding: '10px 18px',
                        fontFamily: fonts.body,
                        fontSize: 16,
                        letterSpacing: 0.1,
                        color: i < 2 ? colors.electric : '#000',
                        borderRadius: 2,
                      }}
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div> */}
        </div>

        <div style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, fontFamily: fonts.body, fontSize: 12, color: '#000', letterSpacing: 0 }}>
          <div style={{ width: 1, height: 48, background: `linear-gradient(to bottom, ${colors.electric}, transparent)`, animation: 'scrollLine 1.2s ease infinite alternate' }} />
          
        </div>
      </div>

      <div style={{ 
        background: colors.mid, 
        borderTop: `1px solid ${colors.border}`, 
        borderBottom: `1px solid ${colors.border}`, 
        padding: '18px clamp(16px, 4vw, 60px)', 
        display: 'flex', 
        gap: 'clamp(20px, 4vw, 60px)', 
        justifyContent: 'center', 
        flexWrap: 'wrap' 
      }}>
        {HIGHLIGHTS.map((h, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: fonts.body, fontSize: 'clamp(12px, 2vw, 14px)', color: '#000', letterSpacing: 0, whiteSpace: 'nowrap' }}>
            {h.icon} <span style={{ color: colors.electric }}>{h.label}</span> {h.text}
          </div>
        ))}
      </div>

      <section style={{...sectionBase, position: 'relative'}}>
        <SectionTag>Why Newtron</SectionTag>
        <h2 style={sectionTitleStyle}>Built Exclusively for  <Em>SMEs,</Em><br /></h2>
        <p style={sectionSubStyle}>
         Newtron is purpose-built for Tier 2 businesses that need enterprise-grade hiring without the enterprise-grade price tag.
        </p>
        <div className="why-cards-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, justifyContent: 'center' }}>
          {WHY_CARDS.map((c) => {
            if (c.title === '45-Day Guarantee') {
              return (
                <div key={c.title} style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'center' }}>
                  <div style={{ width: '100%', maxWidth: 480 }}>
                    <ServiceCard {...c} />
                  </div>
                </div>
              );
            }
            return <ServiceCard key={c.title} {...c} />;
          })}
        </div>
        <style>{`
          @media (max-width: 768px) {
            .why-cards-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      <Footer setPage={setPage} />
    </>
  );
}
