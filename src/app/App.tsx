import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Pricing } from './components/Pricing';
// import { MemberInfo } from './components/MemberInfo';
import { PTInfo } from './components/PTInfo';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-neutral-950">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="harga">
          <Pricing />
        </section>
        
        {/* <section id="info-member">
          <MemberInfo />
        </section> */}
        
        <section id="info-pt">
          <PTInfo />
        </section>
        
        <section id="dokumentasi">
          <Gallery />
        </section>
        
        <section id="tentang">
          <About />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
