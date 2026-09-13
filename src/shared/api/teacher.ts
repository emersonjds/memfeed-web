import type { ClassReport } from '@/entities/turma/model';
import { mockClassReport } from '@/entities/turma/mock';
import { API_BASE_URL, teacherHeaders } from '@/shared/config/api';

// A demo não pode morrer com a API fora do ar: sem resposta, o painel cai no relatório
// de demonstração em vez de quebrar a tela.
export const getClassReport = async (): Promise<ClassReport> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/teacher/class`, {
      headers: teacherHeaders,
      cache: 'no-store',
    });
    if (!response.ok) return mockClassReport;
    return (await response.json()) as ClassReport;
  } catch {
    return mockClassReport;
  }
};
