import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Pricing } from './components/Pricing';
import { PTInfo } from './components/PTInfo';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-64px 0px -40% 0px',
        threshold: 0.1,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);


  return (
    <div className="min-h-screen bg-neutral-950">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main>
        <section id="home" className="scroll-mt-16">
          <Hero />
        </section>

        <section id="harga" className="scroll-mt-16">
          <Pricing />
        </section>

        <section id="info-pt" className="scroll-mt-16">
          <PTInfo />
        </section>

        <section id="dokumentasi" className="scroll-mt-16">
          <Gallery />
        </section>

        <section id="tentang" className="scroll-mt-16">
          <About />
        </section>
      </main>

      <Footer />
    </div>
  );
}
