import type { StudentsReport } from './model';

// Mesma turma de demonstração das outras telas — coerência se a API cair em navegação.
export const mockStudentsReport: StudentsReport = {
  className: '2º ano B',
  school: 'Colégio Estadual Paulo Freire',
  subject: 'Biologia',
  students: [
    {
      id: 'aluno-1',
      displayName: 'Bruno Melo',
      standing: 'esquecido',
      answeredLessons: 1,
      totalLessons: 2,
      weakestConcepts: ['Ciclo de Krebs', 'Ciclo de Calvin'],
    },
    {
      id: 'aluno-2',
      displayName: 'Camila Rocha',
      standing: 'em-risco',
      answeredLessons: 2,
      totalLessons: 2,
      weakestConcepts: ['Fase fotoquímica'],
    },
    {
      id: 'aluno-3',
      displayName: 'Diego Reis',
      standing: 'firme',
      answeredLessons: 2,
      totalLessons: 2,
      weakestConcepts: [],
    },
    {
      id: 'aluno-4',
      displayName: 'Yasmin Andrade',
      standing: 'sem-dados',
      answeredLessons: 0,
      totalLessons: 2,
      weakestConcepts: [],
    },
  ],
};
