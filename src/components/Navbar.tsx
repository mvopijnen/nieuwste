import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenPlayer: (categoryId?: string) => void;
  onNavigateToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPlayer, onNavigateToSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigateToSection(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF5F0]/95 backdrop-blur-md border-b border-[#EFE6DE] py-3.5 shadow-xs'
          : 'bg-[#FAF5F0] py-4 border-b border-[#EFE6DE]/60'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark with sparkle icon */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 text-[#201A18] hover:opacity-85 transition-opacity focus:outline-none"
        >
          <span className="w-8 h-8 rounded-full bg-[#F7D8D3]/80 flex items-center justify-center text-[#BD3A53] shadow-xs">
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z" />
            </svg>
          </span>
          <span className="font-serif text-2xl font-normal tracking-tight text-[#201A18]">
            Tussen Ons
          </span>
        </a>

        {/* Zone 2: Navigation links including App Store link */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-normal text-[#6E625D]">
          <button
            onClick={() => handleLinkClick('ervaring')}
            className="hover:text-[#201A18] transition-colors focus:outline-none cursor-pointer"
          >
            De ervaring
          </button>
          <button
            onClick={() => handleLinkClick('werelden')}
            className="hover:text-[#201A18] transition-colors focus:outline-none cursor-pointer"
          >
            Werelden
          </button>
          <button
            onClick={() => handleLinkClick('situaties')}
            className="hover:text-[#201A18] transition-colors focus:outline-none cursor-pointer"
          >
            Situaties
          </button>
          <button
            onClick={() => handleLinkClick('ritueel')}
            className="hover:text-[#201A18] transition-colors focus:outline-none cursor-pointer"
          >
            Het ritueel
          </button>
          <button
            onClick={() => handleLinkClick('ervaringen')}
            className="hover:text-[#201A18] transition-colors focus:outline-none cursor-pointer"
          >
            Verhalen
          </button>
          <button
            onClick={() => {
              const el = document.getElementById('einde-cta');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
              }
            }}
            className="text-[#BD3A53] font-medium hover:underline underline-offset-4 flex items-center gap-1 cursor-pointer"
          >
            <span>Download app</span>
            <span className="text-[10px]">↓</span>
          </button>
        </nav>

        {/* Zone 3: Primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenPlayer()}
            className="px-5 py-2.5 text-xs sm:text-sm font-medium text-white bg-[#BD3A53] hover:bg-[#A82D45] active:scale-98 rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer shadow-xs"
          >
            Begin samen
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#201A18] hover:text-[#BD3A53] focus:outline-none cursor-pointer"
            aria-label="Open menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF5F0] border-b border-[#EFE6DE] px-5 py-6 space-y-4">
          <button
            onClick={() => handleLinkClick('ervaring')}
            className="block w-full text-left text-base text-[#201A18] py-1 cursor-pointer"
          >
            De ervaring
          </button>
          <button
            onClick={() => handleLinkClick('werelden')}
            className="block w-full text-left text-base text-[#201A18] py-1 cursor-pointer"
          >
            Werelden
          </button>
          <button
            onClick={() => handleLinkClick('situaties')}
            className="block w-full text-left text-base text-[#201A18] py-1 cursor-pointer"
          >
            Situaties
          </button>
          <button
            onClick={() => handleLinkClick('ritueel')}
            className="block w-full text-left text-base text-[#201A18] py-1 cursor-pointer"
          >
            Het ritueel
          </button>
          <button
            onClick={() => handleLinkClick('ervaringen')}
            className="block w-full text-left text-base text-[#201A18] py-1 cursor-pointer"
          >
            Verhalen
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              const el = document.getElementById('einde-cta');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="block w-full text-left text-base text-[#BD3A53] font-medium py-1 cursor-pointer"
          >
            Download app ↓
          </button>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPlayer();
              }}
              className="w-full py-3 text-center text-sm font-medium text-white bg-[#BD3A53] hover:bg-[#A82D45] rounded-xl cursor-pointer shadow-xs"
            >
              Begin samen
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
