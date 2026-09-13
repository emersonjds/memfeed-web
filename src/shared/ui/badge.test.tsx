import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Badge } from './badge';

describe('Badge', () => {
  it.each([
    ['primary', 'bg-primary-soft'],
    ['accent', 'bg-accent-soft'],
    ['neutral', 'bg-surface-soft'],
    ['warn', 'bg-amber-50'],
  ] as const)('aplica a classe da variante %s', (tone, expectedClass) => {
    render(<Badge tone={tone}>Rótulo</Badge>);
    expect(screen.getByText('Rótulo').className).toContain(expectedClass);
  });

  it('usa a variante primária por padrão', () => {
    render(<Badge>Padrão</Badge>);
    expect(screen.getByText('Padrão').className).toContain('bg-primary-soft');
  });
});
