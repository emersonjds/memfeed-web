import Link from 'next/link';
import { formatDateTime } from '@/shared/lib/format';
import { hasRetentionD7Data, type PublishedLesson } from '@/entities/turma/model';

type AulasPublicadasProps = {
  readonly lessons: readonly PublishedLesson[];
};

export const AulasPublicadas = ({ lessons }: AulasPublicadasProps) => (
  <div className="rounded-2xl border border-border-soft bg-surface p-5 sm:p-6">
    <h3 className="text-base font-bold text-ink">Aulas publicadas</h3>
    <ul className="mt-4 flex flex-col gap-3">
      {lessons.map((lesson) => (
        <li key={lesson.id}>
          <Link
            href={`/painel/aulas/${lesson.id}`}
            className="flex min-h-11 flex-col gap-1 rounded-xl border border-border-soft px-4 py-3 transition-colors hover:border-primary hover:bg-surface-soft sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="min-w-0">
              <p className="truncate font-semibold text-ink">{lesson.topic}</p>
              <p className="text-sm text-ink-muted">
                {lesson.className} · {lesson.school} · {formatDateTime(lesson.publishedAt)}
              </p>
            </div>
            <div className="text-sm font-semibold text-ink-muted sm:text-right">
              <p>
                {lesson.answeredBy} de {lesson.studentCount} responderam
              </p>
              {!hasRetentionD7Data(lesson.publishedAt) && (
                <p className="text-xs font-medium text-ink-muted/80">Aguardando D+7</p>
              )}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
