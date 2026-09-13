import { describe, expect, it } from 'vitest';
import { cn } from './cn';

describe('cn', () => {
  it('junta as classes com espaço', () => {
    expect(cn('a', 'b')).toBe('a b');
  });

  it('descarta valores ausentes', () => {
    expect(cn('a', undefined, null, false, 'b')).toBe('a b');
  });

  it('devolve string vazia sem nenhuma classe', () => {
    expect(cn()).toBe('');
  });
});
