import React, { useState } from 'react';
import { SITUATIONS } from '../data/questions';
import { BistroTableIllustration, CarJourneyIllustration, KitchenNightIllustration } from './EditorialVisuals';

interface SituationsSectionProps {
  onOpenPlayerWithQuestion?: (questionText: string) => void;
}

export const SituationsSection: React.FC<SituationsSectionProps> = ({
  onOpenPlayerWithQuestion,
}) => {
  const [activeSituationId, setActiveSituationId] = useState(SITUATIONS[0].id);

  const activeSituation =
    SITUATIONS.find((s) => s.id === activeSituationId) || SITUATIONS[0];

  // Visual pairing for each situation
  const renderIllustration = (id: string) => {
    switch (id) {
      case 'eerste-date-sit':
        return <BistroTableIllustration className="h-64 sm:h-80 w-full" />;
      case 'autorit':
        return <CarJourneyIllustration className="h-64 sm:h-80 w-full" />;
      case 'keukentafel':
        return <KitchenNightIllustration className="h-64 sm:h-80 w-full" />;
      default:
        return <BistroTableIllustration className="h-64 sm:h-80 w-full" />;
    }
  };

  return (
    <section id="situaties" className="relative py-24 md:py-36 bg-[#FAF5F0] border-b border-[#EFE6DE]">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        
        {/* Section Lead */}
        <div className="max-w-3xl mb-14 md:mb-20">
          <span className="text-xs uppercase tracking-[0.2em] text-[#BD3A53] font-semibold block mb-2">
            Echte Scènes · Momenten
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#201A18] font-normal tracking-tight mb-4">
            Voor wanneer de automatische piloot aanstaat.
          </h2>
          <p className="text-sm md:text-base text-[#6E625D] leading-relaxed">
            Niet voor &ldquo;iedere gelegenheid&rdquo;. Maar voor die specifieke momenten waarop je weet: we kunnen over koetjes en kalfjes praten, of we kunnen een écht gesprek voeren.
          </p>
        </div>

        {/* Situation Navigator Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {SITUATIONS.map((sit) => {
            const isActive = sit.id === activeSituationId;
            return (
              <button
                key={sit.id}
                onClick={() => setActiveSituationId(sit.id)}
                className={`p-5 text-left rounded-2xl transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-white border-[#BD3A53] shadow-sm ring-1 ring-[#BD3A53]/20'
                    : 'bg-white/60 border-[#EFE6DE] hover:bg-white hover:border-[#BD3A53]/30'
                }`}
              >
                <div className="text-[11px] uppercase tracking-wider text-[#BD3A53] font-semibold mb-1">
                  {sit.contextTag}
                </div>
                <h3 className="font-serif text-lg text-[#201A18] font-normal leading-snug">
                  {sit.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Featured Situation Showcase with Art and In-Context Question */}
        <div className="bg-white rounded-3xl border border-[#EFE6DE] p-8 sm:p-12 md:p-14 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-6">
              {renderIllustration(activeSituation.id)}
              <div className="flex items-center justify-between text-xs text-[#6E625D] mt-3">
                <span className="italic">{activeSituation.timeframe}</span>
                <span className="text-[#BD3A53] font-medium">{activeSituation.contextTag}</span>
              </div>
            </div>

            {/* Narrative & In-Context Question Column */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#BD3A53] font-semibold block mb-2">
                  De situatie
                </span>
                <h4 className="font-serif text-2xl sm:text-3xl text-[#201A18] font-normal mb-3">
                  {activeSituation.subtitle}
                </h4>
                <p className="text-sm sm:text-base text-[#6E625D] leading-relaxed">
                  {activeSituation.story}
                </p>
              </div>

              {/* The in-context question pullquote */}
              <div className="p-6 rounded-2xl bg-[#FAF5F0] border-l-4 border-[#BD3A53] border-y border-r border-[#EFE6DE]">
                <span className="text-[11px] uppercase tracking-wider text-[#BD3A53] font-semibold block mb-2">
                  De vraag voor dit specifieke moment
                </span>
                <p className="font-serif italic text-lg sm:text-xl text-[#201A18] leading-relaxed">
                  &ldquo;{activeSituation.exampleQuestion}&rdquo;
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-[#6E625D]">
                  Leg de telefoon op tafel zodra de vraag is gesteld
                </span>
                {onOpenPlayerWithQuestion && (
                  <button
                    onClick={() => onOpenPlayerWithQuestion(activeSituation.exampleQuestion)}
                    className="px-5 py-2.5 text-xs sm:text-sm font-medium text-white bg-[#BD3A53] hover:bg-[#A82D45] rounded-xl transition-all cursor-pointer shadow-xs"
                  >
                    Probeer deze vraag →
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
