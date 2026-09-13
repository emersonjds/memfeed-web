import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

const useReducedMotionMock = vi.hoisted(() => vi.fn(() => false));
vi.mock('motion/react', async () => {
  const actual = await vi.importActual<typeof import('motion/react')>('motion/react');
  return { ...actual, useReducedMotion: useReducedMotionMock };
});

const { ForgettingCurve } = await import('./forgetting-curve');

describe('ForgettingCurve', () => {
  it('descreve o gráfico para quem usa leitor de tela', () => {
    render(<ForgettingCurve />);
    expect(screen.getByRole('img', { name: /retenção da memória ao longo de 30 dias/i })).toBeInTheDocument();
  });

  it('rotula as duas séries e marca a curva como ilustrativa', () => {
    render(<ForgettingCurve />);
    expect(screen.getByText('Revisando no Memfeed')).toBeInTheDocument();
    expect(screen.getByText('Estudando uma vez só')).toBeInTheDocument();
    expect(screen.getByText(/ilustrativa/i)).toBeInTheDocument();
  });

  it('desenha o estado final direto quando o usuário pede menos animação', () => {
    useReducedMotionMock.mockReturnValue(true);
    const { container } = render(<ForgettingCurve />);
    expect(container.querySelectorAll('circle')).toHaveLength(5);
    useReducedMotionMock.mockReturnValue(false);
  });
});
