import React, { useState } from 'react';
import { Question } from '../types';

interface InteractiveQuestionCardProps {
  question: Question;
  onNextQuestion: () => void;
  variant?: 'hero' | 'standard' | 'fullscreen';
}

export const InteractiveQuestionCard: React.FC<InteractiveQuestionCardProps> = ({
  question,
  onNextQuestion,
  variant = 'standard',
}) => {
  const [showFollowUp, setShowFollowUp] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isPhoneOnTableMode, setIsPhoneOnTableMode] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleNext = () => {
    setIsFlipping(true);
    setShowFollowUp(false);
    setTimeout(() => {
      onNextQuestion();
      setIsFlipping(false);
    }, 180);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(question.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Phone-on-table mode: Minimalist warm ivory paper state with calm focus and gentle breathing dot
  if (isPhoneOnTableMode) {
    return (
      <div className="relative w-full max-w-xl mx-auto bg-white rounded-3xl border border-[#EFE6DE] p-8 sm:p-12 text-center flex flex-col items-center justify-center min-h-[380px] shadow-sm transition-all duration-300">
        <div className="w-3.5 h-3.5 rounded-full bg-[#BD3A53] mb-8 animate-breathe shadow-[0_0_20px_#F7D8D3]" />
        
        <span className="text-xs uppercase tracking-widest text-[#6E625D] font-medium mb-4 block">
          Tussen Ons · Op Tafel
        </span>

        <p className="font-serif italic text-2xl sm:text-3xl text-[#201A18] max-w-md mx-auto leading-relaxed mb-8">
          &ldquo;{question.text}&rdquo;
        </p>

        <p className="text-xs uppercase tracking-wider text-[#6E625D] font-medium mb-10">
          De telefoon ligt tussen jullie in · Luister naar elkaars antwoord
        </p>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsPhoneOnTableMode(false)}
            className="px-4 py-2 text-xs font-medium text-[#201A18] bg-[#FAF5F0] hover:bg-[#EFE6DE] rounded-xl border border-[#EFE6DE] transition-colors cursor-pointer"
          >
            Scherm activeren
          </button>
          <button
            onClick={handleNext}
            className="px-5 py-2 text-xs font-medium text-white bg-[#BD3A53] hover:bg-[#A82D45] rounded-xl transition-colors cursor-pointer shadow-xs"
          >
            Volgende vraag
          </button>
        </div>
      </div>
    );
  }

  const isHero = variant === 'hero';

  return (
    <div
      className={`relative w-full transition-all duration-300 ${
        isHero
          ? 'max-w-2xl mx-auto'
          : 'max-w-xl mx-auto'
      }`}
    >
      {/* Soft Rose Ambient Glow behind card */}
      <div className="absolute -inset-2 bg-gradient-to-b from-[#F7D8D3]/60 via-[#F7D8D3]/20 to-transparent rounded-[36px] blur-xl opacity-80 pointer-events-none" />

      {/* Main tactile card */}
      <div
        className={`relative bg-white rounded-3xl border border-[#EFE6DE] p-7 sm:p-10 md:p-11 shadow-[0_12px_32px_-12px_rgba(32,26,24,0.08)] transition-all duration-200 ${
          isFlipping ? 'opacity-40 scale-[0.98]' : 'opacity-100 scale-100'
        }`}
      >
        {/* Top unboxed metadata strip */}
        <div className="flex items-center justify-between text-xs text-[#6E625D] mb-7 md:mb-8 font-normal tracking-wide">
          <div className="flex items-center gap-2">
            <span className="text-[#BD3A53] font-medium">{question.categoryTitle}</span>
            <span aria-hidden="true" className="text-[#EFE6DE]">·</span>
            <span className="capitalize">{question.mood.replace('-', ' ')}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPhoneOnTableMode(true)}
              title="Leg telefoon op tafel modus"
              className="text-[#6E625D] hover:text-[#201A18] text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-[#BD3A53]/80 inline-block" />
              <span className="hidden sm:inline">Leg op tafel</span>
            </button>

            <button
              onClick={handleCopy}
              className="text-[#6E625D] hover:text-[#201A18] text-xs transition-colors cursor-pointer"
            >
              {copied ? 'Gekopieerd!' : 'Kopieer'}
            </button>
          </div>
        </div>

        {/* The Question Text in warm Bodoni/Playfair serif */}
        <div className="min-h-[120px] md:min-h-[140px] flex items-center justify-start my-2">
          <h2
            className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#201A18] font-normal leading-[1.32] tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            &ldquo;{question.text}&rdquo;
          </h2>
        </div>

        {/* Context / Setting hint */}
        {question.settingPrompt && (
          <p className="text-xs text-[#6E625D] italic mt-3 mb-2">
            Gedachte: {question.settingPrompt}
          </p>
        )}

        {/* Follow-up / Verdieping */}
        {showFollowUp && question.followUp && (
          <div className="mt-5 pt-5 border-t border-[#EFE6DE] transition-all">
            <span className="text-[11px] uppercase tracking-wider text-[#BD3A53] font-semibold block mb-1">
              Verdieping
            </span>
            <p className="text-sm md:text-base text-[#201A18]/85 italic">
              {question.followUp}
            </p>
          </div>
        )}

        {/* Card Action Footer */}
        <div className="mt-8 md:mt-10 pt-6 border-t border-[#EFE6DE] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div>
            {question.followUp ? (
              <button
                onClick={() => setShowFollowUp(!showFollowUp)}
                className="text-xs font-normal text-[#6E625D] hover:text-[#201A18] transition-colors py-1 cursor-pointer flex items-center gap-1.5"
              >
                <span>{showFollowUp ? 'Verberg verdieping' : 'Toon verdiepingsvraag'}</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    showFollowUp ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            ) : (
              <span className="text-xs text-[#6E625D]/70 font-sans">Neem de tijd voor het antwoord</span>
            )}
          </div>

          <div className="flex items-center gap-3 self-end sm:self-auto w-full sm:w-auto">
            <button
              onClick={handleNext}
              className="w-full sm:w-auto px-6 py-2.5 text-xs sm:text-sm font-medium text-white bg-[#BD3A53] hover:bg-[#A82D45] active:scale-98 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <span>Volgende vraag</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
