import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Button, LinkButton } from './button';

describe('Button', () => {
  it('dispara o clique', async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Testar agora</Button>);

    await userEvent.click(screen.getByRole('button', { name: 'Testar agora' }));

    expect(onClick).toHaveBeenCalledOnce();
  });

  it('aplica a variante neutra e o tamanho grande', () => {
    render(
      <Button variant="neutral" size="large">
        Ver mais
      </Button>,
    );

    const button = screen.getByRole('button', { name: 'Ver mais' });
    expect(button.className).toContain('ring-border-soft');
    expect(button.className).toContain('min-h-14');
  });

  it('aplica a variante fantasma', () => {
    render(<Button variant="ghost">Fechar</Button>);
    expect(screen.getByRole('button', { name: 'Fechar' }).className).toContain('text-ink-muted');
  });

  it('respeita a altura mínima de toque de 44px', () => {
    render(<Button>Abrir</Button>);
    expect(screen.getByRole('button', { name: 'Abrir' }).className).toContain('min-h-11');
  });
});

describe('LinkButton', () => {
  it('renderiza um link navegável', () => {
    render(<LinkButton href="#abrir">Abrir o Desfeed</LinkButton>);

    const link = screen.getByRole('link', { name: 'Abrir o Desfeed' });
    expect(link).toHaveAttribute('href', '#abrir');
  });

  it('aceita variante e tamanho', () => {
    render(
      <LinkButton href="#abrir" variant="neutral" size="large">
        Abrir
      </LinkButton>,
    );
    expect(screen.getByRole('link', { name: 'Abrir' }).className).toContain('min-h-14');
  });
});
