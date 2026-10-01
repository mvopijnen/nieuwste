export type CategoryId =
  | 'eerste-date'
  | 'samen'
  | 'vrienden'
  | 'familie'
  | 'verdiepen'
  | 'onverwacht';

export type QuestionMood = 'warm' | 'nieuwsgierig' | 'speels' | 'licht-spannend';

export interface Category {
  id: CategoryId;
  title: string;
  tagline: string;
  description: string;
  moodTag: string;
  accentColor: string;
  bgGradient: string;
  sampleCount: number;
}

export interface Question {
  id: string;
  categoryId: CategoryId;
  categoryTitle: string;
  text: string;
  followUp?: string;
  mood: QuestionMood;
  spicinessLevel: 1 | 2 | 3; // 1 = licht & ontspannen, 2 = nieuwsgierig, 3 = oei / raakt de kern
  settingPrompt?: string;
}

export interface Situation {
  id: string;
  title: string;
  subtitle: string;
  story: string;
  exampleQuestion: string;
  contextTag: string;
  timeframe: string;
}
