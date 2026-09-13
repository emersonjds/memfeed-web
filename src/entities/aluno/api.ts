import { API_BASE_URL, teacherHeaders } from '@/shared/config/api';
import { mockStudentsReport } from './mock';
import type { ReinforcementResult, StudentsReport } from './model';

// Mesma resiliência de getClassReport: sem resposta da API, cai na turma de demonstração.
export const getStudents = async (): Promise<StudentsReport> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/teacher/students`, {
      headers: teacherHeaders,
      cache: 'no-store',
    });
    if (!response.ok) return mockStudentsReport;
    return (await response.json()) as StudentsReport;
  } catch {
    return mockStudentsReport;
  }
};

export type RequestReinforcementInput = {
  readonly studentId: string;
  readonly concepts: readonly string[];
  readonly cardCount: number;
};

const REINFORCEMENT_ERROR_MESSAGE = 'Não foi possível gerar o reforço agora. Tente de novo.';

// Ação com efeito colateral: erro nunca interpola texto do servidor na tela.
export const requestReinforcement = async ({
  studentId,
  concepts,
  cardCount,
}: RequestReinforcementInput): Promise<ReinforcementResult> => {
  let response: Response;
  try {
    response = await fetch(`${API_BASE_URL}/api/teacher/students/${studentId}/reinforcement`, {
      method: 'POST',
      headers: teacherHeaders,
      body: JSON.stringify({ concepts, cardCount }),
    });
  } catch {
    throw new Error(REINFORCEMENT_ERROR_MESSAGE);
  }
  if (!response.ok) throw new Error(REINFORCEMENT_ERROR_MESSAGE);
  return (await response.json()) as ReinforcementResult;
};
