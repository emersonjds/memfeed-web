import { ForgettingCurve } from '@/entities/retention/ui/forgetting-curve';
import { Eyebrow, Section, SectionLead, SectionTitle } from '@/shared/ui/section';
import { Reveal } from '@/shared/ui/reveal';

const pillars = [
  {
    title: 'Recuperação ativa',
    body: 'Reler não fixa, lembrar fixa. Cada card cobra a resposta de você antes de mostrar qualquer coisa — o esforço é o que consolida.',
  },
  {
    title: 'Repetição espaçada',
    body: 'O FSRS estima quando cada conceito está prestes a escapar e devolve a pergunta exatamente ali, no ponto de maior ganho.',
  },
  {
    title: 'Efeito do teste',
    body: 'Errar e ver a resposta logo em seguida ensina mais do que acertar de primeira. O erro não te pune, ele reagenda.',
  },
] as const;

export const Science = () => (
  <Section id="ciencia" tone="soft">
    <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
      <Reveal className="flex flex-col gap-5">
        <Eyebrow>Por que funciona</Eyebrow>
        <SectionTitle>Você não esquece por falta de esforço. Esquece por falta de hora certa.</SectionTitle>
        <SectionLead>
          Uma semana depois da aula, boa parte do que você estudou já saiu. Não é preguiça, é como a
          memória funciona. O Desfeed não pede mais horas de estudo — pede os quinze segundos certos,
          no dia certo.
        </SectionLead>

        <ul className="mt-2 flex flex-col gap-5">
          {pillars.map((pillar, index) => (
            <Reveal as="li" key={pillar.title} delay={0.08 * index} className="flex gap-4">
              <span
                aria-hidden="true"
                className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-primary ring-4 ring-primary-soft"
              />
              <div>
                <h3 className="text-base font-extrabold tracking-tight">{pillar.title}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-ink-muted">{pillar.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.12}>
        <div className="rounded-3xl bg-surface p-6 ring-1 ring-border-soft shadow-[0_4px_0_0_var(--color-border-hard)] sm:p-8">
          <p className="text-xs font-bold tracking-[0.16em] text-ink-muted uppercase">
            Quanto você ainda lembra, 30 dias depois
          </p>
          <div className="mt-6">
            <ForgettingCurve />
          </div>
        </div>
      </Reveal>
    </div>
  </Section>
);
