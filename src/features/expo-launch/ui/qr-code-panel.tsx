import { renderQrCodeSvg } from '@/shared/lib/qr-code';
import { siteConfig } from '@/shared/config/site';
import { cn } from '@/shared/lib/cn';
import { LinkButton } from '@/shared/ui/button';

type QrCodePanelProps = {
  readonly size?: 'medium' | 'large';
  readonly className?: string;
};

const sizeClasses = {
  medium: 'w-[164px] sm:w-[188px]',
  large: 'w-[200px] sm:w-[248px]',
} as const;

export const QrCodePanel = async ({ size = 'medium', className }: QrCodePanelProps) => {
  const qrCodeSvg = await renderQrCodeSvg(siteConfig.expoGoUrl);

  return (
    <div
      className={cn(
        'rounded-3xl bg-surface p-5 ring-1 ring-border-soft shadow-[0_4px_0_0_var(--color-border-hard)] sm:p-6',
        className,
      )}
    >
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-6">
        <div
          aria-hidden="true"
          className={cn(
            'shrink-0 rounded-2xl bg-primary-soft p-3 [&>svg]:h-auto [&>svg]:w-full',
            sizeClasses[size],
          )}
          dangerouslySetInnerHTML={{ __html: qrCodeSvg }}
        />

        <div className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left">
          <p className="text-lg font-extrabold tracking-tight text-balance sm:text-xl">
            Aponte a câmera do celular
          </p>
          <p className="max-w-xs text-sm leading-relaxed text-ink-muted">
            O Desfeed abre no seu aparelho pelo Expo Go. Sem loja, sem cadastro, sem instalar nada
            antes de ver funcionando.
          </p>
          <LinkButton
            href={siteConfig.expoGoUrl}
            size="medium"
            className="w-full sm:hidden"
            prefetch={false}
          >
            Estou no celular — abrir agora
          </LinkButton>
          <p className="hidden text-xs font-semibold tracking-wide text-ink-muted sm:block">
            Leva menos de 30 segundos.
          </p>
        </div>
      </div>
    </div>
  );
};
