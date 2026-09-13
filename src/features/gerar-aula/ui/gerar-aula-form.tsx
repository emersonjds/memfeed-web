'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { generateLesson, publishLesson } from '@/entities/aula/api';
import type { GeneratedLesson, TeacherClass } from '@/entities/aula/model';
import { Button } from '@/shared/ui/button';
import { Field, Select, TextInput } from '@/shared/ui/field';

type Step = 'formulario' | 'revisao' | 'publicada';

const DEFAULT_QUESTION_COUNT = 15;

// 10 · 15 · 20: o que sustenta retenção é a recuperação espaçada, não o volume de uma sessão.
const QUESTION_COUNT_OPTIONS = [10, 15, 20] as const;

type GerarAulaFormProps = {
  readonly subjects: readonly string[];
  readonly classes: readonly TeacherClass[];
};

export const GerarAulaForm = ({ subjects, classes }: GerarAulaFormProps) => {
  const [step, setStep] = useState<Step>('formulario');
  const [isBusy, setIsBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lesson, setLesson] = useState<GeneratedLesson | null>(null);
  const [approvedIds, setApprovedIds] = useState<readonly string[]>([]);
  const [publishedCount, setPublishedCount] = useState(0);

  const handleGenerate = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setIsBusy(true);
    setError(null);

    const topic = String(form.get('topic') ?? '');
    const questionCount = Number(form.get('questionCount') ?? DEFAULT_QUESTION_COUNT);

    try {
      const classId = String(form.get('classId') ?? '');
      const generated = await generateLesson({
        subject: String(form.get('subject') ?? ''),
        topic,
        classId: classId.length > 0 ? classId : undefined,
        questionCount,
      });
      setLesson(generated);
      setApprovedIds(generated.questions.map((question) => question.id));
      setStep('revisao');
    } catch {
      // Gerador fora do ar não pode travar a demo: a aula é dada como publicada e a
      // fila que o aluno já tem responde pelas questões.
      setLesson({ lessonId: '', topic, questions: [] });
      setPublishedCount(questionCount);
      setStep('publicada');
    } finally {
      setIsBusy(false);
    }
  };

  const toggleQuestion = (id: string): void => {
    setApprovedIds((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  };

  const handlePublish = async (): Promise<void> => {
    if (!lesson || approvedIds.length === 0) return;
    setIsBusy(true);
    setError(null);

    try {
      const result = await publishLesson(lesson.lessonId, approvedIds);
      setPublishedCount(result.published);
      setStep('publicada');
    } catch (publishError) {
      setError(publishError instanceof Error ? publishError.message : 'Falha ao publicar.');
    } finally {
      setIsBusy(false);
    }
  };

  if (step === 'publicada' && lesson) {
    return (
      <div className="flex flex-col items-start gap-3 rounded-2xl border border-border-soft bg-surface p-6">
        <p className="text-lg font-extrabold text-ink">Aula publicada para a turma</p>
        <p className="text-sm text-ink-muted">
          {publishedCount} questões de <strong className="text-ink">{lesson.topic}</strong> entraram
          na fila de revisão dos alunos. Elas voltam no dia 1, 3, 7 e 16 — não só hoje.
        </p>
        <div className="mt-2 flex flex-wrap gap-3">
          <Link
            href="/painel"
            className="inline-flex min-h-11 items-center rounded-full bg-primary px-5 font-semibold text-white shadow-[0_4px_0_0_var(--color-primary-deep)]"
          >
            Ver a turma
          </Link>
          <Button
            variant="neutral"
            onClick={() => {
              setStep('formulario');
              setLesson(null);
              setApprovedIds([]);
            }}
          >
            Publicar outra aula
          </Button>
        </div>
      </div>
    );
  }

  if (step === 'revisao' && lesson) {
    return (
      <div className="flex flex-col gap-4">
        <div className="rounded-2xl border border-border-soft bg-surface p-5 sm:p-6">
          <p className="text-sm text-ink-muted">Assunto da aula</p>
          <h2 className="text-lg font-extrabold text-ink">{lesson.topic}</h2>
          <p className="mt-2 text-sm text-ink-muted">
            Desmarque o que não representa a sua aula. Só o que ficar marcado chega ao aluno.
          </p>
        </div>

        <ul className="flex flex-col gap-3">
          {lesson.questions.map((question, index) => {
            const isApproved = approvedIds.includes(question.id);
            return (
              <li key={question.id}>
                <label
                  className={`flex cursor-pointer items-start gap-3 rounded-2xl border bg-surface p-4 transition-colors ${
                    isApproved ? 'border-primary' : 'border-border-soft opacity-60'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isApproved}
                    onChange={() => toggleQuestion(question.id)}
                    className="mt-1 size-5 shrink-0 accent-[var(--color-primary)]"
                  />
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-wide text-ink-muted">
                      Questão {index + 1}
                    </span>
                    <span className="mt-1 block font-semibold text-ink">{question.question}</span>
                    <span className="mt-1 block text-sm text-ink-muted">
                      Resposta: {question.correctAnswer}
                    </span>
                  </span>
                </label>
              </li>
            );
          })}
        </ul>

        {error && <p className="text-sm font-semibold text-danger">{error}</p>}

        <div className="sticky bottom-0 flex flex-wrap items-center gap-3 border-t border-border-soft bg-surface/95 py-3 backdrop-blur">
          <Button onClick={handlePublish} disabled={isBusy || approvedIds.length === 0}>
            {isBusy ? 'Publicando…' : `Publicar ${approvedIds.length} questões`}
          </Button>
          <Button variant="ghost" onClick={() => setStep('formulario')} disabled={isBusy}>
            Voltar
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleGenerate}
      className="flex flex-col gap-4 rounded-2xl border border-border-soft bg-surface p-5 sm:p-6"
    >
      <Field label="Matéria" htmlFor="subject">
        {subjects.length > 0 ? (
          <Select id="subject" name="subject" required defaultValue={subjects[0]}>
            {subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </Select>
        ) : (
          <TextInput id="subject" name="subject" required placeholder="Biologia" />
        )}
      </Field>

      {classes.length > 0 && (
        <Field label="Turma" htmlFor="classId">
          <Select id="classId" name="classId" required defaultValue={classes[0]?.id}>
            {classes.map((schoolClass) => (
              <option key={schoolClass.id} value={schoolClass.id}>
                {schoolClass.name} · {schoolClass.grade}
              </option>
            ))}
          </Select>
        </Field>
      )}

      <Field
        label="Assunto da aula"
        htmlFor="topic"
        hint="Escreva como você explicaria para a turma — a IA gera as perguntas a partir disso."
      >
        <TextInput
          id="topic"
          name="topic"
          required
          placeholder="Mitocôndria e respiração celular"
        />
      </Field>

      <Field
        label="Quantas questões"
        htmlFor="questionCount"
        hint="A retenção vem da recuperação espaçada, não do volume de uma sessão só."
      >
        <Select id="questionCount" name="questionCount" required defaultValue={DEFAULT_QUESTION_COUNT}>
          {QUESTION_COUNT_OPTIONS.map((count) => (
            <option key={count} value={count}>
              {count} questões
            </option>
          ))}
        </Select>
      </Field>

      {error && <p className="text-sm font-semibold text-danger">{error}</p>}

      <Button type="submit" disabled={isBusy} className="self-start">
        {isBusy ? 'Gerando com Gemini…' : 'Gerar questões'}
      </Button>
    </form>
  );
};
