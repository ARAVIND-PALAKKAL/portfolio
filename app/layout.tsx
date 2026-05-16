import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aravind Palakkal — Robotics Engineer',
  description: 'Haptic interfaces, humanoid systems, and combat robotics. Based in Nürnberg, Germany.',
  openGraph: {
    title: 'Aravind Palakkal — Robotics Engineer',
    description: 'Haptic interfaces, humanoid systems, and robot controls. Based in Nürnberg, Germany.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
