export const siteConfig = {
  name: 'Desfeed',
  tagline: 'A interface do feed, o algoritmo da memória.',
  description:
    'Fotografe a página que você estudou. O Desfeed transforma em perguntas de 15 segundos e devolve cada uma no dia em que sua memória ia falhar.',
  url: 'https://desfeed.app',
  expoGoUrl: process.env.NEXT_PUBLIC_EXPO_GO_URL ?? 'exp://u.expo.dev/desfeed',
} as const;

export const navigationLinks = [
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#ciencia', label: 'A ciência' },
  { href: '#recursos', label: 'Recursos' },
  { href: '#professores', label: 'Professores' },
  { href: '#duvidas', label: 'Dúvidas' },
] as const;
