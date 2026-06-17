import { colors, fonts, sectionBase, sectionTitleStyle, sectionSubStyle } from '../../styles/theme';
import { SectionTag, Em, MetricBox } from '../ui';
import Footer from '../Footer';
import { useEffect, useRef, useState } from 'react';

// Import client images
import client1 from '../../clients/WhatsApp Image 2026-03-10 at 4.41.30 PM.jpeg';
import client2 from '../../clients/WhatsApp Image 2026-03-10 at 4.45.04 PM.jpeg';
import client3 from '../../clients/WhatsApp Image 2026-03-10 at 4.45.39 PM.jpeg';
import client4 from '../../clients/WhatsApp Image 2026-03-10 at 4.48.14 PM.jpeg';
import client5 from '../../clients/image.png';
import client6 from '../../clients/Karaikal Iyangars.png';
import client7 from '../../clients/Agaram Solutions.jpg.jpeg';
import client8 from '../../clients/Sri Muthumathi Builders.png';
import client9 from '../../clients/logo.png';

const CLIENT_IMAGES = [client1, client2, client3, client4, client5, client6, client7, client8, client9];

const METRICS = [
  { num: '200+',  label: 'Active Clients'    },
  { num: '3200+', label: 'Total Placements'  },
  { num: '94%',   label: '45-Day Retention'  },
  { num: '4.8★',  label: 'Avg. Client Rating'},
];

const TESTIMONIALS = [
  {
    logo: 'ZEPHYR TECH', initials: 'RK', name: 'Rohit Kulkarni', role: 'CTO · Zephyr Tech, Pune',
    quote: "Newtron filled 3 senior engineering roles in under 3 weeks. These were positions we'd been trying to fill for 4 months through another agency. The quality of shortlists was exceptional — every profile was relevant.",
  },
  {
    logo: 'AXIOM LOGISTICS', initials: 'SP', name: 'Sunita Pillai', role: 'VP Operations · Axiom Logistics',
    quote: 'We needed 40 warehouse supervisors across 3 cities in 30 days. Newtron delivered 38 of them with a structured onboarding plan. Their blue-collar network is genuinely impressive.',
  },
  {
    logo: 'BRIGHTLEAF FINANCE', initials: 'AJ', name: 'Ashish Jain', role: 'CEO · Brightleaf Finance',
    quote: "Finding a CFO for our 80-person NBFC was daunting. Newtron's executive search team was methodical, discreet, and brought us two exceptional candidates within 3 weeks. We made an offer in 4.",
  },
  {
    logo: 'NOVA MEDTECH', initials: 'DM', name: 'Dr. Divya Menon', role: 'Founder · Nova Medtech, Chennai',
    quote: 'As a healthcare device startup, our hiring needs are niche. Newtron actually understood our compliance requirements. Placed our Regulatory Affairs Manager perfectly.',
  },
  {
    logo: 'KOVA D2C', initials: 'NK', name: 'Neha Khanna', role: 'Co-Founder · Kova D2C, Bangalore',
    quote: "We scaled from 30 to 90 employees in 8 months with Newtron as our RPO partner. Their team felt like our own HR — they knew our brand, culture, and standards without us having to repeat ourselves.",
  },
  {
    logo: 'SPECTRA ENERGY', initials: 'GR', name: 'Gaurav Rao', role: 'Head of HR · Spectra Energy',
    quote: "Renewable energy talent in Tier 2 markets is scarce. Newtron's proactive talent mapping report gave us a clear picture of the available pool before we even opened the roles. Saved us months.",
  },
];

// Duplicate client images many times for truly seamless infinite scroll
const DUPLICATED_CLIENT_IMAGES = [...CLIENT_IMAGES, ...CLIENT_IMAGES, ...CLIENT_IMAGES, ...CLIENT_IMAGES, ...CLIENT_IMAGES, ...CLIENT_IMAGES];

// Duplicate testimonials for continuous scrolling - more copies for smooth loop
const DUPLICATED_TESTIMONIALS = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

const ClientLogoCard = ({ img, index }) => {
  return (
    <div
      style={{
        flexShrink: 0,
        width: 'clamp(120px, 25vw, 180px)',
        background: colors.surface,
        border: `1px solid ${colors.border}`,
        borderRadius: 8,
        padding: 'clamp(12px, 2vw, 16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'clamp(80px, 15vw, 100px)',
        marginRight: 'clamp(16px, 3vw, 32px)',
      }}
    >
      <img 
        src={img} 
        alt={`Client ${index + 1}`}
        style={{
          maxWidth: '100%',
          maxHeight: 'clamp(50px, 10vw, 70px)',
          objectFit: 'contain',
        }}
      />
    </div>
  );
};

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <div
      style={{
        flexShrink: 0,
        width: 'clamp(300px, 85vw, 400px)',
        background: colors.surface,
        border: `1px solid ${colors.border}`,
        borderRadius: 8,
        padding: 'clamp(20px, 5vw, 32px)',
        marginRight: 'clamp(16px, 3vw, 32px)',
      }}
    >
      <div style={{ fontFamily: fonts.body, fontSize: 'clamp(14px, 3vw, 18px)', letterSpacing: 0, color: '#000', marginBottom: 16 }}>
        {testimonial.logo}
      </div>
      <p style={{ fontFamily: fonts.body, fontSize: 'clamp(14px, 3vw, 16px)', color: '#000', lineHeight: 1.6, marginBottom: 16 }}>
        "{testimonial.quote}"
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ 
          width: 40, 
          height: 40, 
          background: colors.mid, 
          border: `1px solid ${colors.electric}`, 
          borderRadius: '50%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          fontFamily: fonts.body, 
          fontSize: 14,
          color: colors.electric 
        }}>
          {testimonial.initials}
        </div>
        <div>
          <div style={{ fontFamily: fonts.body, fontSize: 14, fontWeight: 600 }}>{testimonial.name}</div>
          <div style={{ fontFamily: fonts.mono, fontSize: 12, color: '#000', letterSpacing: 0 }}>{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
};

export default function ClientsPage({ setPage }) {
  return (
    <>
      <section style={{ ...sectionBase, paddingTop: 80 }}>
        <SectionTag>Client Stories</SectionTag>
        <h2 style={sectionTitleStyle}>200+ SMEs <Em>Trust</Em><br />Newtron to Build Their Teams.</h2>
        <p style={sectionSubStyle}>
          From early-stage startups to established regional leaders — here's what our clients say about working with us.
        </p>

        {/* Metrics */}
        {/* <div className="metrics-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 24, marginBottom: 64 }}>
          {METRICS.map(m => <MetricBox key={m.label} {...m} />)}
        </div> */}
        <style>{`
          @media (max-width: 480px) {
            .metrics-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
        `}</style>

        {/* Our Clients Section - Carousel */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <h2 style={{ 
            fontFamily: fonts.body, 
            fontSize: 'clamp(28px, 5vw, 36px)', 
            fontWeight: 600, 
            marginBottom: 24,
            color: '#000'
          }}>
            Our Clients
          </h2>
          
          <div style={{ 
            position: 'relative', 
            height: 'clamp(120px, 20vw, 140px)', 
            overflow: 'hidden',
            width: '100vw',
            marginLeft: 'calc(-50vw + 50%)',
            marginRight: 'calc(-50vw + 50%)',
          }}>
            <style>{`
              @keyframes scrollClients {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            `}</style>
            <div style={{
              display: 'flex',
              width: 'fit-content',
              animation: 'scrollClients 80s linear infinite',
            }}>
              {DUPLICATED_CLIENT_IMAGES.map((img, index) => (
                <ClientLogoCard
                  key={`client-${index}`}
                  img={img}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Full Screen Snake Game Scrolling Testimonials */}
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <h2 style={{ 
            fontFamily: fonts.body, 
            fontSize: 'clamp(26px, 5vw, 34px)', 
            fontWeight: 600, 
            color: '#000'
          }}>
            Testimonials
          </h2>
        </div>
        <div style={{ 
          position: 'relative', 
          height: 'clamp(280px, 40vw, 300px)', 
          overflow: 'hidden',
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)',
        }}>
          <style>{`
            @keyframes scrollTestimonials {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
          <div style={{
            display: 'flex',
            width: 'fit-content',
            animation: 'scrollTestimonials 120s linear infinite',
          }}>
            {DUPLICATED_TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.name}-${index}`}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer setPage={setPage} />
    </>
  );
}
