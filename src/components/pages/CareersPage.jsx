import { colors, fonts, sectionBase, sectionTitleStyle, sectionSubStyle } from '../../styles/theme';
import { SectionTag, Em, ServiceCard } from '../ui';
import Footer from '../Footer';

// const PERKS = [
//   { icon: '📈', title: 'Performance Culture', desc: "Aggressive incentive structures. Top performers earn 2-3x their base. No ceiling, no office politics blocking your growth." },
//   { icon: '🧠', title: 'Learning First',       desc: 'Monthly learning days, sponsored certifications, and access to our internal playbook library built from 3000+ successful placements.' },
//   { icon: '🌍', title: 'Flexible & Remote',    desc: "Work from any of our 6 offices or fully remote. We judge on output, not hours. Async-friendly culture with weekly syncs." },
// ];

export default function CareersPage({ setPage }) {
  return (
    <>
      <section style={{ ...sectionBase, paddingTop: 80 }}>
        {/* <SectionTag>Join Newtron</SectionTag>
        <h2 style={sectionTitleStyle}>Work Where <Em>Impact</Em><br />Is Measurable.</h2>
        <p style={sectionSubStyle}>
          At Newtron, every placement is a life changed and a business levelled up. We're a fast-growing team that rewards initiative, speed, and genuine human connection.
        </p> */}

        {/* Perks */}
        {/* <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginBottom: 64 }}>
          {PERKS.map(p => <ServiceCard key={p.title} {...p} />)}
        </div> */}

        {/* Open Roles */}
        <SectionTag>Open Positions</SectionTag>
        <h3 style={{ fontFamily: fonts.body, fontSize: 36, letterSpacing: 0, marginBottom: 24 }}>
          Current <Em>Openings.</Em>
        </h3>

        <div style={{ marginTop: 8, padding: 32, background: colors.surface, border: `1px dashed ${colors.border}`, borderRadius: 4, textAlign: 'center' }}>
          <p style={{ color: '#000', fontSize: 16, marginBottom: 16, fontFamily: fonts.body }}>
            To get details for current openings, click the link below.
          </p>
          <a
            href="https://recruit.procease.co/candidate/login"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-block',
              background: colors.electric,
              color: colors.black,
              textDecoration: 'none',
              padding: '10px 20px',
              borderRadius: 2,
              fontFamily: fonts.body,
              fontSize: 16,
              letterSpacing: 0,
              fontWeight: 600,
            }}
          >
            Get Current Openings
          </a>
        </div>
      </section>

      <Footer setPage={setPage} />
    </>
  );
}
