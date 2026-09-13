import Image from 'next/image';
import { cn } from '@/shared/lib/cn';

type PhoneFrameProps = {
  readonly src: string;
  readonly alt: string;
  readonly priority?: boolean;
  readonly className?: string;
};

export const PhoneFrame = ({ src, alt, priority = false, className }: PhoneFrameProps) => (
  <div
    className={cn(
      'relative w-full rounded-[2.75rem] bg-ink p-[5.5%]',
      'shadow-[0_28px_60px_-24px_rgba(15,19,29,0.5),0_1px_0_0_rgba(255,255,255,0.08)_inset]',
      'ring-1 ring-border-soft/60 ring-inset',
      className,
    )}
  >
    <span
      aria-hidden="true"
      className="absolute left-[-1.5%] top-[16%] h-[6%] w-[2%] rounded-r-full bg-[color-mix(in_oklch,var(--color-ink)_80%,white)]"
    />
    <span
      aria-hidden="true"
      className="absolute left-[-1.5%] top-[25%] h-[9%] w-[2%] rounded-r-full bg-[color-mix(in_oklch,var(--color-ink)_80%,white)]"
    />
    <span
      aria-hidden="true"
      className="absolute right-[-1.5%] top-[20%] h-[10%] w-[2%] rounded-l-full bg-[color-mix(in_oklch,var(--color-ink)_80%,white)]"
    />

    {/* A proporção vive na tela, não na moldura: com ela no contêiner externo o bisel
        come a altura e o object-cover passa a cortar as laterais da captura. */}
    <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2.1rem] bg-surface">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 80vw, 320px"
        priority={priority}
        className="object-cover object-top"
      />
    </div>
  </div>
);
