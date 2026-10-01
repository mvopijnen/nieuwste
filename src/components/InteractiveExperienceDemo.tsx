import React, { useState } from 'react';
import { QUESTIONS } from '../data/questions';
import { QuestionMood, Question } from '../types';
import { InteractiveQuestionCard } from './InteractiveQuestionCard';

interface InteractiveExperienceDemoProps {
  onOpenPlayer: (categoryId?: string) => void;
}

export const InteractiveExperienceDemo: React.FC<InteractiveExperienceDemoProps> = ({
  onOpenPlayer,
}) => {
  const [selectedMood, setSelectedMood] = useState<QuestionMood | 'all'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewedCount, setViewedCount] = useState(1);

  const filteredQuestions = selectedMood === 'all'
    ? QUESTIONS
    : QUESTIONS.filter((q) => q.mood === selectedMood);

  const activeQuestion: Question =
    filteredQuestions[currentIndex % filteredQuestions.length] || QUESTIONS[0];

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
    setViewedCount((prev) => prev + 1);
  };

  const handleMoodSelect = (mood: QuestionMood | 'all') => {
    setSelectedMood(mood);
    setCurrentIndex(0);
  };

  return (
    <section id="ervaring" className="relative py-24 md:py-36 bg-[#FAF5F0] border-b border-[#EFE6DE]">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        
        {/* Editorial Masthead for the Table Experience */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#EFE6DE] pb-8 mb-14">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#BD3A53] font-semibold block mb-2">
              Tafel-Ervaring · Probeer Direct
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#201A18] font-normal tracking-tight">
              Probeer er nu eentje.
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#6E625D] max-w-md leading-relaxed">
            Geen registratie, geen voorbereiding. Stel de vraag hardop aan degene die nu bij je is. Kijk elkaar aan en neem de tijd.
          </p>
        </div>

        {/* Tactile Mood Tabs (Styled identically to the user guideline screenshot) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => handleMoodSelect('all')}
            className={`px-4 py-2 text-xs font-medium rounded-full transition-all cursor-pointer ${
              selectedMood === 'all'
                ? 'bg-white text-[#BD3A53] border-2 border-[#BD3A53] shadow-xs'
                : 'bg-white/80 text-[#6E625D] hover:text-[#201A18] border border-[#EFE6DE]'
            }`}
          >
            Alle sferen ({QUESTIONS.length})
          </button>
          <button
            onClick={() => handleMoodSelect('warm')}
            className={`px-4 py-2 text-xs font-medium rounded-full transition-all cursor-pointer ${
              selectedMood === 'warm'
                ? 'bg-white text-[#BD3A53] border-2 border-[#BD3A53] shadow-xs'
                : 'bg-white/80 text-[#6E625D] hover:text-[#201A18] border border-[#EFE6DE]'
            }`}
          >
            Warm & intiem
          </button>
          <button
            onClick={() => handleMoodSelect('nieuwsgierig')}
            className={`px-4 py-2 text-xs font-medium rounded-full transition-all cursor-pointer ${
              selectedMood === 'nieuwsgierig'
                ? 'bg-white text-[#BD3A53] border-2 border-[#BD3A53] shadow-xs'
                : 'bg-white/80 text-[#6E625D] hover:text-[#201A18] border border-[#EFE6DE]'
            }`}
          >
            Nieuwsgierig
          </button>
          <button
            onClick={() => handleMoodSelect('speels')}
            className={`px-4 py-2 text-xs font-medium rounded-full transition-all cursor-pointer ${
              selectedMood === 'speels'
                ? 'bg-white text-[#BD3A53] border-2 border-[#BD3A53] shadow-xs'
                : 'bg-white/80 text-[#6E625D] hover:text-[#201A18] border border-[#EFE6DE]'
            }`}
          >
            Speels & ontwapenend
          </button>
          <button
            onClick={() => handleMoodSelect('licht-spannend')}
            className={`px-4 py-2 text-xs font-medium rounded-full transition-all cursor-pointer ${
              selectedMood === 'licht-spannend'
                ? 'bg-white text-[#BD3A53] border-2 border-[#BD3A53] shadow-xs'
                : 'bg-white/80 text-[#6E625D] hover:text-[#201A18] border border-[#EFE6DE]'
            }`}
          >
            Licht spannend
          </button>
        </div>

        {/* Stacked Physical Card Deck Presentation */}
        <div className="relative max-w-2xl mx-auto my-6">
          {/* Card layer shadow below to create physical depth */}
          <div className="absolute inset-0 bg-[#EFE6DE]/60 rounded-3xl translate-y-3 translate-x-2 -rotate-1 pointer-events-none" />
          <div className="absolute inset-0 bg-[#EFE6DE]/80 rounded-3xl translate-y-1.5 -translate-x-1.5 rotate-1 pointer-events-none" />

          {/* Active Card on Top */}
          <div className="relative z-10">
            <InteractiveQuestionCard
              question={activeQuestion}
              onNextQuestion={handleNext}
            />
          </div>
        </div>

        {/* Footnote Bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6E625D] max-w-2xl mx-auto px-2 gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BD3A53]" />
            <span>{viewedCount} vragen getrokken in deze sessie</span>
          </div>

          <button
            onClick={() => onOpenPlayer(activeQuestion.categoryId)}
            className="text-[#BD3A53] font-medium hover:underline underline-offset-4 cursor-pointer flex items-center gap-1.5"
          >
            <span>Open in volledige gespreksmodus voor twee</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>

      </div>
    </section>
  );
};
