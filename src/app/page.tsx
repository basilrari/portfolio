import { Suspense } from 'react';
import AppLayout from '@/components/Layout/AppLayout';
import HeroSection from '@/components/home/HeroSection';
import ExpertiseCards from '@/components/home/ExpertiseCards';
import ProjectsSection from '@/components/home/ProjectsSection';
import AboutSection from '@/components/home/AboutSection';
import BottomSection from '@/components/home/BottomSection';

export default function Home() {
  return (
    <AppLayout>
      <HeroSection />
      <ExpertiseCards />
      <Suspense fallback={null}>
        <ProjectsSection />
      </Suspense>
      <AboutSection />
      <BottomSection />
    </AppLayout>
  );
}
