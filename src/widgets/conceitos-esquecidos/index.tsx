import { rankForgottenConcepts, type PublishedLesson } from '@/entities/turma/model';
import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/shared/ui/table';

type ConceitosEsquecidosProps = {
  readonly lessons: readonly PublishedLesson[];
};

const headerCellClasses = 'text-xs font-semibold uppercase tracking-wide text-ink-muted';

export const ConceitosEsquecidos = ({ lessons }: ConceitosEsquecidosProps) => {
  const ranked = rankForgottenConcepts(lessons);

  return (
    <div className="rounded-2xl border border-border-soft bg-surface p-5 sm:p-6">
      <h3 className="text-base font-bold text-ink">Conceitos que a turma está esquecendo</h3>
      <p className="mt-1 text-sm text-ink-muted">Ordenado pela maior queda entre o acerto no dia e a retenção D+7.</p>

      {ranked.length === 0 ? (
        <p className="mt-6 text-center text-sm text-ink-muted">
          Nenhuma aula publicada completou 7 dias ainda — os conceitos aparecem aqui assim que a retenção D+7 estiver disponível.
        </p>
      ) : (
        <div className="mt-4 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-border-soft">
                <TableCell isHeader className={headerCellClasses}>
                  Conceito
                </TableCell>
                <TableCell isHeader className={headerCellClasses}>
                  Aula
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
              </TableRow>
            </TableHeader>
            <TableBody>
              {ranked.map((item) => (
                <TableRow
                  key={`${item.lessonTopic}-${item.concept}`}
                  className="border-b border-border-soft last:border-0"
                >
                  <TableCell className="font-semibold text-ink">{item.concept}</TableCell>
                  <TableCell className="text-sm text-ink-muted">{item.lessonTopic}</TableCell>
                  <TableCell className="text-right text-sm text-ink">
                    {item.accuracyOnDay}%
                  </TableCell>
                  <TableCell className="text-right text-sm text-ink">
                    {item.retentionD7}%
                  </TableCell>
                  <TableCell className="text-right text-sm font-semibold text-ink">
                    {item.drop > 0 ? `-${item.drop}` : `+${Math.abs(item.drop)}`} pp
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};
