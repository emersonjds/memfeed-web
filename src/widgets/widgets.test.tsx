import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { siteConfig } from '@/shared/config/site';

vi.mock('@/features/expo-launch/ui/qr-code-panel', () => ({
  QrCodePanel: () => <div data-testid="qr-code-panel" />,
}));

const { Faq } = await import('./faq');
const { Features } = await import('./features');
const { FinalCta } = await import('./final-cta');
const { Hero } = await import('./hero');
const { HowItWorks } = await import('./how-it-works');
const { Numbers } = await import('./numbers');
const { ProofStrip } = await import('./proof-strip');
const { Science } = await import('./science');
const { SiteFooter } = await import('./site-footer');
const { SiteHeader } = await import('./site-header');
const { Teachers } = await import('./teachers');

describe('SiteHeader', () => {
  it('manda o aluno para o app publicado, em nova aba', () => {
    render(<SiteHeader />);
    const entrar = screen.getByRole('link', { name: 'Entrar como aluno' });
    expect(entrar).toHaveAttribute('href', siteConfig.appUrl);
    expect(entrar).toHaveAttribute('target', '_blank');
    expect(entrar).toHaveAttribute('rel', expect.stringContaining('noopener'));
  });

  it('leva o professor ao painel', () => {
    render(<SiteHeader />);
    expect(screen.getByRole('link', { name: 'Acessar como professor' })).toHaveAttribute(
      'href',
      '/painel',
    );
  });

  it('lista as seções navegáveis', () => {
    render(<SiteHeader />);
    const navigation = screen.getByRole('navigation', { name: 'Seções do site' });
    expect(within(navigation).getAllByRole('link')).toHaveLength(5);
  });
});

describe('Hero', () => {
  it('abre com a promessa do produto em um único heading de nível 1', () => {
    render(<Hero />);
    const headings = screen.getAllByRole('heading', { level: 1 });
    expect(headings).toHaveLength(1);
    expect(headings[0]).toHaveTextContent(/antes de esquecer/i);
  });

  it('coloca o QR code acima da dobra', () => {
    render(<Hero />);
    expect(screen.getByTestId('qr-code-panel')).toBeInTheDocument();
  });

  it('mostra as capturas reais do app com texto alternativo', () => {
    render(<Hero />);
    expect(screen.getByAltText(/Feed do Memfeed/)).toBeInTheDocument();
  });
});

describe('ProofStrip', () => {
  it('identifica o piloto e a escola sem inventar adesão em escala', () => {
    render(<ProofStrip />);
    expect(screen.getByText('Piloto em andamento')).toBeInTheDocument();
    expect(screen.getByText('Colégio Estadual Paulo Freire')).toBeInTheDocument();
    expect(screen.getByText('34 alunos')).toBeInTheDocument();
  });
});

describe('Science', () => {
  it('explica o mecanismo sem prometer resultado de prova', () => {
    render(<Science />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/hora certa/i);
    expect(screen.getByText('Repetição espaçada')).toBeInTheDocument();
  });
});

describe('HowItWorks', () => {
  it('apresenta exatamente três passos ordenados', () => {
    render(<HowItWorks />);
    expect(within(screen.getByRole('list')).getAllByRole('listitem')).toHaveLength(3);
  });

  it('deixa claro que a IA não entrega a resposta', () => {
    render(<HowItWorks />);
    expect(screen.getByText(/nunca a resposta pronta/i)).toBeInTheDocument();
  });
});

describe('Numbers', () => {
  it('rotula os números como demonstração do protótipo', () => {
    render(<Numbers />);
    expect(screen.getByText(/demonstração do protótipo/i)).toBeInTheDocument();
  });

  it('mostra as quatro métricas', () => {
    render(<Numbers />);
    expect(screen.getByText('de retenção média')).toBeInTheDocument();
    expect(screen.getByText('notificação fora de hora')).toBeInTheDocument();
  });
});

describe('Features', () => {
  it('usa headings de nível 3 dentro da seção', () => {
    render(<Features />);
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(4);
  });
});

describe('Teachers', () => {
  it('afirma o limite de privacidade da turma', () => {
    render(<Teachers />);
    expect(screen.getByText('A turma, nunca o aluno')).toBeInTheDocument();
  });
});

describe('FinalCta', () => {
  it('repete o QR code no fechamento da página', () => {
    render(<FinalCta />);
    expect(screen.getByTestId('qr-code-panel')).toBeInTheDocument();
  });
});

describe('Faq', () => {
  it('mantém toda resposta no HTML, mesmo fechada', () => {
    render(<Faq />);
    expect(screen.getByText(/É o algoritmo de repetição espaçada/)).toBeInTheDocument();
  });

  it('abre a resposta no clique', async () => {
    const { container } = render(<Faq />);
    const firstDetails = container.querySelector('details');
    expect(firstDetails?.open).toBe(false);

    await userEvent.click(screen.getByText('Preciso instalar alguma coisa para testar?'));

    expect(firstDetails?.open).toBe(true);
  });
});

describe('SiteFooter', () => {
  it('repete a navegação e o aviso sobre os números', () => {
    render(<SiteFooter />);
    expect(screen.getByRole('navigation', { name: 'Rodapé' })).toBeInTheDocument();
    expect(screen.getByText(/números exibidos neste site são de demonstração/i)).toBeInTheDocument();
  });
});
