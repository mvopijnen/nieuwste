import React, { useState } from 'react';
import { CATEGORIES, QUESTIONS } from '../data/questions';
import { CategoryId } from '../types';

interface CategoriesWorldsSectionProps {
  onSelectCategoryForPlayer: (categoryId: string) => void;
}

export const CategoriesWorldsSection: React.FC<CategoriesWorldsSectionProps> = ({
  onSelectCategoryForPlayer,
}) => {
  const [activeWorldId, setActiveWorldId] = useState<CategoryId>('eerste-date');

  const romanNumerals: Record<CategoryId, string> = {
    'eerste-date': 'I',
    'samen': 'II',
    'vrienden': 'III',
    'familie': 'IV',
    'verdiepen': 'V',
    'onverwacht': 'VI',
  };

  const activeCategory =
    CATEGORIES.find((c) => c.id === activeWorldId) || CATEGORIES[0];
  const sampleQuestions = QUESTIONS.filter((q) => q.categoryId === activeWorldId).slice(0, 3);

  return (
    <section id="werelden" className="relative py-24 md:py-36 bg-[#FAF5F0] border-b border-[#EFE6DE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        
        {/* Magazine Editorial Masthead */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#EFE6DE] pb-8 mb-14">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#BD3A53] font-semibold block mb-2">
              Sommaire · Zes Werelden
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#201A18] font-normal tracking-tight">
              Geen kaartenbak, maar werelden.
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#6E625D] max-w-md leading-relaxed font-normal">
            Iedere ontmoeting heeft een eigen spanning. Kies de wereld die past bij wie er vanavond tegenover je zit.
          </p>
        </div>

        {/* Magazine Chapter Navigation Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {CATEGORIES.map((cat) => {
            const isActive = cat.id === activeWorldId;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveWorldId(cat.id)}
                className={`p-4 text-left rounded-2xl transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-white border-[#BD3A53] shadow-sm ring-1 ring-[#BD3A53]/20'
                    : 'bg-white/60 border-[#EFE6DE] hover:bg-white hover:border-[#BD3A53]/40'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] mb-2 font-mono">
                  <span className={isActive ? 'text-[#BD3A53] font-bold' : 'text-[#6E625D]'}>
                    {romanNumerals[cat.id]}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: isActive ? '#BD3A53' : '#EFE6DE' }} />
                </div>
                <h3 className={`font-serif text-base sm:text-lg transition-colors leading-tight ${
                  isActive ? 'text-[#201A18] font-medium' : 'text-[#201A18]/80'
                }`}>
                  {cat.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* The Active World Feature Magazine Spread */}
        <div className="bg-white rounded-3xl border border-[#EFE6DE] p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-sm">
          {/* Ambient soft rose glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F7D8D3]/50 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* World narrative description */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3 text-xs text-[#6E625D]">
                <span className="font-mono text-[#BD3A53] font-semibold tracking-wider">
                  HOOFDSTUK {romanNumerals[activeCategory.id]}
                </span>
                <span className="text-[#EFE6DE]">·</span>
                <span>{activeCategory.moodTag}</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#201A18] font-normal tracking-tight">
                {activeCategory.title}
              </h3>

              <p className="font-serif italic text-xl sm:text-2xl text-[#BD3A53] leading-snug">
                &ldquo;{activeCategory.tagline}&rdquo;
              </p>

              <p className="text-base text-[#6E625D] leading-relaxed max-w-lg font-normal">
                {activeCategory.description}
              </p>

              <div className="pt-4">
                <button
                  onClick={() => onSelectCategoryForPlayer(activeCategory.id)}
                  className="px-7 py-3 text-sm font-medium text-white bg-[#BD3A53] hover:bg-[#A82D45] active:scale-98 rounded-xl transition-all cursor-pointer shadow-xs flex items-center gap-2"
                >
                  <span>Speel met de wereld {activeCategory.title}</span>
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>

            {/* World question sample cards */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#6E625D] font-semibold block mb-2">
                Voorbeeldvragen uit deze wereld:
              </span>

              {sampleQuestions.map((q, idx) => (
                <div
                  key={q.id}
                  className="p-5 rounded-2xl bg-[#FAF5F0] border border-[#EFE6DE] transition-all hover:border-[#BD3A53]/30 hover:bg-white"
                >
                  <div className="flex items-center justify-between text-[11px] text-[#6E625D] mb-2 font-mono">
                    <span>Vraag 0{idx + 1}</span>
                    <span className="capitalize">{q.mood.replace('-', ' ')}</span>
                  </div>
                  <p className="font-serif italic text-base sm:text-lg text-[#201A18] leading-relaxed">
                    &ldquo;{q.text}&rdquo;
                  </p>
                  {q.followUp && (
                    <p className="text-xs text-[#BD3A53] mt-2 pt-2 border-t border-[#EFE6DE]">
                      Verdieping: {q.followUp}
                    </p>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
