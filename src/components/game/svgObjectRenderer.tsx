// src/components/game/SvgObjectRenderer.tsx
'use client';

import React from 'react';
import { ImageStep, SvgObjectConfig } from '@/types/game';

interface Props {
  steps: ImageStep[];
  mode?: string;
}

// Komponen Pembantu SVG Bentuk Visual (Bab 1)
export const ShapeSvg: React.FC<{ config: SvgObjectConfig; size?: number }> = ({ config, size = 28 }) => {
  const { shape, color } = config;
  switch (shape) {
    case 'star':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="currentColor" strokeWidth="1" className="drop-shadow-sm">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    case 'circle':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className="drop-shadow-sm">
          <circle cx="12" cy="12" r="10" stroke="#000" strokeOpacity="0.1" strokeWidth="2" />
        </svg>
      );
    case 'triangle':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className="drop-shadow-sm">
          <polygon points="12 2 22 20 2 20" />
        </svg>
      );
    case 'square':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className="drop-shadow-sm">
          <rect x="3" y="3" width="18" height="18" rx="4" />
        </svg>
      );
    case 'flower':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className="drop-shadow-sm">
          <circle cx="12" cy="8" r="4" />
          <circle cx="16" cy="12" r="4" />
          <circle cx="12" cy="16" r="4" />
          <circle cx="8" cy="12" r="4" />
          <circle cx="12" cy="12" r="3" fill="#fef08a" />
        </svg>
      );
    case 'gem':
    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className="drop-shadow-sm">
          <polygon points="6 3 18 3 22 9 12 21 2 9" />
        </svg>
      );
  }
};

// Komponen Utama SvgObjectRenderer
export const SvgObjectRenderer: React.FC<Props> = ({ steps, mode }) => {
  const currentStep = steps[0];
  if (!currentStep) return null;

  const count = currentStep.count;

  // 1. RENDER KHUSUS BAB 2: Kotak Satuan Biasa (HTML / Tailwind CSS Divs)
  if (mode === 'AREA_MEASUREMENT') {
    let cols = 4;
    let rows = 3;

    if (count === 15) { cols = 5; rows = 3; }
    else if (count === 24) { cols = 6; rows = 4; }
    else if (count === 20) { cols = 5; rows = 4; }
    else if (count === 14) { cols = 7; rows = 2; }

    return (
      <div className="flex flex-col items-center justify-center my-4 p-4 bg-[#f4f4f0] rounded-2xl border-2 border-[#18181b]">
        {/* Container Kotak Satuan HTML Biasa */}
        <div 
          className="grid gap-1.5 p-3 bg-white rounded-2xl border-2 border-[#18181b] shadow-[4px_4px_0px_#18181b]"
          style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
        >
          {Array.from({ length: count }).map((_, i) => (
            <div
              key={i}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-[#e0f2fe] border-2 border-[#18181b] rounded-xl flex items-center justify-center font-black text-xs sm:text-sm text-[#0369a1]"
            >
              {i + 1}
            </div>
          ))}
        </div>

        <p className="text-xs font-bold text-[#52525b] mt-3">
          Panjang: <span className="text-[#0369a1] font-black">{cols} petak</span> | Lebar: <span className="text-[#0369a1] font-black">{rows} petak</span>
        </p>
      </div>
    );
  }

  // 2. RENDER KHUSUS BAB 1: Pola Objek Berurutan (Tahap 1, Tahap 2, dst)
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 py-4">
      {steps.map((step) => (
        <div
          key={step.stepIndex}
          className="flex flex-col items-center justify-between p-3 bg-white rounded-2xl border-2 border-[#18181b] shadow-[3px_3px_0px_#18181b] min-w-[100px] min-h-[120px]"
        >
          <span className="text-xs font-black text-[#0369a1] bg-[#e0f2fe] px-2.5 py-1 rounded-xl border border-[#18181b] mb-2">
            Tahap {step.stepIndex}
          </span>

          {step.count === 0 ? (
            <div className="my-auto flex items-center justify-center w-16 h-16 bg-[#f4f4f0] border-2 border-dashed border-[#18181b] rounded-2xl text-2xl font-black text-slate-400">
              ?
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-1.5 my-auto items-center justify-items-center">
              {Array.from({ length: step.count }).map((_, i) => (
                <ShapeSvg key={i} config={step.config} size={24} />
              ))}
            </div>
          )}

          <span className="text-xs font-bold text-slate-500 mt-2">
            ({step.count} objek)
          </span>
        </div>
      ))}
    </div>
  );
};