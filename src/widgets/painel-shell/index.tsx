'use client';

import { useState, type ReactNode } from 'react';
import { PainelHeader } from '@/widgets/painel-header';
import { PainelSidebar } from '@/widgets/painel-sidebar';

type PainelShellProps = {
  readonly children: ReactNode;
};

export const PainelShell = ({ children }: PainelShellProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-dvh bg-surface-soft">
      <PainelSidebar isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <div className="flex min-w-0 flex-1 flex-col">
        <PainelHeader onOpenMenu={() => setIsMobileMenuOpen(true)} />
        <main className="flex-1 px-4 py-5 sm:px-6 sm:py-8">{children}</main>
      </div>
    </div>
  );
};
