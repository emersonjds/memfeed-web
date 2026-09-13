import { Counter } from '@/shared/ui/counter';
import { Eyebrow, Section, SectionTitle } from '@/shared/ui/section';
import { Reveal } from '@/shared/ui/reveal';

const metrics = [
  {
    value: 93.8,
    decimals: 1 as const,
    suffix: '%',
    label: 'de retenção média',
    note: 'quanto o aluno acerta quando um card volta',
  },
  {
    value: 15,
    decimals: 0 as const,
    suffix: 's',
    label: 'por pergunta',
    note: 'o tamanho de um card, do começo ao fim',
  },
  {
    value: 20,
    decimals: 0 as const,
    suffix: '',
    label: 'cards na meta do dia',
    note: 'você escolhe o número, e ele acaba',
  },
  {
    value: 0,
    decimals: 0 as const,
    suffix: '',
    label: 'notificação fora de hora',
    note: 'um aviso por dia, no horário que você marcar',
  },
] as const;

export const Numbers = () => (
  <Section tone="soft">
    <div className="flex flex-col gap-4">
      <Reveal>
        <Eyebrow tone="accent">Os números que importam</Eyebrow>
      </Reveal>
      <Reveal delay={0.06}>
        <SectionTitle className="max-w-3xl">
          Medimos o quanto fica na sua cabeça, nunca o tempo que você passa aqui.
        </SectionTitle>
      </Reveal>
    </div>

    <dl className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric, index) => (
        <Reveal
          key={metric.label}
          delay={0.06 * index}
          className="rounded-3xl bg-surface p-6 ring-1 ring-border-soft shadow-[0_4px_0_0_var(--color-border-hard)]"
        >
          <dd className="text-4xl font-extrabold tracking-tight text-primary-deep sm:text-5xl">
            <Counter value={metric.value} decimals={metric.decimals} suffix={metric.suffix} />
          </dd>
          <dt className="mt-2 text-base font-extrabold tracking-tight">{metric.label}</dt>
          <p className="mt-1 text-sm leading-relaxed text-ink-muted">{metric.note}</p>
        </Reveal>
      ))}
    </dl>

    <Reveal delay={0.2}>
      <p className="mt-8 text-sm text-ink-muted">
        Valores de demonstração do protótipo apresentado no HACKTUDO 2026. Ainda não temos base de
        usuários para publicar média real — quando tivermos, o número aqui muda e a fonte vem junto.
      </p>
    </Reveal>
  </Section>
);
