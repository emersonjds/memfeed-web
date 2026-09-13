# Landing pública do Desfeed

**Data:** 13 de setembro de 2026
**Estado:** implementado

## Problema

O Desfeed roda no Expo Go e é distribuído por QR code. Sem um site, o único caminho para alguém
testar o app é receber o link por mensagem de quem já conhece o projeto. A landing existe para
fechar essa lacuna: quem chega pela web precisa entender o produto e sair com o app aberto no
próprio celular.

## Decisões

### A conversão é o QR code, não um formulário

Não há captura de e-mail, não há espera por convite. O QR aparece duas vezes — acima da dobra, no
topo, e no fechamento da página — porque esses são os dois momentos em que o visitante decide.
Quem já está no celular não consegue escanear a própria tela, então o mesmo bloco mostra um botão
com o link direto abaixo de `sm`, escondido no desktop por CSS. A alternativa descartada era
detectar o dispositivo em JavaScript, que custaria hidratação numa página que hoje é HTML puro.

### O SVG do QR é gerado no servidor

`qrcode` roda no build e o SVG entra inline no HTML. Uma biblioteca de QR no cliente custaria
bundle e um salto de layout para renderizar algo que nunca muda entre visitantes. O valor
codificado vem de `NEXT_PUBLIC_EXPO_GO_URL`, o que permite apontar para o túnel do Expo em
desenvolvimento e para o projeto publicado em produção sem tocar em código.

### Saída estática, cinco componentes de cliente

A landing não tem dado dinâmico. Toda página nasce Server Component e sai prerenderizada. Os
únicos `"use client"` são `reveal`, `counter`, `hero-phones` e `forgetting-curve` — todos folhas
da árvore, todos por precisarem de observador de viewport ou de progresso de scroll.

### O conteúdo não depende de JavaScript

O contador entrega o número final já no HTML e a animação apenas o substitui; o efeito é o mesmo
e o texto sobrevive com JavaScript desligado. O FAQ usa `<details>` nativo, então toda resposta
está no HTML mesmo fechada — bom para leitor de tela e para indexação. Com
`prefers-reduced-motion: reduce`, `Reveal` devolve um `div` simples em vez de um elemento animado,
o que elimina qualquer risco de conteúdo preso em `opacity: 0`.

### Números rotulados como demonstração

O app não tem base de usuários. Exibir "93,8% de retenção" sem essa ressalva seria uma afirmação
falsa sobre o produto, não um detalhe de copy. A seção de números carrega um parágrafo explícito
dizendo que os valores são do protótipo e que a fonte vem junto quando houver dado real. Nenhum
depoimento, prêmio ou logotipo de imprensa aparece no site.

### A estrutura de seções

Cabeçalho fixo · herói com QR e capturas em parallax · faixa de conceitos · a ciência, com a curva
de esquecimento animada · três passos de como funciona · números · recursos em bento · o limite de
privacidade para professores · chamada final com o QR grande · dúvidas · rodapé.

A ordem segue o ritmo de uma landing de produto: promessa, prova do mecanismo, demonstração,
objeções, conversão. A seção para professores entra antes da chamada final porque a privacidade do
aluno é a objeção mais provável de quem avalia o projeto.

## Fronteira com a fase 2

O painel do professor vive neste repositório, na rota agrupada `(painel)`, e consome o OpenAPI da
`desfeed-api`. Hoje existe apenas a fronteira de rota: nenhuma tela, nenhum cliente de API, nenhum
estado de autenticação. Construir shell antes de haver contrato seria adivinhação.

## Verificação

`pnpm typecheck && pnpm lint && pnpm test:coverage && pnpm build`, com limiar de 90% travado nas
quatro métricas de cobertura.
