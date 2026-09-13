import { describe, expect, it } from 'vitest';
import {
  averageAccuracyOnDay,
  hasRetentionD7Data,
  rankForgottenConcepts,
  type PublishedLesson,
} from './model';

const daysAgo = (days: number): string =>
  new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();

describe('hasRetentionD7Data', () => {
  it('é falso para aula publicada há menos de 7 dias', () => {
    expect(hasRetentionD7Data(daysAgo(2))).toBe(false);
  });

  it('é verdadeiro para aula publicada há 7 dias ou mais', () => {
    expect(hasRetentionD7Data(daysAgo(8))).toBe(true);
  });
});

describe('rankForgottenConcepts', () => {
  const lessons: readonly PublishedLesson[] = [
    {
      id: 'aula-antiga',
      topic: 'Respiração celular',
      publishedAt: daysAgo(10),
      className: '2º ano B',
      school: 'Colégio Estadual Paulo Freire',
      studentCount: 34,
      answeredBy: 30,
      concepts: [
        { concept: 'Ciclo de Krebs', accuracyOnDay: 71, retentionD7: 44 },
        { concept: 'Glicólise', accuracyOnDay: 83, retentionD7: 68 },
      ],
    },
    {
      id: 'aula-recente',
      topic: 'Fotossíntese',
      publishedAt: daysAgo(2),
      className: '2º ano B',
      school: 'Colégio Estadual Paulo Freire',
      studentCount: 34,
      answeredBy: 20,
      concepts: [{ concept: 'Ciclo de Calvin', accuracyOnDay: 64, retentionD7: 38 }],
    },
  ];

  it('ordena pela maior queda entre acerto no dia e retenção D+7', () => {
    const ranked = rankForgottenConcepts(lessons);
    expect(ranked.map((item) => item.concept)).toEqual(['Ciclo de Krebs', 'Glicólise']);
  });

  it('exclui conceitos de aulas com menos de 7 dias', () => {
    const ranked = rankForgottenConcepts(lessons);
    expect(ranked.some((item) => item.concept === 'Ciclo de Calvin')).toBe(false);
  });

  it('não quebra quando a retenção é maior que o acerto no dia', () => {
    const withGain: readonly PublishedLesson[] = [
      {
        id: 'aula-ganho',
        topic: 'Genética',
        publishedAt: daysAgo(9),
        className: '2º ano B',
        school: 'Colégio Estadual Paulo Freire',
        studentCount: 34,
        answeredBy: 25,
        concepts: [{ concept: 'Leis de Mendel', accuracyOnDay: 60, retentionD7: 72 }],
      },
    ];
    const ranked = rankForgottenConcepts(withGain);
    expect(ranked[0]?.drop).toBe(-12);
  });
});

describe('averageAccuracyOnDay', () => {
  it('calcula a média de acerto no dia entre todos os conceitos', () => {
    const lessons: readonly PublishedLesson[] = [
      {
        id: 'aula-1',
        topic: 'Tema',
        publishedAt: daysAgo(10),
        className: '2º ano B',
        school: 'Colégio Estadual Paulo Freire',
        studentCount: 34,
        answeredBy: 10,
        concepts: [{ concept: 'A', accuracyOnDay: 80, retentionD7: 60 }],
      },
      {
        id: 'aula-2',
        topic: 'Tema 2',
        publishedAt: daysAgo(10),
        className: '2º ano B',
        school: 'Colégio Estadual Paulo Freire',
        studentCount: 34,
        answeredBy: 10,
        concepts: [{ concept: 'B', accuracyOnDay: 60, retentionD7: 40 }],
      },
    ];
    expect(averageAccuracyOnDay(lessons)).toBe(70);
  });

  it('devolve null quando não há nenhuma aula publicada', () => {
    expect(averageAccuracyOnDay([])).toBeNull();
  });
});
