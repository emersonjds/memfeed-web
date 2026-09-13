import type { ReactNode } from 'react';
import { cn } from '@/shared/lib/cn';

type SectionProps = {
  readonly id?: string;
  readonly tone?: 'surface' | 'soft';
  readonly className?: string;
  readonly children: ReactNode;
};

export const Section = ({ id, tone = 'surface', className, children }: SectionProps) => (
  <section
    id={id}
    className={cn(
      'scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28 lg:py-32',
      tone === 'soft' ? 'bg-surface-soft' : 'bg-surface',
      className,
    )}
  >
    <div className="mx-auto w-full max-w-6xl">{children}</div>
  </section>
);

type EyebrowProps = {
  readonly children: ReactNode;
  readonly tone?: 'primary' | 'accent';
};

export const Eyebrow = ({ children, tone = 'primary' }: EyebrowProps) => (
  <p
    className={cn(
      'text-xs font-bold tracking-[0.16em] uppercase',
      tone === 'primary' ? 'text-primary-deep' : 'text-accent',
    )}
  >
    {children}
  </p>
);

type SectionTitleProps = {
  readonly children: ReactNode;
  readonly className?: string;
};

export const SectionTitle = ({ children, className }: SectionTitleProps) => (
  <h2
    className={cn(
      'text-3xl leading-[1.06] font-extrabold tracking-tight text-balance sm:text-4xl lg:text-5xl',
      className,
    )}
  >
    {children}
  </h2>
);

export const SectionLead = ({ children, className }: SectionTitleProps) => (
  <p className={cn('max-w-2xl text-lg leading-relaxed text-ink-muted text-pretty', className)}>
    {children}
  </p>
);
