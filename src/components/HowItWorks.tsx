import React from 'react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Kies een wereld',
      description: 'Of laat het toeval beslissen. Een eerste date vraagt om een andere sfeer dan een zondagavond na zeven jaar samenwonen.',
      detail: 'Van ontwapenend speels tot vragen die de adem even laten stokken.',
    },
    {
      number: '02',
      title: 'Leg de telefoon op tafel',
      description: 'Niet vasthouden, niet doorscrollen. Het toestel ligt tussen jullie in met één rustige vraag. Het scherm is slechts de aanleiding.',
      detail: 'Geen notificaties, geen badges, geen likes.',
    },
    {
      number: '03',
      title: 'Neem de tijd voor het antwoord',
      description: 'Geen puntentelling, geen winnaars. Luister zonder meteen een eigen verhaal te beginnen. Kijk wie er het eerst durft.',
      detail: 'Het echte product is wat er dán gebeurt.',
    },
  ];

  return (
    <section id="ritueel" className="relative py-24 md:py-36 bg-[#FAF5F0] border-t border-[#EFE6DE]">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        
        {/* Header */}
        <div className="max-w-xl mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-widest text-[#BD3A53] font-semibold block mb-3">
            Het ritueel
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#201A18] font-normal tracking-tight mb-4">
            Zo simpel als het hoort te zijn.
          </h2>
          <p className="text-sm md:text-base text-[#6E625D] leading-relaxed">
            Geen ingewikkelde spelregels, geen puntentelling en geen account. Binnen tien seconden zijn jullie in gesprek.
          </p>
        </div>

        {/* Steps: Clean editorial layout with hairlines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {steps.map((step) => (
            <div
              key={step.number}
              className="border-t border-[#EFE6DE] pt-8 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-[#BD3A53] tracking-widest font-semibold block mb-4">
                  STAP {step.number}
                </span>

                <h3 className="font-serif text-2xl text-[#201A18] font-normal mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-[#6E625D] leading-relaxed mb-6 font-normal">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EFE6DE]">
                <span className="text-xs italic text-[#201A18]/80">
                  {step.detail}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
