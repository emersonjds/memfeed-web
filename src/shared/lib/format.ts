const integerFormatter = new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 0 });
const decimalFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

export const formatNumber = (value: number, decimals: 0 | 1 = 0): string =>
  decimals === 1 ? decimalFormatter.format(value) : integerFormatter.format(value);
