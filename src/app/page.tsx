import AppLayout from '@/components/Layout/AppLayout';
import HeroSection from '@/components/home/HeroSection';
import ExpertiseCards from '@/components/home/ExpertiseCards';
import ProjectsSection from '@/components/home/ProjectsSection';
import AboutSection from '@/components/home/AboutSection';
import BlogSection from '@/components/home/BlogSection';
import BottomSection from '@/components/home/BottomSection';

export default function Home() {
  return (
    <AppLayout>
      <HeroSection />
      <ExpertiseCards />
      <ProjectsSection />
      <AboutSection />
      <BlogSection />
      <BottomSection />
    </AppLayout>
  );
}
