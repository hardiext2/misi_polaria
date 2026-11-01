
export interface ScoreResult {
  score: number;
  maxScore: number;
  accuracyPercent: number;
  stars: number;
  isPassed: boolean;
}

export function calculateLevelResult(
  correctCount: number,
  totalQuestions: number,
  earnedScore: number
): ScoreResult {
  const safeTotal = totalQuestions > 0 ? totalQuestions : 1;
  const accuracyPercent = Math.round((correctCount / safeTotal) * 100);
  

  let stars = 1;
  if (accuracyPercent >= 90) {
    stars = 3;
  } else if (accuracyPercent >= 70) {
    stars = 2;
  }

  const isPassed = correctCount > 0;

  return {
    score: earnedScore,
    maxScore: totalQuestions * 10,
    accuracyPercent,
    stars: isPassed ? stars : 0,
    isPassed,
  };
}