import { describe, expect, it } from 'vitest';
import { formatDate, formatNumber } from './format';

describe('formatNumber', () => {
  it('usa separador de milhar do português do Brasil', () => {
    expect(formatNumber(1064)).toBe('1.064');
  });

  it('arredonda para inteiro por padrão', () => {
    expect(formatNumber(93.84)).toBe('94');
  });

  it('mantém uma casa decimal quando pedido', () => {
    expect(formatNumber(93.84, 1)).toBe('93,8');
  });
});

describe('formatDate', () => {
  it('formata data ISO como dia e mês abreviado em português', () => {
    expect(formatDate('2026-03-05T12:00:00.000Z')).toBe('05 de mar.');
  });
});
