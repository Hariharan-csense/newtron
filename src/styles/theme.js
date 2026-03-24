// ── Design Tokens ──────────────────────────────────────────
export const colors = {
  black:   '#000000',
  white:   '#ffffff',
  electric:'#00aaec',
  amber:   '#ffb347',
  mid:     '#f6f6f6',
  surface: '#ffffff',
  muted:   '#555555',
  border:  '#e6e6e6',
  purple:  '#c864ff',
};

export const fonts = {
  display: "system-ui, -apple-system, 'Segoe UI', sans-serif",
  body:    "system-ui, -apple-system, 'Segoe UI', sans-serif",
  mono:    "ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace",
};

// ── Shared Style Objects ────────────────────────────────────
export const sectionBase = {
  padding: 'clamp(40px, 8vw, 100px) clamp(20px, 5vw, 60px)',
  maxWidth: 1200,
  margin: '0 auto',
};

export const sectionTagStyle = {
  fontFamily: fonts.mono,
  fontSize: 20,
  letterSpacing: 0,
  color: colors.electric,
  marginBottom: 16,
  display: 'flex',
  alignItems: 'center',
  gap: 10,
};

export const sectionTitleStyle = {
  fontFamily: fonts.body,
  fontSize: 'clamp(32px, 4vw, 40px)',
  lineHeight: 1,
  letterSpacing: 0,
  marginBottom: 16,
};

export const sectionSubStyle = {
  fontSize: 14,
  color: '#000',
  maxWidth: 520,
  lineHeight: 1.7,
  marginBottom: 64,
};

export const cardBase = {
  background: colors.surface,
  border: `1px solid ${colors.border}`,
  borderRadius: 4,
  padding: '36px 32px',
  transition: 'border-color .25s, transform .25s',
  cursor: 'default',
};
