import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#EFE6DE] bg-[#FAF5F0] py-14 md:py-20 text-[#6E625D] text-xs">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 mb-12">
          
          {/* Brand & core thought */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-[#F7D8D3]/80 flex items-center justify-center text-[#BD3A53]">
                <svg
                  className="w-3.5 h-3.5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z" />
                </svg>
              </span>
              <span className="font-serif text-xl font-normal text-[#201A18] tracking-tight">
                Tussen Ons
              </span>
            </div>
            <p className="leading-relaxed text-[#6E625D]">
              Een digitale ervaring ontworpen om twee mensen even uit de automatische piloot te halen. Het scherm is slechts de aanleiding. Het echte product is het gesprek.
            </p>
          </div>

          {/* Quick links & werelden */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <p className="text-[#201A18] font-semibold mb-3">Werelden</p>
              <ul className="space-y-2">
                <li><a href="#werelden" className="hover:text-[#BD3A53] transition-colors">Eerste date</a></li>
                <li><a href="#werelden" className="hover:text-[#BD3A53] transition-colors">Samen</a></li>
                <li><a href="#werelden" className="hover:text-[#BD3A53] transition-colors">Vrienden</a></li>
                <li><a href="#werelden" className="hover:text-[#BD3A53] transition-colors">Familie</a></li>
                <li><a href="#werelden" className="hover:text-[#BD3A53] transition-colors">Verdiepen</a></li>
              </ul>
            </div>

            <div>
              <p className="text-[#201A18] font-semibold mb-3">Ervaring</p>
              <ul className="space-y-2">
                <li><a href="#ervaring" className="hover:text-[#BD3A53] transition-colors">Probeer een vraag</a></li>
                <li><a href="#situaties" className="hover:text-[#BD3A53] transition-colors">Situaties</a></li>
                <li><a href="#ritueel" className="hover:text-[#BD3A53] transition-colors">Het ritueel</a></li>
                <li><a href="#ervaringen" className="hover:text-[#BD3A53] transition-colors">Echte verhalen</a></li>
              </ul>
            </div>

            <div>
              <p className="text-[#201A18] font-semibold mb-3">Tussen Ons</p>
              <ul className="space-y-2">
                <li><span className="text-[#201A18]/80">Geen tracking</span></li>
                <li><span className="text-[#201A18]/80">Geen dataverzameling</span></li>
                <li><span className="text-[#201A18]/80">Puur Nederlands</span></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom row */}
        <div className="pt-8 border-t border-[#EFE6DE] flex flex-col sm:flex-row items-center justify-between gap-4 text-[#6E625D]/70 text-[11px]">
          <p>© {new Date().getFullYear()} Tussen Ons. Het echte product is het gesprek tussen twee mensen.</p>
          <div className="flex items-center gap-4">
            <span>Privé & intiem</span>
            <span aria-hidden="true" className="text-[#EFE6DE]">·</span>
            <span>Vervaardigd met zorg</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
