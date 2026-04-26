import SplitLayout from '@/components/Layout/SplitLayout';
import LeftPanel from '@/components/Layout/LeftPanel';
import RightPanel from '@/components/Layout/RightPanel';
import GuideAvatar from '@/components/GuideAvatar/GuideAvatar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <SplitLayout
      leftPanel={
        <LeftPanel>
          <GuideAvatar />
        </LeftPanel>
      }
      rightPanel={
        <RightPanel>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </RightPanel>
      }
    />
  );
}
