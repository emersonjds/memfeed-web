# memfeed-web

Site público do [Memfeed](../memfeed-app) — o aplicativo que transforma a página que você estudou
em perguntas curtas e devolve cada uma no dia em que a sua memória ia falhar.

A página inteira existe para um objetivo: levar o visitante do primeiro scroll até o app aberto no
celular dele, por QR code, sem passar por loja nem por cadastro.

## Rodando

```bash
pnpm install
cp .env.example .env.local   # aponte NEXT_PUBLIC_EXPO_GO_URL para o seu túnel do Expo
pnpm dev
```

## Verificação

```bash
pnpm typecheck
pnpm lint
pnpm test:coverage   # limiar de 90% nas quatro métricas
pnpm build
```

## Stack

Next.js 16 (App Router, saída estática), React 19, TypeScript estrito, Tailwind v4, Motion,
Vitest e Testing Library. As capturas de tela em `public/app/` vêm de `memfeed-app`.

Convenções de código, design system e fluxo de branch estão em [`CLAUDE.md`](./CLAUDE.md).
