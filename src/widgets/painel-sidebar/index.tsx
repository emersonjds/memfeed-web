'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/shared/lib/cn';
import { Logo } from '@/shared/ui/logo';
import { BookIcon, HomeIcon, PlusCircleIcon } from '@/shared/ui/icons';

const navItems = [
  { name: 'Turma', href: '/painel', icon: HomeIcon },
  { name: 'Nova aula', href: '/painel/aulas/nova', icon: PlusCircleIcon },
  { name: 'Aulas publicadas', href: '/painel/aulas', icon: BookIcon },
] as const;

type PainelSidebarProps = {
  readonly isOpen: boolean;
  readonly onClose: () => void;
};

export const PainelSidebar = ({ isOpen, onClose }: PainelSidebarProps) => {
  const pathname = usePathname();

  return (
    <>
      {isOpen && (
        <button
          type="button"
          aria-label="Fechar menu"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-ink/50 lg:hidden"
        />
      )}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 flex w-72 shrink-0 flex-col gap-8 border-r border-border-soft bg-surface px-5 py-6 transition-transform duration-200 ease-[var(--ease-out-soft)] lg:static lg:z-auto lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <Logo />
        <nav aria-label="Navegação do painel">
          <ul className="flex flex-col gap-1">
            {navItems.map(({ name, href, icon: Icon }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={onClose}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'flex min-h-11 items-center gap-3 rounded-xl px-3 text-[15px] font-semibold transition-colors',
                      active
                        ? 'bg-primary-soft text-primary-deep'
                        : 'text-ink-muted hover:bg-surface-soft hover:text-ink',
                    )}
                  >
                    <Icon className="size-5 shrink-0" />
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
};
