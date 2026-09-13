import { getClassReport } from '@/shared/api/teacher';
import { AulasPublicadas } from '@/widgets/aulas-publicadas';
import { LinkButton } from '@/shared/ui/button';

export const dynamic = 'force-dynamic';

const AulasPage = async () => {
  const report = await getClassReport();

  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-extrabold text-ink sm:text-2xl">Aulas publicadas</h1>
          <p className="text-sm text-ink-muted">{report.lessons.length} aulas na turma</p>
        </div>
        <LinkButton href="/painel/aulas/nova">Nova aula</LinkButton>
      </div>

      {report.lessons.length > 0 ? (
        <AulasPublicadas lessons={report.lessons} />
      ) : (
        <p className="rounded-2xl border border-dashed border-border-hard bg-surface px-6 py-12 text-center text-sm text-ink-muted">
          Nenhuma aula publicada ainda.
        </p>
      )}
    </div>
  );
};

export default AulasPage;
