type Metric = {
  readonly label: string;
  readonly value: string;
  readonly hint?: string;
};

type TurmaMetricsProps = {
  readonly studentCount: number;
  readonly participation: number;
  readonly retentionD7: number;
  readonly retentionD30: number;
};

export const TurmaMetrics = ({
  studentCount,
  participation,
  retentionD7,
  retentionD30,
}: TurmaMetricsProps) => {
  const metrics: readonly Metric[] = [
    { label: 'Alunos na turma', value: `${studentCount}` },
    { label: 'Participação', value: `${participation}%` },
    { label: 'Retenção D+7', value: `${retentionD7}%`, hint: 'O que sobrou 7 dias depois' },
    { label: 'Retenção D+30', value: `${retentionD30}%`, hint: 'O que sobrou 30 dias depois' },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {metrics.map((metric) => (
        <div key={metric.label} className="rounded-2xl border border-border-soft bg-surface p-4 sm:p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
            {metric.label}
          </p>
          <p className="mt-2 text-2xl font-extrabold text-ink sm:text-3xl">{metric.value}</p>
          {metric.hint && <p className="mt-1 text-xs text-ink-muted">{metric.hint}</p>}
        </div>
      ))}
    </div>
  );
};
