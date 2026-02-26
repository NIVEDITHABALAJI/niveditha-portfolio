import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto text-slate-300">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold text-white tracking-tight">About Me</h2>
        <div className="h-[1px] bg-slate-700 flex-grow"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-4">
          <p className="text-lg leading-relaxed">
            I am a dedicated Master of Computer Applications (MCA) graduate from Anna University. 
            I thrive in fast-paced, collaborative environments that foster creativity and teamwork.
          </p>
          <p className="text-lg leading-relaxed">
            My goal is to build a rewarding career while making a measurable impact on organizational 
            objectives through technical expertise and problem-solving. 
          </p>
          <p className="text-lg leading-relaxed">
            I specialize in building scalable, responsive, and secure web applications, a skill I honed 
            during my intensive Full Stack Developer Traineeship.
          </p>
        </div>

        {/* Education & Values Cards */}
        <div className="space-y-6">
          <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-700 hover:border-accent/50 transition-colors">
            <h3 className="text-accent font-mono text-sm mb-2 uppercase">Core Values</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              <li>▹ Continuous Learning </li>
              <li>▹ Problem-Solving </li>
              <li>▹ Effective Communication </li>
              <li>▹ Team Collaboration </li>
            </ul>
          </div>
          
        
        </div>
      </div>
    </section>
  );
};

export default About;