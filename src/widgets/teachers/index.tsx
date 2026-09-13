import { Eyebrow, Section, SectionLead, SectionTitle } from '@/shared/ui/section';
import { Reveal } from '@/shared/ui/reveal';
import { LinkButton } from '@/shared/ui/button';

const guarantees = [
  {
    title: 'A turma, nunca o aluno',
    body: 'O painel mostra qual conceito a turma está perdendo. Nome de aluno e desempenho individual não existem nessa tela — é agregado por decisão de projeto, não por configuração.',
  },
  {
    title: 'O que o aluno escolhe é só dele',
    body: 'Quando o aluno digita o próprio assunto para revisar sozinho, isso não aparece para o professor. Só o que o professor publica é visto pela turma.',
  },
  {
    title: 'Serve para replanejar a aula',
    body: 'Se metade da turma erra o mesmo ponto na quarta, você sabe na quinta — antes da prova, não depois dela.',
  },
] as const;

export const Teachers = () => (
  <Section id="professores" tone="soft">
    <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
      <Reveal className="flex flex-col gap-5">
        <Eyebrow tone="accent">Para professores</Eyebrow>
        <SectionTitle>Você vê onde a turma está escorregando. Só isso.</SectionTitle>
        <SectionLead>
          O painel do professor já existe, e nasce com um limite escrito no código: o dado é
          sempre da turma inteira.
        </SectionLead>
        <LinkButton href="/painel" variant="neutral" size="medium" className="self-start">
          Acessar como professor
        </LinkButton>
      </Reveal>

      <ul className="flex flex-col gap-4">
        {guarantees.map((guarantee, index) => (
          <Reveal
            as="li"
            key={guarantee.title}
            delay={0.07 * index}
            className="rounded-3xl bg-surface p-6 ring-1 ring-border-soft"
          >
            <h3 className="text-lg font-extrabold tracking-tight">{guarantee.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{guarantee.body}</p>
          </Reveal>
        ))}
      </ul>
    </div>
  </Section>
);
