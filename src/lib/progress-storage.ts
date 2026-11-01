
import { UserProgress, LevelProgress } from '@/types/progress';

const STORAGE_KEY = 'misi_polaria_progress_v1';
const CURRENT_VERSION = 1;

export function getDefaultProgress(): UserProgress {
  const initialLevels: Record<string, LevelProgress> = {};
  
  for (let i = 1; i <= 12; i++) {
    const id = `level-${i}`;
    initialLevels[id] = {
      levelId: id,
      isUnlocked: i === 1, 
      isCompleted: false,
      highScore: 0,
      stars: 0,
      accuracyPercent: 0,
      attempts: 0,
    };
  }

  return {
    version: CURRENT_VERSION,
    totalStars: 0,
    totalScore: 0,
    soundEnabled: true,
    currentUnlockedLevelId: 'level-1',
    levels: initialLevels,
  };
}

export function loadProgress(): UserProgress {
  if (typeof window === 'undefined') return getDefaultProgress();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultProgress();
    const data = JSON.parse(raw) as UserProgress;
    if (data.version !== CURRENT_VERSION) {
      return getDefaultProgress(); 
    }
    return data;
  } catch {
    return getDefaultProgress();
  }
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    
  }
}