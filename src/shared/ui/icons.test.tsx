import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { BookIcon, CloseIcon, HomeIcon, MenuIcon, PlusCircleIcon } from './icons';

describe('ícones do painel', () => {
  it.each([
    ['HomeIcon', HomeIcon],
    ['PlusCircleIcon', PlusCircleIcon],
    ['BookIcon', BookIcon],
    ['MenuIcon', MenuIcon],
    ['CloseIcon', CloseIcon],
  ] as const)('%s renderiza um svg decorativo e aceita className', (_name, Icon) => {
    const { container } = render(<Icon className="size-5" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('aria-hidden', 'true');
    expect(svg?.getAttribute('class')).toBe('size-5');
  });
});
