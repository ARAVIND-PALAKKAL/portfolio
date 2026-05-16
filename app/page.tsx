'use client';

import { useEffect, useRef } from 'react';
import ParticleCanvas from '@/components/ParticleCanvas';
import AboutSection from '@/components/AboutSection';
import SideNav from '@/components/SideNav';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll('.scroll-section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          const ratio = entry.intersectionRatio;

          if (ratio < 0.15) {
            el.style.filter = 'blur(12px)';
            el.style.opacity = '0';
            el.style.transform = 'scale(0.97)';
          } else if (ratio < 0.4) {
            const t = (ratio - 0.15) / 0.25;
            el.style.filter = `blur(${(1 - t) * 12}px)`;
            el.style.opacity = String(t);
            el.style.transform = `scale(${0.97 + t * 0.03})`;
          } else {
            el.style.filter = 'blur(0px)';
            el.style.opacity = '1';
            el.style.transform = 'scale(1)';
          }
        });
      },
      {
        threshold: Array.from({ length: 21 }, (_, i) => i * 0.05),
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="main-layout">
      <ParticleCanvas />
      <SideNav />
      <div className="content-area">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </main>
  );
}
