import React from 'react';

export const VisualStatement: React.FC = () => {
  return (
    <section className="relative py-32 md:py-48 bg-[#FAF5F0] text-[#201A18] overflow-hidden border-b border-[#EFE6DE]">
      {/* Soft Rose Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-[#F7D8D3]/60 blur-3xl rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-5 md:px-8 relative z-10 text-center">
        {/* Typographic rhythm: words functioning as visual architecture */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-8 gap-y-2 text-xs sm:text-sm font-sans tracking-[0.3em] text-[#6E625D] uppercase mb-12 md:mb-16">
          <span className="text-[#201A18] font-semibold">Eerlijk</span>
          <span aria-hidden="true" className="text-[#BD3A53]">·</span>
          <span>Ongemakkelijk</span>
          <span aria-hidden="true" className="text-[#BD3A53]">·</span>
          <span className="text-[#201A18] font-semibold">Grappig</span>
          <span aria-hidden="true" className="text-[#BD3A53]">·</span>
          <span>Dichterbij</span>
        </div>

        {/* Central Manifest Statement */}
        <h2
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#201A18] tracking-tight leading-[1.15] max-w-5xl mx-auto mb-12"
          style={{ textWrap: 'balance' }}
        >
          Het scherm is slechts het startpunt.
          <span className="block italic text-[#BD3A53] font-normal mt-3 md:mt-4">
            Het echte product is het gesprek.
          </span>
        </h2>

        <div className="max-w-2xl mx-auto border-t border-[#EFE6DE] pt-10">
          <p className="text-base sm:text-lg text-[#6E625D] font-normal leading-relaxed">
            De meeste apps willen dat je blijft kijken. Tussen Ons wil precies het tegenovergestelde: een vraag die zó nieuwsgierig maakt dat je de telefoon op tafel legt en vergeet dat hij er ligt.
          </p>
        </div>
      </div>
    </section>
  );
};
