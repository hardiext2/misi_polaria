// src/app/play/[levelId]/page.tsx
'use client';

import React, { use, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useGame } from '@/hooks/useGame';
import { useProgress } from '@/hooks/useProgress';
import { useAudio } from '@/lib/useAudio';
import { useBgm } from '@/lib/useBgm';
import { ALL_LEVEL_QUESTIONS } from '@/data/questions/all-level';
import { LEVELS_META } from '@/data/level';
import { SvgObjectRenderer } from '@/components/game/svgObjectRenderer';
import { FeedbackSheet } from '@/components/feedback/FeedBackSeet';
import { calculateLevelResult } from '@/lib/scoring';

interface Props {
  params: Promise<{ levelId: string }>;
}

export default function PlayPage({ params }: Props) {
  const { levelId } = use(params);
  const router = useRouter();
  const { progress, isHydrated, updateLevelProgress } = useProgress();
  const audio = useAudio(progress.soundEnabled);

  const levelMeta = LEVELS_META.find(l => l.id === levelId) || LEVELS_META[0];

  useBgm(isHydrated && progress.soundEnabled, levelMeta.regionId as 'forest' | 'valley' | 'palace');

  const hasSavedRef = useRef(false);

  const questions = ALL_LEVEL_QUESTIONS.filter(q => q.levelId === levelId);
  const activeQuestions = questions.length > 0 ? questions : [ALL_LEVEL_QUESTIONS[0]];

  const { state, selectAnswer, submitAnswer, nextQuestion, toggleHintModal } = useGame(activeQuestions);

  useEffect(() => {
    if (state.isCompleted && !hasSavedRef.current) {
      hasSavedRef.current = true;
      const result = calculateLevelResult(state.correctAnswersCount, activeQuestions.length, state.score);
      updateLevelProgress(levelId, result.isPassed, result.score, result.stars, result.accuracyPercent);
      audio.playVictory();
      router.push(`/result/${levelId}?score=${state.score}&stars=${result.stars}&correct=${state.correctAnswersCount}&total=${activeQuestions.length}`);
    }
  }, [state.isCompleted, state.correctAnswersCount, state.score, activeQuestions.length, levelId, updateLevelProgress, audio, router]);

  if (state.isCompleted) {
    return (
      <div className="min-h-screen bg-[#f4f4f0] flex items-center justify-center p-4">
        <div className="bg-white border-4 border-[#18181b] shadow-[6px_6px_0px_#18181b] rounded-3xl p-6 sm:p-8 text-center max-w-sm w-full">
          <p className="font-black text-base sm:text-lg text-[#18181b]">🎉 Menyimpan Progres & Menuju Hasil...</p>
        </div>
      </div>
    );
  }

  const q = state.currentQuestion;

  return (
    <div className="min-h-screen bg-[#f4f4f0] flex flex-col">
      {/* Top Bar */}
      <header className="bg-white border-b-4 border-[#18181b] px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between sticky top-0 z-10 shadow-[0_4px_0px_#18181b]">
        <Link href="/map" onClick={audio.playClick} className="text-[#18181b] font-black text-xs sm:text-sm hover:underline">
          ← Keluar
        </Link>
        <div className="text-center px-2 truncate">
          <span className="text-[10px] sm:text-xs font-black text-[#0d9488] block uppercase tracking-wider">
            {levelMeta.icon || '⭐'} {levelMeta.region}
          </span>
          <h1 className="font-black text-[#18181b] text-xs sm:text-base truncate">{levelMeta.title}</h1>
        </div>
        <button
          onClick={() => { audio.playClick(); toggleHintModal(true); }}
          className="bg-[#fef08a] text-[#18181b] px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-black border-2 border-[#18181b] shadow-[2px_2px_0px_#18181b] active:translate-x-0.5 active:translate-y-0.5 flex-shrink-0 cursor-pointer"
        >
          💡 Petunjuk
        </button>
      </header>

      {/* Progress Bar */}
      <div className="w-full bg-slate-300 h-2.5 sm:h-3 border-b-3 border-[#18181b]">
        <div 
          className="bg-[#38bdf8] h-full transition-all duration-300 border-r-2 border-[#18181b]"
          style={{ width: `${((state.currentIndex + 1) / activeQuestions.length) * 100}%` }}
        />
      </div>

      {/* Main Question Area */}
      <main className="max-w-xl w-full mx-auto p-4 sm:p-6 flex-1 flex flex-col justify-center">
        <div className="bg-white border-4 border-[#18181b] shadow-[6px_6px_0px_#18181b] rounded-3xl p-5 sm:p-8 relative">
          <div className="flex justify-between items-center mb-4">
            <span className="text-[11px] sm:text-xs font-black bg-[#e0f2fe] text-[#0369a1] px-2.5 py-1 rounded-lg border-2 border-[#18181b]">
              Soal {state.currentIndex + 1} dari {activeQuestions.length}
            </span>
            <span className="text-[11px] sm:text-xs font-black text-[#18181b] bg-[#fef08a] px-2.5 py-1 rounded-lg border-2 border-[#18181b]">
              Skor: {state.score}
            </span>
          </div>

          <h2 className="text-base sm:text-xl font-black text-[#18181b] mb-2">
            {q.title}
          </h2>
          <p className="text-[#52525b] text-xs sm:text-sm font-medium mb-4 leading-relaxed">
            {q.prompt}
          </p>

          {/* Render Visual Grid Bangun Datar Menyatu / SVG */}
          {q.imageSteps && <SvgObjectRenderer steps={q.imageSteps} mode={q.mode} />}

          {/* Render Urutan Angka jika mode bilangan */}
          {q.numberSequence && (
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-4 sm:py-6 bg-[#f4f4f0] rounded-2xl border-2 border-[#18181b] mb-4">
              {q.numberSequence.map((num, i) => (
                <div
                  key={i}
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl font-black text-base sm:text-lg flex items-center justify-center border-2 border-[#18181b] shadow-[2px_2px_0px_#18181b] ${
                    num === null ? 'bg-[#fef08a] text-[#854d0e] text-lg sm:text-xl animate-pulse' : 'bg-white text-[#18181b]'
                  }`}
                >
                  {num !== null ? num : '?'}
                </div>
              ))}
            </div>
          )}

          {/* Answer Options Grid */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mt-6">
            {q.options.map((opt) => {
              const isSelected = state.selectedAnswer === opt;
              return (
                <button
                  key={opt}
                  onClick={() => { audio.playClick(); selectAnswer(opt); }}
                  disabled={state.isSubmitted}
                  className={`py-3.5 sm:py-4 px-4 sm:px-6 rounded-2xl font-black text-sm sm:text-base transition-all border-3 border-[#18181b] shadow-[3px_3px_0px_#18181b] cursor-pointer ${
                    isSelected
                      ? 'bg-[#38bdf8] text-[#18181b] translate-x-1 translate-y-1 shadow-none'
                      : 'bg-[#fafafa] text-[#18181b] hover:bg-[#f4f4f5]'
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {/* Submit Button */}
          <button
            onClick={() => {
              if (!state.selectedAnswer) return;
              const isCorrect = state.selectedAnswer.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase();
              submitAnswer();
              if (isCorrect) {
                audio.playCorrect();
              } else {
                audio.playIncorrect();
              }
            }}
            disabled={!state.selectedAnswer || state.isSubmitted}
            className={`w-full mt-6 py-3.5 sm:py-4 rounded-2xl font-black text-[#18181b] border-3 border-[#18181b] transition-all text-sm sm:text-base cursor-pointer ${
              !state.selectedAnswer || state.isSubmitted
                ? 'bg-[#e4e4e7] text-[#a1a1aa] cursor-not-allowed shadow-none'
                : 'bg-[#34d399] hover:bg-[#10b981] shadow-[4px_4px_0px_#18181b] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#18181b]'
            }`}
          >
            Periksa Jawaban
          </button>
        </div>
      </main>

      {/* Hint Modal */}
      {state.showHintModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
          <div className="bg-white border-4 border-[#18181b] shadow-[8px_8px_0px_#18181b] rounded-3xl p-6 max-w-md w-full">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">💡</span>
              <h3 className="text-base sm:text-lg font-black text-[#18181b]">Petunjuk Pengerjaan</h3>
            </div>
            <p className="text-[#52525b] font-medium text-xs sm:text-sm mb-6">{q.hint}</p>
            <button
              onClick={() => toggleHintModal(false)}
              className="w-full bg-[#fef08a] hover:bg-[#fde047] text-[#18181b] font-black py-3 rounded-2xl border-3 border-[#18181b] shadow-[3px_3px_0px_#18181b] cursor-pointer"
            >
              Mengerti, Kembali Menjawab
            </button>
          </div>
        </div>
      )}

      {/* Feedback Modal */}
      <FeedbackSheet
        isOpen={state.showFeedbackModal}
        isCorrect={state.isCorrect ?? false}
        question={q}
        onNext={nextQuestion}
      />
    </div>
  );
}