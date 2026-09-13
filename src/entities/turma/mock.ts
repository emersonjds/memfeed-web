import type { ClassReport } from './model';

const daysAgo = (days: number): string =>
  new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();

// Mesmos números do mock do app (memfeed-app/src/shared/api/mocks/teacher.ts) —
// o contrato de /api/teacher/class é o mesmo dos dois lados.
export const mockClassReport: ClassReport = {
  className: '2º ano B',
  subject: 'Biologia',
  studentCount: 34,
  participation: 91,
  retentionD7: 74,
  retentionD30: 58,
  lessons: [
    {
      id: 'aula-respiracao',
      topic: 'Respiração celular e mitocôndria',
      publishedAt: daysAgo(8),
      answeredBy: 31,
      concepts: [
        { concept: 'Fosforilação oxidativa', accuracyOnDay: 88, retentionD7: 79 },
        { concept: 'Ciclo de Krebs', accuracyOnDay: 71, retentionD7: 44 },
        { concept: 'Glicólise', accuracyOnDay: 83, retentionD7: 68 },
      ],
    },
    {
      id: 'aula-fotossintese',
      topic: 'Fotossíntese — fase clara e escura',
      publishedAt: daysAgo(15),
      answeredBy: 29,
      concepts: [
        { concept: 'Fase fotoquímica', accuracyOnDay: 76, retentionD7: 61 },
        { concept: 'Ciclo de Calvin', accuracyOnDay: 64, retentionD7: 38 },
      ],
    },
  ],
};
