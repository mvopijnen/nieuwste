import React from 'react';

/**
 * High-end editorial illustrations in Vogue / New Yorker artistic style,
 * using the exact brand palette: Crimson Berry (#BD3A53), Soft Rose (#F7D8D3),
 * Deep Charcoal (#201A18), Ivory (#FAF5F0), and Delicate Cream (#EFE6DE).
 */

export const BistroTableIllustration: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative overflow-hidden rounded-2xl bg-[#F7D8D3]/30 border border-[#EFE6DE] ${className}`}>
    <svg viewBox="0 0 500 360" className="w-full h-full object-cover" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Warm ambient background wash */}
      <rect width="500" height="360" fill="#FAF5F0" />
      <circle cx="250" cy="180" r="160" fill="#F7D8D3" fillOpacity="0.45" />
      <circle cx="250" cy="150" r="70" fill="#BD3A53" fillOpacity="0.08" />

      {/* Bistro Table in deep charcoal and delicate cream */}
      <ellipse cx="250" cy="270" rx="190" ry="50" fill="#FFFFFF" stroke="#201A18" strokeWidth="1.5" />
      <ellipse cx="250" cy="265" rx="180" ry="44" fill="#FAF5F0" stroke="#EFE6DE" strokeWidth="1" />

      {/* Candlelight in center */}
      <circle cx="250" cy="225" r="14" fill="#F7D8D3" />
      <circle cx="250" cy="225" r="5" fill="#BD3A53" />
      <path d="M250 216 Q252 208 250 200 Q248 208 250 216Z" fill="#BD3A53" />
      <rect x="246" y="224" width="8" height="20" rx="2" fill="#FFFFFF" stroke="#201A18" strokeWidth="1" />

      {/* Two wine glasses */}
      <path d="M190 220 L198 238 L202 238 L210 220 Q200 226 190 220Z" fill="#BD3A53" fillOpacity="0.25" stroke="#201A18" strokeWidth="1" />
      <line x1="200" y1="238" x2="200" y2="252" stroke="#201A18" strokeWidth="1.2" />
      <ellipse cx="200" cy="252" rx="10" ry="3" fill="#FFFFFF" stroke="#201A18" strokeWidth="1" />

      <path d="M290 218 L298 236 L302 236 L310 218 Q300 224 290 218Z" fill="#BD3A53" fillOpacity="0.25" stroke="#201A18" strokeWidth="1" />
      <line x1="300" y1="236" x2="300" y2="250" stroke="#201A18" strokeWidth="1.2" />
      <ellipse cx="300" cy="250" rx="10" ry="3" fill="#FFFFFF" stroke="#201A18" strokeWidth="1" />

      {/* Two intimate silhouettes leaning towards each other */}
      {/* Left person */}
      <path d="M70 360 Q90 220 150 180 Q170 140 160 110 Q145 80 120 95 Q100 110 110 140 Q90 180 60 360Z" fill="#201A18" fillOpacity="0.88" />
      {/* Hands reaching onto table */}
      <path d="M140 240 Q180 250 210 255" stroke="#201A18" strokeWidth="3" strokeLinecap="round" />

      {/* Right person */}
      <path d="M430 360 Q410 210 350 175 Q330 135 340 105 Q355 75 380 90 Q400 105 390 135 Q410 175 440 360Z" fill="#201A18" fillOpacity="0.88" />
      {/* Right hands reaching onto table */}
      <path d="M360 238 Q320 250 280 256" stroke="#201A18" strokeWidth="3" strokeLinecap="round" />

      {/* Delicate floating card between hands */}
      <rect x="225" y="246" width="50" height="32" rx="3" transform="rotate(-6 250 262)" fill="#FFFFFF" stroke="#BD3A53" strokeWidth="1.2" />
      <line x1="232" y1="256" x2="265" y2="252" stroke="#6E625D" strokeWidth="1" strokeLinecap="round" />
      <line x1="233" y1="262" x2="258" y2="259" stroke="#6E625D" strokeWidth="1" strokeLinecap="round" />
    </svg>
  </div>
);

export const CarJourneyIllustration: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative overflow-hidden rounded-2xl bg-[#FAF5F0] border border-[#EFE6DE] ${className}`}>
    <svg viewBox="0 0 500 320" className="w-full h-full object-cover" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="320" fill="#FAF5F0" />
      {/* Dusk twilight horizon wash */}
      <rect x="0" y="40" width="500" height="160" fill="url(#duskGradient)" />
      <defs>
        <linearGradient id="duskGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F7D8D3" stopOpacity="0.8" />
          <stop offset="70%" stopColor="#FAF5F0" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FAF5F0" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Highway horizon line */}
      <line x1="0" y1="180" x2="500" y2="180" stroke="#EFE6DE" strokeWidth="1" />
      <line x1="250" y1="180" x2="250" y2="240" stroke="#BD3A53" strokeWidth="1.5" strokeDasharray="16 14" opacity="0.4" />

      {/* Car Interior frame silhouette */}
      <path d="M0 320 L0 180 Q80 140 180 130 L320 130 Q420 140 500 180 L500 320 Z" fill="#201A18" fillOpacity="0.92" />
      <path d="M40 170 Q180 120 320 120 Q440 130 460 170" stroke="#EFE6DE" strokeWidth="1.5" fill="none" />

      {/* Two front seat headrests & silhouettes */}
      <ellipse cx="150" cy="190" rx="36" ry="46" fill="#201A18" />
      <ellipse cx="350" cy="190" rx="36" ry="46" fill="#201A18" />
      
      {/* Warm dashboard light in soft rose */}
      <circle cx="250" cy="270" r="40" fill="#F7D8D3" fillOpacity="0.4" />
      <circle cx="250" cy="270" r="10" fill="#BD3A53" fillOpacity="0.6" />
      <ellipse cx="250" cy="290" rx="90" ry="16" fill="#BD3A53" fillOpacity="0.12" />
    </svg>
  </div>
);

export const KitchenNightIllustration: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative overflow-hidden rounded-2xl bg-[#FAF5F0] border border-[#EFE6DE] ${className}`}>
    <svg viewBox="0 0 500 320" className="w-full h-full object-cover" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="320" fill="#FAF5F0" />
      {/* Overhead pendant lamp cone of warm light */}
      <path d="M250 20 L130 320 L370 320 Z" fill="#F7D8D3" fillOpacity="0.4" />
      <line x1="250" y1="0" x2="250" y2="40" stroke="#201A18" strokeWidth="1.5" />
      <path d="M220 40 L280 40 L265 60 L235 60 Z" fill="#BD3A53" stroke="#201A18" strokeWidth="1" />
      <circle cx="250" cy="62" r="6" fill="#FFFFFF" />

      {/* Kitchen table surface */}
      <line x1="40" y1="240" x2="460" y2="240" stroke="#201A18" strokeWidth="2" />
      <rect x="40" y="242" width="420" height="8" fill="#EFE6DE" />

      {/* Two ceramic mugs */}
      <rect x="180" y="210" width="28" height="30" rx="3" fill="#FFFFFF" stroke="#201A18" strokeWidth="1.2" />
      <path d="M178 218 C168 218 168 230 178 230" stroke="#201A18" strokeWidth="1.2" fill="none" />
      <ellipse cx="194" cy="210" rx="14" ry="4" fill="#BD3A53" fillOpacity="0.4" />

      <rect x="290" y="212" width="28" height="28" rx="3" fill="#FAF5F0" stroke="#201A18" strokeWidth="1.2" />
      <path d="M318 220 C328 220 328 232 318 232" stroke="#201A18" strokeWidth="1.2" fill="none" />
      <ellipse cx="304" cy="212" rx="14" ry="4" fill="#BD3A53" fillOpacity="0.4" />

      {/* The Tussen Ons question card on the table */}
      <rect x="226" y="226" width="48" height="30" rx="3" fill="#FFFFFF" stroke="#BD3A53" strokeWidth="1.2" />
      <circle cx="236" cy="234" r="2" fill="#BD3A53" />
      <line x1="232" y1="242" x2="264" y2="242" stroke="#6E625D" strokeWidth="1" />
      <line x1="232" y1="247" x2="255" y2="247" stroke="#6E625D" strokeWidth="1" />
    </svg>
  </div>
);
