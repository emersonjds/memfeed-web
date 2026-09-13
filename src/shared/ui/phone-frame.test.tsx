import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { PhoneFrame } from './phone-frame';

describe('PhoneFrame', () => {
  it('descreve a captura de tela para leitor de tela', () => {
    render(<PhoneFrame src="/app/feed.png" alt="Feed do Memfeed" />);
    expect(screen.getByAltText('Feed do Memfeed')).toHaveAttribute('src', '/app/feed.png');
  });

  it('aceita classe de largura', () => {
    const { container } = render(
      <PhoneFrame src="/app/feed.png" alt="Feed" className="w-[240px]" priority />,
    );
    expect(container.firstElementChild?.className).toContain('w-[240px]');
  });
});
