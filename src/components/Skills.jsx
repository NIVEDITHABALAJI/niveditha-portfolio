import React from 'react';

const SkillBadge = ({ name }) => (
  <span className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-md text-sm text-slate-300 hover:border-accent transition">
    {name}
  </span>
);

const Skills = () => (
  <section id="skills" className="py-24 max-w-6xl mx-auto px-6">
    <h3 className="text-3xl font-bold mb-12 flex items-center gap-4">
      <span className="text-accent">01.</span> Technical Toolkit [cite: 14]
    </h3>
    <div className="grid md:grid-cols-3 gap-8">
      <div className="space-y-4">
        <h4 className="text-accent font-mono">Backend & DB [cite: 15, 17]</h4>
        <div className="flex flex-wrap gap-2">
          {["Node.js", "Express", "MongoDB", "MySQL", "Python", "Java"].map(s => <SkillBadge key={s} name={s} />)}
        </div>
      </div>
      <div className="space-y-4">
        <h4 className="text-accent font-mono">Frontend [cite: 16, 28]</h4>
        <div className="flex flex-wrap gap-2">
          {["React.js", "Angular", "HTML5", "CSS3", "JavaScript", "Figma"].map(s => <SkillBadge key={s} name={s} />)}
        </div>
      </div>
      <div className="space-y-4">
        <h4 className="text-accent font-mono">Soft Skills [cite: 18]</h4>
        <div className="flex flex-wrap gap-2">
          {["Leadership", "Problem-Solving", "Critical Thinking", "Team Collaboration"].map(s => <SkillBadge key={s} name={s} />)}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;