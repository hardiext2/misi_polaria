// src/lib/useBgm.ts
'use client';

import { useEffect, useRef } from 'react';

export function useBgm(enabled: boolean, regionId?: 'forest' | 'valley' | 'palace') {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Fungsi pembersih untuk menghentikan audio & interval sebelumnya
    const stopBgm = () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      if (audioCtxRef.current) {
        if (audioCtxRef.current.state !== 'closed') {
          audioCtxRef.current.close().catch(() => {});
        }
        audioCtxRef.current = null;
      }
    };

    if (!enabled) {
      stopBgm();
      return;
    }

    // Pastikan membersihkan audio lama sebelum membuat yang baru
    stopBgm();

    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
      const ctx = audioCtxRef.current;

      let melody: number[] = [];
      let tempo = 220;
      let waveType: OscillatorType = 'square';

      if (regionId === 'valley') {
        melody = [220, 246.94, 293.66, 329.63, 369.99, 440.00, 369.99, 329.63];
        tempo = 200;
        waveType = 'triangle';
      } else if (regionId === 'palace') {
        melody = [329.63, 392.00, 440.00, 523.25, 659.25, 523.25, 440.00, 392.00, 587.33];
        tempo = 180;
        waveType = 'square';
      } else {
        melody = [261.63, 329.63, 392.00, 523.25, 293.66, 369.99, 440.00, 587.33];
        tempo = 240;
        waveType = 'sine';
      }

      let step = 0;

      const playStep = () => {
        if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') return;
        
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = waveType; 
        osc.frequency.setValueAtTime(melody[step], ctx.currentTime);

        gain.gain.setValueAtTime(0.03, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.25);

        step = (step + 1) % melody.length;
      };

      timerRef.current = setInterval(playStep, tempo);

    } catch {
      // Menangani pembatasan autoplay browser
    }

    return () => {
      stopBgm();
    };
  }, [enabled, regionId]);
}