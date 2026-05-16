export default function AboutSection() {
  return (
    <section id="about" className="scroll-section">
      <p className="eyebrow">ABOUT</p>
      <div style={{ marginBottom: '32px' }}>
        <img
          src="/avatar.png"
          alt="Aravind Palakkal"
          style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '2px solid #cc2a2a',
            display: 'block',
          }}
        />
      </div>
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(28px, 4vw, 44px)',
        fontWeight: 400,
        color: '#d0d0d0',
        marginBottom: '24px',
        lineHeight: 1.15,
      }}>
        Engineer at the edge of<br />
        <em style={{ color: 'var(--silver-dim)' }}>hardware and intelligence.</em>
      </h2>
      <div style={{ width: 40, height: '0.5px', background: 'var(--red)', marginBottom: '28px' }} />
      <p style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '13px',
        color: 'var(--text-secondary)',
        lineHeight: 1.95,
        maxWidth: '520px',
        marginBottom: '20px',
      }}>
        I'm a Robotics Engineer currently pursuing my M.Sc. in Elektromobilität-ACES
        at Friedrich-Alexander-Universität Erlangen-Nürnberg, Germany. My work sits
        at the intersection of mechanical design, robot control, and AI — I care
        about building systems that function reliably in the real world, not just
        in simulation.
      </p>
      <p style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '13px',
        color: 'var(--text-secondary)',
        lineHeight: 1.95,
        maxWidth: '520px',
        marginBottom: '32px',
      }}>
        Previously at Jarm.ai GmbH as a Werkstudent Robotics Engineer, where I
        built data pipelines between Isaac Sim, MoveIt and ROS2, trained VLA models
        for robotic arms, and designed CAD for a 7-DOF humanoid. Before that, I
        spent a year in railway operations at Arise Ports & Logistics, running
        predictive maintenance programs on diesel locomotives.
      </p>
      <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
        {[
          { label: 'DEGREE', value: 'M.Sc. Elektromobilität-ACES' },
          { label: 'UNIVERSITY', value: 'FAU Erlangen-Nürnberg' },
          { label: 'BASED IN', value: 'Nürnberg, Bavaria' },
          { label: 'LANGUAGES', value: 'English (C1) · German (B1)' },
        ].map(({ label, value }) => (
          <div key={label}>
            <p style={{ fontSize: '10px', color: 'var(--red)', letterSpacing: '0.12em', marginBottom: '6px' }}>{label}</p>
            <p style={{ fontSize: '12px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
