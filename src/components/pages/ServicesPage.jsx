import { useState } from 'react';
import { colors, fonts, sectionBase, sectionTitleStyle, sectionSubStyle } from '../../styles/theme';
import { SectionTag, Em, ServiceCard } from '../ui';
import Footer from '../Footer';

const SERVICES = [
  {
    icon: '\uD83D\uDCCB', title: 'Job Analysis',
    // desc: 'Pay only when we successfully place a candidate. Ideal for individual or small-batch hires across any function. No upfront fees, no risk.',
    // features: ['72-hour shortlist delivery', '3-5 curated profiles per role', 'Interview scheduling & coordination', 'Offer negotiation support', '90-day replacement guarantee'],
  },
  {
    icon: '\u270D\uFE0F', title: 'Job Description Crafting',
    // desc: 'Pay only when we successfully place a candidate. Ideal for individual or small-batch hires across any function. No upfront fees, no risk.',
    // features: ['72-hour shortlist delivery', '3-5 curated profiles per role', 'Interview scheduling & coordination', 'Offer negotiation support', '90-day replacement guarantee'],
  },
  {
    icon: '\uD83D\uDC64', title: 'Candidate Sourcing',
    // desc: 'Pay only when we successfully place a candidate. Ideal for individual or small-batch hires across any function. No upfront fees, no risk.',
    // features: ['72-hour shortlist delivery', '3-5 curated profiles per role', 'Interview scheduling & coordination', 'Offer negotiation support', '90-day replacement guarantee'],
  },
  {
    icon: '\uD83E\uDDE9', title: 'Profile Matching',
    // desc: "Confidential, research-driven search for CXO, VP, and Director-level appointments. For leadership roles that define your company's next chapter.",
    // features: ['Dedicated research analyst', 'Passive candidate mapping', 'Psychometric assessments', 'Reference & background checks', '6-month replacement warranty'],
  },
  {
    icon: '\uD83D\uDD0E', title: 'Background Verification',
    // desc: 'Fast, confidential verification support to validate candidate identity, employment history, and reliability before onboarding.',
    // features: ['Employment history checks', 'Address and ID validation', 'Education verification support', 'Reference check coordination', 'Clear status-based reporting'],
  },
  {
    icon: '\uD83D\uDC68\u200D\uD83D\uDCBC', title: 'Presence in Interview Panel',
    // desc: "Newtron can join your interview panel to assess communication, role fit, and hiring readiness with a recruiter's lens.",
    // features: ['HR-led candidate evaluation', 'Structured interview support', 'Role-fit and culture-fit assessment', 'Panel feedback summary', 'Stronger final-stage selection'],
  },
  // {
  //   icon: 'VOLUME', title: 'Volume Hiring',
  //   desc: 'Rapidly scale your workforce with structured bulk hiring programs. Built for expansion, seasonal demand, or new facility ramp-ups.',
  //   features: ['10-500+ positions', 'Dedicated hiring pods', 'Campus & walk-in drives', 'Structured onboarding support', 'SLA-based delivery'],
  // },
  // {
  //   icon: 'RPO', title: 'Recruitment Process Outsourcing (RPO)',
  //   desc: "Let Newtron act as your embedded talent acquisition team. We integrate with your systems, represent your brand, and own your hiring outcomes.",
  //   features: ['Embedded TA partner model', 'ATS integration & reporting', 'Employer branding support', 'Monthly hiring dashboards', 'Flexible engagement terms'],
  // },
  // {
  //   icon: 'STAFF', title: 'Blue-Collar Staffing',
  //   desc: 'Skilled and semi-skilled workforce placement for manufacturing, logistics, and operations. Verified, trained, and ready to deploy.',
  //   features: ['Shopfloor & warehouse roles', 'Skill verification process', 'Regional language support', 'Background & PF verification', 'Payroll handoff support'],
  // },
  // {
  //   icon: 'MAP', title: 'Talent Mapping & Advisory',
  //   desc: "Not ready to hire yet? We map the talent landscape for your sector, benchmark compensation, and build a pipeline before you need it.",
  //   features: ['Competitor talent analysis', 'Salary benchmarking reports', 'Succession planning support', 'Hiring readiness audit', 'One-time or retainer basis'],
  // },
];

const INDUSTRIES = [
  'Jewellery', 'Manufacturing', 'Logistics & Supply Chain',
  'BFSI & Fintech', 'Healthcare & Pharma', 'Retail & D2C',
  'Construction & Real Estate', 'Renewable Energy', 'EdTech & Training',
  'Textiles',
];

const STEPS = [
  { num: 1, title: 'REQUIREMENT UNDERSTANDING', desc: 'We understand your role, team, culture, and non-negotiables in 30 minutes.' },
  { num: 2, title: 'CANDIDATE SEARCH', desc: 'Active sourcing + database search. We cast wide, then filter hard.' },
  { num: 3, title: 'HR SCREENING', desc: 'Skills test, behavioural interview, and culture-fit evaluation.' },
  { num: 4, title: 'INTERVIEW', desc: '3-5 profiles with detailed notes and assessments, within 72 hours.' },
  { num: 5, title: 'CANDIDATE JOINING', desc: 'Offer negotiation, pre-joining engagement, and smooth onboarding.' },
];

export default function ServicesPage({ setPage }) {
  const [hoveredPill, setHoveredPill] = useState(null);

  return (
    <>
      <section style={{ ...sectionBase, paddingTop: 80 }}>
        <SectionTag>What We Do</SectionTag>
        <h2 style={{ ...sectionTitleStyle, fontSize: 'clamp(30px, 5vw, 50px)', lineHeight: 1.08 }}>
          End-to-End <Em>Hiring</Em>
          <br />
          Solutions for SMEs.
        </h2>
        <p style={sectionSubStyle}>
          From sourcing to onboarding, Newtron manages the full recruitment lifecycle - customized to your business size, culture, and urgency.
        </p>
        <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
          {SERVICES.map((s) => (
            <div key={s.title} className="service-card-wrap">
              <ServiceCard {...s} />
            </div>
          ))}
        </div>
        <style>{`
          .service-card-wrap {
            width: 100%;
          }

          @media (min-width: 1024px) {
            .services-grid {
              grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
            }
          }

          @media (max-width: 768px) {
            .services-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      <section style={{ ...sectionBase, paddingTop: 0 }}>
        <SectionTag>Industries We Serve</SectionTag>
        <h2 style={sectionTitleStyle}>
          Deep Expertise Across <Em>Below Verticals.</Em>
        </h2>
        <p style={sectionSubStyle}>
          We've built genuine expertise and talent networks where SMEs are most concentrated.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {INDUSTRIES.map((ind, i) => {
            const lit = hoveredPill === i;
            return (
              <div
                key={ind}
                onMouseEnter={() => setHoveredPill(i)}
                onMouseLeave={() => setHoveredPill(null)}
                style={{
                  padding: '12px 24px',
                  border: `1px solid ${lit ? colors.electric : colors.border}`,
                  borderRadius: 100,
                  fontFamily: fonts.body,
                  fontSize: 16,
                  letterSpacing: 0,
                  color: lit ? colors.electric : '#444',
                  background: lit ? 'rgba(0,229,160,0.05)' : 'transparent',
                  cursor: 'default',
                  transition: 'all .2s',
                }}
              >
                {ind}
              </div>
            );
          })}
        </div>
      </section>

      <section style={{ ...sectionBase, paddingTop: 0 }}>
        <SectionTag>Our Process</SectionTag>
        <h2 style={sectionTitleStyle}>
          How We <Em>Deliver</Em>
          <br />
          in 18 Days.
        </h2>

        <div className="process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16, marginTop: 64, position: 'relative' }}>
          <div className="process-connector" style={{ position: 'absolute', top: 30, left: '10%', right: '10%', height: 1, background: `linear-gradient(90deg, transparent, ${colors.electric}, transparent)` }} />

          {STEPS.map((s) => (
            <div key={s.num} style={{ textAlign: 'center', padding: '0 12px' }}>
              <div style={{ width: 60, height: 60, background: colors.mid, border: `1px solid ${colors.border}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontFamily: fonts.body, fontSize: 22, color: colors.electric, position: 'relative', zIndex: 1 }}>
                {s.num}
              </div>
              <div style={{ fontFamily: fonts.body, fontSize: 'clamp(12px, 2vw, 16px)', letterSpacing: 0, marginBottom: 8, fontWeight: 600 }}>{s.title}</div>
              <div style={{ fontSize: 'clamp(11px, 1.5vw, 12px)', color: '#000', lineHeight: 1.6 }}>{s.desc}</div>
            </div>
          ))}
        </div>
        <style>{`
          @media (max-width: 768px) {
            .process-grid { grid-template-columns: 1fr !important; gap: 32px !important; margin-top: 40px !important; }
            .process-connector { display: none !important; }
          }
        `}</style>
      </section>

      <Footer setPage={setPage} />
    </>
  );
}
