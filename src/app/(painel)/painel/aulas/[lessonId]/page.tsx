import { notFound } from 'next/navigation';
import { getLessonDetail } from '@/entities/aula/api';
import { formatDateTime } from '@/shared/lib/format';
import { DetalheAula } from '@/widgets/detalhe-aula';

export const dynamic = 'force-dynamic';

type LessonPageProps = {
  readonly params: Promise<{ readonly lessonId: string }>;
};

const LessonDetailPage = async ({ params }: LessonPageProps) => {
  const { lessonId } = await params;
  const lesson = await getLessonDetail(lessonId);
  if (!lesson) notFound();

  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <div>
        <h1 className="text-xl font-extrabold text-ink sm:text-2xl">{lesson.topic}</h1>
        <p className="text-sm text-ink-muted">{lesson.subject}</p>
        <p className="mt-1 text-sm text-ink-muted">
          {lesson.school} · {lesson.className} · {lesson.grade} · publicada em{' '}
          {formatDateTime(lesson.publishedAt)}
        </p>
      </div>

      <DetalheAula lesson={lesson} />
    </div>
  );
};

export default LessonDetailPage;
