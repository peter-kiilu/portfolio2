import React, { useState } from 'react';

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: 'University of Embu',
      position: 'ICT Support Officer',
      period: 'May 2025 - August 2025',
      description: [
        'Managed critical ICT infrastructure, providing system maintenance and advanced network troubleshooting',
        'Streamlined software installation and hardware configuration protocols to ensure 99.9% operational uptime',
        'Resolved high-priority technical issues for staff and students, facilitating smooth day-to-day campus operations',
      ],
    },
    {
      company: 'MarketForce',
      position: 'Interim Engineer',
      period: 'May 2024 - Sept 2024',
      description: [
        'Write modern, performant, maintainable code for a diverse array of client and internal projects',
        'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, React, Vue, Node.js, WordPress, and Netlify',
        'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis',
      ],
    },
    {
      company: 'Remote',
      position: 'Software Engineer',
      period: 'Jan 2017 - Apr 2018',
      description: [
        'Built a full-stack web application using React for the frontend and FastAPI (Python) for the backend, delivering a responsive and high-performance user experience',
        'Designed and optimized PostgreSQL database schemas, queries, and migrations to support scalable data management',
        'Developed RESTful APIs with FastAPI, implementing authentication, data validation, and seamless integration with the React frontend',
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 lg:py-20 w-full">
      <div className="w-full">
        <div className="flex items-center mb-8 lg:mb-12">
          <h2 className="text-xl lg:text-2xl font-bold text-white font-mono whitespace-nowrap">
            <span className="text-primary">02.</span> Where I've Worked
          </h2>
          <div className="ml-4 h-px bg-slate flex-grow max-w-xs"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div className="flex lg:flex-col overflow-x-auto pb-2 lg:pb-0">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-3 font-mono text-sm whitespace-nowrap border-l-2 lg:border-l-0 lg:border-b-2 transition-colors flex-shrink-0 ${
                  activeTab === index
                    ? 'text-primary border-primary bg-primary/10'
                    : 'text-slate border-dark-light hover:bg-dark-light'
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          <div className="flex-1">
            <div className="mb-4">
              <h3 className="text-lg lg:text-xl font-semibold text-white">
                {experiences[activeTab].position}{' '}
                <span className="text-primary">@ {experiences[activeTab].company}</span>
              </h3>
              <p className="text-slate font-mono text-xs lg:text-sm mb-4 lg:mb-6">
                {experiences[activeTab].period}
              </p>
            </div>
            <ul className="space-y-3">
              {experiences[activeTab].description.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-3 mt-1 flex-shrink-0">▹</span>
                  <span className="text-slate text-sm lg:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;