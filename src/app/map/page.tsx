// src/app/map/page.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { GAME_CHAPTERS } from '@/data/level';
import { useProgress } from '@/hooks/useProgress';
import { useAudio } from '@/lib/useAudio';

export default function MapPage() {
  const router = useRouter();
  const { progress, isHydrated } = useProgress();
  const audio = useAudio(progress.soundEnabled);

  const [showReportModal, setShowReportModal] = useState(false);

  if (!isHydrated) return null;

  // PERBAIKAN: Hitung nilai bab berdasarkan persentase Bintang yang diperoleh (Maksimal 3 bintang per level)
  const getChapterStats = (chapterLevels: typeof GAME_CHAPTERS[0]['levels']) => {
    let earnedStars = 0;
    let maxStars = chapterLevels.length * 3;
    let completedCount = 0;

    chapterLevels.forEach(lvl => {
      const lvlData = progress.levels[lvl.id];
      if (lvlData) {
        if (lvlData.isCompleted) completedCount++;
        earnedStars += lvlData.stars || 0;
      }
    });

    // Konversi nilai 0-100 berdasarkan proporsi bintang (Bintang 3 di semua level = Nilai 100)
    const finalScore = maxStars > 0 ? Math.round((earnedStars / maxStars) * 100) : 0;

    return {
      completedCount,
      totalLevels: chapterLevels.length,
      earnedStars,
      maxStars,
      finalScore
    };
  };

  return (
    <main className="min-h-screen bg-[#f4f4f0] text-[#18181b] pb-24 relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#18181b_1.5px,transparent_1.5px)] [background-size:20px_20px]" />

      {/* Header */}
      <header className="bg-white border-b-4 border-[#18181b] px-4 sm:px-6 py-4 sticky top-0 z-20 shadow-[0_4px_0px_#18181b] flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="bg-[#38bdf8] text-[#18181b] font-black text-[11px] sm:text-xs px-2.5 py-1 rounded-xl border-2 border-[#18181b] shadow-[2px_2px_0px_#18181b]">
            🗺️ PETA
          </span>
          <h1 className="font-black text-sm sm:text-lg tracking-tight">Misi Polaria</h1>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              audio.playClick();
              setShowReportModal(true);
            }}
            className="bg-[#fef08a] hover:bg-[#fde047] text-[#18181b] font-black px-3 py-1.5 rounded-xl border-2 border-[#18181b] shadow-[2px_2px_0px_#18181b] text-xs flex items-center gap-1.5 active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
          >
            <span>⭐ {progress.totalStars} Bintang</span>
            <span className="bg-white px-2 py-0.5 rounded-lg border border-[#18181b] text-[10px] text-[#0d9488]">
            Rekap Nilai
            </span>
          </button>

          <Link
            href="/"
            onClick={audio.playClick}
            className="bg-white hover:bg-slate-100 text-[#18181b] font-black px-3 py-1.5 rounded-xl border-2 border-[#18181b] shadow-[2px_2px_0px_#18181b] text-xs active:translate-x-0.5 active:translate-y-0.5 transition-all"
          >
            🏠 Beranda
          </Link>
        </div>
      </header>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 relative z-10 space-y-12">
        {GAME_CHAPTERS.map((chapter, chapIdx) => (
          <div key={chapter.chapterId} className="space-y-4">
            
            <div className="bg-[#18181b] text-white px-6 py-4 rounded-2xl border-3 border-[#18181b] shadow-[4px_4px_0px_#38bdf8] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-[10px] font-black bg-[#38bdf8] text-[#18181b] px-2 py-0.5 rounded-md uppercase tracking-wider">
                  Bab {chapIdx + 1}
                </span>
                <h2 className="font-black text-base sm:text-lg text-[#fef08a] mt-1">{chapter.chapterTitle}</h2>
                <p className="text-xs text-slate-300 font-medium">{chapter.chapterSubtitle}</p>
              </div>
              <div className="text-right hidden sm:block">
                <span className="text-xs font-bold text-slate-400">{chapter.levels.length} Level Tantangan</span>
              </div>
            </div>

            {/* Levels Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {chapter.levels.map((lvl, lvlIdx) => {
                const levelData = progress.levels[lvl.id];

                // PERBAIKAN LOGIKA UNLOCK: 
                // Level terbuka jika:
                // 1. Level pertama di Bab 1 (lvlIdx === 0 && chapIdx === 0)
                // 2. Atau level pertama di Bab berikutnya DAN level terakhir di bab sebelumnya sudah tuntas (`isCompleted`)
                // 3. Atau sudah tercatat di progress (`isUnlocked` / `isCompleted`)
                let isUnlocked = false;
                if (chapIdx === 0 && lvlIdx === 0) {
                  isUnlocked = true;
                } else if (lvlIdx === 0 && chapIdx > 0) {
                  // Cek apakah level terakhir di bab sebelumnya sudah selesai
                  const prevChapterLastLevel = GAME_CHAPTERS[chapIdx - 1].levels.slice(-1)[0];
                  const prevCompleted = progress.levels[prevChapterLastLevel.id]?.isCompleted;
                  isUnlocked = Boolean(prevCompleted || levelData?.isUnlocked || levelData?.isCompleted);
                } else {
                  // Level berikutnya di bab yang sama, cek apakah level sebelumnya sudah selesai
                  const prevLevelId = chapter.levels[lvlIdx - 1].id;
                  const prevCompleted = progress.levels[prevLevelId]?.isCompleted;
                  isUnlocked = Boolean(prevCompleted || levelData?.isUnlocked || levelData?.isCompleted);
                }

                const stars = levelData?.stars || 0;
                const isCompleted = levelData?.isCompleted || false;

                return (
                  <div
                    key={lvl.id}
                    onClick={() => {
                      if (isUnlocked) {
                        audio.playClick();
                        router.push(`/play/${lvl.id}`);
                      } else {
                        audio.playIncorrect();
                      }
                    }}
                    className={`border-3 border-[#18181b] rounded-2xl p-4 transition-all relative flex flex-col justify-between group ${
                      isUnlocked
                        ? 'bg-white shadow-[4px_4px_0px_#18181b] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#18181b] cursor-pointer'
                        : 'bg-[#e4e4e7] opacity-60 shadow-none cursor-not-allowed'
                    }`}
                  >
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className={`text-[10px] font-black px-2 py-0.5 rounded-lg border-2 border-[#18181b] ${
                          lvl.regionId === 'forest' ? 'bg-[#a7f3d0] text-[#064e3b]' :
                          lvl.regionId === 'valley' ? 'bg-[#bae6fd] text-[#0369a1]' : 'bg-[#fef08a] text-[#713f12]'
                        }`}>
                          {lvl.icon || '⭐'} {lvl.region}
                        </span>
                        <span className="font-black text-xs bg-[#f4f4f0] px-2 py-0.5 rounded-lg border-2 border-[#18181b]">
                          Lvl {lvl.levelNumber}
                        </span>
                      </div>

                      <h3 className="font-black text-sm sm:text-base mb-1 group-hover:text-[#0d9488] transition-colors">
                        {lvl.title}
                      </h3>
                      <p className="text-[11px] text-[#52525b] font-medium line-clamp-2 mb-4">
                        {lvl.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t-2 border-slate-100">
                      <div className="flex gap-0.5">
                        {Array.from({ length: 3 }).map((_, i) => (
                          <span key={i} className={`text-sm ${i < stars ? 'text-[#f59e0b]' : 'text-slate-300'}`}>
                            ★
                          </span>
                        ))}
                      </div>

                      <span className={`text-[11px] font-black px-2.5 py-1 rounded-xl border-2 border-[#18181b] ${
                        isCompleted ? 'bg-[#34d399] text-[#18181b]' : isUnlocked ? 'bg-[#38bdf8] text-[#18181b]' : 'bg-slate-300 text-slate-600'
                      }`}>
                        {isCompleted ? '✓ Selesai' : isUnlocked ? '🚀 Main' : '🔒 Terkunci'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* MODAL POP-UP REKAP NILAI SISWA */}
      {showReportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="bg-white border-4 border-[#18181b] shadow-[8px_8px_0px_#18181b] rounded-3xl p-6 max-w-lg w-full space-y-6 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between border-b-2 border-slate-200 pb-4">
              <div>
                <span className="text-xs font-black bg-[#38bdf8] px-2.5 py-1 rounded-lg border-2 border-[#18181b]">
                  LAPORAN HASIL BELAJAR
                </span>
                <h3 className="text-lg font-black mt-1 text-[#18181b]">Rekap Nilai Siswa (Kurikulum Merdeka)</h3>
              </div>
              <button
                onClick={() => setShowReportModal(false)}
                className="bg-[#fee2e2] hover:bg-[#fca5a5] text-[#991b1b] font-black w-9 h-9 rounded-xl border-2 border-[#18181b] shadow-[2px_2px_0px_#18181b] flex items-center justify-center cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="bg-[#fef08a] border-3 border-[#18181b] rounded-2xl p-4 shadow-[3px_3px_0px_#18181b] flex items-center justify-between">
              <div>
                <p className="text-xs font-black text-[#713f12]">TOTAL BINTANG DIPEROLEH</p>
                <p className="text-xl font-black text-[#18181b]">⭐ {progress.totalStars} Bintang</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-black text-[#713f12]">TOTAL SKOR AKUMULASI</p>
                <p className="text-xl font-black text-[#18181b]">🏆 {progress.totalScore} Poin</p>
              </div>
            </div>

            <div className="space-y-4">
              {GAME_CHAPTERS.map((chap, idx) => {
                const stats = getChapterStats(chap.levels);
                return (
                  <div key={chap.chapterId} className="border-3 border-[#18181b] rounded-2xl p-4 bg-slate-50 shadow-[3px_3px_0px_#18181b]">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-black text-sm text-[#18181b]">{chap.chapterTitle}</h4>
                        <p className="text-[11px] text-slate-500 font-medium">
                          Selesai: {stats.completedCount} dari {stats.totalLevels} Level
                        </p>
                      </div>
                      
                      <div className="bg-[#34d399] border-2 border-[#18181b] px-3 py-1 rounded-xl text-center shadow-[2px_2px_0px_#18181b]">
                        <span className="text-[10px] font-black block uppercase text-emerald-900">Nilai Bab</span>
                        <span className="text-base font-black text-[#18181b]">{stats.finalScore} <span className="text-xs">/100</span></span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-200 text-xs font-bold">
                      <span className="text-slate-600">Bintang Bab: {stats.earnedStars} / {stats.maxStars} ★</span>
                      <span className="text-[#0d9488]">
                        {stats.completedCount === stats.totalLevels ? '✨ Tuntas Sempurna' : '🔄 Dalam Proses'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

           

            <button
              onClick={() => setShowReportModal(false)}
              className="w-full bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#18181b] font-black py-3 rounded-2xl border-3 border-[#18181b] shadow-[3px_3px_0px_#18181b] active:translate-x-0.5 active:translate-y-0.5 transition-all"
            >
              Tutup Laporan
            </button>

          </div>
        </div>
      )}
    </main>
  );
}