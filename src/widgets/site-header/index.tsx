import Link from 'next/link';
import { navigationLinks, siteConfig } from '@/shared/config/site';
import { LinkButton } from '@/shared/ui/button';
import { Logo } from '@/shared/ui/logo';

export const SiteHeader = () => (
  <header className="sticky top-0 z-50 border-b border-border-soft/70 bg-surface/85 backdrop-blur-lg">
    <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
      <Link href="/" aria-label={`${siteConfig.name}, página inicial`} className="shrink-0">
        <Logo />
      </Link>

      <nav aria-label="Seções do site" className="hidden lg:block">
        <ul className="flex items-center gap-1">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="inline-flex min-h-11 items-center rounded-full px-4 text-sm font-semibold whitespace-nowrap text-ink-muted transition-colors hover:bg-surface-soft hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex shrink-0 items-center gap-2">
        <LinkButton href="/painel" size="medium" variant="neutral">
          Professor
        </LinkButton>
        <LinkButton
          href={siteConfig.appUrl}
          size="medium"
          target="_blank"
          rel="noopener noreferrer"
          prefetch={false}
        >
          Aluno
        </LinkButton>
      </div>
    </div>
  </header>
);
