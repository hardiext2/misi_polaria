// src/data/questions/pattern-image.ts
import { Question } from '@/types/game';

export const PATTERN_IMAGE_QUESTIONS: Question[] = [
  {
    id: 'l1-q1',
    levelId: 'level-1',
    mode: 'IMAGE_PATTERN',
    questionType: 'MULTIPLE_CHOICE',
    title: 'Berapa Bintang Selanjutnya?',
    prompt: 'Perhatikan jumlah bintang yang bertambah di setiap tahap. Berapa jumlah bintang pada Tahap 4?',
    imageSteps: [
      { stepIndex: 1, count: 2, config: { shape: 'star', color: '#fbbf24' } },
      { stepIndex: 2, count: 4, config: { shape: 'star', color: '#fbbf24' } },
      { stepIndex: 3, count: 6, config: { shape: 'star', color: '#fbbf24' } },
      { stepIndex: 4, count: 0, config: { shape: 'star', color: '#94a3b8' } }, // 0 berarti kotak kosong / tanda tanya
    ],
    options: ['6', '7', '8', '10'],
    correctAnswer: '8',
    hint: 'Amati penambahan jumlah bintang dari Tahap 1 ke Tahap 2, lalu ke Tahap 3.',
    explanationSteps: [
      'Tahap 1 memiliki 2 bintang.',
      'Tahap 2 memiliki 4 bintang (bertambah 2).',
      'Tahap 3 memiliki 6 bintang (bertambah 2 lagi).',
      'Maka, Tahap 4 adalah 6 + 2 = 8 bintang.'
    ],
    points: 10,
  },
  {
    id: 'l2-q1',
    levelId: 'level-2',
    mode: 'IMAGE_PATTERN',
    questionType: 'MULTIPLE_CHOICE',
    title: 'Kristal yang Menyusut',
    prompt: 'Kristal ajaib mencair seiring waktu. Berapa jumlah kristal pada Tahap 4?',
    imageSteps: [
      { stepIndex: 1, count: 10, config: { shape: 'gem', color: '#38bdf8' } },
      { stepIndex: 2, count: 8, config: { shape: 'gem', color: '#38bdf8' } },
      { stepIndex: 3, count: 6, config: { shape: 'gem', color: '#38bdf8' } },
      { stepIndex: 4, count: 0, config: { shape: 'gem', color: '#94a3b8' } }, // Kosong untuk ditebak
    ],
    options: ['2', '4', '5', '6'],
    correctAnswer: '4',
    hint: 'Perhatikan pengurangan jumlah kristal di setiap tahap berturut-turut.',
    explanationSteps: [
      'Tahap 1 ada 10 kristal.',
      'Tahap 2 ada 8 kristal (berkurang 2).',
      'Tahap 3 ada 6 kristal (berkurang 2 lagi).',
      'Maka, Tahap 4 adalah 6 - 2 = 4 kristal.'
    ],
    points: 10,
  }
];