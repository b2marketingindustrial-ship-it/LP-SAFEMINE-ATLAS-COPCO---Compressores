# Registro da LP — o que a ficha decidiu e o que a execução fez

> Preenchido pelo agente **durante a execução**, a partir de `docs/FICHA-LP.md`. Não é um registro de entrevista: a entrevista aconteceu no chat web (`docs/PROMPT-FICHA-LP.md`) e a ficha é a fonte. Este arquivo existe para que, meses depois e sem a conversa, se saiba de onde veio cada coisa — e porque `docs/briefing-cliente/` fica fora do git.
>
> Nada aqui é perguntado ao usuário. Se um campo não puder ser preenchido a partir da ficha, a execução para e recusa, em vez de deixar lacuna.

> **Desvio de processo desta LP:** não houve conversa de chat com o `PROMPT-FICHA-LP.md`. A ficha foi montada no editor, em 29/10/2026, a partir do briefing organizado de 28/10/2026, do brief de página enviado no chat e do site da Safe Mine — como na LP SEIVE do mesmo cliente. Tudo o que dependia de confirmação do cliente virou pendência declarada abaixo, e não valor inventado.

## Origem

| Campo                     | Valor                                                                                                                                              |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ficha de execução         | `docs/FICHA-LP.md`                                                                                                                                 |
| Data da ficha             | 2026-10-29                                                                                                                                         |
| Versão do padrão na ficha | 2.8.0 (o briefing cita v2.9.0, que não existe no starter)                                                                                          |
| Validada em               | 29/10/2026 por `npm run ficha`                                                                                                                     |
| Material bruto do cliente | `docs/briefing-cliente/briefing-safe-mine-compressores-portateis.md` (fora do git) e o site safeminesolucoes.com.br                                |
| Briefing de campanha      | sim — `ATC_PESQ_COMPRESSORES_B2B`; a conta Google Ads da Safe Mine (446-892-6092) ainda não tem nenhuma campanha criada (consultada em 29/10/2026) |
| Fora desta execução       | ATC_PESQ_TORRES_B2B, ATC_PESQ_GERADORES_B2B, ATC_PESQ_BESS_B2B, ATC_PESQ_WEDA_B2B e as campanhas SEIVE — cada uma é outra LP                       |

**Cliente e fabricante.** A Safe Mine Soluções é quem anuncia, como fornecedora consultiva dos compressores portáteis Atlas Copco (linha APE). A Atlas Copco aparece só por extenso; "distribuidor autorizado" e a logo da fabricante esperam confirmação.

## Campanha

| Campo                      | Valor                                                                                                                                                                                 |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Palavra-chave principal    | `compressor portátil atlas copco` — literal no H1 e no title                                                                                                                          |
| Origem                     | briefing de campanha + lista de 13 termos informada pelo usuário                                                                                                                      |
| Área atendida              | não definida — a campanha ainda não existe; nenhuma área declarada na página                                                                                                          |
| Negativas de oferta        | geladeira, ar condicionado, mini compressor pneu, inflador, aerógrafo, odontológico, doméstico, áudio, ferramentas pneumáticas, bateria                                               |
| Claims proibidos           | fabricante/filial, canal oficial, locação e manutenção como serviço próprio, cobertura nacional, superlativos, "autorizado", "representante" — lista completa em `campaign.forbidden` |
| Divergência de vocabulário | o cliente diz "Compressores APE" e "Small/Medium/Large Air"; a campanha compra "compressor portátil" e "grande vazão"                                                                 |

### Famílias de palavra-chave

| Família           | Termos                                                                                                                                                              | Bloco que responde | Status  |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------- |
| produto-categoria | compressor de ar portátil industrial, compressor de ar elétrico portátil industrial, compressor a diesel industrial, compressor de ar a diesel, compressor a diesel | `linhas`           | coberta |
| marca             | compressor portátil atlas copco, compressor atlas copco diesel, compressor a diesel atlas copco                                                                     | hero, `linhas`     | coberta |
| grande-vazao      | compressor de grande vazão                                                                                                                                          | `linhas`           | coberta |
| aplicacao         | compressor para perfuração, compressor para jateamento                                                                                                              | `aplicacoes`       | coberta |
| setor             | compressor para mineração                                                                                                                                           | `aplicacoes`       | coberta |
| cotacao           | cotação compressor atlas copco                                                                                                                                      | `identificar`      | coberta |

### Comitê de compra

| Papel      | Argumento de compra                      | Bloco que responde                     | Status                            |
| ---------- | ---------------------------------------- | -------------------------------------- | --------------------------------- |
| Manutenção | disponibilidade de equipamento           | `aplicacoes`, `diferenciais`           | coberto                           |
| Operações  | ar para o serviço de campo               | `linhas`, `aplicacoes`, `diferenciais` | coberto                           |
| Engenharia | aplicação, vazão, pressão e motor        | `linhas`, `identificar`                | coberto                           |
| Compras    | cotação, avaliação técnica, alternativas | `identificar`, `diferenciais`          | coberto                           |
| Diretoria  | risco e retorno                          | —                                      | lacuna (fora do público da ficha) |

## Composição

Derivada em: 29/10/2026 · comando aplicado: `npm run compose -- linhas identificar aplicacoes diferenciais`

### Seções que entraram

| Fase       | Seção          | Fundo     | Respiro     | Veredicto na ficha | Famílias que responde                  |
| ---------- | -------------- | --------- | ----------- | ------------------ | -------------------------------------- |
| oferta     | `linhas`       | branco    | pt-20 pb-10 | completo           | produto-categoria, marca, grande-vazao |
| apoio      | `identificar`  | branco    | pt-6 pb-16  | completo · navy    | cotacao                                |
| prova      | `aplicacoes`   | cinza-100 | pt-4 pb-20  | completo           | aplicacao, setor                       |
| autoridade | `diferenciais` | cinza-100 | pt-6 pb-8   | completo · navy    | produto-categoria, grande-vazao        |

### Blocos que ficaram fora

| Bloco            | Veredicto     | O que falta para entrar                                          |
| ---------------- | ------------- | ---------------------------------------------------------------- |
| `especificacoes` | quase         | W1000 x W1100 e porte da X-AIR; a tabela já está pronta na ficha |
| `perguntas`      | quase         | validação do comercial; prazo, disponibilidade e região          |
| `vitrine`        | insuficiente  | foto e descrição por modelo                                      |
| `processo`       | insuficiente  | processo real de atendimento, com etapas e responsáveis          |
| `situacoes`      | insuficiente  | gatilhos de contato reais (a compra é planejada)                 |
| `segmentos`      | insuficiente  | 7 setores com descrição e 3 equipamentos cada                    |
| `clientes`       | insuficiente  | 4 logos de cliente autorizados e 3 números com fonte             |
| `escopo`         | não se aplica | não é consolidação de compras                                    |

## Entradas do núcleo

| #   | Entrada                 | Valor                                                                                                | Origem                              |
| --- | ----------------------- | ---------------------------------------------------------------------------------------------------- | ----------------------------------- |
| 1   | MARCA                   | Safe Mine Soluções                                                                                   | planejamento integrado              |
| 2   | MARCA_CURTA             | Safe Mine                                                                                            | apresentação                        |
| 3   | PRODUTO_PRINCIPAL       | Compressores portáteis Atlas Copco                                                                   | mockup do topo (29/10)              |
| 4   | CONTEXTO_DE_USO         | obras, mineração e perfuração                                                                        | H1 sugerido no briefing             |
| 5   | PUBLICO                 | Manutenção, Operações, Engenharia, Compras                                                           | brief da página                     |
| 6   | HERO                    | na ficha: diesel/elétrico WEG · 100–1.567 CFM e 30 bar · aplicações; na página, a faixa das 4 linhas | briefing + mockup do topo           |
| 7   | MARCAS_ATENDIDAS        | Atlas Copco, só por extenso                                                                          | logo sem autorização                |
| 8   | SELOS_DE_CONFIANCA      | Atendimento consultivo · Resposta rápida · Cotação pela descrição do serviço                         | apresentação + briefing             |
| 9   | ENDERECO                | Rua José de Paula Filho, 128 - Europa, Contagem - MG, 32043-050                                      | informado no chat                   |
| 10  | URL_FINAL + PRIVACIDADE | `https://lp-atlas-copco-compressores-portate.vercel.app/` (provisória); sem política                 | pendência                           |
| 11  | SHORTCODES              | `[atendimento_chat id="default"]` · `[atendimento_form id="default-form"]`                           | default do padrão                   |
| 12  | WHATSAPP                | 5531995538843                                                                                        | planejamento integrado              |
| 13  | STACK + PUBLICACAO      | Astro, `main` → `wp-build`                                                                           | default do padrão                   |
| 14  | TOKENS_DE_COR + FONTE   | azul #163b99 (navy #102c73), verde #7ba249 escurecido para #4d7f22; Manrope                          | os mesmos da LP SEIVE (CSS do site) |
| 15  | CAMPANHA                | `compressor portátil atlas copco`                                                                    | briefing de campanha                |

## Assets

| Asset         | Arquivo esperado                 | Especificação               | Status                                                                |
| ------------- | -------------------------------- | --------------------------- | --------------------------------------------------------------------- |
| Logo          | `src/assets/LOGO.png`            | 240×200, fundo transparente | entregue — o mesmo da LP SEIVE (site da Safe Mine); usado no og:image |
| Logo da barra | `src/assets/marca-safe-mine.png` | 841×180, fundo transparente | recortado do logo do site da Safe Mine (8000×2081)                    |
| Foto do hero  | `src/assets/heroBg.png`          | 1020×721 (card)             | recorte do banner entregue em 29/10 com o mockup                      |

| Asset                 | Arquivo esperado                             | Especificação         | Status                                                      |
| --------------------- | -------------------------------------------- | --------------------- | ----------------------------------------------------------- |
| Small Air             | `src/assets/linhas/linha-1.png`              | PNG 800×600 recortado | provisória — recorte do mockup                              |
| Medium Air            | `src/assets/linhas/linha-2.png`              | PNG 800×600 recortado | provisória — recorte do mockup                              |
| Large Air             | `src/assets/linhas/linha-3.png`              | PNG 800×600 recortado | provisória — recorte do mockup                              |
| Elétricos WEG         | `src/assets/linhas/marcas.png`               | 800×600, fundo branco | provisória — recorte do mockup                              |
| Aplicações 1–4        | `src/assets/aplicacoes/aplicacao-{1..4}.png` | 1200×900 (4:3)        | provisórias — recorte do mockup; direito de uso a confirmar |
| Foto dos diferenciais | `src/assets/diferenciais/cenario.jpg`        | 1600×900              | provisória — recorte do mockup                              |

As fotos de produto e de aplicação citadas no briefing estão no PPT "Atlas Copco – APE", que não está nesta máquina; a maioria dos recortes ficava abaixo da resolução pedida.

## Conflitos com o padrão

| O que o material pedia                                           | Regra do padrão                                  | O que entrou no lugar                                                          |
| ---------------------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------ |
| Formulário próprio (aplicação, CFM, bar, diesel/elétrico, linha) | só shortcode do plugin                           | shortcodes padrão; os campos viraram o painel "Não sabe a vazão ou a pressão?" |
| CTAs próprios ("Cotar Small", "Consultar elétricos"…)            | vocabulário de CTA fixo                          | CTAs do padrão; `data-cta` por linha separa Small, Medium, Large e elétricos   |
| Logo da Atlas Copco                                              | logo de terceiro só com autorização              | nome por extenso; carrossel de marcas vazio                                    |
| Porte da X-AIR divergente entre as fontes                        | não inventar fato                                | classificação da fabricante (Medium Air)                                       |
| H185/H250/H450 como elétricos, com motor Kubota/Perkins          | não inventar fato                                | fora da página até a confirmação                                               |
| Cobertura nacional do site atual                                 | claim proibido no planejamento                   | nenhuma área declarada                                                         |
| Title no formato padrão (92 caracteres)                          | title ≤ 70 caracteres                            | "Compressor portátil Atlas Copco para obras e mineração \| Safe Mine"          |
| Header e Hero do mockup aprovado em 29/10/2026                   | Header e Hero são estrutura fixa (4.1.1 e 4.1.2) | o layout do mockup, como desvio desta LP — ver "Desvio de estrutura fixa"      |

## Desvio de estrutura fixa — Header e Hero

Em 29/10/2026 o topo da página foi refeito a partir do mockup enviado pela B2 (segunda versão, tema claro), no lugar do Header e do Hero do padrão (itens 4.1.1 e 4.1.2):

- **Header**: barra branca flutuante e fixa, com logo colorido (`marca-safe-mine.png`, recortado do logo do site), âncoras "Compressores" (`#linhas`) e "Aplicações" (`#aplicacoes`) e CTA verde "Solicitar cotação". Sem tagline nem placa do logo; o padrão proíbe menu, e o mockup o pede.
- **Hero**: fundo claro, duas colunas — texto e foto em card arredondado que sangra até 24 px da borda da tela no desktop. H1 no plural com "mineração e perfuração" em verde; link "Encontrar minha linha" que rola até `#linhas` (`data-cta="hero-secondary"`); bloco "Não sabe a vazão ou a pressão?"; faixa "Encontre a linha para a sua aplicação" com um CTA por linha (`hero-linha-small-air`, `hero-linha-medium-air`, `hero-linha-large-air`, `hero-linha-eletricos`).
- **Foto**: `heroBg.png` é um recorte (1020×721) do banner entregue com o mockup, só com a pedreira e os compressores. O banner inteiro (com o degradê navy) está no commit 2f75761. O `check:lp` avisa que ela não tem 1981×900 — a especificação do banner de tela cheia, que não se aplica ao card.
- **Sem a coluna de 300 px do chat**: o shortcode do chat continua em `site.ts` e no `index.astro` gerado, mas o Hero não o renderiza. O formulário segue na Cotação.
- **CTA primário** passa a "Solicitar cotação" em toda a página (era "Solicite sua cotação").
- **`check:lp`**: as assinaturas de Header e Hero (A8) foram trocadas pelas da estrutura nova, para a verificação continuar valendo.
- O mockup mostra o compressor XAS "saindo" do card pela base; isso pede um recorte do equipamento com fundo transparente e não foi feito.
- Os 3 pontos do hero ficam na ficha (o validador exige), mas a página mostra no lugar a faixa das 4 linhas.

Se este topo virar padrão, a mudança é no starter (template + `check-lp.mjs`), com versão nova.

### Fotos provisórias e o portão de publicação

As 9 fotos recortadas dos mockups (4 de `linhas`, 4 de `aplicacoes` e `diferenciais/cenario.jpg`) foram registradas em `placeholders.json` como imagens de exemplo, com a anotação "provisória: recorte do mockup". Sem isso, o `npm run verify` passaria inteiro e o próximo push publicaria os recortes na branch `wp-build`, que o plugin do WordPress lê. Com o registro, `check:lp:rascunho` as tolera (os 3 slots seguem em `assets.pendentes`) e o `verify` e o CI as barram. Quando a foto original chegar, ela substitui o arquivo com o mesmo nome e a assinatura deixa de bater — não é preciso mexer na lista.

### Seção "Linhas por porte"

Também em 29/10/2026, a seção `linhas` passou ao layout do mockup seguinte: cabeçalho em duas colunas com "cada exigência de ar" em verde, 4 cards claros (sem o card escuro da biblioteca) com foto, vazão e pressão lado a lado, motor e botão "Falar com especialista" de largura total, e a faixa "Não sabe qual compressor escolher?" com o CTA `linhas-orientacao`. A partir de 1280 px os cards são subgrid, para título, dados e motor ficarem alinhados; abaixo disso, 2 colunas.

- O componente `src/components/sections/ProductLines.astro` foi alterado dentro da LP. **`npm run compose` o sobrescreve com o da biblioteca** — guarde-o antes de recompor, ou leve o layout para a biblioteca como seção nova.
- Os dados seguem o contrato da biblioteca: `dark: true` continua no card elétrico (o contrato exige um), mas o componente não o usa; `features` é posicional (vazão, pressão, motor). Campos novos em `linhas.ts`: `titleHighlight`, `specLabels`, `help`, `note`.
- As descrições dos cards foram encurtadas como no mockup (sem "Ar móvel para" / "Para"), na ficha e nos dados.
- **Fotos provisórias**: as 4 fotos de produto foram recortadas do próprio mockup (cerca de 330 px de largura útil, ampliadas para 800×600 com fundo branco). Servem para a revisão; o slot `linhas` continua em `assets.pendentes` até chegarem os originais.

### Seção "Dados para cotação" (`identificar`)

Também em 29/10/2026, o painel passou ao layout do mockup: card dividido, com bloco navy à esquerda (título, texto, botão "Receber indicação e cotação" com `data-cta="identificar-cta"` e a frase de reforço) e, à direita, "O que ajuda na sua cotação" com os 6 dados em dois grupos — Aplicação em destaque, Cidade/UF e Acionamento; e, sob "Se souber, envie também", Vazão, Pressão e Linha. Lado a lado a partir de 1280 px; abaixo, empilhado. Continua sendo o bloco navy da primeira metade da página.

- O componente `src/components/sections/SupportPanel.astro` foi alterado dentro da LP. **`npm run compose` o sobrescreve com o da biblioteca** — guarde-o antes de recompor.
- Texto, reforço e itens foram atualizados na ficha e nos dados. O reforço do mockup ("Você pode pedir cotação sem ter os dados técnicos.") tem 50 caracteres e o contrato da seção aceita 48: entrou "Você pode pedir cotação sem os dados técnicos.".
- Campos novos em `identificar.ts`, fora da ficha: `ctaLabel` e `list` (título, texto, rótulo do grupo opcional e o índice em que ele começa).
- Ícones `file` e `pin` no lugar de `file-text` e `map-pin`: o validador da ficha só reconhece nomes de ícone sem hífen.

### Seção "Aplicações"

Também em 29/10/2026, a seção `aplicacoes` passou ao layout do mockup: cabeçalho em duas colunas com "cada serviço de campo" em verde; 4 cards brancos com foto, descrição nova e a chamada "Cotar para esta aplicação" (o card inteiro continua sendo o botão, `aplicacoes-{id}`); e a faixa "Sua aplicação não está aqui?" com o botão "Falar com especialista" (`aplicacoes-outra`). 4 colunas a partir de 1280 px; 2 abaixo disso.

- O componente `src/components/sections/ApplicationsGallery.astro` foi alterado dentro da LP. **`npm run compose` o sobrescreve com o da biblioteca** — guarde-o antes de recompor.
- As 4 descrições vieram do mockup, na ficha e nos dados. Campos novos em `aplicacoes.ts`: `titleHighlight`, `cardCta` e `help`.
- **Fotos provisórias**: as 4 fotos de aplicação foram recortadas do mockup (cerca de 400 px de largura útil, ampliadas para 800×600). O slot `aplicacoes` continua em `assets.pendentes` até chegarem as fotos reais 1200×900, com o direito de uso confirmado.

### Seção "Diferenciais"

Também em 29/10/2026, a seção `diferenciais` passou ao layout do mockup: frase de autoridade com "cada aplicação." em verde, texto, botão "Solicitar cotação" (`diferenciais-cta`) e linha de apoio ao lado de uma foto em card; abaixo, os 5 diferenciais num painel navy com ícones verdes — o bloco navy da segunda metade da página. Sem os cards sobrepostos nem a pessoa recortada do padrão.

- O componente `src/components/sections/WhyBrand.astro` foi alterado dentro da LP. **`npm run compose` o sobrescreve com o da biblioteca** — guarde-o antes de recompor.
- Texto e 5º diferencial ("Orientação para encontrar a solução para sua operação.") vieram do mockup, na ficha e nos dados; ícones `user` (novo) e `zap`. Campo novo em `diferenciais.ts`: `help`. O campo `person` saiu da ficha e dos dados, e `pessoa.png` foi apagada.
- **Foto provisória**: `cenario.jpg` é o técnico com tablet ao lado do compressor, recortado do mockup (904 px úteis, ampliado para 1400). O slot `diferenciais` continua em `assets.pendentes` até chegar a foto original.

### Seção "Cotação" (estrutura fixa)

Também em 29/10/2026, o visual da Cotação passou ao mockup, mantendo grid (1.05fr · 1fr), ordem, ritmo (`pt-8 pb-20`), fundo e as assinaturas que o `check:lp` confere: o formulário (shortcode) fica dentro de um card branco com a nota de LGPD embaixo; o título tem "compressores portáteis." em verde; o botão "Chamar no WhatsApp" (`cotacao-whatsapp`) passa a verde, contra a regra do padrão de deixá-lo navy para não competir com o envio do formulário; entra a linha "Não sabe a vazão ou a pressão? Basta descrever o serviço."; e os 3 selos ganham ícone maior e divisórias. Campos novos em `quote` (`content.ts`): `titleHighlight` e `help`. O ícone `whatsapp` ganhou o fone dentro do balão (vale também para o botão flutuante). O título fica menor que no mockup (2,5rem): o mockup usa uma coluna de texto mais larga que o container de 1320 px do padrão. O rodapé não mudou — o do mockup é o mesmo.

Com as seções refeitas, os primitivos `Button`, `Eyebrow` e `SectionHeader` ficaram sem uso nesta LP. Eles continuam no projeto porque os componentes da biblioteca os importam: se a página for recomposta, voltam a ser usados.

### Quinas arredondadas nas trocas de fundo

Onde o fundo muda, a quina é arredondada (2rem no celular, 3rem a partir de 640 px): a base do topo sobre a seção de linhas, o início do bloco cinza em `aplicacoes` e a base da Cotação sobre o rodapé. Na Cotação e no rodapé (estrutura fixa) o arredondamento é feito por CSS escopado — `#cotacao` acima e o `footer` subindo por baixo dela com margem negativa e o mesmo padding de compensação —, para não mexer nos trechos de classe que o `check:lp` confere.

## Dados não aplicados

Segundo WhatsApp (31) 99710-0350; e-mail, LinkedIn, Instagram e QR code; razão social e CNPJ; controlador PRS / AirXpert; ferramentas e webshop da Atlas Copco; organograma APE; outras linhas da Safe Mine; ano de fundação (2017).

## Desvios técnicos da execução

- `npm run screens` não roda nesta pasta: o script monta o comando com `shell: true` e o caminho tem espaços (mesmo defeito registrado na LP SEIVE). As capturas foram feitas com os mesmos parâmetros (porta 4873, Playwright 1.58.2, `?screens=1` e `?grid=1`), com caminho relativo.
- `scripts/lib/keyword.mjs` não tratava o plural -il → -eis ("portátil" → "portáteis"). Corrigido nesta LP (regra `['eis', 'il']`) para o H1 no plural do mockup; levar para o starter, com caso novo no `keyword.test.mjs`.
- A LP foi criada com `new-lp.mjs --no-install --no-git` numa pasta temporária e movida para esta pasta; `npm install`, `git init -b main` e o commit inicial rodaram aqui. Repositório: github.com/harpyacessory-ux/LP-ATLAS-COPCO---Compressores-port-teis; publicação de revisão na Vercel (projeto `lp-atlas-copco-compressores-portateis`) pela CLI.

## Estado da entrega

- [x] Primeira versão de pé (`npm run check:lp:rascunho` passa) em: 29/10/2026
- [ ] Todos os assets reais entregues
- [ ] `npm run verify` passa inteiro em: `____/____/______`
- [x] Padrão B2 versão: `2.8.0`

## Desvios do padrão

- **Header:** sem desvio. Restaurado em 01/11/2026 à estrutura fixa 4.1.1 (barra navy sticky, logo em placa pendurada, tagline central, CTA laranja, sem âncoras).
- **Hero:** sem desvio. O Hero da primeira versão (fundo claro, sem a coluna do chat) foi substituído em 01/11/2026 pelo da estrutura fixa 4.1.2: grid `1fr · 270px · 300px`, coluna 2 vazia, slot `shortcode` de 300px, foto de 1700px ancorada na borda do container. A faixa de prioridades e o cartão de ajuda do hero saíram; a nota ficou sob os botões. A foto foi reenquadrada em 1981×900, com o grupo em ~70% da largura.
- **Paleta:** os véus do hero usam o azul `#0a1d4d` da marca no lugar do navy `#001830` do template. O token `accent-orange-light` (`#7ba249`) existe só para o destaque do H1 sobre o fundo escuro.

## Header restaurado ao padrão (01/11/2026)

A pedido do usuário, o Header deixou a barra branca flutuante do mockup de 29/10/2026 e voltou à estrutura fixa 4.1.1, como nas demais LPs da B2: barra navy `sticky`, a placa branca traz o logo da Safe Mine, tagline central "Compressores portáteis" e CTA laranja em caixa-alta ("Cotação" no celular). As âncoras do topo saíram. O Hero voltou ao padding do padrão (`py-20 lg:py-24`), já que o header não é mais sobreposto. A assinatura A8 do Header em `scripts/check-lp.mjs` voltou à da estrutura fixa.
