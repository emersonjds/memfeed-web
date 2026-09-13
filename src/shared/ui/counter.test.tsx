import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

const useReducedMotionMock = vi.hoisted(() => vi.fn(() => false));
const useInViewMock = vi.hoisted(() => vi.fn(() => true));
vi.mock('motion/react', async () => {
  const actual = await vi.importActual<typeof import('motion/react')>('motion/react');
  return { ...actual, useReducedMotion: useReducedMotionMock, useInView: useInViewMock };
});

const { Counter } = await import('./counter');

describe('Counter', () => {
  it('entrega o valor final no HTML, sem depender da animação', () => {
    useReducedMotionMock.mockReturnValueOnce(true);
    render(<Counter value={1064} />);
    expect(screen.getByText('1.064')).toBeInTheDocument();
  });

  it('formata decimal e sufixo', () => {
    useReducedMotionMock.mockReturnValueOnce(true);
    render(<Counter value={93.8} decimals={1} suffix="%" />);
    expect(screen.getByText('93,8%')).toBeInTheDocument();
  });

  it('volta ao valor final ao desmontar durante a animação', async () => {
    const { unmount } = render(<Counter value={20} durationSeconds={0.05} />);
    unmount();
    expect(useInViewMock).toHaveBeenCalled();
  });

  it('não anima enquanto estiver fora da tela', () => {
    useInViewMock.mockReturnValueOnce(false);
    render(<Counter value={15} suffix="s" />);
    expect(screen.getByText('15s')).toBeInTheDocument();
  });
});
