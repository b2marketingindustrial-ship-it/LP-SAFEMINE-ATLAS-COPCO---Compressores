```yaml
ficha: 1
padrao: 2.8.0
cliente: Safe Mine Soluções
produto: Compressores portáteis Atlas Copco
data: 2026-10-29

site:
  brand: Safe Mine Soluções
  brandShort: Safe Mine
  product: Compressores portáteis Atlas Copco
  context: obras, mineração e perfuração
  url: https://lp-atlas-copco-compressores-portate.vercel.app/
  address: Rua José de Paula Filho, 128 - Europa, Contagem - MG, 32043-050
  privacyUrl: ''
  whatsapp: '5531995538843'
  shortcodes:
    chat: '[atendimento_chat id="default"]'
    form: '[atendimento_form id="default-form"]'

campanha:
  mainKeyword: compressor portátil atlas copco
  negatives:
    - compressor de geladeira
    - compressor de ar condicionado
    - mini compressor pneu
    - inflador portátil
    - compressor para aerógrafo
    - compressor odontológico
    - compressor doméstico
    - compressor de áudio
    - ferramentas pneumáticas
    - bateria para compressor
  forbidden:
    - somos fabricantes
    - fabricamos
    - nossa fábrica
    - filial
    - site oficial
    - loja oficial
    - canal oficial
    - locação de compressores
    - aluguel de compressores
    - alugamos
    - locamos
    - manutenção de compressores
    - serviço de manutenção
    - todo o Brasil
    - todo o país
    - todo o território nacional
    - atendimento nacional
    - cobertura nacional
    - líder
    - o melhor
    - a melhor
    - número 1
    - nº 1
    - maior distribuidor
    - maior distribuidora
    - distribuidor autorizado
    - distribuidora autorizada
    - autorizado
    - autorizada
    - representamos
    - representante
  areaAtendida: null
  onde: null
  familias:
    - nome: produto-categoria
      termos:
        - compressor de ar portátil industrial
        - compressor de ar elétrico portátil industrial
        - compressor a diesel industrial
        - compressor de ar a diesel
        - compressor a diesel
      responde: linhas
    - nome: marca
      termos:
        - compressor portátil atlas copco
        - compressor atlas copco diesel
        - compressor a diesel atlas copco
      responde: linhas
    - nome: grande-vazao
      termos:
        - compressor de grande vazão
      responde: linhas
    - nome: aplicacao
      termos:
        - compressor para perfuração
        - compressor para jateamento
      responde: aplicacoes
    - nome: setor
      termos:
        - compressor para mineração
      responde: aplicacoes
    - nome: cotacao
      termos:
        - cotação compressor atlas copco
      responde: identificar

publico: [Manutenção, Operações, Engenharia, Compras]

marcas:
  usarLogos: false
  nomes: [Atlas Copco]
  autorizacao: uso da logo da Atlas Copco não autorizado por escrito; o planejamento libera a marca apenas conforme autorizações e manuais aplicáveis

tokens:
  padrao: false
  cores:
    primaria: '#102c73'
    marca: '#163b99'
    acao: '#4d7f22'
    verde-marca: '#7ba249'

conteudo:
  title: Compressor portátil Atlas Copco para obras e mineração | Safe Mine
  description: Compressores portáteis Atlas Copco a diesel e elétricos WEG, de 100 a 1.567 CFM, para perfuração, jateamento e obras, com atendimento consultivo.
  hero:
    eyebrow: Ar comprimido para operações exigentes
    title: Compressores portáteis Atlas Copco para obras, mineração e perfuração
    text: Modelos a diesel e elétricos para diferentes vazões, pressões e aplicações. A Safe Mine ajuda você a escolher o compressor para o seu serviço.
    points:
      - icon: power
        line1: Versões a diesel
        line2: e elétricas WEG
      - icon: gear
        line1: De 100 a 1.567 CFM
        line2: e até 30 bar
      - icon: mountain
        line1: Para perfuração,
        line2: jateamento e obras
  quote:
    eyebrow: Solicite sua cotação
    title: Fale com quem entende de compressores portáteis.
    text: Descreva o serviço e a equipe indica a linha Atlas Copco adequada à sua operação. Preencha o formulário ou fale direto conosco pelo WhatsApp.
    trust:
      - icon: users
        label: Atendimento consultivo
      - icon: clock
        label: Resposta rápida
      - icon: file
        label: Cotação pela descrição do serviço
    lgpd: Seus dados serão usados apenas para responder à sua solicitação de cotação, conforme a LGPD.

blocos:
  linhas:
    veredicto: completo
    responde: [produto-categoria, marca, grande-vazao]
    papeis: [Engenharia, Operações]
    eyebrow: Linhas por porte
    title: Compressores portáteis para cada exigência de ar
    text: Escolha pela aplicação. Cada porte combina vazão, pressão e motor para um tipo de serviço em campo.
    items:
      - id: small-air
        tag: Pequeno porte
        title: Small Air
        description: Sinalização rodoviária, demolição e perfuração manual.
        features: [100 a 190 CFM, 7 a 10 bar, Motor Kubota]
        photo: Compressor portátil Small Air
        dark: false
      - id: medium-air
        tag: Médio porte
        title: Medium Air
        description: Jateamento abrasivo, concreto projetado e perfuração de rocha.
        features: [272 a 404 CFM, 7 a 14 bar, Motor Perkins]
        photo: Compressor portátil Medium Air
        dark: false
      - id: large-air
        tag: Grande vazão
        title: Large Air
        description: Poços artesianos, fundações e geotecnia, com alta vazão e pressão.
        features: [Até 1.567 CFM, Até 30 bar, Motores MWM e Scania]
        photo: Compressor portátil Large Air
        dark: false
      - id: eletricos
        tag: Elétrico
        title: Elétricos WEG
        description: Modelos T400 a V1100 com motor WEG e acionamento elétrico.
        features: [403 a 1.100 CFM, 10 bar, Motor elétrico WEG]
        photo: Compressor portátil elétrico com motor WEG
        dark: true

  especificacoes:
    veredicto: quase
    falta: confirmar W1000 x W1100 na linha Large Air (os slides da Atlas Copco divergem) e o porte da X-AIR (Medium Air no material da fabricante, Large Low no portfólio consolidado)
    responde: [produto-categoria, grande-vazao]
    papeis: [Engenharia]
    eyebrow: Tabela técnica
    title: Modelos por vazão, pressão e motor
    text: Faixas de vazão e pressão por família de modelos, para comparar antes de pedir a cotação.
    columns:
      - Modelos
      - Porte
      - Motor
      - Vazão (CFM)
      - Pressão (bar)
    rows:
      - id: xas-58-88
        cells:
          - XAS 58-88
          - Small Air
          - Kubota
          - 100–187
          - 7–10
        highlight: false
      - id: u110-190
        cells:
          - U110-190
          - Small Air
          - Kubota
          - 110–190
          - 7–10
        highlight: false
      - id: xas300pd
        cells:
          - XAS / XATS / XAHS 300Pd
          - Medium Air
          - Perkins
          - 285–300
          - 7–12
        highlight: false
      - id: x-air
        cells:
          - X-AIR 400-7 a 290-14
          - Medium Air
          - Perkins
          - 272–404
          - 7–14
        highlight: false
      - id: x-air-plus
        cells:
          - X-Air+ 970-10 a 900-20
          - Large Low
          - MWM
          - 818–992
          - 7–20
        highlight: false
      - id: large-air
        cells:
          - W1000 / X1200 / XAVS1600
          - Large Air
          - Scania
          - 750–1.567
          - 7–30
        highlight: false
      - id: eletricos
        cells:
          - T400 / T500 / T900 / V1100
          - Elétrico
          - WEG
          - 403–1.100
          - '10'
        highlight: false
    note: Configurações e disponibilidade sob consulta.

  vitrine:
    veredicto: insuficiente
    falta: não há foto por modelo nem descrição por item; os modelos se distinguem por número, e quem responde a isso é a tabela técnica

  identificar:
    veredicto: completo
    responde: [cotacao]
    papeis: [Compras, Engenharia]
    eyebrow: Dados para cotação
    title: Não sabe a vazão ou a pressão?
    microcopy: Você pode pedir cotação sem os dados técnicos.
    text: Descreva o serviço. A Safe Mine avalia a aplicação e ajuda a indicar o compressor adequado para a sua operação.
    items:
      - icon: file
        label: Aplicação
        hint: Descreva o serviço que será executado.
      - icon: pin
        label: Cidade/UF
        hint: Local da operação
      - icon: power
        label: Acionamento
        hint: Diesel ou elétrico, se tiver preferência
      - icon: move
        label: Vazão
        hint: em CFM
      - icon: cylinder
        label: Pressão
        hint: em bar
      - icon: layers
        label: Linha
        hint: se já tiver preferência

  processo:
    veredicto: insuficiente
    falta: o plano de conteúdo traz só 3 etapas genéricas, sem responsável nem prazo; pedir ao comercial o processo real de atendimento

  situacoes:
    veredicto: insuficiente
    falta: a compra é planejada e o comercial não listou os gatilhos de contato mais comuns

  aplicacoes:
    veredicto: completo
    responde: [aplicacao, setor]
    papeis: [Operações, Manutenção]
    eyebrow: Aplicações
    title: Ar comprimido para cada serviço de campo
    text: Perfuração, jateamento, poços e fundações pedem combinações diferentes de vazão e pressão. Escolha a aplicação e fale com a equipe.
    items:
      - id: desmonte-de-rocha
        label: Desmonte de rocha
        description: Ar comprimido para perfuração em rochas, pedreiras e mineração.
        photo: Perfuração de rocha para desmonte
      - id: jateamento
        label: Jateamento abrasivo
        description: Para remover corrosão, tinta e contaminantes de superfícies.
        photo: Jateamento abrasivo em superfície metálica
      - id: pocos-artesianos
        label: Poços artesianos
        description: Ar para perfuração e limpeza do furo até a captação de água.
        photo: Perfuração de poço artesiano
      - id: fundacoes
        label: Fundações
        description: Perfuração e limpeza de furos para estacas e ancoragens.
        photo: Perfuração para fundações e estacas

  segmentos:
    veredicto: insuficiente
    falta: há 6 setores com processos dispersos e o 7º (locadoras) sem processos; a seção pede 7 setores com descrição e 3 equipamentos cada

  clientes:
    veredicto: insuficiente
    falta: nenhum logo de cliente autorizado e nenhum número institucional além do ano de fundação

  perguntas:
    veredicto: quase
    falta: validar as respostas com o comercial e acrescentar prazo de entrega, disponibilidade de modelos e região atendida
    responde: [cotacao]
    papeis: [Compras]
    eyebrow: Perguntas frequentes
    title: O que perguntam antes de cotar
    text: As dúvidas mais comuns antes de pedir a cotação. Não encontrou a sua? Fale com a nossa equipe.
    items:
      - id: venda-direta
        question: A Safe Mine vende os compressores diretamente?
        answer: Sim. A Safe Mine fornece equipamentos e peças originais das linhas que comercializa, incluindo Atlas Copco, e ajuda a identificar o modelo adequado à aplicação.
      - id: informacoes
        question: Quais informações devo enviar para pedir uma cotação?
        answer: Descreva a operação e a aplicação. Segmento, localização, características do equipamento e requisitos técnicos ajudam a avaliar a demanda.
      - id: vazao-pressao
        question: Preciso saber a vazão e a pressão para pedir cotação?
        answer: Não. Se não souber, descreva o serviço que o compressor vai executar.
      - id: escolha
        question: Como saber qual compressor é mais adequado para minha operação?
        answer: Cada operação tem necessidades próprias. A equipe avalia a aplicação, a vazão e a pressão para indicar a linha adequada.
      - id: setores
        question: Os compressores atendem só a mineração?
        answer: Não. São usados em construção, infraestrutura, geotecnia, perfuração de poços e indústria.

  diferenciais:
    veredicto: completo
    responde: [produto-categoria, grande-vazao]
    papeis: [Operações, Manutenção, Compras]
    eyebrow: Diferenciais Safe Mine
    titleLines: [Ar certo para, cada aplicação.]
    text: A Safe Mine entende o serviço antes de indicar o compressor, avaliando vazão, pressão, motor e aplicação.
    scene: Técnico com tablet ao lado de um compressor portátil Atlas Copco
    reasons:
      - icon: user
        title: Atendimento consultivo
        description: Entende a aplicação antes de indicar o compressor.
      - icon: truck
        title: Mobilidade em campo
        description: Fornecimento móvel de ar para serviços de campo.
      - icon: zap
        title: Diesel ou elétrico
        description: Versões a diesel e modelos elétricos com motor WEG.
      - icon: layers
        title: Portfólio por porte
        description: Small, Medium e Large Air, de 100 a 1.567 CFM.
      - icon: clock
        title: Agilidade na identificação
        description: Orientação para encontrar a solução para sua operação.

  escopo:
    veredicto: nao-se-aplica
    falta: a oferta é uma linha de equipamentos, não a consolidação de compras de itens diferentes

assets:
  pendentes: [linhas, aplicacoes, diferenciais]

conflitos:
  - pede: formulário próprio com aplicação, vazão em CFM, pressão em bar, diesel/elétrico e linha, com pré-seleção da família pelos cards
    regra: formulário e chat só pelo shortcode do plugin de atendimento, nunca um formulário próprio
    entrou: shortcodes padrão; os campos do formulário viraram o painel de dados para cotação, com vazão e pressão marcadas como opcionais
  - pede: 'CTAs próprios ("Solicitar cotação de compressor", "Cotar Small", "Cotar Medium", "Cotar Large", "Consultar elétricos", "Conhecer linhas")'
    regra: vocabulário de CTA e componente fixos do padrão
    entrou: '"Solicite sua cotação", "Identifique seu compressor" e "Falar com especialista", com data-cta por linha para o GTM separar Small, Medium, Large e elétricos'
  - pede: logo da Atlas Copco na página, como na apresentação da Safe Mine
    regra: logo de terceiro só com autorização registrada
    entrou: Atlas Copco só por extenso, no H1, na tagline, na descrição e na meta
  - pede: porte da X-AIR (Medium Air no material da Atlas Copco, Large Low no portfólio consolidado)
    regra: não inventar fato
    entrou: a classificação da fabricante; Medium Air fica com 272 a 404 CFM e 7 a 14 bar
  - pede: H185, H250 e H450 no slide de elétricos, com motor Kubota/Perkins
    regra: não inventar fato
    entrou: nada; a linha elétrica fica só com T400, T500, T900 e V1100 (motor WEG) até a confirmação
  - pede: cobertura nacional afirmada no site e no FAQ atuais da Safe Mine
    regra: o planejamento proíbe afirmar cobertura nacional sem confirmação
    entrou: nenhuma área declarada na página; o terceiro selo da cotação é "Cotação pela descrição do serviço"
  - pede: title no formato padrão, com 92 caracteres
    regra: title de até 70 caracteres
    entrou: '"Compressor portátil Atlas Copco para obras e mineração | Safe Mine", com a palavra-chave literal'
  - pede: visual padrão da agência (o briefing não traz hex)
    regra: uma LP por cliente segue as cores do cliente quando conhecidas
    entrou: os mesmos tokens da LP SEIVE da Safe Mine (azul #163b99 / navy #102c73, ação verde #4d7f22), tirados do CSS do site do cliente

  - pede: header e hero do mockup aprovado em 29/10/2026 (barra flutuante, banner em largura total, faixa de linhas no hero, sem a coluna do chat)
    regra: Header e Hero são estrutura fixa do padrão (4.1.1 e 4.1.2)
    entrou: o layout do mockup, como desvio desta LP; os 3 pontos do hero ficam na ficha (o validador exige) mas a página mostra no lugar a faixa das 4 linhas; o shortcode do chat não é renderizado

naoAplicado:
  - telefone (31) 99553-8843 (vai só como WhatsApp) e segundo número (31) 99710-0350
  - e-mail contato@safeminesolucoes.com.br, LinkedIn, Instagram e QR code da apresentação
  - razão social Safe Mine Soluções Técnicas LTDA e CNPJ
  - controlador PRS / AirXpert (significado de PRS a confirmar)
  - ferramentas pneumáticas, hidráulicas e a gasolina e webshop da Atlas Copco (negativa da campanha e canal do fabricante)
  - organograma e equipe APE da Atlas Copco
  - torres de iluminação, geradores, BESS, WEDA e linhas SEIVE (outras campanhas)
  - ano de fundação (2017, Belo Horizonte/MG) — só entra com o bloco de clientes e números
```

# Ficha de execução — Safe Mine Soluções / Compressores portáteis Atlas Copco

> Ficha montada no editor em 29/10/2026 a partir do briefing organizado de 28/10/2026 (`docs/briefing-cliente/briefing-safe-mine-compressores-portateis.md`), do brief de página enviado no chat e do site safeminesolucoes.com.br, no formato do padrão B2 LP Starter v2.8.0 — a versão publicada do starter; o briefing cita v2.9.0, que não existe no repositório. Não houve conversa de chat com o `PROMPT-FICHA-LP.md`: o que dependia de confirmação do cliente virou pendência declarada, não valor inventado.

## O que foi decidido

LP de produto da **Safe Mine Soluções** para a campanha `ATC_PESQ_COMPRESSORES_B2B` (Compressores portáteis). A palavra-chave principal é **compressor portátil atlas copco**: o H1 ("Compressor portátil Atlas Copco para obras, mineração e perfuração") e o título da aba a trazem literal, no singular — o validador do padrão não reconhece "portáteis" como plural de "portátil".

A página tem um objetivo: o pedido de cotação qualificado. A primeira dobra confirma que o visitante está no lugar certo (marca e linha no H1, diesel/elétrico, faixa de vazão e pressão, aplicações). A oferta vem por porte — Small, Medium, Large Air e Elétricos WEG —, cada card dizendo para que serviço o porte serve e com vazão, pressão e motor como características. O apoio é o painel "Não sabe a vazão ou a pressão?", que deixa pedir cotação só descrevendo o serviço. A prova são as quatro aplicações que a campanha compra (desmonte de rocha, jateamento, poços artesianos, fundações) e a autoridade é a frase "Ar certo para cada aplicação", com cinco diferenciais.

A Safe Mine aparece como fornecedora consultiva; a Atlas Copco, só por extenso. Área atendida, distribuição autorizada e logo da fabricante ficam fora até a confirmação.

## Viabilidade por fase

| Fase       | Bloco            | Veredicto     | Responde                               | Papéis                         | O que falta                                            |
| ---------- | ---------------- | ------------- | -------------------------------------- | ------------------------------ | ------------------------------------------------------ |
| Oferta     | `linhas`         | completo      | produto-categoria, marca, grande-vazao | Engenharia, Operações          | — (fotos pendentes)                                    |
| Oferta     | `especificacoes` | quase         | produto-categoria, grande-vazao        | Engenharia                     | W1000 x W1100; porte da X-AIR                          |
| Oferta     | `vitrine`        | insuficiente  | —                                      | —                              | foto e descrição por modelo                            |
| Apoio      | `identificar`    | completo      | cotacao                                | Compras, Engenharia            | —                                                      |
| Apoio      | `processo`       | insuficiente  | —                                      | —                              | processo real do comercial                             |
| Apoio      | `situacoes`      | insuficiente  | —                                      | —                              | gatilhos de contato reais                              |
| Prova      | `aplicacoes`     | completo      | aplicacao, setor                       | Operações, Manutenção          | — (fotos pendentes, direito de uso a confirmar)        |
| Prova      | `segmentos`      | insuficiente  | —                                      | —                              | 7 setores com 3 equipamentos cada                      |
| Prova      | `clientes`       | insuficiente  | —                                      | —                              | logos autorizados e 3 números                          |
| Autoridade | `diferenciais`   | completo      | produto-categoria, grande-vazao        | Operações, Manutenção, Compras | — (cenário e pessoa pendentes)                         |
| Autoridade | `perguntas`      | quase         | cotacao                                | Compras                        | validação do comercial; prazo, disponibilidade, região |
| Autoridade | `escopo`         | não se aplica | —                                      | —                              | não é consolidação de compras                          |

Em relação ao briefing organizado, `linhas` subiu de "quase" para "completo": o porte da X-AIR foi resolvido pela classificação da fabricante e as fotos são assets pendentes, não falta de conteúdo. `aplicacoes` também fica "completo", com as fotos e o direito de uso como pendência de asset. A tabela técnica segue "quase" e fica pronta na ficha para trocar de lugar com `linhas` quando a pendência fechar.

## Núcleo

| #   | Entrada            | Valor                                                                                                    | Origem                                  |
| --- | ------------------ | -------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| 1   | MARCA              | Safe Mine Soluções                                                                                       | planejamento integrado                  |
| 2   | MARCA_CURTA        | Safe Mine                                                                                                | apresentação                            |
| 15  | CAMPANHA           | `compressor portátil atlas copco`                                                                        | briefing de campanha + lista do usuário |
| 3   | PRODUTO_PRINCIPAL  | Compressor portátil Atlas Copco                                                                          | ajustado à palavra-chave                |
| 4   | CONTEXTO_DE_USO    | obras, mineração e perfuração                                                                            | H1 sugerido no briefing                 |
| 5   | PUBLICO            | Manutenção, Operações, Engenharia, Compras                                                               | brief da página                         |
| 6   | HERO               | Versões a diesel e elétricas WEG · De 100 a 1.567 CFM e até 30 bar · Para perfuração, jateamento e obras | briefing (núcleo 6)                     |
| 7   | MARCAS_ATENDIDAS   | Atlas Copco, só por extenso                                                                              | logo sem autorização                    |
| 8   | SELOS_DE_CONFIANCA | Atendimento consultivo · Resposta rápida · Cotação pela descrição do serviço                             | apresentação + briefing; área pendente  |
| 9   | ENDERECO           | Rua José de Paula Filho, 128 - Europa, Contagem - MG, 32043-050                                          | informado no chat                       |
| 10  | URL + PRIVACIDADE  | URL provisória na Vercel; sem política de privacidade                                                    | pendência                               |
| 11  | SHORTCODES         | padrão do plugin                                                                                         | padrão                                  |
| 12  | WHATSAPP           | 55 31 99553-8843 (WhatsApp comercial)                                                                    | planejamento integrado                  |
| 13  | STACK + PUBLICACAO | padrão da agência (Astro, `main` → `wp-build`)                                                           | padrão                                  |
| 14  | TOKENS + FONTE     | azul e verde Safe Mine (os da LP SEIVE); Manrope                                                         | CSS do site do cliente                  |

## Pendências

| O que falta                                | Quem resolve            | Especificação                                                                                              |
| ------------------------------------------ | ----------------------- | ---------------------------------------------------------------------------------------------------------- |
| Banner do hero                             | designer                | 1981×900, fundo azul-escuro, compressor portátil Atlas Copco entre 62% e 79% da largura, sem texto         |
| Fotos das 3 linhas diesel                  | Safe Mine / Atlas Copco | PNG 800×600 recortado, fundo transparente: Small Air (XAS 58-88), Medium Air (XAS300Pd), Large Air (X1200) |
| Foto do card elétrico                      | Safe Mine / Atlas Copco | 1280×800, fundo branco: compressor elétrico T400/V1100                                                     |
| Fotos das 4 aplicações                     | Safe Mine / Atlas Copco | 1200×900 (4:3), equipamento em operação; confirmar direito de uso das fotos do PPT APE                     |
| Cenário dos diferenciais                   | Safe Mine               | 1600×900, compressor em campo                                                                              |
| Pessoa dos diferenciais                    | Safe Mine               | 1220×1000, PNG com fundo transparente, especialista de corpo inteiro                                       |
| Área atendida da campanha                  | B2                      | a conta Google Ads (446-892-6092) ainda não tem campanha; define selo ou texto da cotação                  |
| URL final e política de privacidade        | B2 + Safe Mine          | `site.url` e `privacyUrl`                                                                                  |
| W1000 x W1100 e H185/H250/H450             | Safe Mine               | libera a tabela técnica e, se elétricos, amplia a linha WEG                                                |
| Distribuição autorizada e logo Atlas Copco | Safe Mine               | libera "distribuidor autorizado"; a logo já está no header (03/11/2026), falta a oficial em alta           |
| FAQ validado pelo comercial                | Safe Mine               | prazo de entrega, disponibilidade de modelos e região atendida                                             |
| Processo real de atendimento               | Safe Mine               | libera `processo` como alternativa no apoio                                                                |

## Itens excedentes

| Bloco          | Itens que entraram                                                  | Itens guardados                                                                                      |
| -------------- | ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `aplicacoes`   | Desmonte de rocha, Jateamento abrasivo, Poços artesianos, Fundações | Pintura asfáltica, Demolição de concreto e asfalto, Perfuração manual, Concreto projetado, Geotecnia |
| `diferenciais` | os cinco do briefing                                                | Dimensionamento, Experiência de mercado, Segurança e confiabilidade, Performance e eficiência        |
| `linhas`       | Small, Medium, Large Air e Elétricos WEG                            | H185, H250, H450 (classificação pendente)                                                            |
| hero           | diesel/elétrico, faixa de CFM e bar, aplicações                     | "Linha Atlas Copco / Small, Medium e Large Air", "Uso profissional / em campo"                       |

## Conteúdo futuro (grupos pausados)

| Grupo | O que oferece                  | Por que está fora |
| ----- | ------------------------------ | ----------------- |
| —     | nenhum grupo pausado informado | —                 |

## Dados não usados pelo padrão

Telefones, e-mail, redes sociais, razão social, QR code e CTAs próprios do briefing — listados em `naoAplicado` e em "Conflitos"; não entram na página.
