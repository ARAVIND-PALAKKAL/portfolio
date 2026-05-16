export default function HeroSection() {
  return (
    <section id="work" className="scroll-section">
      <p className="eyebrow">ROBOTICS ENGINEER · NÜRNBERG, GERMANY</p>
      <h1 className="hero-name">
        Aravind<span className="cursor" aria-hidden="true" />
        <br />
        <em>Palakkal.</em>
      </h1>
      <div className="hero-rule" />
      <p className="hero-desc">
        I build robots that <strong>sense, move,</strong> and{' '}
        <span className="accent">think.</span> Haptic interfaces for UR robots,
        humanoid systems at <strong>Jarm.ai</strong>, and a combat robot built
        from the ground up with{' '}
        <span className="accent">Valyrion Robotics Club.</span>
      </p>
      <div className="hero-ctas">
        <a href="#about" className="btn-primary">View work</a>
        <a href="#contact" className="btn-ghost">Get in touch</a>
      </div>
    </section>
  );
}
