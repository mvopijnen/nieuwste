import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { CATEGORIES, QUESTIONS } from '../data/questions';
import { CategoryId, Question } from '../types';

interface ConversationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategoryId?: string;
  initialQuestionText?: string;
}

export const ConversationModal: React.FC<ConversationModalProps> = ({
  isOpen,
  onClose,
  initialCategoryId,
  initialQuestionText,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>(
    (initialCategoryId as CategoryId) || 'all'
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false); // 180° rotation for partner across the table
  const [showFollowUp, setShowFollowUp] = useState(false);
  const [isDissolving, setIsDissolving] = useState(false);
  const [showMoodMenu, setShowMoodMenu] = useState(false);

  // Sync category if passed from parent
  useEffect(() => {
    if (initialCategoryId) {
      setSelectedCategory(initialCategoryId as CategoryId);
      setCurrentIndex(0);
    }
  }, [initialCategoryId]);

  // Filter questions pool based on category
  const pool = useMemo(() => {
    if (selectedCategory === 'all') return QUESTIONS;
    const filtered = QUESTIONS.filter((q) => q.categoryId === selectedCategory);
    return filtered.length > 0 ? filtered : QUESTIONS;
  }, [selectedCategory]);

  // Sync initial question if specified
  useEffect(() => {
    if (initialQuestionText) {
      const idx = pool.findIndex((q) => q.text === initialQuestionText);
      if (idx !== -1) {
        setCurrentIndex(idx);
      }
    }
  }, [initialQuestionText, pool]);

  const currentQuestion: Question = pool[currentIndex % pool.length] || QUESTIONS[0];

  // Silky smooth, almost invisible transition to next question
  const advanceToNext = useCallback(() => {
    if (isDissolving) return;
    setIsDissolving(true);
    setShowFollowUp(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % pool.length);
      setIsDissolving(false);
    }, 220);
  }, [isDissolving, pool.length]);

  const advanceToPrev = useCallback(() => {
    if (isDissolving) return;
    setIsDissolving(true);
    setShowFollowUp(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + pool.length) % pool.length);
      setIsDissolving(false);
    }, 220);
  }, [isDissolving, pool.length]);

  // Keyboard navigation for effortless hands-free flow
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        advanceToNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        advanceToPrev();
      } else if (e.key.toLowerCase() === 'f') {
        setIsFlipped((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, advanceToNext, advanceToPrev, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#FAF5F0] flex flex-col items-center justify-between p-6 sm:p-10 md:p-14 select-none cursor-pointer overflow-hidden animate-in fade-in duration-500"
      onClick={advanceToNext}
      role="dialog"
      aria-modal="true"
    >
      {/* Living Atmospheric Breathing Aura (Inviting Stillness & Slowness) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] md:w-[950px] h-[450px] sm:h-[600px] bg-gradient-to-tr from-[#F7D8D3]/70 via-[#F7D8D3]/35 to-transparent rounded-full blur-3xl pointer-events-none animate-slow-breath"
        aria-hidden="true"
      />

      {/* Top Whisper Bar: Minimal, Quiet, Zero App-Chrome */}
      <header
        className="w-full max-w-3xl flex items-center justify-between relative z-20 text-xs font-sans text-[#6E625D]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle Category/Mood trigger without button styling */}
        <div className="relative">
          <button
            onClick={() => setShowMoodMenu(!showMoodMenu)}
            className="flex items-center gap-2 hover:text-[#201A18] transition-colors cursor-pointer py-2 focus:outline-none"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#BD3A53] animate-pulse" />
            <span className="font-serif italic text-sm text-[#201A18]">
              {selectedCategory === 'all'
                ? 'Alle werelden'
                : CATEGORIES.find((c) => c.id === selectedCategory)?.title}
            </span>
            <span className="text-[10px] text-[#6E625D]/60 tracking-wider">
              {showMoodMenu ? '▲' : '▼'}
            </span>
          </button>

          {/* Minimalist Mood Selector Dropdown */}
          {showMoodMenu && (
            <div className="absolute top-full left-0 mt-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-[#EFE6DE] p-2 min-w-[200px] z-30 animate-in fade-in zoom-in-95 duration-150">
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setShowMoodMenu(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-colors cursor-pointer ${
                  selectedCategory === 'all'
                    ? 'text-[#BD3A53] font-medium bg-[#F7D8D3]/30'
                    : 'text-[#6E625D] hover:text-[#201A18] hover:bg-[#FAF5F0]'
                }`}
              >
                Alle werelden door elkaar
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setShowMoodMenu(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-colors cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'text-[#BD3A53] font-medium bg-[#F7D8D3]/30'
                      : 'text-[#6E625D] hover:text-[#201A18] hover:bg-[#FAF5F0]'
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Quiet Tools: Rotate for partner across table + Close */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => setIsFlipped(!isFlipped)}
            title="Draai de kaart om voor degene tegenover je"
            className="text-[11px] tracking-wider text-[#6E625D] hover:text-[#201A18] transition-colors cursor-pointer py-1 flex items-center gap-1.5 focus:outline-none"
          >
            <span>{isFlipped ? 'draai terug' : 'omdraaien'}</span>
          </button>

          <button
            onClick={onClose}
            className="text-[11px] tracking-wider text-[#6E625D] hover:text-[#BD3A53] transition-colors cursor-pointer py-1 focus:outline-none"
          >
            sluiten
          </button>
        </div>
      </header>

      {/* Main Analog Object: The Cotton Paper Card Resting On The Table */}
      <main className="w-full max-w-3xl my-auto relative z-10 flex flex-col items-center justify-center">
        <div
          className={`w-full transition-transform duration-500 ease-out ${
            isFlipped ? 'rotate-180' : ''
          }`}
        >
          {/* The tactile physical card: Borderless, heavy matte paper with natural depth */}
          <article
            className={`w-full bg-[#FFFDFB] rounded-[32px] sm:rounded-[44px] p-8 sm:p-14 md:p-20 shadow-[0_24px_64px_-16px_rgba(189,58,83,0.14),0_12px_36px_-10px_rgba(32,26,24,0.06)] relative transition-all duration-300 ${
              isDissolving
                ? 'opacity-0 translate-y-2 scale-[0.98]'
                : 'opacity-100 translate-y-0 scale-100'
            }`}
          >
            {/* Meditative Breathing Ember (Invites Silence & Eye Contact) */}
            <div className="flex items-center justify-center mb-8 sm:mb-12">
              <div className="relative flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-[#BD3A53] animate-breathe" />
                <span className="absolute w-8 h-8 rounded-full bg-[#F7D8D3]/70 animate-slow-breath" />
              </div>
            </div>

            {/* The Central Question: Monumental, Gorgeous Serif Typography */}
            <div className="text-center my-4 sm:my-8">
              <h2
                className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#201A18] font-normal leading-[1.24] tracking-tight selection:bg-[#BD3A53] selection:text-white"
                style={{ textWrap: 'balance' }}
              >
                &ldquo;{currentQuestion.text}&rdquo;
              </h2>
            </div>

            {/* Subtle Follow-up / Verdieping: Organic reveal, no buttons */}
            {currentQuestion.followUp && (
              <div
                className="text-center mt-8 sm:mt-12 pt-6 border-t border-[#EFE6DE]/60"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowFollowUp(!showFollowUp);
                }}
              >
                {showFollowUp ? (
                  <p className="font-serif italic text-base sm:text-lg text-[#BD3A53] leading-relaxed max-w-lg mx-auto animate-in fade-in duration-300">
                    {currentQuestion.followUp}
                  </p>
                ) : (
                  <span className="font-serif italic text-xs sm:text-sm text-[#6E625D]/75 hover:text-[#BD3A53] transition-colors cursor-pointer">
                    verdieping bekijken...
                  </span>
                )}
              </div>
            )}
          </article>
        </div>
      </main>

      {/* Bottom Whisper: Almost invisible, natural gesture invitation */}
      <footer className="w-full max-w-3xl flex items-center justify-between text-xs text-[#6E625D]/60 relative z-20 pt-4 font-sans tracking-wide">
        <span className="font-serif italic text-xs text-[#6E625D]/70 hidden sm:inline">
          Neem de tijd. Luister zonder te onderbreken.
        </span>

        <span className="mx-auto sm:mx-0 text-[11px] text-[#6E625D]/70 tracking-widest uppercase">
          tik ergens voor de volgende vraag
        </span>

        <span className="hidden sm:inline text-[11px] text-[#6E625D]/50 font-mono">
          spatiebalk · pijltjestoetsen
        </span>
      </footer>
    </div>
  );
};
