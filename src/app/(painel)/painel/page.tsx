import { getClassReport } from '@/shared/api/teacher';
import { averageAccuracyOnDay } from '@/entities/turma/model';
import { LinkButton } from '@/shared/ui/button';
import { TurmaMetrics } from '@/widgets/turma-metrics';
import { RetencaoChart } from '@/widgets/retencao-chart';
import { ConceitosEsquecidos } from '@/widgets/conceitos-esquecidos';
import { AulasPublicadas } from '@/widgets/aulas-publicadas';

export const dynamic = 'force-dynamic';

const PainelPage = async () => {
  const report = await getClassReport();
  const temAulas = report.lessons.length > 0;

  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <div>
        <h1 className="text-xl font-extrabold text-ink sm:text-2xl">{report.className}</h1>
        <p className="text-sm text-ink-muted">{report.subject}</p>
      </div>

      <TurmaMetrics
        studentCount={report.studentCount}
        participation={report.participation}
        retentionD7={report.retentionD7}
        retentionD30={report.retentionD30}
      />

      {temAulas ? (
        <>
          <RetencaoChart
            d1={averageAccuracyOnDay(report.lessons)}
            d7={report.retentionD7}
            d30={report.retentionD30}
          />
          <ConceitosEsquecidos lessons={report.lessons} />
          <AulasPublicadas lessons={report.lessons} />
        </>
      ) : (
        <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border-hard bg-surface px-6 py-12 text-center">
          <p className="font-semibold text-ink">Nenhuma aula publicada ainda</p>
          <p className="max-w-sm text-sm text-ink-muted">
            Publique a primeira aula para começar a ver participação e retenção da turma aqui.
          </p>
          <LinkButton href="/painel/aulas/nova" className="mt-2">
            Nova aula
          </LinkButton>
        </div>
      )}
    </div>
  );
};

export default PainelPage;
