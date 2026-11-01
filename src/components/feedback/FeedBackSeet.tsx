'use client'
import React, { useEffect } from 'react';
import { speakText } from '@/lib/useSpeech';
import { useProgress } from '@/hooks/useProgress';

// Di dalam komponen FeedbackSheet:
export function FeedbackSheet({ isOpen, isCorrect, question, onNext }: { isOpen: boolean; isCorrect: boolean; question: any; onNext: () => void }) {
  const { progress } = useProgress();

  // Teks penjelasan yang akan dibacakan
  const explanationText = isCorrect 
    ? `Hebat sekali! Jawaban kamu benar. ${question.explanation || question.hint}`
    : `Belum tepat. Mari kita pelajari langkahnya: ${question.explanation || question.hint}`;

useEffect(() => {
  if (isOpen && progress.soundEnabled) {
    speakText(question.explanation || question.hint, isCorrect, true);
  }
  return () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  };
}, [isOpen, question, isCorrect, progress.soundEnabled]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-xs p-4">
      <div className={`bg-white border-4 border-[#18181b] shadow-[8px_8px_0px_#18181b] rounded-3xl p-6 max-w-md w-full animate-in fade-in zoom-in-95 duration-200 ${isCorrect ? 'bg-[#d1fae5]' : 'bg-[#fee2e2]'}`}>
        
        {/* Header Status */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{isCorrect ? '🎉' : '💡'}</span>
            <h3 className="text-base sm:text-lg font-black text-[#18181b]">
              {isCorrect ? 'Benar Sekali!' : 'Mari Perhatikan Langkahnya!'}
            </h3>
          </div>
          
          {/* Tombol Putar Ulang Suara */}
          <button
            onClick={() => speakText(explanationText, true)}
            className="bg-white hover:bg-slate-100 p-2 rounded-xl border-2 border-[#18181b] shadow-[2px_2px_0px_#18181b] text-xs font-black flex items-center gap-1 active:translate-x-0.5 active:translate-y-0.5"
            title="Dengarkan Suara"
          >
            🔊 Putar Suara
          </button>
        </div>

        {/* Kotak Pembahasan Langkah-Langkah */}
        <div className="bg-white border-2 border-[#18181b] rounded-2xl p-4 mb-6 shadow-[3px_3px_0px_#18181b]">
          <h4 className="font-black text-xs sm:text-sm text-[#713f12] mb-1">📝 Pembahasan Langkah-Langkah:</h4>
          <p className="text-xs sm:text-sm text-[#18181b] font-medium leading-relaxed">
            {question.explanation || question.hint}
          </p>
        </div>

        {/* Tombol Lanjut */}
        <button
          onClick={() => {
            if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
              window.speechSynthesis.cancel();
            }
            onNext();
          }}
          className="w-full bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#18181b] font-black py-3.5 rounded-2xl border-3 border-[#18181b] shadow-[4px_4px_0px_#18181b] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#18181b] transition-all text-sm sm:text-base"
        >
          Lanjut ke Soal Berikutnya →
        </button>
      </div>
    </div>
  );
}