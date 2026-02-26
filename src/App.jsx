import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import EducationalQualification from './components/EducationalQualification';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';

function App() {
  return (
    <div className="bg-[#0f172a] min-h-screen text-slate-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <EducationalQualification />
        <Skills />
        <Projects />
        <Certificates />
      </main>
      
      {/* Footer with Contact Info */}
      <footer className="py-20 text-center border-t border-slate-800">
        <h2 className="text-2xl font-bold text-white mb-4">Get In Touch</h2>
        <p className="mb-6">Vellore, Tamil Nadu </p>
        <div className="flex justify-center gap-6 mb-8">
          <a href="mailto:nivedithabalaji28@gmail.com" className="text-accent hover:underline">Email </a>
          <a href="https://github.com/NIVEDITHABALAJI" target="_blank" rel="noreferrer" className="text-accent hover:underline">GitHub </a>
          <a href="http://www.linkedin.com/in/contact-niveditha-balaji" target="_blank" rel="noreferrer" className="text-accent hover:underline">LinkedIn </a>
        </div>
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} Niveditha Balaji. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;