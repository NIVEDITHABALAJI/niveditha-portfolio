import React from 'react';

const ProjectCard = ({ title, description, tags }) => (
  <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl hover:border-accent/40 transition-all group">
    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent">{title}</h3>
    <p className="text-slate-400 mb-6 leading-relaxed">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, i) => (
        <span key={i} className="text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-full">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-white tracking-tight">Featured Projects</h2>
        <div className="h-[1px] bg-slate-700 flex-grow"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <ProjectCard 
          title="Inscription Identifier"
          description="Applied global texture analysis and CNNs to enhance ancient language font recognition in stone inscriptions[cite: 50]. [cite_start]Developed a Character Mapping algorithm to convert recognized ancient characters into modern equivalents[cite: 50]."
          tags={["Python", "CNN", "Contour-let Transform", "OCR"]}
        />
        <ProjectCard 
          title="CircleUp - Event Organizers"
          description="Engineered a high-performance landing page with a custom theme engine using JavaScript and CSS Variables for real-time brand color toggling[cite: 50]. [cite_start]Integrated SwiperJS and Scroll Reveal for immersive UX[cite: 50]."
          tags={["JavaScript", "CSS Grid", "SwiperJS", "Formspree API"]}
        />
      </div>
    </section>
  );
};

export default Projects;