import React from 'react';

const Navbar = () => (
  <nav className="fixed w-full z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-800">
    <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold tracking-tighter text-accent">NIVEDITHA.B</h1>
      <div className="space-x-8 hidden md:flex text-sm font-medium text-slate-300">
        <a href="#about" className="hover:text-accent transition">About</a>
        <a href="#skills" className="hover:text-accent transition">Skills</a>
        <a href="#projects" className="hover:text-accent transition">Projects</a>
        <a href="mailto:nivedithabalaji28@gmail.com" className="hover:text-accent transition">Contact</a>
      </div>
    </div>
  </nav>
);

export default Navbar;