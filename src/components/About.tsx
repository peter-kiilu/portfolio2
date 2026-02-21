import React from 'react';
import photo from '../assets/photo.jpg';


const About: React.FC = () => {
  const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Node.js',
    'Python',
    'Java',
  ];

  return (
    <section id="about" className="py-16 lg:py-20 w-full">
      <div className="w-full">
        <div className="flex items-center mb-8 lg:mb-12">
          <h2 className="text-xl lg:text-2xl font-bold text-white font-mono whitespace-nowrap">
            <span className="text-primary">01.</span> About Me
          </h2>
          <div className="ml-4 h-px bg-slate flex-grow max-w-xs"></div>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <p className="text-slate mb-4 text-sm lg:text-base">
              Musila is a Software Engineer building intelligent, scalable digital systems that solve meaningful, real-world problems. With expertise across full-stack development, AI integration, and data-driven engineering, he designs solutions that move beyond functionality — delivering performance, clarity, and measurable business value.
            </p>
            <p className="text-slate mb-4 text-sm lg:text-base">
              In an era where organizations struggle with inefficiencies, fragmented systems, and underutilized data, Musila architects technology that transforms complexity into structured, automated, and insight-driven workflows. From AI-powered applications to robust web platforms, his work focuses on scalability, maintainability, and long-term impact.He understands the pain points modern businesses face — slow processes, poor data visibility, disconnected tools, and growth bottlenecks — and builds systems that streamline operations, unlock actionable insights, and create sustainable competitive advantage.
              Driven by purposeful innovation, Musila leverages technology not just to build products, but to enable smarter decisions, stronger organizations, and meaningful progress in the digital economy.
            </p>
            <p className="text-slate mb-6 lg:mb-8 text-sm lg:text-base">
              Here are a few technologies I've been working with recently:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-md">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-primary mr-2">▹</span>
                  <span className="text-slate font-mono text-xs lg:text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>          
          <div className="relative group order-first lg:order-last">
            <div className="relative w-full h-64 lg:h-80 bg-primary/20 rounded-lg overflow-hidden mx-auto max-w-sm">
             <img src={photo} alt="Preview" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;