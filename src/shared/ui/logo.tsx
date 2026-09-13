import { cn } from '@/shared/lib/cn';

type LogoProps = {
  readonly className?: string;
};

export const Logo = ({ className }: LogoProps) => (
  <span className={cn('inline-flex items-center gap-2', className)}>
    <svg viewBox="0 0 40 20" aria-hidden="true" className="h-5 w-10 shrink-0">
      <path
        d="M10 4a6 6 0 1 0 0 12c4 0 6-4 10-4a6 6 0 1 1 0 12c-4 0-6-4-10-4"
        fill="none"
        stroke="var(--color-primary)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
    <span className="text-xl font-extrabold tracking-tight">Desfeed</span>
  </span>
);
