// src/hooks/useProgress.ts
'use client';

import { useState, useEffect, useCallback } from 'react';
import { UserProgress } from '@/types/progress';
import { loadProgress, saveProgress, getDefaultProgress } from '@/lib/progress-storage';

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(getDefaultProgress());
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const loaded = loadProgress();
    setProgress(loaded);
    setIsHydrated(true);
  }, []);

  const updateLevelProgress = useCallback((
    levelId: string,
    isPassed: boolean,
    score: number,
    stars: number,
    accuracyPercent: number
  ) => {
    setProgress((prev) => {
      // PERBAIKAN BUG: Jika data level belum ada di store, buatkan default-nya dulu!
      const currentLevelData = prev.levels[levelId] || {
        isUnlocked: true,
        isCompleted: false,
        highScore: 0,
        stars: 0,
        accuracyPercent: 0,
        attempts: 0
      };

      // Cek peningkatan nilai & bintang
      const newHighScore = Math.max(score, currentLevelData.highScore);
      const newStars = Math.max(stars, currentLevelData.stars);
      const newAccuracy = Math.max(accuracyPercent, currentLevelData.accuracyPercent);

      // Cari nomor level berikutnya
      const levelNumMatch = levelId.match(/level-(\d+)/);
      const currentLevelNum = levelNumMatch ? parseInt(levelNumMatch[1], 10) : 1;
      const nextLevelId = `level-${currentLevelNum + 1}`;

      const updatedLevels = {
        ...prev.levels,
        [levelId]: {
          ...currentLevelData,
          isUnlocked: true,
          isCompleted: currentLevelData.isCompleted || isPassed,
          highScore: newHighScore,
          stars: newStars,
          accuracyPercent: newAccuracy,
          attempts: (currentLevelData.attempts || 0) + 1,
        },
      };

      // Buka level berikutnya jika lulus
      if (isPassed) {
        const nextLevelData = updatedLevels[nextLevelId] || {
          isUnlocked: false,
          isCompleted: false,
          highScore: 0,
          stars: 0,
          accuracyPercent: 0,
          attempts: 0
        };

        updatedLevels[nextLevelId] = {
          ...nextLevelData,
          isUnlocked: true,
        };
      }

      // Hitung ulang akumulasi total bintang & skor
      let totalStars = 0;
      let totalScore = 0;
      Object.values(updatedLevels).forEach((lvl) => {
        totalStars += lvl.stars || 0;
        totalScore += lvl.highScore || 0;
      });

      const nextProgress: UserProgress = {
        ...prev,
        totalStars,
        totalScore,
        levels: updatedLevels,
      };

      saveProgress(nextProgress);
      return nextProgress;
    });
  }, []);

  const toggleSound = useCallback(() => {
    setProgress((prev) => {
      const nextSound = !prev.soundEnabled;
      const nextProgress = { ...prev, soundEnabled: nextSound };
      saveProgress(nextProgress);
      return nextProgress;
    });
  }, []);

  return {
    progress,
    isHydrated,
    updateLevelProgress,
    toggleSound,
  };
}