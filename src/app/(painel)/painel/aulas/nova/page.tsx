import { GerarAulaForm } from '@/features/gerar-aula/ui/gerar-aula-form';

const NovaAulaPage = () => (
  <div className="flex max-w-3xl flex-col gap-4 md:gap-6">
    <div>
      <h1 className="text-xl font-extrabold text-ink sm:text-2xl">Nova aula</h1>
      <p className="text-sm text-ink-muted">
        Você acabou de dar a aula. Diga o assunto, revise uma vez e publique para a turma.
      </p>
    </div>
    <GerarAulaForm />
  </div>
);

export default NovaAulaPage;
