import React from 'react';
import { TESTIMONIALS } from '../data/questions';

export const SocialMomentsSection: React.FC = () => {
  return (
    <section id="ervaringen" className="relative py-24 md:py-36 bg-[#FAF5F0] border-t border-[#EFE6DE]">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <span className="text-xs uppercase tracking-widest text-[#BD3A53] font-semibold block mb-3">
            Echte ervaringen
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#201A18] font-normal tracking-tight mb-4">
            Wat er gebeurt als je het scherm neerlegt.
          </h2>
          <p className="text-sm md:text-base text-[#6E625D] leading-relaxed">
            Geen marketingverhalen over &ldquo;verdiepende connecties&rdquo;. Dit is wat er daadwerkelijk aan tafels gebeurt.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-[#EFE6DE] p-8 flex flex-col justify-between shadow-[0_4px_20px_-8px_rgba(32,26,24,0.06)]"
            >
              <div>
                <span className="font-serif text-2xl text-[#BD3A53] block mb-3">&ldquo;</span>
                <p className="font-serif italic text-lg text-[#201A18] leading-relaxed mb-8">
                  {item.quote}
                </p>
              </div>

              <div className="pt-6 border-t border-[#EFE6DE]">
                <p className="text-sm font-semibold text-[#201A18]">
                  {item.author}
                </p>
                <div className="flex items-center gap-2 text-xs text-[#6E625D] mt-1">
                  <span>{item.location}</span>
                  <span aria-hidden="true" className="text-[#EFE6DE]">·</span>
                  <span>{item.context}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quiet footnote proof */}
        <div className="mt-14 pt-8 border-t border-[#EFE6DE] flex flex-col sm:flex-row items-center justify-between text-xs text-[#6E625D] gap-4">
          <span>Getest met meer dan 400 koppels, vriendengroepen en dates</span>
          <span>100% vrij van reclames en tracking</span>
        </div>

      </div>
    </section>
  );
};
