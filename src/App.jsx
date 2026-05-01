import './styles/global.css';
import './styles/sections.css';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Achievements from './components/sections/Achievements';
import Certificates from './components/sections/Certificates';
import Internships from './components/sections/Internships';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Achievements />
        <Certificates />
        <Internships />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
