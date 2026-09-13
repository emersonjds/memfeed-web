import { QrCodePanel } from '@/features/expo-launch/ui/qr-code-panel';
import { HeroPhones } from './hero-phones';

export const Hero = () => (
  <section
    id="abrir"
    className="relative scroll-mt-20 overflow-hidden bg-surface px-5 pt-14 pb-20 sm:px-8 sm:pt-20 lg:pb-28"
  >
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(70%_60%_at_50%_0%,var(--color-primary-soft)_0%,transparent_70%)]"
    />

    <div className="mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
      <div className="flex flex-col items-start gap-6">
        <h1 className="text-[2.6rem] leading-[1.02] font-extrabold tracking-tight text-balance sm:text-6xl lg:text-[4.1rem]">
          O que você estudou hoje volta{' '}
          <span className="relative whitespace-nowrap text-primary-deep">
            antes de esquecer
            <svg
              aria-hidden="true"
              viewBox="0 0 320 12"
              className="absolute -bottom-1 left-0 h-3 w-full"
              preserveAspectRatio="none"
            >
              <path
                d="M4 8 C 80 2, 240 2, 316 7"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="5"
                strokeLinecap="round"
                opacity="0.35"
              />
            </svg>
          </span>
          .
        </h1>

        <p className="max-w-xl text-lg leading-relaxed text-ink-muted text-pretty sm:text-xl">
          O professor publica o que deu em aula. Você escolhe o que precisa revisar. O Memfeed
          transforma em perguntas de quinze segundos e devolve cada uma no dia em que a sua
          memória ia falhar. Sem scroll infinito: a sessão acaba de propósito.
        </p>

        <QrCodePanel size="large" className="w-full max-w-xl" />

        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-ink-muted">
          <li className="flex items-center gap-2">
            <CheckMark />
            Sem ranking entre alunos
          </li>
          <li className="flex items-center gap-2">
            <CheckMark />
            Você contra o seu esquecimento, não contra a turma
          </li>
        </ul>
      </div>

      <HeroPhones />
    </div>
  </section>
);

const CheckMark = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4 shrink-0 text-primary">
    <path
      d="M4 10.5 8 14.5 16 5.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
