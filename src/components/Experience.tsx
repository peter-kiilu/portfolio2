import React, { useState } from 'react';

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: 'University of Embu',
      position: 'ICT Support Officer',
      period: 'May 2025 - August 2025',
      description: [
        'Maintained and monitored ICT infrastructure serving 10,000+ students and staff, achieving 90.9% system uptime through proactive maintenance and rapid troubleshooting',
        'Automated software deployment and hardware configuration workflows, reducing setup time by 60% across 10+ campus workstations',
        'Resolved 50+ high-priority support tickets weekly with an average turnaround of under 2 hours, earning recognition from the IT department head',
      ],
    },
    {
      company: 'MarketForce',
      position: 'Interim Engineer',
      period: 'May 2024 - Sept 2024',
      description: [
        'Shipped 5+ client-facing features in React and TypeScript, improving user engagement metrics by 25% across MarketForce\'s B2B distribution platform',
        'Spearheaded migration of legacy jQuery components to React.js, reducing page load times by 35% and cutting frontend bug reports in half',
        'Collaborated daily with a cross-functional team of 8 engineers, 2 designers, and product managers to deliver sprint goals consistently ahead of schedule',
      ],
    },
    {
      company: 'Remote Work',
      position: 'Software Engineer',
      period: 'Jan 2023 - Apr 2025',
      description: [
        'Architected and launched a React/FastAPI platform for 3 SME clients that automated invoice processing, reducing manual data entry by 60%',
        'Designed a normalized PostgreSQL schema handling 100K+ records with optimized queries, cutting average response times from 1.2s to 180ms',
        'Built 15+ RESTful API endpoints with JWT authentication and role-based access control, serving 2,000+ active users with 95.5% uptime',
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