import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 1024) {
        const rightContainer = document.querySelector('.lg\\:ml-1\\/2');
        if (rightContainer) {
          setIsScrolled((rightContainer as HTMLElement).scrollTop > 100);
        }
      } else {
        setIsScrolled(window.scrollY > 100);
      }
    };

    const rightContainer = document.querySelector('.lg\\:ml-1\\/2');
    if (rightContainer && window.innerWidth >= 1024) {
      rightContainer.addEventListener('scroll', handleScroll);
    } else {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (rightContainer) {
        rightContainer.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Work', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img
              src="/logo1.png"
              alt="Logo"
              className="w-8 h-8 object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex space-x-8">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-sm font-mono text-secondary hover:text-primary transition-colors"
                >
                  <span className="text-primary">0{index + 1}.</span> {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsResumeOpen(true)}
              className="border border-primary text-primary px-3 py-1 rounded font-mono text-sm hover:bg-primary/10 transition-colors"
            >
              Resume
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-secondary hover:text-primary transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Resume Button */}
          <button
            onClick={() => setIsResumeOpen(true)}
            className="hidden lg:block border border-primary text-primary px-4 py-2 rounded font-mono text-sm hover:bg-primary/10 transition-colors"
          >
            Resume
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-dark/95 backdrop-blur-sm border-t border-slate/20">
            <ul className="px-6 py-4 space-y-4">
              {navItems.map((item, index) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-lg font-mono text-secondary hover:text-primary transition-colors py-2"
                  >
                    <span className="text-primary">0{index + 1}.</span>{' '}
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Resume Modal */}
      {isResumeOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100]">
          <div className="relative bg-dark rounded-lg w-[90%] lg:w-[60%] h-[80%] overflow-hidden shadow-xl">
            <button
              onClick={() => setIsResumeOpen(false)}
              className="absolute top-3 right-3 text-white hover:text-primary"
            >
              ✕
            </button>
            <iframe
              src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
              className="w-full h-full"
              title="Resume PDF"
            ></iframe>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
