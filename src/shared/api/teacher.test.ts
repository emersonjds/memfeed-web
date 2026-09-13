import { afterEach, describe, expect, it, vi } from 'vitest';
import { getClassReport } from './teacher';
import { mockClassReport } from '@/entities/turma/mock';

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('getClassReport', () => {
  it('cai no relatório de demonstração quando a API não responde', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('sem rede')));

    await expect(getClassReport()).resolves.toEqual(mockClassReport);
  });
});
