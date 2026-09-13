export const ProofStrip = () => (
  <div className="border-y border-border-soft bg-surface-soft py-4">
    <div className="flex flex-col items-center gap-2 px-5 text-center">
      <p className="text-xs font-bold tracking-[0.16em] text-primary uppercase">
        Piloto em andamento
      </p>
      <p className="flex flex-wrap items-center justify-center gap-3 text-sm font-bold tracking-wide text-ink-muted uppercase">
        <span>Colégio Estadual Paulo Freire</span>
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
        <span>2º ano B</span>
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
        <span>34 alunos</span>
      </p>
    </div>
  </div>
);
