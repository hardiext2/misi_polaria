// src/app/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useProgress } from '@/hooks/useProgress';
import { useAudio } from '@/lib/useAudio';

export default function HomePage() {
  const { progress, isHydrated } = useProgress();
  const audio = useAudio(progress.soundEnabled);

  if (!isHydrated) return null;

  return (
    <main className="min-h-screen bg-[#e2e8f0] flex items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#94a3b8_2px,transparent_2px)] [background-size:24px_24px]" />

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="bg-white border-4 border-[#18181b] shadow-[6px_6px_0px_#18181b] rounded-3xl max-w-md w-full p-6 sm:p-8 text-center relative z-10 mx-auto"
      >
        {/* Mascot / Logo Box */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#fbbf24] border-3 border-[#18181b] shadow-[3px_3px_0px_#18181b] rounded-2xl mx-auto flex items-center justify-center text-4xl sm:text-5xl mb-4">
          🦊
        </div>

        {/* Badge */}
        <div className="inline-block bg-[#38bdf8] text-[#18181b] text-xs font-black px-3 py-1 rounded-lg border-2 border-[#18181b] uppercase tracking-wider mb-3">
          Matematika Kelas 4 SD
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-[#18181b] tracking-tight mb-2">
          Misi Polaria
        </h1>
        
        <p className="text-[#52525b] text-xs sm:text-sm font-medium mb-6 leading-relaxed">
          Petualangan seru menjelajahi pola gambar, teka-teki bilangan, hingga pengukuran luas petak satuan dan volume ruang! Selesaikan semua tantangannya.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-[#fef08a] border-2 border-[#18181b] rounded-2xl p-3 shadow-[2px_2px_0px_#18181b] text-center">
            <span className="block text-xl sm:text-2xl font-black text-[#18181b]">⭐ {progress.totalStars}</span>
            <span className="text-[10px] sm:text-xs font-bold text-[#713f12]">Total Bintang</span>
          </div>
          <div className="bg-[#a7f3d0] border-2 border-[#18181b] rounded-2xl p-3 shadow-[2px_2px_0px_#18181b] text-center">
            <span className="block text-xl sm:text-2xl font-black text-[#18181b]">🏆 {progress.totalScore}</span>
            <span className="text-[10px] sm:text-xs font-bold text-[#064e3b]">Skor Total</span>
          </div>
        </div>

        {/* Action Button */}
        <Link
          href="/map"
          onClick={audio.playClick}
          className="w-full bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#18181b] font-black py-3.5 sm:py-4 px-6 rounded-2xl border-3 border-[#18181b] shadow-[4px_4px_0px_#18181b] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#18181b] transition-all block text-center text-base sm:text-lg cursor-pointer"
        >
          🚀 Mulai Petualangan
        </Link>
      </motion.div>
    </main>
  );
}