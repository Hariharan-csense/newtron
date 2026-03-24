export default function Background() {
  return (
    <>
      {/* Grid */}
      <div
        style={{
          position: 'fixed', inset: 0, zIndex: -1,
          backgroundImage:
            'linear-gradient(rgba(0,170,236,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,170,236,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />
      {/* Top-right orb */}
      <div
        style={{
          position: 'fixed', width: 500, height: 500, borderRadius: '50%',
          filter: 'blur(120px)', background: 'rgba(0,170,236,0.10)',
          top: -100, right: -100, zIndex: -1, pointerEvents: 'none',
        }}
      />
      {/* Bottom-left orb */}
      <div
        style={{
          position: 'fixed', width: 400, height: 400, borderRadius: '50%',
          filter: 'blur(120px)', background: 'rgba(0,0,128,0.08)',
          bottom: 100, left: -150, zIndex: -1, pointerEvents: 'none',
        }}
      />
    </>
  );
}
