import { describe, expect, it } from 'vitest';
import { getClassReport } from './teacher';
import { mockClassReport } from '@/entities/turma/mock';

describe('getClassReport', () => {
  it('devolve o relatório mockado enquanto a API não está no ar', async () => {
    await expect(getClassReport()).resolves.toEqual(mockClassReport);
  });
});
