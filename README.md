<div align="center">

<img src="public/memfeed-mark.svg" width="72" alt="" />

# memfeed-web

**A landing pública e o painel do professor.**

Uma página que leva o visitante até o app no celular dele por QR code, e um painel onde o
professor publica a aula que acabou de dar e descobre o que a turma esqueceu uma semana depois.

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Arquitetura](https://img.shields.io/badge/arquitetura-Feature--Sliced_Design-4F46E5?style=flat-square)
![Gemini](https://img.shields.io/badge/IA-Google_Gemini-8E75B2?style=flat-square&logo=googlegemini&logoColor=white)

[![Site no ar](https://img.shields.io/badge/site-memfeed--web.netlify.app-10B981?style=flat-square&logo=netlify&logoColor=white)](https://memfeed-web.netlify.app)
[![App do aluno](https://img.shields.io/badge/app_do_aluno-memfeed--app-4F46E5?style=flat-square&logo=expo&logoColor=white)](https://github.com/emersonjds/memfeed-app)

**[Ver no ar](https://memfeed-web.netlify.app)** · **[App do aluno (mobile)](https://github.com/emersonjds/memfeed-app)** · **[API](https://github.com/emersonjds/memfeed-api)**

</div>

---

## Duas superfícies, um repositório

| Rota | O que é | Renderização |
| --- | --- | --- |
| `/` | Landing pública. O QR abre o [app do aluno](https://memfeed-app.netlify.app) direto no navegador — sem loja, sem cadastro. | Estática no build |
| `/painel` | Turma: as quatro métricas, a curva de retenção e os conceitos que mais caíram. | Sob demanda |
| `/painel/analises` | Abas **Turma** e **Alunos**. O detalhamento pesado mora aqui. | Sob demanda |
| `/painel/aulas` | Aulas publicadas, com turma, colégio e horário. Cada linha abre o detalhe. | Sob demanda |
| `/painel/aulas/[id]` | Conceitos da aula, onde a turma está em cada um, e quem ainda não respondeu. | Sob demanda |
| `/painel/aulas/nova` | Matéria, turma, assunto e quantas questões. O **Gemini** gera as questões, o professor revisa uma vez e publica. | Sob demanda |

## O que o painel mostra que ninguém mais mostra

Kahoot e Wayground sabem se o aluno acertou. O gráfico longitudinal do Wayground plota uma
atividade diferente a cada ponto — é a nota subindo no bimestre. Aqui o **mesmo conceito** é
reaplicado num intervalo calculado pelo FSRS e comparado contra o acerto do dia da aula:

```
Ciclo de Krebs        96% no dia da aula    77% uma semana depois    −19 pp
```

Um mede progresso. O outro mede esquecimento.

### Duas regras que o painel não quebra

**Nunca ordena aluno por desempenho.** A aba Alunos é alfabética e mostra *estado* — firme, em
risco, esquecido — nunca nota nem posição. Ela existe para o professor **agir** sobre quem
precisa, com a ação "gerar reforço", que cria uma sessão dirigida aos conceitos em que aquele
aluno trava e que só ele enxerga.

**Nome aparece só para participação.** Quem ainda não respondeu é fato operacional. Quem errou
o quê, não.

## Rodando local

Pré-requisitos: Node 22+ e pnpm.

```bash
pnpm install
cp .env.example .env.local
pnpm dev            # http://localhost:3000 (ou a próxima porta livre, se a API já ocupou a 3000)
```

`.env.local`:

```bash
NEXT_PUBLIC_API_URL=http://localhost:3000            # memfeed-api local (ou a URL do Railway)
NEXT_PUBLIC_TEACHER_ID=22222222-2222-4222-8222-222222222222
NEXT_PUBLIC_APP_URL=https://memfeed-app.netlify.app  # para onde o QR da landing aponta
```

As questões do painel são geradas por LLM de verdade — **Google Gemini**, integrado na
[`memfeed-api`](https://github.com/emersonjds/memfeed-api) com contrato validado por JSON schema.

O painel consome a [`memfeed-api`](https://github.com/emersonjds/memfeed-api) por HTTP. **Se a
API não responder, a tela cai no relatório de demonstração em vez de quebrar** — uma falha de
rede degrada o painel, não apaga ele.

## Verificação

```bash
pnpm typecheck && pnpm lint && pnpm test && pnpm build
```

## Stack

Next.js 16 (App Router) · React 19 · TypeScript estrito · Tailwind v4 · Motion 13 ·
`qrcode` para o SVG do código · Vitest e Testing Library.

Nenhuma biblioteca de componente pronta: os primitivos vivem em `src/shared/ui/` e são poucos
de propósito. A landing é estática e `"use client"` só entra na folha da árvore, onde existe
interação real de browser.

**Mobile first de verdade.** O professor abre o painel em pé, na sala de aula, no celular.
Projetado em 375px, aberto para desktop depois — nunca o contrário.

Convenções de código, design system e fluxo de branch estão em [`CLAUDE.md`](./CLAUDE.md).

## Repositórios

| | |
| --- | --- |
| [`memfeed-app`](https://github.com/emersonjds/memfeed-app) | Expo / React Native — o app do aluno |
| [`memfeed-api`](https://github.com/emersonjds/memfeed-api) | Fastify / PostgreSQL — a API |
