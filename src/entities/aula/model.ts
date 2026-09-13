export type DraftQuestion = {
  readonly id: string;
  readonly question: string;
  readonly correctAnswer: string;
  readonly approved: boolean;
};

export type GeneratedLesson = {
  readonly lessonId: string;
  readonly topic: string;
  readonly questions: readonly DraftQuestion[];
};

export type PublishResult = {
  readonly lessonId: string;
  readonly published: number;
  readonly discarded: number;
};
