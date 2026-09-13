'use client';

import { useState } from 'react';
import { GerarReforcoButton } from '@/features/gerar-reforco/ui/gerar-reforco-button';
import { needsReinforcement, type Student, type StudentStanding } from '@/entities/aluno/model';
import { Badge } from '@/shared/ui/badge';

type TabelaAlunosProps = {
  readonly students: readonly Student[];
};

const STANDING_LABEL: Record<StudentStanding, string> = {
  firme: 'Firme',
  'em-risco': 'Em risco',
  esquecido: 'Esquecido',
  'sem-dados': 'Sem dados',
};

const STANDING_TONE: Record<StudentStanding, 'primary' | 'warn' | 'danger' | 'neutral'> = {
  firme: 'primary',
  'em-risco': 'warn',
  esquecido: 'danger',
  'sem-dados': 'neutral',
};

export const TabelaAlunos = ({ students }: TabelaAlunosProps) => {
  const [onlyNeedingReinforcement, setOnlyNeedingReinforcement] = useState(false);

  const visibleStudents = onlyNeedingReinforcement
    ? students.filter((student) => needsReinforcement(student.standing))
    : students;

  return (
    <div className="rounded-2xl border border-border-soft bg-surface p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-base font-bold text-ink">Alunos</h3>
          <p className="mt-1 text-sm text-ink-muted">
            Ordem alfabética — o painel nunca classifica aluno por desempenho.
          </p>
        </div>
        <label className="flex min-h-11 cursor-pointer items-center gap-2 text-sm font-semibold text-ink">
          <input
            type="checkbox"
            checked={onlyNeedingReinforcement}
            onChange={(event) => setOnlyNeedingReinforcement(event.target.checked)}
            className="size-5 accent-[var(--color-primary)]"
          />
          Só quem precisa de reforço
        </label>
      </div>

      {visibleStudents.length === 0 ? (
        <p className="mt-6 text-center text-sm text-ink-muted">
          Nenhum aluno nessa condição no momento.
        </p>
      ) : (
        <ul className="mt-4 flex flex-col gap-3">
          {visibleStudents.map((student) => (
            <li
              key={student.id}
              className="flex flex-col gap-3 rounded-xl border border-border-soft px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-semibold text-ink">{student.displayName}</p>
                  <Badge tone={STANDING_TONE[student.standing]}>
                    {STANDING_LABEL[student.standing]}
                  </Badge>
                </div>
                {student.weakestConcepts.length > 0 && (
                  <p className="mt-1 text-sm text-ink-muted">
                    Precisa reforçar: {student.weakestConcepts.join(', ')}
                  </p>
                )}
              </div>
              <GerarReforcoButton
                studentId={student.id}
                displayName={student.displayName}
                weakestConcepts={student.weakestConcepts}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
