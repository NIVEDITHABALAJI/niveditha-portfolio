import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => (
  <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h2 className="text-accent font-mono mb-4 tracking-widest">HI, MY NAME IS</h2>
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6">Niveditha Balaji [cite: 1]</h1>
      <p className="text-slate-400 max-w-xl text-lg mb-10">
        Dedicated to delivering innovative solutions and exceeding expectations in dynamic web environments[cite: 10].
      </p>
      <div className="flex gap-4">
        <a href="#projects" className="bg-accent text-primary px-8 py-3 rounded-lg font-bold hover:scale-105 transition-transform">
          View My Work
        </a>
        <a href="/resume.pdf" target="_blank" className="border border-slate-700 px-8 py-3 rounded-lg font-bold hover:bg-slate-800 transition">
          Resume
        </a>
      </div>
    </motion.div>
  </section>
);

export default Hero;