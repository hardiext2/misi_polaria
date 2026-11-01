
import { Question } from '@/types/game';

export function validateQuestion(q: Question): boolean {
  if (!q.id || !q.levelId || !q.prompt) return false;
  if (!q.options || q.options.length === 0) return false;
  if (!q.correctAnswer || !q.options.includes(q.correctAnswer)) return false;
  if (!q.explanationSteps || q.explanationSteps.length === 0) return false;
  return true;
}

export function validateQuestionBank(questions: Question[]): boolean {
  return questions.every(validateQuestion);
}