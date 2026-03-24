import { colors, fonts, sectionBase, sectionTitleStyle, sectionSubStyle } from '../../styles/theme';
import { SectionTag, Em, Badge } from '../ui';
import Footer from '../Footer';
import EnquiryForm from '../EnquiryForm';

const CONTACT_ITEMS = [
  { icon: 'Email', label: 'Email Us', value: 'placements@newtron.in' },
  { icon: 'Call', label: 'Call Us', value: '+91 +91 99406 84918' },
  { icon: 'Time', label: 'Response Time', value: 'Within 4 business hours' },
];




export default function ContactPage({ setPage }) {
  return (
    <>
      <section style={{ ...sectionBase, paddingTop: 80 }}>
        <SectionTag>Get In Touch</SectionTag>
        <h2 style={sectionTitleStyle}>Let&apos;s Build Your<br /><Em>Next Great Team.</Em></h2>
        <p style={sectionSubStyle}>
          Tell us about your hiring challenge. Our team will reach out within 4 business hours to schedule a discovery call - no commitment required.
        </p>

        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'clamp(40px, 5vw, 80px)' }}>
          <EnquiryForm />

          <div>
            <h3 style={{ fontFamily: fonts.body, fontSize: 'clamp(24px, 4vw, 36px)', letterSpacing: 0, marginBottom: 12, fontWeight: 700 }}>
              TALK TO US
            </h3>
            <p style={{ color: '#000', lineHeight: 1.5, marginBottom: 32, fontSize: 'clamp(14px, 2vw, 15px)', fontFamily: fonts.body }}>
              Whether you have one role to fill or are scaling a full department, we&apos;d love to understand your business and see how Newtron can help.
            </p>

            {CONTACT_ITEMS.map((item, i) => (
              <div
                key={item.label}
                style={{
                  display: 'flex', gap: 16, alignItems: 'flex-start',
                  marginBottom: 24, paddingBottom: 24,
                  borderBottom: i < CONTACT_ITEMS.length - 1 ? `1px solid ${colors.border}` : 'none',
                }}
              >
                <span style={{ fontSize: 14, minWidth: 40, paddingTop: 2, fontFamily: fonts.body }}>{item.icon}</span>
                <div>
                  <strong style={{ fontSize: 'clamp(14px, 2vw, 16px)', color: '#000', display: 'block', marginBottom: 4, fontFamily: fonts.body }}>{item.label}</strong>
                  <span style={{ fontFamily: fonts.body, fontSize: 'clamp(13px, 1.8vw, 14px)', color: '#000' }}>{item.value}</span>
                </div>
              </div>
            ))}

          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .contact-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      <Footer setPage={setPage} />
    </>
  );
}
