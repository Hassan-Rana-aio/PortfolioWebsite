import Hero from '@/components/hero/Hero';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Experience from '@/components/sections/Experience';
import Hire from '@/components/sections/Hire';
import Projects from '@/components/sections/Projects';
import ResumeCta from '@/components/sections/ResumeCta';
import Skills from '@/components/sections/Skills';
import Testimonials from '@/components/sections/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Hire />
      <Testimonials />
      <ResumeCta />
      <Contact />
    </>
  );
}
