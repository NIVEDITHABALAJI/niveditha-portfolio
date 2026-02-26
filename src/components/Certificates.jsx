import React from 'react';

const CertificateCard = ({ title, issuer, description }) => (
  <div className="bg-slate-800/30 border border-slate-800 p-6 rounded-xl hover:bg-slate-800/50 transition-all">
    <div className="text-accent mb-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    </div>
    <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
    <p className="text-accent text-sm font-medium mb-3">{issuer}</p>
    <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
  </div>
);

const Certificates = () => {
  const certs = [
    {
      title: "Android App using Kotlin",
      issuer: "IIT Bombay (Spoken Tutorial Project)",
      description: "Successfully completed the Android app development test using Kotlin[cite: 52]."
    },
    {
      title: "Ruby Programming",
      issuer: "IIT Bombay (Spoken Tutorial Project)",
      description: "Completed training and assessment for Ruby development[cite: 53]."
    },
    {
      title: "Python Bootcamp",
      issuer: "Udemy (Jose Portilla)",
      description: "Comprehensive training from zero to hero in Python programming[cite: 54]."
    },
    {
      title: "Full Stack Developer Traineeship",
      issuer: "Miyyam Knowledge and Careers",
      description: "Earned certification for completing intensive MERN stack development training[cite: 57]."
    }
  ];

  return (
    <section id="certificates" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-white tracking-tight">Certifications</h2>
        <div className="h-[1px] bg-slate-700 flex-grow"></div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {certs.map((cert, index) => (
          <CertificateCard key={index} {...cert} />
        ))}
      </div>
    </section>
  );
};

export default Certificates;