import Link from 'next/link';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '@/shared/lib/cn';

type ButtonVariant = 'primary' | 'neutral' | 'ghost';
type ButtonSize = 'medium' | 'large';

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white shadow-[0_4px_0_0_var(--color-primary-deep)] hover:bg-primary-deep active:translate-y-[3px] active:shadow-[0_1px_0_0_var(--color-primary-deep)]',
  neutral:
    'bg-surface text-ink shadow-[0_2px_0_0_var(--color-border-hard)] ring-1 ring-border-soft hover:bg-surface-soft active:translate-y-[1px] active:shadow-none',
  ghost: 'text-ink-muted hover:bg-surface-soft hover:text-ink',
};

const sizeClasses: Record<ButtonSize, string> = {
  medium: 'min-h-11 px-5 text-[15px]',
  large: 'min-h-14 px-7 text-base sm:text-lg',
};

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-[background-color,transform,box-shadow] duration-150 ease-[var(--ease-out-soft)]';

type ButtonProps = {
  readonly variant?: ButtonVariant;
  readonly size?: ButtonSize;
  readonly className?: string;
  readonly children: ReactNode;
};

export const Button = ({
  variant = 'primary',
  size = 'medium',
  className,
  children,
  ...rest
}: ButtonProps & ComponentPropsWithoutRef<'button'>) => (
  <button
    className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
    {...rest}
  >
    {children}
  </button>
);

export const LinkButton = ({
  variant = 'primary',
  size = 'medium',
  className,
  children,
  href,
  ...rest
}: ButtonProps & ComponentPropsWithoutRef<typeof Link>) => (
  <Link
    href={href}
    className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
    {...rest}
  >
    {children}
  </Link>
);
