import type { LessonDetail } from '@/entities/aula/model';
import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/shared/ui/table';

type DetalheAulaProps = {
  readonly lesson: LessonDetail;
};

const headerCellClasses = 'text-xs font-semibold uppercase tracking-wide text-ink-muted';

const DistribuicaoConceito = ({
  consolidated,
  atRisk,
  forgotten,
}: {
  readonly consolidated: number;
  readonly atRisk: number;
  readonly forgotten: number;
}) => {
  const total = consolidated + atRisk + forgotten;
  if (total === 0) return <p className="text-xs text-ink-muted">Sem dados de retenção ainda</p>;

  return (
    <div className="flex min-w-[160px] flex-col gap-1.5">
      <div className="flex h-2.5 w-full overflow-hidden rounded-full bg-surface-soft">
        <div className="bg-primary" style={{ width: `${(consolidated / total) * 100}%` }} />
        <div className="bg-warn" style={{ width: `${(atRisk / total) * 100}%` }} />
        <div className="bg-danger" style={{ width: `${(forgotten / total) * 100}%` }} />
      </div>
      <p className="text-xs text-ink-muted">
        {consolidated} consolidados · {atRisk} em risco · {forgotten} esquecidos
      </p>
    </div>
  );
};

export const DetalheAula = ({ lesson }: DetalheAulaProps) => (
  <div className="flex flex-col gap-4 md:gap-6">
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      <div className="rounded-2xl border border-border-soft bg-surface p-4 sm:p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">Questões</p>
        <p className="mt-2 text-2xl font-extrabold text-ink sm:text-3xl">{lesson.questionCount}</p>
      </div>
      <div className="col-span-2 rounded-2xl border border-border-soft bg-surface p-4 sm:col-span-1 sm:p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">Responderam</p>
        <p className="mt-2 text-2xl font-extrabold text-ink sm:text-3xl">
          {lesson.answeredBy} de {lesson.studentCount}
        </p>
      </div>
    </div>

    <div className="rounded-2xl border border-border-soft bg-surface p-5 sm:p-6">
      <h3 className="text-base font-bold text-ink">Conceitos e onde a turma está</h3>
      <p className="mt-1 text-sm text-ink-muted">
        Acerto no dia, retenção D+7 e a distribuição de alunos por estabilidade de memória.
      </p>

      {lesson.concepts.length === 0 ? (
        <p className="mt-6 text-center text-sm text-ink-muted">
          Nenhum conceito com dados suficientes ainda.
        </p>
      ) : (
        <div className="mt-4 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-border-soft">
                <TableCell isHeader className={headerCellClasses}>
                  Conceito
                </TableCell>
                <TableCell isHeader className={`${headerCellClasses} text-right`}>
                  Acerto no dia
                </TableCell>
                <TableCell isHeader className={`${headerCellClasses} text-right`}>
                  Retenção D+7
                </TableCell>
                <TableCell isHeader className={`${headerCellClasses} text-right`}>
                  Queda
                </TableCell>
                <TableCell isHeader className={headerCellClasses}>
                  Distribuição
                </TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {lesson.concepts.map((concept) => {
                const drop = concept.accuracyOnDay - concept.retentionD7;
                return (
                  <TableRow key={concept.concept} className="border-b border-border-soft last:border-0">
                    <TableCell className="font-semibold text-ink">{concept.concept}</TableCell>
                    <TableCell className="text-right text-sm text-ink">
                      {concept.accuracyOnDay}%
                    </TableCell>
                    <TableCell className="text-right text-sm text-ink">
                      {concept.retentionD7}%
                    </TableCell>
                    <TableCell className="text-right text-sm font-semibold text-ink">
                      {drop > 0 ? `-${drop}` : `+${Math.abs(drop)}`} pp
                    </TableCell>
                    <TableCell>
                      <DistribuicaoConceito
                        consolidated={concept.consolidated}
                        atRisk={concept.atRisk}
                        forgotten={concept.forgotten}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      )}
    </div>

    <div className="rounded-2xl border border-border-soft bg-surface p-5 sm:p-6">
      <h3 className="text-base font-bold text-ink">Ainda não responderam</h3>
      {lesson.pendingStudents.length === 0 ? (
        <p className="mt-3 text-sm text-ink-muted">Toda a turma já respondeu esta aula.</p>
      ) : (
        <ul className="mt-3 flex flex-wrap gap-2">
          {lesson.pendingStudents.map((student) => (
            <li
              key={student.id}
              className="rounded-full bg-surface-soft px-3 py-1.5 text-sm font-semibold text-ink-muted"
            >
              {student.displayName}
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);
