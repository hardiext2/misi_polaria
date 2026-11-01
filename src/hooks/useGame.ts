
'use client';

import { useState, useCallback } from 'react';
import { Question } from '@/types/game';

export interface GameState {
  currentIndex: number;
  currentQuestion: Question;
  selectedAnswer: string | null;
  isSubmitted: boolean;
  isCorrect: boolean | null;
  showHintModal: boolean;
  showFeedbackModal: boolean;
  score: number;
  correctAnswersCount: number;
  totalAttempts: number;
  isCompleted: boolean;
}

export function useGame(questions: Question[]) {
  const [state, setState] = useState<GameState>({
    currentIndex: 0,
    currentQuestion: questions[0],
    selectedAnswer: null,
    isSubmitted: false,
    isCorrect: null,
    showHintModal: false,
    showFeedbackModal: false,
    score: 0,
    correctAnswersCount: 0,
    totalAttempts: 0,
    isCompleted: false,
  });

  const selectAnswer = useCallback((answer: string) => {
    if (state.isSubmitted) return;
    setState((prev) => ({ ...prev, selectedAnswer: answer }));
  }, [state.isSubmitted]);

  const submitAnswer = useCallback(() => {
    if (!state.selectedAnswer || state.isSubmitted) return;

    const isCorrect = state.selectedAnswer.trim().toLowerCase() === state.currentQuestion.correctAnswer.trim().toLowerCase();
    
    setState((prev) => ({
      ...prev,
      isSubmitted: true,
      isCorrect,
      totalAttempts: prev.totalAttempts + 1,
      correctAnswersCount: isCorrect ? prev.correctAnswersCount + 1 : prev.correctAnswersCount,
      score: isCorrect ? prev.score + prev.currentQuestion.points : prev.score,
      showFeedbackModal: true,
    }));
  }, [state.selectedAnswer, state.isSubmitted, state.currentQuestion]);

  const nextQuestion = useCallback(() => {
    setState((prev) => {
      const nextIdx = prev.currentIndex + 1;
      if (nextIdx >= questions.length) {
        return {
          ...prev,
          showFeedbackModal: false,
          isCompleted: true,
        };
      }
      return {
        ...prev,
        currentIndex: nextIdx,
        currentQuestion: questions[nextIdx],
        selectedAnswer: null,
        isSubmitted: false,
        isCorrect: null,
        showFeedbackModal: false,
      };
    });
  }, [questions]);

  const toggleHintModal = useCallback((show?: boolean) => {
    setState((prev) => ({
      ...prev,
      showHintModal: show !== undefined ? show : !prev.showHintModal,
    }));
  }, []);

  return {
    state,
    selectAnswer,
    submitAnswer,
    nextQuestion,
    toggleHintModal,
  };
}