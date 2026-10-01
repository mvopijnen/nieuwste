import React from 'react';

interface FinalManifestoCTAProps {
  onOpenPlayer: (categoryId?: string) => void;
}

export const FinalManifestoCTA: React.FC<FinalManifestoCTAProps> = ({ onOpenPlayer }) => {
  return (
    <section className="relative py-28 md:py-44 bg-[#FAF5F0] border-t border-[#EFE6DE] text-center overflow-hidden">
      {/* Soft Rose ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#F7D8D3]/70 blur-3xl rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto px-5 md:px-8 relative z-10">
        <span className="text-xs uppercase tracking-widest text-[#BD3A53] font-semibold block mb-4">
          Vanavond
        </span>

        <h2
          className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#201A18] font-light tracking-tight leading-[1.18] mb-6"
          style={{ textWrap: 'balance' }}
        >
          Leg je telefoon tussen jullie in.
          <span className="block italic text-[#BD3A53] font-normal mt-2">
            Kijk wie het eerst durft.
          </span>
        </h2>

        <p className="text-sm md:text-base text-[#6E625D] max-w-lg mx-auto leading-relaxed mb-10">
          Geen download verplicht. Direct te openen in je mobiele browser tijdens een diner, in de trein of op de bank.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onOpenPlayer()}
            className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-white bg-[#BD3A53] hover:bg-[#A82D45] active:scale-98 rounded-xl transition-all duration-200 cursor-pointer shadow-md"
          >
            Start jullie gesprek nu
          </button>
          
          <button
            onClick={() => {
              const el = document.getElementById('werelden');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-6 py-3.5 text-sm font-medium text-[#201A18] hover:text-[#BD3A53] bg-white rounded-xl border border-[#EFE6DE] transition-colors cursor-pointer shadow-2xs"
          >
            Kies eerst een wereld
          </button>
        </div>

        <div className="mt-12 text-xs text-[#6E625D] flex items-center justify-center gap-4 font-sans">
          <span>Altijd kosteloos</span>
          <span aria-hidden="true" className="text-[#EFE6DE]">·</span>
          <span>Geen appstore</span>
          <span aria-hidden="true" className="text-[#EFE6DE]">·</span>
          <span>Direct op één scherm</span>
        </div>
      </div>
    </section>
  );
};
