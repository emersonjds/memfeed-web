import { API_BASE_URL, teacherHeaders } from '@/shared/config/api';
import type { GeneratedLesson, PublishResult } from './model';

export type GenerateLessonInput = {
  readonly subject: string;
  readonly topic: string;
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
