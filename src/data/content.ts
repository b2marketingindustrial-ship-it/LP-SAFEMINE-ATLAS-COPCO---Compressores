/**
 * COPY DA ESTRUTURA FIXA.
 *
 * Só o que aparece em Header, Hero, Cotação e Footer — as quatro peças presentes
 * em toda LP do padrão. O copy das seções do meio vive em
 * `src/data/sections/<slug>.ts`, um arquivo por seção escolhida da biblioteca.
 *
 * Transcrito da ficha de execução (`docs/FICHA-LP.md`), campo `conteudo`. O conteúdo
 * que vem no template é o exemplo de referência, com imagens placeholder.
 */
import type { IconName } from './icons'
import type { Photo } from './types'
import { site } from './site'

import heroBg from '@assets/heroBg.png'

/* ------------------------------------------------------------------ tipos */

/** Ponto da caixa de ícones do hero: `line1` e `line2` ficam sempre em duas linhas. */
export interface HeroPoint {
  icon: IconName
  line1: string
  line2: string
}

export interface TrustItem {
  icon: IconName
  label: string
}

/* ----------------------------------------------------------- vocabulário */

/** Vocabulário fixo de CTA (PROMPT-PADRAO-LP, item 8). Não variar. */
export const cta = {
  primary: 'Solicitar cotação',
  primaryShort: 'Cotação',
  secondary: 'Identifique seu compressor',
  card: 'Falar com especialista',
  whatsapp: 'Chamar no WhatsApp',
} as const

/* ------------------------------------------------------------------ header */

export const header = {
  /** Âncoras da barra (desvio do padrão, pedido no mockup de 29/10): rolam até as seções. */
  nav: [
    { id: 'compressores', label: 'Compressores', href: '#linhas' },
    { id: 'aplicacoes', label: 'Aplicações', href: '#aplicacoes' },
  ],
} as const

/* -------------------------------------------------------------------- hero */

export const hero = {
  eyebrow: 'Ar comprimido para operações exigentes',
  title: `${site.product} para ${site.context}`,
  /** Trecho do H1 em verde. */
  highlight: 'mineração e perfuração',
  text: 'Modelos a diesel e elétricos para diferentes vazões, pressões e aplicações. A Safe Mine ajuda você a escolher o compressor para o seu serviço.',
  banner: {
    src: heroBg,
    alt: 'Compressores portáteis Atlas Copco em área de mineração',
    /** Larguras geradas: as mesmas no <Picture> do Hero e no preload do Layout. */
    widths: [640, 1024, 1536, 1981],
    sizes: '(min-width: 1024px) 1700px, 100vw',
  },
  points: [
    { icon: 'road', line1: 'Small Air', line2: '100 a 190 CFM' },
    { icon: 'blast', line1: 'Medium Air', line2: 'por aplicação' },
    { icon: 'drill', line1: 'Large Air', line2: 'até 1.567 CFM' },
  ],
  /** Aviso sob os botões: os dados acima variam por modelo e configuração. */
  note: 'Vazão e pressão variam conforme o modelo e a configuração.',
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  highlight: string
  banner: Photo & { widths: readonly number[]; sizes: string }
  points: readonly [HeroPoint, HeroPoint, HeroPoint]
  note: string
}

/* ----------------------------------------------------------------- cotação */

export const quote = {
  eyebrow: 'Solicite sua cotação',
  title: 'Fale com quem entende de compressores portáteis.',
  /** Trecho do título em verde, na segunda linha (layout do mockup de 29/10). */
  titleHighlight: 'compressores portáteis.',
  text: 'Descreva o serviço e a equipe indica a linha Atlas Copco adequada à sua operação. Preencha o formulário ou fale direto conosco pelo WhatsApp.',
  /** Linha sob o botão de WhatsApp. */
  help: 'Não sabe a vazão ou a pressão? Basta descrever o serviço.',
  trust: [
    { icon: 'users', label: 'Atendimento consultivo' },
    { icon: 'clock', label: 'Resposta rápida' },
    { icon: 'file', label: 'Cotação pela descrição do serviço' },
  ],
  /** Nota de LGPD exibida abaixo do formulário. */
  lgpd: 'Seus dados serão usados apenas para responder à sua solicitação de cotação, conforme a LGPD.',
} as const satisfies {
  eyebrow: string
  title: string
  titleHighlight: string
  text: string
  help: string
  trust: readonly [TrustItem, TrustItem, TrustItem]
  lgpd: string
}

/* ------------------------------------------------------------------ footer */

export const footer = {
  credit: { label: 'B2 Marketing Industrial', url: 'https://b2marketingindustrial.com.br' },
} as const
