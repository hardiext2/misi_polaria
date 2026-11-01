// src/app/result/[levelId]/page.tsx
'use client';

import React, { use } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { LEVELS_META } from '@/data/level';
import { useProgress } from '@/hooks/useProgress';
import { useAudio } from '@/lib/useAudio';

interface Props {
  params: Promise<{ levelId: string }>;
}

export default function ResultPage({ params }: Props) {
  const { levelId } = use(params);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isHydrated } = useProgress();
  const audio = useAudio(true);

  const score = searchParams.get('score') || '0';
  const stars = parseInt(searchParams.get('stars') || '0', 10);
  const correct = searchParams.get('correct') || '0';
  const total = searchParams.get('total') || '1';

  const levelMeta = LEVELS_META.find(l => l.id === levelId) || LEVELS_META[0];
  const nextLevelId = `level-${levelMeta.levelNumber + 1}`;
  const hasNextLevel = levelMeta.levelNumber < 12;

  const isPassed = stars > 0;

  if (!isHydrated) return null;

  return (
    <main className="min-h-screen bg-[#e2e8f0] flex flex-col items-center justify-center p-4 sm:p-6 text-[#18181b] relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#94a3b8_2px,transparent_2px)] [background-size:24px_24px]" />

      {/* Efek Animasi Kertas Masuk (Framer Motion Spring Drop) */}
      <motion.div
        initial={{ scale: 0.8, y: -50, opacity: 0, rotate: -2 }}
        animate={{ scale: 1, y: 0, opacity: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="bg-white border-4 border-[#18181b] shadow-[8px_8px_0px_#18181b] rounded-3xl max-w-md w-full p-6 sm:p-8 text-center relative z-10 mx-auto"
      >
        {/* Ikon Hasil */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.15, type: 'spring', stiffness: 400, damping: 15 }}
          className="text-5xl sm:text-6xl mb-3"
        >
          {isPassed ? '🏆' : '💪'}
        </motion.div>

        <h1 className="text-xl sm:text-2xl font-black mb-1">
          {isPassed ? 'Level Selesai!' : 'Belum Berhasil!'}
        </h1>
        <p className="text-[#52525b] font-bold text-xs sm:text-sm mb-6">
          {levelMeta.title} {isPassed ? '' : '- Yuk Coba Lagi!'}
        </p>

        {/* Stars Earned Animation */}
        <div className="flex justify-center gap-2 mb-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.span 
              key={i} 
              initial={{ scale: 0 }}
              animate={{ scale: i < stars ? 1 : 0.8 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className={`text-3xl sm:text-4xl ${i < stars ? 'text-[#f59e0b]' : 'text-slate-300'}`}
            >
              ★
            </motion.span>
          ))}
        </div>

        {/* Score & Accuracy Stats */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <div className="bg-[#a7f3d0] border-2 border-[#18181b] rounded-2xl p-3 shadow-[2px_2px_0px_#18181b] text-center">
            <span className="block text-xl sm:text-2xl font-black text-[#18181b]">{score}</span>
            <span className="text-[10px] sm:text-xs font-bold text-[#064e3b]">Skor Diperoleh</span>
          </div>
          <div className="bg-[#fef08a] border-2 border-[#18181b] rounded-2xl p-3 shadow-[2px_2px_0px_#18181b] text-center">
            <span className="block text-xl sm:text-2xl font-black text-[#18181b]">{correct}/{total}</span>
            <span className="text-[10px] sm:text-xs font-bold text-[#713f12]">Jawaban Benar</span>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          {isPassed && hasNextLevel ? (
            <button
              onClick={() => { audio.playClick(); router.push(`/play/${nextLevelId}`); }}
              className="w-full bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#18181b] font-black py-3.5 sm:py-4 rounded-2xl border-3 border-[#18181b] shadow-[4px_4px_0px_#18181b] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#18181b] transition-all text-sm sm:text-base"
            >
              🚀 Lanjut Level Berikutnya
            </button>
          ) : (
            <button
              onClick={() => { audio.playClick(); router.push(`/play/${levelId}`); }}
              className="w-full bg-[#fef08a] hover:bg-[#fde047] text-[#18181b] font-black py-3.5 sm:py-4 rounded-2xl border-3 border-[#18181b] shadow-[4px_4px_0px_#18181b] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#18181b] transition-all text-sm sm:text-base"
            >
              🔄 Ulangi Level
            </button>
          )}

          <Link
            href="/map"
            onClick={audio.playClick}
            className="w-full bg-[#f4f4f0] hover:bg-[#e4e4e7] text-[#18181b] font-black py-3.5 sm:py-4 rounded-2xl border-3 border-[#18181b] shadow-[4px_4px_0px_#18181b] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#18181b] transition-all block text-sm sm:text-base"
          >
            🗺️ Kembali ke Peta
          </Link>
        </div>
      </motion.div>
    </main>
  );
}