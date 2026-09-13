import type { ReactNode } from 'react';
import { PainelShell } from '@/widgets/painel-shell';

const PainelLayout = ({ children }: { readonly children: ReactNode }) => (
  <PainelShell>{children}</PainelShell>
);

export default PainelLayout;
