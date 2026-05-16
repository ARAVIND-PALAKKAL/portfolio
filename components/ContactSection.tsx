const links = [
  { label: 'EMAIL', value: 'aravind.jpalakkal@gmail.com', href: 'aravind.jpalakkal@gmail.com' },
  { label: 'GITHUB', value: 'github.com/ARAVIND-PALAKKAL', href: 'https://github.com/ARAVIND-PALAKKAL' },
  { label: 'LINKEDIN', value: 'linkedin.com/in/aravind-palakkal-tech', href: 'https://www.linkedin.com/in/aravind-palakkal-tech/' },
];

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-section">
      <p className="eyebrow">CONTACT</p>
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(28px, 4vw, 44px)',
        fontWeight: 400,
        color: '#d0d0d0',
        marginBottom: '12px',
        lineHeight: 1.1,
      }}>
        Let&apos;s build something<br /><em style={{ color: 'var(--silver-dim)' }}>worth fighting for.</em>
      </h2>
      <div style={{ width: 40, height: '0.5px', background: 'var(--red)', margin: '24px 0' }} />
      <div className="contact-links">
        {links.map(({ label, value, href }) => (
          <a key={label} href={href} className="contact-link" target="_blank" rel="noopener noreferrer">
            <span className="link-label">{label}</span>
            <span>{value}</span>
          </a>
        ))}
      </div>
      <p style={{ marginTop: 48, fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
        © 2026 ARAVIND PALAKKAL
      </p>
    </section>
  );
}
