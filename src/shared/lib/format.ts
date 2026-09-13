const integerFormatter = new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 0 });
const decimalFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

export const formatNumber = (value: number, decimals: 0 | 1 = 0): string =>
  decimals === 1 ? decimalFormatter.format(value) : integerFormatter.format(value);

const dateFormatter = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'short' });

export const formatDate = (iso: string): string => dateFormatter.format(new Date(iso));

const dateTimeFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: '2-digit',
  month: 'short',
  hour: '2-digit',
  minute: '2-digit',
});

export const formatDateTime = (iso: string): string => dateTimeFormatter.format(new Date(iso));
