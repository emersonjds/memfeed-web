import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

const useReducedMotionMock = vi.hoisted(() => vi.fn(() => false));
vi.mock('motion/react', async () => {
  const actual = await vi.importActual<typeof import('motion/react')>('motion/react');
  return { ...actual, useReducedMotion: useReducedMotionMock };
});

const { Reveal } = await import('./reveal');

describe('Reveal', () => {
  it('mantém o conteúdo acessível com animação ligada', () => {
    render(<Reveal>Conteúdo animado</Reveal>);
    expect(screen.getByText('Conteúdo animado')).toBeInTheDocument();
  });

  it('renderiza sem wrapper de movimento quando o usuário pede menos animação', () => {
    useReducedMotionMock.mockReturnValueOnce(true);
    render(<Reveal className="flex">Conteúdo estático</Reveal>);
    expect(screen.getByText('Conteúdo estático')).toBeInTheDocument();
  });

  it('aceita a tag de item de lista', () => {
    render(
      <ul>
        <Reveal as="li" delay={0.2} distance={10}>
          Item
        </Reveal>
      </ul>,
    );
    expect(screen.getByRole('listitem')).toHaveTextContent('Item');
  });
});
