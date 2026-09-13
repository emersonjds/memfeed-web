export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3333';

// Pré-autenticação: o painel assume um professor até o login existir.
export const TEACHER_ID =
  process.env.NEXT_PUBLIC_TEACHER_ID ?? '22222222-2222-4222-8222-222222222222';

export const teacherHeaders = {
  'Content-Type': 'application/json',
  'x-teacher-id': TEACHER_ID,
};
