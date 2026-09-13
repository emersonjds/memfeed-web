import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { QrCodePanel } from './qr-code-panel';

describe('QrCodePanel', () => {
  it('mostra a instrução de uso do código junto do QR', async () => {
    render(await QrCodePanel({}));

    expect(screen.getByText('Aponte a câmera do celular')).toBeInTheDocument();
    expect(screen.getByText(/Expo Go/)).toBeInTheDocument();
  });

  it('desenha o QR como SVG decorativo, com o texto carregando a instrução', async () => {
    const { container } = render(await QrCodePanel({ size: 'large' }));

    const qrWrapper = container.querySelector('[aria-hidden="true"]');
    expect(qrWrapper?.querySelector('svg')).toBeInTheDocument();
    expect(qrWrapper?.className).toContain('w-[200px]');
  });

  it('oferece um link direto para quem já está no celular', async () => {
    render(await QrCodePanel({}));

    const link = screen.getByRole('link', { name: /abrir agora/i });
    expect(link.getAttribute('href')).toMatch(/^exp:\/\//);
  });

  it('usa o tamanho médio por padrão', async () => {
    const { container } = render(await QrCodePanel({}));
    expect(container.querySelector('[aria-hidden="true"]')?.className).toContain('w-[164px]');
  });
});
