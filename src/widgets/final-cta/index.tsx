import { QrCodePanel } from '@/features/expo-launch/ui/qr-code-panel';
import { Reveal } from '@/shared/ui/reveal';

export const FinalCta = () => (
  <section className="relative overflow-hidden bg-ink px-5 py-24 text-white sm:px-8 lg:py-32">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 -z-0 h-[420px] bg-[radial-gradient(60%_70%_at_50%_100%,rgba(16,185,129,0.28)_0%,transparent_70%)]"
    />

    <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center gap-8 text-center">
      <Reveal className="flex flex-col items-center gap-5">
        <p className="text-xs font-bold tracking-[0.16em] text-primary uppercase">
          Comece pela sua primeira sessão
        </p>
        <h2 className="text-4xl leading-[1.04] font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl">
          Da matéria estudada uma vez para a matéria que fica.
        </h2>
        <p className="max-w-xl text-lg leading-relaxed text-white/70 text-pretty">
          Escaneie o código com a câmera do celular. O Memfeed abre pelo Expo Go, sem loja e sem
          cadastro — e a primeira sessão já começa com o assunto que você escolher.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="w-full">
        <QrCodePanel size="large" className="mx-auto w-full max-w-xl text-ink" />
      </Reveal>
    </div>
  </section>
);
