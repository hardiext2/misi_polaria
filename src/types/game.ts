export type GameMode = 'IMAGE_PATTERN' | 'NUMBER_PATTERN' | 'WORD_PROBLEM'| 'AREA_MEASUREMENT'|'VOLUME_MEASUREMENT';
export type QuestionType = 'MULTIPLE_CHOICE' | 'FILL_BLANK' | 'COUNT_OBJECT';

export interface SvgObjectConfig {
  shape: 'star' | 'circle' | 'square' | 'triangle' | 'flower' | 'gem';
  color: string;
}

export interface ImageStep {
  stepIndex: number;
  count: number;
  config: SvgObjectConfig;
}

export interface Question {
  id: string;
  levelId: string;
  mode: GameMode;
  questionType: QuestionType;
  title: string;
  prompt: string;
  
  imageSteps?: ImageStep[];

  numberSequence?: (number | null)[];
 
  options: string[];
  correctAnswer: string;

  hint: string;
  explanationSteps: string[]; 
  points: number;
}