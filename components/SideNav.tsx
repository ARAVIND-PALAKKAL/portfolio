'use client';

import { useEffect, useState } from 'react';

const links = [
  { label: 'work', href: '#work' },
  { label: 'about', href: '#about' },
  { label: 'projects', href: '#projects' },
  { label: 'skills', href: '#skills' },
  { label: 'contact', href: '#contact' },
];

export default function SideNav() {
  const [active, setActive] = useState('work');

  useEffect(() => {
    const sections = document.querySelectorAll('.scroll-section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: [0.4] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="sidenav">
      <p className="sn-logo">AP</p>
      <nav className="sn-links">
        {links.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className={`sn-link ${active === label ? 'active' : ''}`}
          >
            {label}
          </a>
        ))}
      </nav>
      <div className="sn-bottom">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="sn-social">github</a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="sn-social">linkedin</a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="sn-social">resume</a>
      </div>
    </aside>
  );
}
