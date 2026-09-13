import { Eyebrow, Section, SectionTitle } from '@/shared/ui/section';
import { Reveal } from '@/shared/ui/reveal';

const questions = [
  {
    question: 'Preciso instalar alguma coisa para testar?',
    answer:
      'Não. O código na tela abre o Memfeed dentro do Expo Go, o aplicativo gratuito que a Expo publica nas duas lojas. Se você já tiver o Expo Go, a leitura do código é o único passo.',
  },
  {
    question: 'Existe ranking entre os alunos?',
    answer:
      'Não. Um placar que ordena adolescentes por desempenho expõe publicamente quem vai mal, e isso contraria o motivo do produto existir. O único dado coletivo é a meta da turma: quantos conceitos ela consolidou na semana, sem expor ninguém individualmente.',
  },
  {
    question: 'A IA não me entrega a resposta pronta?',
    answer:
      'Ela gera a pergunta, você produz a resposta. O ganho de memória vem justamente do esforço de lembrar — entregar a resposta mastigada desfaria o efeito que o app existe para provocar.',
  },
  {
    question: 'O que é FSRS?',
    answer:
      'É o algoritmo de repetição espaçada que estima, para cada conceito, quando a sua lembrança está prestes a cair abaixo do ponto útil. É ele que decide se um card volta amanhã ou daqui a três semanas, a partir de como você avaliou a própria lembrança.',
  },
  {
    question: 'Serve para concurso e para vestibular?',
    answer:
      'Serve para qualquer conteúdo que você já tenha estudado e precise segurar por meses. O Memfeed não fornece o material: ele trabalha em cima do que você escreveu, leu ou resumiu.',
  },
  {
    question: 'Por que a sessão termina em vez de continuar?',
    answer:
      'Porque estudar mais tempo de uma vez não faz o conteúdo durar mais — a distribuição ao longo dos dias faz. Uma sessão que nunca acaba entregaria tempo de tela, e tempo de tela não é o que estamos otimizando.',
  },
] as const;

export const Faq = () => (
  <Section id="duvidas">
    <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
      <Reveal className="flex flex-col gap-4">
        <Eyebrow>Dúvidas</Eyebrow>
        <SectionTitle>O que perguntam antes de baixar.</SectionTitle>
      </Reveal>

      <div className="flex flex-col">
        {questions.map((item, index) => (
          <Reveal key={item.question} delay={0.04 * index}>
            <details className="group border-b border-border-soft">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-lg font-extrabold tracking-tight [&::-webkit-details-marker]:hidden">
                {item.question}
                <span
                  aria-hidden="true"
                  className="relative h-5 w-5 shrink-0 rounded-full bg-surface-soft ring-1 ring-border-soft"
                >
                  <span className="absolute top-1/2 left-1/2 h-0.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink" />
                  <span className="absolute top-1/2 left-1/2 h-2.5 w-0.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink transition-transform duration-200 group-open:scale-y-0" />
                </span>
              </summary>
              <p className="pb-6 text-[15px] leading-relaxed text-ink-muted text-pretty">
                {item.answer}
              </p>
            </details>
          </Reveal>
        ))}
      </div>
    </div>
  </Section>
);
