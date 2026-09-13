import { Eyebrow, Section, SectionLead, SectionTitle } from '@/shared/ui/section';
import { PhoneFrame } from '@/shared/ui/phone-frame';
import { Reveal } from '@/shared/ui/reveal';

const steps = [
  {
    number: '01',
    title: 'O professor publica, ou você escolhe o assunto',
    body: 'Prof. Marcos termina a aula e publica o tema para a turma. Ou você mesmo digita o que precisa revisar antes da prova. As duas origens entram na mesma fila de revisão.',
    screenshot: '/app/evolucao.png',
    alt: 'Tela de evolução do Memfeed com a retenção em sete dias e o histórico da semana',
  },
  {
    number: '02',
    title: 'A IA devolve perguntas, nunca a resposta pronta',
    body: 'Em segundos o conteúdo vira cards curtos sobre o que você mesmo escreveu. Quem precisa lembrar é você — esse é o ponto inteiro.',
    screenshot: '/app/feed.png',
    alt: 'Card do feed do Memfeed com uma pergunta de termodinâmica e quatro alternativas',
  },
  {
    number: '03',
    title: 'Cada card volta no dia em que ia escapar',
    body: 'Você avalia o quanto lembrou e o FSRS calcula o próximo encontro. A meta do dia termina, o app agradece e sai da frente.',
    screenshot: '/app/cadernos.png',
    alt: 'Tela de matérias do Memfeed com a retenção de cada assunto e a próxima revisão',
  },
] as const;

export const HowItWorks = () => (
  <Section id="como-funciona">
    <div className="flex flex-col gap-4">
      <Reveal>
        <Eyebrow>Como funciona</Eyebrow>
      </Reveal>
      <Reveal delay={0.06}>
        <SectionTitle>Três passos, e o resto é com a gente.</SectionTitle>
      </Reveal>
      <Reveal delay={0.1}>
        <SectionLead>
          Nenhum deck para montar, nenhuma planilha de revisão, nenhum conteúdo genérico de terceiro.
          O material é o seu.
        </SectionLead>
      </Reveal>
    </div>

    <ol className="mt-14 flex flex-col gap-16 lg:gap-24">
      {steps.map((step, index) => (
        <li
          key={step.number}
          className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16 lg:even:[&>div:first-child]:order-2"
        >
          <Reveal delay={0.05} className="flex flex-col gap-4">
            <span className="text-5xl font-extrabold tracking-tight text-border-hard tabular-nums">
              {step.number}
            </span>
            <h3 className="text-2xl leading-tight font-extrabold tracking-tight text-balance sm:text-3xl">
              {step.title}
            </h3>
            <p className="max-w-lg text-lg leading-relaxed text-ink-muted text-pretty">{step.body}</p>
          </Reveal>

          <Reveal delay={0.12} className="flex justify-center">
            <PhoneFrame
              src={step.screenshot}
              alt={step.alt}
              className="w-[240px] sm:w-[280px]"
              priority={index === 0}
            />
          </Reveal>
        </li>
      ))}
    </ol>
  </Section>
);
