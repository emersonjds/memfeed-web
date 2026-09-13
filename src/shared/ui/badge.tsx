import type { ReactNode } from 'react';
import { cn } from '@/shared/lib/cn';

type BadgeTone = 'primary' | 'accent' | 'neutral' | 'warn';

const toneClasses: Record<BadgeTone, string> = {
  primary: 'bg-primary-soft text-primary-deep',
  accent: 'bg-accent-soft text-accent',
  neutral: 'bg-surface-soft text-ink-muted ring-1 ring-border-soft',
  warn: 'bg-amber-50 text-amber-700',
};

type BadgeProps = {
  readonly tone?: BadgeTone;
  readonly className?: string;
  readonly children: ReactNode;
};

export const Badge = ({ tone = 'primary', className, children }: BadgeProps) => (
  <span
    className={cn(
      'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold',
      toneClasses[tone],
      className,
    )}
  >
    {children}
  </span>
);
