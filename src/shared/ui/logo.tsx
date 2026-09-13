import { cn } from '@/shared/lib/cn';

type LogoProps = {
  readonly className?: string;
};

export const Logo = ({ className }: LogoProps) => (
  <span className={cn('inline-flex items-center gap-2', className)}>
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-6 w-6 shrink-0"
      fill="none"
      stroke="var(--color-primary)"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 10h7M5 14.5h4.5M5 19h7" />
      <path d="M12 19a6 6 0 0 0 0-12h-2" />
      <path d="M12.5 4.5 10 7l2.5 2.5" />
    </svg>
    <span className="text-xl font-extrabold tracking-tight">Memfeed</span>
  </span>
);
