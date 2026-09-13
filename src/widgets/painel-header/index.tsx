import { MenuIcon } from '@/shared/ui/icons';

type PainelHeaderProps = {
  readonly onOpenMenu: () => void;
};

// Professor logado é estático até a autenticação existir.
const professorLogado = 'Prof. Marcos · Biologia · 2º ano B';

export const PainelHeader = ({ onOpenMenu }: PainelHeaderProps) => (
  <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border-soft bg-surface px-4 sm:px-6">
    <button
      type="button"
      onClick={onOpenMenu}
      aria-label="Abrir menu"
      title="Abrir menu"
      className="flex size-11 shrink-0 items-center justify-center rounded-xl text-ink-muted hover:bg-surface-soft lg:hidden"
    >
      <MenuIcon className="size-6" />
    </button>
    <p className="truncate text-sm font-semibold text-ink sm:text-[15px]">{professorLogado}</p>
  </header>
);
