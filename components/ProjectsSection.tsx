const projects = [
  {
    num: '01',
    title: 'Haptic Interface for UR Robot',
    org: 'PERSONAL PROJECT',
    desc: 'Developed a haptic interface for a 6-DOF Universal Robot for handling delicate objects — translating hand motion into precise joint control with force feedback.',
    tags: ['Python', 'ROS2', 'C++', 'Force Feedback', 'Prototyping'],
    redTags: [],
  },
  {
    num: '02',
    title: 'Humanoid Systems — CAD & VLA',
    org: 'JARM.AI GMBH',
    desc: 'Architected data flows between Isaac Sim, MoveIt and ROS2 for end-to-end robotic validation. Trained VLA models for the S101 arm and designed CAD for a 7-DOF humanoid arm in SolidWorks.',
    tags: ['ROS2', 'Isaac Sim', 'MoveIt', 'VLA', 'SolidWorks', 'PyTorch'],
    redTags: [],
  },
  {
    num: '03',
    title: 'Valyrion — Wedge Combat Robot',
    org: 'VALYRION ROBOTICS CLUB · SVNIT SURAT',
    desc: 'Drafted concepts through 6 rounds of design feedback and built prototypes for a wedge-based combat robot. Full mechanical design lifecycle from concept to competition-ready build.',
    tags: ['Combat','SolidWorks', 'Mechanical Design', 'Prototyping'],
    redTags: [],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-section">
      <p className="eyebrow">SELECTED WORK</p>
      <div className="proj-list">
        {projects.map((p) => (
          <div key={p.num} className="proj-item">
            <span className="proj-num">{p.num}</span>
            <div>
              <p className="proj-title">{p.title}</p>
              <p className="proj-org">{p.org}</p>
              <p className="proj-desc">{p.desc}</p>
              <div className="proj-tags">
                {p.redTags.map((t) => (
                  <span key={t} className="tag tag-red">{t}</span>
                ))}
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
