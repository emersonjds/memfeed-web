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
      'relative aspect-[9/19.5] w-full overflow-hidden rounded-[2.75rem] bg-ink p-[3px] shadow-[0_28px_60px_-24px_rgba(15,19,29,0.45)] ring-1 ring-border-soft',
      className,
    )}
  >
    <div className="relative h-full w-full overflow-hidden rounded-[2.6rem] bg-surface">
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
