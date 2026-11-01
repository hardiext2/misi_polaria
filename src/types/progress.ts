export interface LevelProgress {
  levelId: string;
  isUnlocked: boolean;
  isCompleted: boolean;
  highScore: number;
  stars: number; 
  accuracyPercent: number;
  attempts: number;
}

export interface UserProgress {
  version: number;
  totalStars: number;
  totalScore: number;
  soundEnabled: boolean;
  currentUnlockedLevelId: string;
  levels: Record<string, LevelProgress>;
}