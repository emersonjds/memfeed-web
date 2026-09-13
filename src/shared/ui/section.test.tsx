import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Eyebrow, Section, SectionLead, SectionTitle } from './section';

describe('Section', () => {
  it('expõe o identificador de âncora', () => {
    const { container } = render(
      <Section id="ciencia">
        <p>conteúdo</p>
      </Section>,
    );
    expect(container.querySelector('section')).toHaveAttribute('id', 'ciencia');
  });

  it('alterna o fundo suave', () => {
    const { container } = render(
      <Section tone="soft">
        <p>conteúdo</p>
      </Section>,
    );
    expect(container.querySelector('section')?.className).toContain('bg-surface-soft');
  });

  it('usa o fundo branco por padrão', () => {
    const { container } = render(
      <Section>
        <p>conteúdo</p>
      </Section>,
    );
    expect(container.querySelector('section')?.className).toContain('bg-surface');
  });
});

describe('tipografia de seção', () => {
  it('renderiza o título como heading de nível 2', () => {
    render(<SectionTitle>Como funciona</SectionTitle>);
    expect(screen.getByRole('heading', { level: 2, name: 'Como funciona' })).toBeInTheDocument();
  });

  it('renderiza o eyebrow em cada tom', () => {
    const { rerender } = render(<Eyebrow>Por que funciona</Eyebrow>);
    expect(screen.getByText('Por que funciona').className).toContain('text-primary-deep');

    rerender(<Eyebrow tone="accent">Para professores</Eyebrow>);
    expect(screen.getByText('Para professores').className).toContain('text-accent');
  });

  it('renderiza o texto de apoio', () => {
    render(<SectionLead className="mt-2">Apoio</SectionLead>);
    expect(screen.getByText('Apoio').className).toContain('mt-2');
  });
});
