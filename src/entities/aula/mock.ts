import type { LessonDetail, TeacherClassesReport } from './model';

const daysAgo = (days: number): string =>
  new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();

// Mesma aula de demonstração do mockClassReport — o painel deve ficar coerente
// se a API cair enquanto o professor navega entre as duas telas.
export const mockLessonDetail: LessonDetail = {
  id: 'aula-respiracao',
  topic: 'Respiração celular e mitocôndria',
  subject: 'Biologia',
  publishedAt: daysAgo(8),
  className: '2º ano B',
  school: 'Colégio Estadual Paulo Freire',
  grade: '2º ano do Ensino Médio',
  questionCount: 5,
  studentCount: 34,
  answeredBy: 31,
  concepts: [
    {
      concept: 'Fosforilação oxidativa',
      accuracyOnDay: 88,
      retentionD7: 79,
      consolidated: 20,
      atRisk: 8,
      forgotten: 3,
    },
    {
      concept: 'Ciclo de Krebs',
      accuracyOnDay: 71,
      retentionD7: 44,
      consolidated: 9,
      atRisk: 11,
      forgotten: 11,
    },
    {
      concept: 'Glicólise',
      accuracyOnDay: 83,
      retentionD7: 68,
      consolidated: 17,
      atRisk: 9,
      forgotten: 5,
    },
  ],
  pendingStudents: [
    { id: 'aluno-1', displayName: 'Bruno Melo' },
    { id: 'aluno-2', displayName: 'Camila Rocha' },
    { id: 'aluno-3', displayName: 'Diego Reis' },
  ],
};

export const mockTeacherClasses: TeacherClassesReport = {
  subjects: ['Biologia'],
  classes: [
    { id: 'turma-1a', school: 'Colégio Estadual Paulo Freire', name: '1º ano A', grade: '1º ano do Ensino Médio', studentCount: 32 },
    { id: 'turma-2b', school: 'Colégio Estadual Paulo Freire', name: '2º ano B', grade: '2º ano do Ensino Médio', studentCount: 34 },
    { id: 'turma-3c', school: 'Colégio Estadual Paulo Freire', name: '3º ano C', grade: '3º ano do Ensino Médio', studentCount: 30 },
  ],
};
