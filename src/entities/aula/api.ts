import { API_BASE_URL, teacherHeaders } from '@/shared/config/api';
import { mockLessonDetail, mockTeacherClasses } from './mock';
import type { GeneratedLesson, LessonDetail, PublishResult, TeacherClassesReport } from './model';

export type GenerateLessonInput = {
  readonly subject: string;
  readonly topic: string;
  readonly classId?: string;
  readonly questionCount: number;
};

const readError = async (response: Response): Promise<string> => {
  const body = (await response.json().catch(() => null)) as { message?: string } | null;
  return body?.message ?? 'A geração falhou. Tente de novo.';
};

export const generateLesson = async (input: GenerateLessonInput): Promise<GeneratedLesson> => {
  const response = await fetch(`${API_BASE_URL}/api/teacher/lessons`, {
    method: 'POST',
    headers: teacherHeaders,
    body: JSON.stringify(input),
  });
  if (!response.ok) throw new Error(await readError(response));
  return (await response.json()) as GeneratedLesson;
};

export const publishLesson = async (
  lessonId: string,
  approvedQuestionIds: readonly string[],
): Promise<PublishResult> => {
  const response = await fetch(`${API_BASE_URL}/api/teacher/lessons/${lessonId}/publish`, {
    method: 'POST',
    headers: teacherHeaders,
    body: JSON.stringify({ approvedQuestionIds }),
  });
  if (!response.ok) throw new Error(await readError(response));
  return (await response.json()) as PublishResult;
};

// Mesma resiliência de getClassReport: sem resposta da API, cai nas turmas de demonstração.
export const getTeacherClasses = async (): Promise<TeacherClassesReport> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/teacher/classes`, {
      headers: teacherHeaders,
      cache: 'no-store',
    });
    if (!response.ok) return mockTeacherClasses;
    return (await response.json()) as TeacherClassesReport;
  } catch {
    return mockTeacherClasses;
  }
};

// Mesma resiliência de getClassReport: sem resposta da API, cai na aula de demonstração
// em vez de quebrar a tela. Um 404 de verdade, porém, é aula inexistente — não é queda de API.
export const getLessonDetail = async (lessonId: string): Promise<LessonDetail | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/teacher/lessons/${lessonId}`, {
      headers: teacherHeaders,
      cache: 'no-store',
    });
    if (response.status === 404) return null;
    if (!response.ok) return mockLessonDetail;
    return (await response.json()) as LessonDetail;
  } catch {
    return mockLessonDetail;
  }
};
