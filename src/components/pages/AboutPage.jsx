import { colors, fonts, sectionBase, sectionTitleStyle, sectionSubStyle, cardBase } from '../../styles/theme';
import { SectionTag, Em } from '../ui';
import Footer from '../Footer';

const VALUES = [
  { num: ' ', title: 'Integrity First', desc: "We only present candidates we'd hire ourselves. No resume farming, no padding shortlists." },
  { num: '', title: 'Speed as a Feature', desc: 'We treat every open role as urgent. Every delay costs you revenue and momentum.' },
  { num: '', title: 'Long-term Thinking', desc: 'Our success is measured in retention, not just placements. If you grow, we grow.' },
  { num: '', title: 'SME Empathy', desc: "We've worked inside small businesses. We understand constraints, culture, and what 'the right fit' really means." },
];

const TEAM = [
  { initials: 'DK', name: 'Dharshini Kannan', role: 'CEO, Newtron Talent Solutions', bio: '12 Years of HR Experience', color: colors.electric },
  { initials: 'DV', name: 'Deepika V', role: 'Senior HR Recruiter', bio: '4 Yrs of Experience | Recruitment Specialist | MSME |', color: colors.amber },
];

const PARAGRAPHS = [
  'At NEWTRON Talent Solutions, we are dedicated to connecting top talent with leading companies. Based in the vibrant city of Chennai, our agency specializes in providing tailored recruitment services across various industries.',
  'Our goal is to focus on Tier 2 recruitment, robust talent network, and a personalized approach to ensure the perfect match between employers and job seekers. Whether you need bulk hiring support, specialized staffing, or end-to-end recruitment solutions, we provide flexible and cost-effective services tailored to your needs.',
];

export default function AboutPage({ setPage }) {
  return (
    <>
      <section style={{ ...sectionBase, paddingTop: 80 }}>
        <div
          className="about-intro-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 32,
            alignItems: 'start',
            marginBottom: 28,
          }}
        >
          <div>
            <SectionTag>About Newtron</SectionTag>
            <h2
              style={{
                ...sectionTitleStyle,
                maxWidth: 680,
                lineHeight: 1.08,
                textWrap: 'balance',
              }}
            >
              The <Em>Hiring Partner</Em> for India's Growth Engine.
            </h2>
            <p style={{ ...sectionSubStyle, marginBottom: 0 }}>
              Newtron was founded with one conviction - that small and mid-size businesses deserve the same quality of talent acquisition that large corporations enjoy.
            </p>
          </div>

          <div>
            <div
              style={{
                background: colors.surface,
                border: `1px solid ${colors.border}`,
                borderRadius: 8,
                padding: 20,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 14,
              }}
            >
              <img
                src="/MSME_Logo Big.png"
                alt="MSME Registration Logo"
                style={{ width: 'min(100%, 260px)', height: 'auto', objectFit: 'contain' }}
              />
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  fontFamily: fonts.body,
                  fontSize: 'clamp(13px, 1.8vw, 14px)',
                  lineHeight: 1.6,
                  color: '#000',
                  padding: '12px 18px',
                  background: 'rgba(0, 170, 236, 0.08)',
                  borderRadius: 10,
                  border: `2px solid ${colors.electric}`,
                  boxShadow: '0 10px 24px rgba(0, 170, 236, 0.12)',
                }}
              >
                <strong style={{ color: colors.black, fontSize: 16 }}>UAM No:</strong>
                <span style={{ color: colors.electric, fontSize: 20, fontWeight: 700, letterSpacing: 0.3 }}>
                  UDYAM-TN-02-0317513
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="story-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(40px, 5vw, 80px)',
            alignItems: 'start',
          }}
        >
          <div>
            {PARAGRAPHS.map((p, i) => (
              <p key={i} style={{ color: '#000', lineHeight: 1.8, fontSize: 'clamp(14px, 2vw, 16px)', marginBottom: 24, maxWidth: 560, textWrap: 'balance' }}>
                {p}
              </p>
            ))}
          </div>

          <div>
            <div className="vision-founded" style={{ display: 'flex', gap: 24, marginTop: 56, marginBottom: 32, flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: 100, background: colors.surface, border: `1px solid ${colors.border}`, borderRadius: 8, padding: 20, borderLeft: `4px solid ${colors.amber}` }}>
                <h4 style={{ fontFamily: fonts.body, fontSize: 'clamp(16px, 2.5vw, 20px)', letterSpacing: 0, marginBottom: 10, color: colors.black }}>
                  OUR VISION
                </h4>
                <p style={{ color: '#000', lineHeight: 1.6, fontSize: 'clamp(13px, 1.8vw, 14px)', fontFamily: fonts.body }}>
                  A future where a 50-person manufacturing company in Coimbatore can hire as confidently and efficiently as a Fortune 500 in Mumbai. That's what we're building toward.
                </p>
              </div>

              <div style={{ flex: 1, minWidth: 200, background: colors.surface, border: `1px solid ${colors.border}`, borderRadius: 8, padding: 20, borderLeft: `4px solid ${colors.purple}` }}>
                <h4 style={{ fontFamily: fonts.body, fontSize: 'clamp(16px, 2.5vw, 20px)', letterSpacing: 0, marginBottom: 10, color: colors.black }}>
                  FOUNDED
                </h4>
                <p style={{ color: '#000', lineHeight: 1.6, fontSize: 'clamp(13px, 1.8vw, 14px)', fontFamily: fonts.body }}>
                  Established in 2024 by a team of ex-founders and senior HR professionals who experienced firsthand the talent gap facing India's SME sector. Headquartered in Chennai.
                </p>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .about-intro-grid { grid-template-columns: 1fr !important; }
            .story-grid { grid-template-columns: 1fr !important; }
            .vision-founded { flex-direction: column; }
          }
        `}</style>

        <div className="values-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginTop: 32 }}>
          {VALUES.map((v, i) => (
            <div key={i} style={{ background: colors.surface, border: `1px solid ${colors.border}`, borderRadius: 8, padding: 24 }}>
              <h4 style={{ fontFamily: fonts.body, fontSize: 'clamp(16px, 2.5vw, 20px)', letterSpacing: 0, marginBottom: 10, color: colors.black }}>
                {v.title}
              </h4>
              <p style={{ color: '#000', lineHeight: 1.6, fontSize: 'clamp(13px, 1.8vw, 15px)', fontFamily: fonts.body }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
        <style>{`
          @media (max-width: 768px) {
            .values-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      <section style={{ ...sectionBase, paddingTop: 0 }}>
        <SectionTag>Leadership</SectionTag>
        <h2 style={sectionTitleStyle}>People Who <Em>Get It.</Em></h2>

        <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24, marginTop: 40 }}>
          {TEAM.map((m) => (
            <div key={m.name} style={{ ...cardBase, textAlign: 'center' }}>
              <div style={{ width: 64, height: 64, background: colors.mid, border: `1px solid ${m.color}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: fonts.body, fontSize: 24, color: m.color, margin: '0 auto 16px' }}>
                {m.initials}
              </div>
              <strong style={{ display: 'block', fontSize: 15 }}>{m.name}</strong>
              <div style={{ fontFamily: fonts.body, fontSize: 13, color: '#000', letterSpacing: 0, marginTop: 4 }}>{m.role}</div>
              <p style={{ fontSize: 13, color: '#000', marginTop: 12, lineHeight: 1.6 }}>{m.bio}</p>
            </div>
          ))}
        </div>
        <style>{`
          @media (max-width: 768px) {
            .team-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 480px) {
            .team-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      <Footer setPage={setPage} />
    </>
  );
}
