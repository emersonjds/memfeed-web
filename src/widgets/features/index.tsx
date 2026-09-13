import Image from 'next/image';
import { Badge } from '@/shared/ui/badge';
import { Eyebrow, Section, SectionLead, SectionTitle } from '@/shared/ui/section';
import { Reveal } from '@/shared/ui/reveal';

export const Features = () => (
  <Section id="recursos">
    <div className="flex flex-col gap-4">
      <Reveal>
        <Eyebrow>Dentro do app</Eyebrow>
      </Reveal>
      <Reveal delay={0.06}>
        <SectionTitle className="max-w-3xl">
          Feito para caber no intervalo entre duas aulas.
        </SectionTitle>
      </Reveal>
      <Reveal delay={0.1}>
        <SectionLead>
          A familiaridade de um feed, com o freio que nenhum feed tem.
        </SectionLead>
      </Reveal>
    </div>

    <div className="mt-12 grid gap-4 lg:grid-cols-6">
      <Reveal className="lg:col-span-4">
        <article className="flex h-full flex-col gap-6 overflow-hidden rounded-3xl bg-surface-soft p-7 ring-1 ring-border-soft sm:flex-row sm:items-center sm:p-9">
          <div className="flex-1">
            <Badge>Evolução</Badge>
            <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-balance">
              Você contra o seu próprio esquecimento, nunca contra a turma
            </h3>
            <p className="mt-3 text-base leading-relaxed text-ink-muted text-pretty">
              Retenção em D+7 comparada com o mês passado, matéria por matéria, e sequência com
              folgas: um dia de descanso não zera o progresso.
            </p>
          </div>
          <div className="relative mx-auto aspect-[9/12] w-[190px] shrink-0 overflow-hidden rounded-2xl ring-1 ring-border-soft sm:w-[210px]">
            <Image
              src="/app/evolucao.png"
              alt="Tela de evolução do Memfeed mostrando a retenção do aluno e a sequência de dias de estudo"
              fill
              sizes="210px"
              className="object-cover object-top"
            />
          </div>
        </article>
      </Reveal>

      <Reveal delay={0.08} className="lg:col-span-2">
        <article className="flex h-full flex-col gap-4 rounded-3xl bg-ink p-7 text-white sm:p-9">
          <Badge tone="accent" className="bg-white/10 text-white">
            A sessão acaba
          </Badge>
          <h3 className="text-2xl font-extrabold tracking-tight text-balance">
            Sem scroll infinito. Sem “mais um card”.
          </h3>
          <p className="text-base leading-relaxed text-white/70 text-pretty">
            Você define a meta do dia. Quando ela termina, o Memfeed diz que acabou e fecha a
            sessão. Um único lembrete por dia, no horário que você escolher.
          </p>
        </article>
      </Reveal>

      <Reveal delay={0.12} className="lg:col-span-3">
        <article className="flex h-full flex-col gap-4 rounded-3xl bg-surface-soft p-7 ring-1 ring-border-soft sm:p-9">
          <Badge tone="neutral">Suas matérias</Badge>
          <h3 className="text-2xl font-extrabold tracking-tight text-balance">
            Cada matéria com a própria saúde de memória
          </h3>
          <p className="text-base leading-relaxed text-ink-muted text-pretty">
            Você vê quais conceitos estão firmes, quais vão decair nas próximas 48 horas e quanto
            tempo cada um aguenta sem revisão.
          </p>
        </article>
      </Reveal>

      <Reveal delay={0.16} className="lg:col-span-3">
        <article className="flex h-full flex-col gap-4 rounded-3xl bg-primary-soft p-7 ring-1 ring-primary/20 sm:p-9">
          <Badge>Sua curva</Badge>
          <h3 className="text-2xl font-extrabold tracking-tight text-balance">
            A prova de que a revisão está segurando
          </h3>
          <p className="text-base leading-relaxed text-ink-muted text-pretty">
            O perfil mostra o que você acertaria hoje comparado ao que sobraria sem ter revisado
            nada. É o argumento que faz você voltar amanhã.
          </p>
        </article>
      </Reveal>
    </div>
  </Section>
);
