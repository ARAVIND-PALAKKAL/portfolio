const groups = [
  {
    title: 'ROBOTICS & CONTROLS',
    skills: [
      'ROS2 / MoveIt',
      'Isaac Sim',
      'Motion planning & control',
      'CAD / SolidWorks / CATIA V5',
      'ANSYS Fluent / OpenFOAM',
      '3D Printing & Rapid Prototyping',
    ],
  },
  {
    title: 'SOFTWARE & AI',
    skills: [
      'Python / C++',
      'PyTorch',
      'VLA model pipelines',
      'OpenCV',
      'Docker / Git / CI-CD',
      'Linux',
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-section">
      <p className="eyebrow">SKILLS</p>
      <div className="skills-grid">
        {groups.map((g) => (
          <div key={g.title}>
            <p className="skill-group-title">{g.title}</p>
            <div className="skill-items">
              {g.skills.map((s) => (
                <span key={s} className="skill-item">
                  <span className="skill-dot" aria-hidden="true" />
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
