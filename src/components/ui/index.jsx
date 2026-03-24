import { useState } from 'react';
import { colors, fonts, sectionTagStyle, cardBase } from '../../styles/theme';

/* ── Live Dot ── */
export const LiveDot = () => (
  <span
    style={{
      width: 7, height: 7,
      background: colors.electric,
      borderRadius: '50%',
      display: 'inline-block',
      animation: 'pulse 1.8s infinite',
    }}
  />
);

/* ── Section Tag ── */
export const SectionTag = ({ children }) => (
  <div style={sectionTagStyle}>
    <span style={{ width: 24, height: 1, background: colors.electric, display: 'inline-block', flexShrink: 0 }} />
    {children}
  </div>
);

/* ── Accent Text (electric color) ── */
export const Em = ({ children }) => (
  <span style={{ color: colors.electric }}>{children}</span>
);

/* ── Primary Button ── */
export const BtnPrimary = ({ children, onClick, small = false }) => {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: hover ? '#00ffb3' : colors.electric,
        color: colors.black,
        padding: small ? '8px 16px' : '14px 32px',
        fontFamily: fonts.body,
        fontSize: small ? 11 : 13,
        letterSpacing: 0,
        fontWeight: 600,
        border: 'none',
        cursor: 'pointer',
        borderRadius: 2,
        transition: 'all .2s',
        transform: hover ? 'translateY(-2px)' : 'none',
        display: 'inline-block',
      }}
    >
      {children}
    </button>
  );
};

/* ── Ghost Button ── */
export const BtnGhost = ({ children, onClick }) => {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        border: `1px solid ${hover ? colors.electric : colors.border}`,
        color: hover ? colors.electric : colors.black,
        padding: '14px 32px',
        fontFamily: fonts.body,
        fontSize: 13,
        letterSpacing: 0,
        background: colors.surface,
        cursor: 'pointer',
        borderRadius: 2,
        transition: 'all .2s',
        display: 'inline-block',
      }}
    >
      {children}
    </button>
  );
};

/* ── Badge ── */
export const Badge = ({ children, active = false }) => (
  <span
    style={{
      background: colors.mid,
      border: `1px solid ${active ? colors.electric : colors.border}`,
      padding: '8px 16px',
      fontFamily: fonts.mono,
      fontSize: 11,
      letterSpacing: 1,
      color: active ? colors.electric : colors.muted,
      borderRadius: 2,
    }}
  >
    {children}
  </span>
);

/* ── Service / Generic Card ── */
export const ServiceCard = ({ icon, title, desc, features }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        ...cardBase,
        borderColor: hover ? colors.electric : colors.border,
        transform: hover ? 'translateY(-4px)' : 'none',
      }}
    >
      {icon && <div style={{ fontSize: 28, marginBottom: 20 }}>{icon}</div>}
      <h3 style={{ fontFamily: fonts.display, fontSize: 24, letterSpacing: 1, marginBottom: 12 }}>{title}</h3>
      <p style={{ color: '#000', fontSize: 14, lineHeight: 1.7, marginBottom: features ? 20 : 0 }}>{desc}</p>
      {features && (
        <ul style={{ listStyle: 'none' }}>
          {features.map((f, i) => (
            <li
              key={i}
              style={{
                fontFamily: fonts.body,
                fontSize: 14,
                color: '#000',
                padding: '5px 0',
                borderTop: '1px solid #1e1e1e',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <span style={{ color: colors.electric, fontSize: 11 }}>→</span> {f}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

/* ── Mission Box ── */
export const MissionBox = ({ title, desc, accentColor }) => (
  <div
    style={{
      background: colors.surface,
      border: `1px solid ${colors.border}`,
      borderLeft: `3px solid ${accentColor || colors.electric}`,
      padding: 40,
      borderRadius: 2,
      marginBottom: 24,
    }}
  >
    <h3 style={{ fontFamily: fonts.display, fontSize: 28, letterSpacing: 1, marginBottom: 12 }}>{title}</h3>
    <p style={{ color: '#000', lineHeight: 1.7, fontSize: 15 }}>{desc}</p>
  </div>
);

/* ── Metric Box ── */
export const MetricBox = ({ num, label }) => (
  <div
    style={{
      background: colors.surface,
      border: `1px solid ${colors.border}`,
      borderTop: `2px solid ${colors.electric}`,
      padding: '32px 24px',
      textAlign: 'center',
      borderRadius: 2,
    }}
  >
    <div style={{ fontFamily: fonts.body, fontSize: 36, color: colors.electric }}>{num}</div>
    <div style={{ fontFamily: fonts.mono, fontSize: 11, color: '#000', letterSpacing: 1.5, marginTop: 8 }}>{label}</div>
  </div>
);

/* ── Level Badge (for Careers table) ── */
const levelMap = {
  senior: { bg: 'rgba(0,229,160,0.1)',   color: colors.electric, border: 'rgba(0,229,160,0.3)',   label: 'Senior'    },
  mid:    { bg: 'rgba(255,179,71,0.1)',  color: colors.amber,    border: 'rgba(255,179,71,0.3)',  label: 'Mid'       },
  exec:   { bg: 'rgba(200,100,255,0.1)', color: colors.purple,   border: 'rgba(200,100,255,0.3)', label: 'Executive' },
};

export const LevelBadge = ({ level }) => {
  const s = levelMap[level];
  return (
    <span
      style={{
        fontFamily: fonts.mono,
        fontSize: 10,
        letterSpacing: 1,
        padding: '4px 10px',
        borderRadius: 100,
        background: s.bg,
        color: s.color,
        border: `1px solid ${s.border}`,
      }}
    >
      {s.label}
    </span>
  );
};
