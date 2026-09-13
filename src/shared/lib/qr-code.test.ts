import { describe, expect, it } from 'vitest';
import { renderQrCodeSvg } from './qr-code';

describe('renderQrCodeSvg', () => {
  it('devolve um SVG que codifica o valor recebido', async () => {
    const svg = await renderQrCodeSvg('exp://u.expo.dev/desfeed');
    expect(svg).toContain('<svg');
    expect(svg).toContain('</svg>');
  });

  it('aceita cores personalizadas', async () => {
    const svg = await renderQrCodeSvg('exp://u.expo.dev/desfeed', { dark: '#059669' });
    expect(svg).toContain('#059669');
  });

  it('gera saídas diferentes para valores diferentes', async () => {
    const [first, second] = await Promise.all([
      renderQrCodeSvg('exp://u.expo.dev/desfeed'),
      renderQrCodeSvg('https://desfeed.app'),
    ]);
    expect(first).not.toBe(second);
  });
});
