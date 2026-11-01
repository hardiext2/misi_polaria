// src/components/game/InteractiveMatchVisual.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Props {
  leftItems: string[];  // Contoh: ["5 Petak Panjang", "3 Petak Lebar"] atau rumus
  rightItems: string[]; // Contoh pilihan hasil: ["12 Petak", "15 Petak", "20 Petak"]
  correctTarget: string; // Jawaban benar yang harus dicocokkan
  onMatched: () => void;
}

export function InteractiveMatchVisual({ leftItems, rightItems, correctTarget, onMatched }: Props) {
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleMatch = (rightVal: string) => {
    setSelectedRight(rightVal);
    if (rightVal.trim().toLowerCase() === correctTarget.trim().toLowerCase()) {
      setIsSuccess(true);
      onMatched();
    }
  };

  return (
    <div className="bg-[#fef08a] border-3 border-[#18181b] rounded-2xl p-4 shadow-[4px_4px_0px_#18181b] my-4 text-center">
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs font-black text-[#713f12]">🔗 Pasangkan Sisi dengan Hasil (=)</span>
        <span className={`text-xs font-black px-2.5 py-1 rounded-lg border-2 border-[#18181b] ${isSuccess ? 'bg-[#34d399] text-[#18181b]' : 'bg-white text-slate-700'}`}>
          {isSuccess ? '✨ Berhasil Dicocokkan!' : 'Cari Pasangan Yang Tepat'}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center bg-white p-4 rounded-xl border-2 border-[#18181b]">
        
        {/* Sisi Kiri (Komponen Rumus/Ukuran) */}
        <div className="space-y-2">
          <div className="text-[10px] font-black uppercase text-slate-400">Ukuran Diketahui</div>
          {leftItems.map((item, idx) => (
            <div key={idx} className="bg-[#e0f2fe] border-2 border-[#18181b] rounded-xl p-2.5 font-black text-xs text-[#0369a1]">
              {item}
            </div>
          ))}
        </div>

        {/* Tanda Sama Dengan (=) / Penghubung */}
        <div className="flex justify-center items-center text-xl font-black text-[#18181b]">
          <span className="w-10 h-10 rounded-full bg-[#f4f4f0] border-2 border-[#18181b] flex items-center justify-center shadow-[2px_2px_0px_#18181b]">
            =
          </span>
        </div>

        {/* Sisi Kanan (Pilihan Hasil untuk Dicocokkan) */}
        <div className="space-y-2">
          <div className="text-[10px] font-black uppercase text-slate-400">Pilih Hasil Luas</div>
          {rightItems.map((opt, idx) => {
            const isChosen = selectedRight === opt;
            const isRightOne = opt.trim().toLowerCase() === correctTarget.trim().toLowerCase();

            let btnStyle = 'bg-white hover:bg-slate-100 text-[#18181b]';
            if (isChosen) {
              btnStyle = isSuccess && isRightOne ? 'bg-[#34d399] text-[#18181b]' : 'bg-[#fee2e2] text-[#991b1b]';
            }

            return (
              <motion.button
                key={idx}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleMatch(opt)}
                disabled={isSuccess}
                className={`w-full p-2.5 rounded-xl border-2 border-[#18181b] font-black text-xs shadow-[2px_2px_0px_#18181b] transition-all cursor-pointer ${btnStyle}`}
              >
                {opt} {isChosen && (isRightOne ? ' ✓' : ' ✗')}
              </motion.button>
            );
          })}
        </div>

      </div>

      <p className="text-[11px] font-bold text-[#713f12] mt-3">
        💡 Petunjuk: Cocokkan perkalian sisi di sebelah kiri dengan nilai hasil luas yang pas di sebelah kanan!
      </p>
    </div>
  );
}