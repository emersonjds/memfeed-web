export const siteConfig = {
  name: 'Memfeed',
  tagline: 'A interface do feed, o algoritmo da memória.',
  description:
    'Fotografe a página que você estudou. O Memfeed transforma em perguntas de 15 segundos e devolve cada uma no dia em que sua memória ia falhar.',
  url: 'https://memfeed.app',
  expoGoUrl: process.env.NEXT_PUBLIC_EXPO_GO_URL ?? 'exp://u.expo.dev/memfeed',
} as const;

export const navigationLinks = [
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#ciencia', label: 'A ciência' },
  { href: '#recursos', label: 'Recursos' },
  { href: '#professores', label: 'Professores' },
  { href: '#duvidas', label: 'Dúvidas' },
] as const;
