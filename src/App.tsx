import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Services from './components/Services';
import WorkProcess from './components/WorkProcess';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 selection:bg-amber-500/30 selection:text-amber-200">
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Services />
        <div className="section-divider" />
        <WorkProcess />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
