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

export type TeacherClass = {
  readonly id: string;
  readonly school: string;
  readonly name: string;
  readonly grade: string;
  readonly studentCount: number;
};

export type TeacherClassesReport = {
  readonly subjects: readonly string[];
  readonly classes: readonly TeacherClass[];
};

export type ConceptStanding = {
  readonly concept: string;
  readonly accuracyOnDay: number;
  readonly retentionD7: number;
  readonly consolidated: number;
  readonly atRisk: number;
  readonly forgotten: number;
};

export type PendingStudent = {
  readonly id: string;
  readonly displayName: string;
};

export type LessonDetail = {
  readonly id: string;
  readonly topic: string;
  readonly subject: string;
  readonly publishedAt: string;
  readonly className: string;
  readonly school: string;
  readonly grade: string;
  readonly questionCount: number;
  readonly studentCount: number;
  readonly answeredBy: number;
  readonly concepts: readonly ConceptStanding[];
  readonly pendingStudents: readonly PendingStudent[];
};
