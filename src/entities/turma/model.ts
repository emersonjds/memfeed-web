export type ConceptResult = {
  readonly concept: string;
  readonly accuracyOnDay: number;
  readonly retentionD7: number;
};

export type PublishedLesson = {
  readonly id: string;
  readonly topic: string;
  readonly publishedAt: string;
  readonly answeredBy: number;
  readonly concepts: readonly ConceptResult[];
};

export type ClassReport = {
  readonly className: string;
  readonly subject: string;
  readonly studentCount: number;
  readonly participation: number;
  readonly retentionD7: number;
  readonly retentionD30: number;
  readonly lessons: readonly PublishedLesson[];
};

const MIN_DAYS_FOR_RETENTION_D7 = 7;

export const hasRetentionD7Data = (publishedAt: string, now: Date = new Date()): boolean => {
  const publishedMs = new Date(publishedAt).getTime();
  const daysSince = (now.getTime() - publishedMs) / (24 * 60 * 60 * 1000);
  return daysSince >= MIN_DAYS_FOR_RETENTION_D7;
};

export type ForgottenConcept = ConceptResult & {
  readonly lessonTopic: string;
  readonly drop: number;
};

/** Só entram conceitos cuja aula já completou 7 dias — antes disso retentionD7 não existe de verdade. */
export const rankForgottenConcepts = (
  lessons: readonly PublishedLesson[],
  now: Date = new Date(),
): readonly ForgottenConcept[] =>
  lessons
    .filter((lesson) => hasRetentionD7Data(lesson.publishedAt, now))
    .flatMap((lesson) =>
      lesson.concepts.map((concept) => ({
        ...concept,
        lessonTopic: lesson.topic,
        drop: concept.accuracyOnDay - concept.retentionD7,
      })),
    )
    .sort((a, b) => b.drop - a.drop);

/** Aproximação de D+1: acerto médio no dia da aula entre todos os conceitos publicados. */
export const averageAccuracyOnDay = (lessons: readonly PublishedLesson[]): number | null => {
  const concepts = lessons.flatMap((lesson) => lesson.concepts);
  if (concepts.length === 0) return null;
  const sum = concepts.reduce((total, concept) => total + concept.accuracyOnDay, 0);
  return Math.round(sum / concepts.length);
};
