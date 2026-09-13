export type StudentStanding = 'firme' | 'em-risco' | 'esquecido' | 'sem-dados';

export type Student = {
  readonly id: string;
  readonly displayName: string;
  readonly standing: StudentStanding;
  readonly answeredLessons: number;
  readonly totalLessons: number;
  readonly weakestConcepts: readonly string[];
};

export type StudentsReport = {
  readonly className: string;
  readonly school: string;
  readonly subject: string;
  readonly students: readonly Student[];
};

export type ReinforcementResult = {
  readonly studentId: string;
  readonly displayName: string;
  readonly topic: string;
  readonly published: number;
};

const STANDINGS_NEEDING_REINFORCEMENT: readonly StudentStanding[] = ['em-risco', 'esquecido'];

export const needsReinforcement = (standing: StudentStanding): boolean =>
  STANDINGS_NEEDING_REINFORCEMENT.includes(standing);
