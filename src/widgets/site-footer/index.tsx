import { navigationLinks, siteConfig } from '@/shared/config/site';
import { Logo } from '@/shared/ui/logo';

export const SiteFooter = () => (
  <footer className="border-t border-border-soft bg-surface px-5 py-12 sm:px-8">
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex max-w-sm flex-col gap-3">
          <Logo />
          <p className="text-sm leading-relaxed text-ink-muted">{siteConfig.tagline}</p>
        </div>

        <nav aria-label="Rodapé">
          <ul className="flex flex-col gap-2 sm:items-end">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex min-h-11 items-center text-sm font-semibold text-ink-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <p className="border-t border-border-soft pt-6 text-xs leading-relaxed text-ink-muted">
        Projeto apresentado no HACKTUDO 2026. Os números exibidos neste site são de demonstração do
        protótipo.
      </p>
    </div>
  </footer>
);
