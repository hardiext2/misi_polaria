// src/app/layout.tsx
'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { useProgress } from '@/hooks/useProgress';
import { useBgm } from '@/lib/useBgm';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { progress, toggleSound, isHydrated } = useProgress();
  const pathname = usePathname();

  // Cek apakah pengguna sedang berada di halaman bermain (/play)
  const isPlayingPage = pathname?.startsWith('/play');

  // BGM global hanya menyala di luar halaman play (misal di Beranda atau Peta).
  // Di halaman play, BGM akan diatur khusus berdasarkan wilayah oleh PlayPage.
  useBgm(isHydrated && progress.soundEnabled && !isPlayingPage);

  return (
    <html lang="id">
      <head>
        <title>Misi Polaria: Petualangan Dunia Pola</title>
      </head>
      <body>
        {children}

        {/* Floating Sound Toggle Button (Muncul di semua halaman) */}
        {isHydrated && (
          <div className="fixed bottom-4 right-4 z-50">
            <button
              onClick={toggleSound}
              className="bg-white hover:bg-slate-100 text-[#18181b] font-black px-4 py-2.5 rounded-2xl border-3 border-[#18181b] shadow-[4px_4px_0px_#18181b] flex items-center gap-2 text-xs sm:text-sm transition-transform active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_#18181b]"
              title={progress.soundEnabled ? 'Matikan Suara & Musik' : 'Nyalakan Suara & Musik'}
            >
              <span>{progress.soundEnabled ? '🔊 BGM: ON' : '🔇 BGM: OFF'}</span>
            </button>
          </div>
        )}
      </body>
    </html>
  );
}