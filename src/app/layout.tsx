import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { siteConfig } from '@/shared/config/site';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — revisão que chega antes do esquecimento`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    'repetição espaçada',
    'FSRS',
    'curva de esquecimento',
    'flashcards',
    'estudo',
    'concurso',
    'vestibular',
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  icons: { icon: '/memfeed-mark.svg', apple: '/memfeed-icon.png' },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  colorScheme: 'light',
};

const RootLayout = ({ children }: { readonly children: React.ReactNode }) => (
  <html lang="pt-BR" className={jakarta.variable}>
    <body className="antialiased">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-white"
      >
        Pular para o conteúdo
      </a>
      {children}
    </body>
  </html>
);

export default RootLayout;
