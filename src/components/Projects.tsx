import React from 'react';
import type { Project } from '../types';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'MindFul Gen',
      description: 'A full-stack mental health platform built with Next.js and Firebase, featuring real-time mood tracking, guided meditation sessions, and personalized wellness insights. Implements server-side rendering for SEO optimization, Firebase Auth for secure user sessions, and Firestore for real-time data sync across devices. Designed with an accessible, calming UI using TailwindCSS with custom theme tokens.',
      tech: ['Next.js', 'TailwindCSS', 'Firebase Auth', 'Firestore', 'Vercel'],
      github: 'https://github.com/peter-kiilu',
      live: 'https://mindful-gen.vercel.app/',
      image: '/MindfulPic.png', 
    },
    {
      id: 2,
      title: 'Oracle Fortune — AI Prediction Engine',
      description: 'A cyberpunk-themed prediction platform that integrates OpenAI\'s GPT API with real-time market data to generate AI-driven forecasts on crypto, stocks, and global events. Built with React and Supabase for real-time state management and PostgreSQL-backed persistence. Features include a virtual currency betting system, streamed AI responses for low-latency UX, and row-level security via Supabase policies for multi-user isolation.',
      tech: ['React', 'TailwindCSS', 'Supabase', 'OpenAI API', 'Vercel'],
      github: 'https://github.com/peter-kiilu',
      live: 'https://oracle-fortune.vercel.app/',
      image: '/orac.png',
    },
  ];

  return (
    <section id="projects" className="py-16 lg:py-20 w-full">
      <div className="w-full">
        {/* Section Header */}
        <div className="flex items-center mb-8 lg:mb-12">
          <h2 className="text-xl lg:text-2xl font-bold text-white font-mono whitespace-nowrap">
            <span className="text-primary">03.</span> Some Things I've Built
          </h2>
          <div className="ml-4 h-px bg-slate flex-grow max-w-xs"></div>
        </div>

        {/* Projects */}
        <div className="space-y-12 lg:space-y-20">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-6 lg:gap-8 items-center`}
            >
              {/* ✅ Project Image */}
              <div className="flex-1 group relative w-full">
                <div className="bg-primary/20 rounded-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Project Info */}
              <div className="flex-1 w-full">
                <p className="text-primary font-mono text-xs lg:text-sm mb-2">Featured Project</p>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4">
                  {project.title}
                </h3>
                <p className="text-slate bg-dark-light p-4 lg:p-6 rounded-lg mb-4 lg:mb-6 text-sm lg:text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 lg:gap-4 mb-4 lg:mb-6 font-mono text-xs lg:text-sm text-slate">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary transition-colors"
                  >
                    <svg
                      className="w-5 h-5 lg:w-6 lg:h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary transition-colors"
                  >
                    <svg
                      className="w-5 h-5 lg:w-6 lg:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
