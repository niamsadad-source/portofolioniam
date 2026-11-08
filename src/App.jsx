import React from 'react';
import { useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import SocialActivity from './components/sections/SocialActivity';
import Contact from './components/sections/Contact';
import ScrollProgress from './components/Layout/ScrollProgress';
import BackToTop from './components/Layout/BackToTop';

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ScrollProgress scaleX={scaleX} />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <SocialActivity />
        <Contact />
      </main>

      <BackToTop />
    </div>
  );
};

export default App;