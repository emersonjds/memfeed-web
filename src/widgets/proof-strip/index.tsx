const claims = [
  'Algoritmo FSRS-5',
  'Curva de esquecimento de Ebbinghaus',
  'Recuperação ativa',
  'A sessão tem fim',
  'A IA pergunta, nunca responde',
  'Roda no Expo Go, sem instalar',
] as const;

export const ProofStrip = () => (
  <div className="overflow-hidden border-y border-border-soft bg-surface-soft py-4">
    <div className="flex w-max animate-marquee gap-10 pr-10 motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:px-5">
      {[0, 1].map((copyIndex) => (
        <ul
          key={copyIndex}
          aria-hidden={copyIndex === 1}
          className="flex shrink-0 items-center gap-10 motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-x-8 motion-reduce:gap-y-2"
        >
          {claims.map((claim) => (
            <li
              key={claim}
              className="flex items-center gap-3 text-sm font-bold tracking-wide whitespace-nowrap text-ink-muted uppercase"
            >
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
              {claim}
            </li>
          ))}
        </ul>
      ))}
    </div>
  </div>
);
