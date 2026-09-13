import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Logo } from './logo';

describe('Logo', () => {
  it('mostra o nome do produto como texto legível', () => {
    render(<Logo />);
    expect(screen.getByText('Memfeed')).toBeInTheDocument();
  });

  it('aceita classe adicional', () => {
    const { container } = render(<Logo className="gap-4" />);
    expect(container.firstElementChild?.className).toContain('gap-4');
  });
});
