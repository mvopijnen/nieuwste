import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveExperienceDemo } from './components/InteractiveExperienceDemo';
import { SituationsSection } from './components/SituationsSection';
import { CategoriesWorldsSection } from './components/CategoriesWorldsSection';
import { VisualStatement } from './components/VisualStatement';
import { HowItWorks } from './components/HowItWorks';
import { SocialMomentsSection } from './components/SocialMomentsSection';
import { FinalManifestoCTA } from './components/FinalManifestoCTA';
import { Footer } from './components/Footer';
import { ConversationModal } from './components/ConversationModal';

export default function App() {
  const [playerOpen, setPlayerOpen] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState<string | undefined>(undefined);
  const [activeQuestionText, setActiveQuestionText] = useState<string | undefined>(undefined);

  const handleOpenPlayer = (categoryId?: string) => {
    setActiveCategoryId(categoryId);
    setActiveQuestionText(undefined);
    setPlayerOpen(true);
  };

  const handleOpenWithQuestion = (questionText: string) => {
    setActiveQuestionText(questionText);
    setPlayerOpen(true);
  };

  const handleNavigateToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF5F0] text-[#201A18] bg-canvas-warm font-sans selection:bg-[#BD3A53] selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenPlayer={() => handleOpenPlayer()}
        onNavigateToSection={handleNavigateToSection}
      />

      <main>
        {/* 1. Hero: Curiosity, tone of voice, provocative question */}
        <Hero onOpenPlayer={handleOpenPlayer} />

        {/* 2. Interactive Demo: Probeer er eentje direct op de pagina */}
        <InteractiveExperienceDemo onOpenPlayer={handleOpenPlayer} />

        {/* 3. Situaties: Eerste date, bank, autorit, keukentafel */}
        <SituationsSection onOpenPlayerWithQuestion={handleOpenWithQuestion} />

        {/* 4. Categorieën zijn Werelden */}
        <CategoriesWorldsSection onSelectCategoryForPlayer={handleOpenPlayer} />

        {/* 5. Visueel Statement: Typografische adempauze & merkfilosofie */}
        <VisualStatement />

        {/* 6. Het Ritueel / Hoe het werkt */}
        <HowItWorks />

        {/* 7. Echte verhalen / Sociale bevestiging */}
        <SocialMomentsSection />

        {/* 8. Laatste merkstatement & Conversie */}
        <FinalManifestoCTA onOpenPlayer={handleOpenPlayer} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fullscreen companion session player for two people */}
      <ConversationModal
        isOpen={playerOpen}
        onClose={() => setPlayerOpen(false)}
        initialCategoryId={activeCategoryId}
        initialQuestionText={activeQuestionText}
      />
    </div>
  );
}
