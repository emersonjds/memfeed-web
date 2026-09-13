import { getClassReport } from '@/shared/api/teacher';
import { getStudents } from '@/entities/aluno/api';
import { AnalisesTabs } from '@/widgets/analises-tabs';

export const dynamic = 'force-dynamic';

const AnalisesPage = async () => {
  const [report, studentsReport] = await Promise.all([getClassReport(), getStudents()]);

  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <div>
        <h1 className="text-xl font-extrabold text-ink sm:text-2xl">Análises</h1>
        <p className="text-sm text-ink-muted">
          {report.className} · {studentsReport.school}
        </p>
      </div>

      <AnalisesTabs lessons={report.lessons} students={studentsReport.students} />
    </div>
  );
};

export default AnalisesPage;
