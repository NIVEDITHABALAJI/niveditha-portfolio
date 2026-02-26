import React from 'react'; 

const Education = () => {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold text-accent mb-4">Education</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold">Master of Computer Applications</h3>
          <p className="text-slate-400">Meenakshi College of Engineering, Anna University (2022-2024)</p>
          <p className="text-cyan-500">CGPA: 8.2</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Bachelor of Computer Science</h3>
          <p className="text-slate-400">Auxillium College, Thiruvalluvar University (2019-2022)</p>
          <p className="text-cyan-500">CGPA: 6.1</p>
        </div>
      </div>
    </section>
  );
};

export default Education;