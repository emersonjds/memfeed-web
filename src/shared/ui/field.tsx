import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '@/shared/lib/cn';

const controlClasses =
  'min-h-11 w-full rounded-xl border border-border-soft bg-surface px-4 text-base text-ink transition-colors placeholder:text-ink-muted/60 focus:border-primary disabled:cursor-not-allowed disabled:bg-surface-soft disabled:text-ink-muted';

type FieldProps = {
  readonly label: string;
  readonly htmlFor: string;
  readonly hint?: string;
  readonly children: ReactNode;
};

export const Field = ({ label, htmlFor, hint, children }: FieldProps) => (
  <div className="flex flex-col gap-1.5">
    <label htmlFor={htmlFor} className="text-sm font-semibold text-ink">
      {label}
    </label>
    {children}
    {hint && <p className="text-xs text-ink-muted">{hint}</p>}
  </div>
);

export const TextInput = ({
  className,
  ...rest
}: ComponentPropsWithoutRef<'input'>) => (
  <input className={cn(controlClasses, className)} {...rest} />
);

export const NumberInput = ({
  className,
  ...rest
}: ComponentPropsWithoutRef<'input'>) => (
  <input type="number" inputMode="numeric" className={cn(controlClasses, className)} {...rest} />
);

export const Select = ({
  className,
  children,
  ...rest
}: ComponentPropsWithoutRef<'select'>) => (
  <select className={cn(controlClasses, 'appearance-none pr-10', className)} {...rest}>
    {children}
  </select>
);
