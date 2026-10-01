import React, { useState } from 'react';
import { BistroTableIllustration } from './EditorialVisuals';
import { InteractiveQuestionCard } from './InteractiveQuestionCard';

interface HeroProps {
  onOpenPlayer: (categoryId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPlayer }) => {
  const [heroIndex, setHeroIndex] = useState(0);

  const heroQuestions = [
    {
      id: 'hero-1',
      categoryId: 'eerste-date' as const,
      categoryTitle: 'Eerste date',
      text: 'Wat dacht je over mij na onze eerste ontmoeting, maar heb je nooit hardop verteld?',
      followUp: 'En wat is het moment geweest waarop dat beeld kantelde?',
      mood: 'licht-spannend' as const,
      spicinessLevel: 2 as const,
      settingPrompt: 'Als het ijs gebroken is en de glazen halfvol zijn',
    },
    {
      id: 'hero-2',
      categoryId: 'samen' as const,
      categoryTitle: 'Samen',
      text: 'Wanneer heb je voor het laatst iets voor me verzwegen, puur om de lieve vrede te bewaren?',
      followUp: 'Hoe klein of schijnbaar onbelangrijk was het?',
      mood: 'licht-spannend' as const,
      spicinessLevel: 3 as const,
      settingPrompt: 'Laat op de avond, als de telefoon tussen jullie in ligt',
    },
    {
      id: 'hero-3',
      categoryId: 'verdiepen' as const,
      categoryTitle: 'Verdiepen',
      text: 'Wat is het grootste verschil tussen wie de buitenwereld denkt dat jij bent en wie je werkelijk bent?',
      followUp: 'Wie kent die binnenkant eigenlijk het beste?',
      mood: 'warm' as const,
      spicinessLevel: 3 as const,
      settingPrompt: 'Als de stilte niet meer ongemakkelijk voelt',
    },
    {
      id: 'hero-4',
      categoryId: 'vrienden' as const,
      categoryTitle: 'Vrienden',
      text: 'Als je vannacht om 03:00 één vriend mag bellen om je uit een bizarre situatie te redden: waarom wel of niet ik?',
      followUp: 'Geen sociaal wenselijk antwoord.',
      mood: 'speels' as const,
      spicinessLevel: 2 as const,
      settingPrompt: 'Om twee uur ’s nachts aan de keukentafel',
    },
  ];

  const currentQuestion = heroQuestions[heroIndex % heroQuestions.length];

  const handleNextHeroQuestion = () => {
    setHeroIndex((prev) => (prev + 1) % heroQuestions.length);
  };

  return (
    <section className="relative pt-24 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#FAF5F0] border-b border-[#EFE6DE]">
      {/* Soft Rose Ambient Glow */}
      <div
        className="absolute top-1/4 right-10 w-[600px] h-[500px] bg-[#F7D8D3]/70 blur-3xl pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 md:px-10">
        
        {/* Top Editorial Issue Ribbon */}
        <div className="flex items-center justify-between border-b border-[#EFE6DE] pb-3 mb-10 text-[11px] font-sans tracking-[0.2em] uppercase text-[#6E625D]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#BD3A53]" />
            <span className="text-[#201A18] font-semibold">Tussen Ons</span>
            <span>· Édition Première</span>
          </div>
          <span className="hidden sm:inline text-[#6E625D]">Het echte product is het gesprek</span>
          <span>Jaargang 2026</span>
        </div>

        {/* Asymmetric Editorial Hero Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Bold, emotional storytelling & typographic scale */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#EFE6DE] text-xs text-[#BD3A53] font-medium shadow-2xs">
              <span>✦</span>
              <span>Voorbij de automatische piloot</span>
            </div>

            <h1
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#201A18] font-normal tracking-tight leading-[1.12]"
              style={{ textWrap: 'balance' }}
            >
              Wanneer heb je voor het laatst iemand{' '}
              <span className="italic text-[#BD3A53] font-normal">echt</span> aangekeken?
            </h1>

            <p className="text-base sm:text-lg text-[#6E625D] font-normal leading-relaxed max-w-xl">
              Het echte gesprek begint pas wanneer de beleefdheid stopt. Geen swipes, geen puntentelling en geen algoritme. Gewoon één vraag die jullie van het scherm af haalt en terugbrengt naar elkaar.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onOpenPlayer()}
                className="px-8 py-3.5 text-sm font-medium text-white bg-[#BD3A53] hover:bg-[#A82D45] active:scale-98 rounded-xl transition-all duration-200 cursor-pointer shadow-md text-center flex items-center justify-center gap-2"
              >
                <span>Start jullie gesprek</span>
                <span aria-hidden="true">→</span>
              </button>

              <button
                onClick={handleNextHeroQuestion}
                className="px-6 py-3.5 text-sm font-medium text-[#201A18] bg-white hover:bg-[#FAF5F0] rounded-xl border border-[#EFE6DE] transition-colors cursor-pointer shadow-2xs text-center flex items-center justify-center gap-2"
              >
                <span>Trek een andere vraag</span>
                <span aria-hidden="true">↻</span>
              </button>
            </div>

            <div className="pt-4 flex items-center gap-6 text-xs text-[#6E625D]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BD3A53]" />
                <span>Geen account vereist</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BD3A53]" />
                <span>Direct op één scherm</span>
              </div>
            </div>
          </div>

          {/* Right Column: Physical Tabletop Card Presentation */}
          <div className="lg:col-span-6 relative">
            {/* Visual atmosphere container */}
            <div className="relative">
              {/* Illustrated vignette backdrop */}
              <div className="hidden sm:block absolute -top-8 -right-8 w-64 h-48 opacity-40 pointer-events-none">
                <BistroTableIllustration className="w-full h-full" />
              </div>

              {/* Physical Card Mockup with tactile layering */}
              <div className="relative z-10">
                <InteractiveQuestionCard
                  question={currentQuestion}
                  onNextQuestion={handleNextHeroQuestion}
                  variant="hero"
                />
              </div>

              {/* Under-card quote caption */}
              <p className="text-xs font-serif italic text-center text-[#6E625D] mt-4">
                &ldquo;Het scherm is slechts het startpunt. Het echte product is het gesprek.&rdquo;
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
