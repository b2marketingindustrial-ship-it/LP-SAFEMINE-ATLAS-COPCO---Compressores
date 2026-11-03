/**
 * Dados da seção "Diferenciais" (biblioteca B2, fase: autoridade).
 *
 * Layout das LPs SEIVE, trazido da LP de torres (03/11/2026, pedido do usuário), nas cores da
 * Safe Mine: bloco navy em largura total com a frase de autoridade (última linha em verde),
 * texto, 3 números e CTA; foto à direita; os 5 diferenciais em cards brancos sobrepostos à
 * base do bloco. São 5 exatos: o grid é `xl:grid-cols-5`.
 *
 * Texto e números da página "Quem somos" de safeminesolucoes.com.br: fundação em 2017 em
 * Belo Horizonte e mais de duas décadas de experiência da equipe (não da empresa). A ficha
 * deixava a fundação para quando houvesse um bloco de números; este layout passou a ter um.
 * "Mobilidade em campo", "Diesel ou elétrico" e "Portfólio por porte" foram para `recursos`.
 * Sem "distribuidor autorizado" e sem área atendida: os dois esperam confirmação (ficha).
 *
 * `cenario.jpg` é provisória, recortada do mockup: o slot `diferenciais` segue em
 * `assets.pendentes` até chegar a foto original.
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'
import { site } from '@data/site'

import cenario from '@assets/diferenciais/cenario.jpg'

export interface Metric {
  value: string
  label: string
}

export interface Reason {
  icon: IconName
  title: string
  description: string
}

export const why = {
  eyebrow: `Diferenciais ${site.brandShort}`,
  /** Cada item é uma linha do H2 (quebra forçada); a segunda sai em verde. 3–6 palavras no total. */
  titleLines: ['Ar certo para', 'cada aplicação.'],
  /** Trajetória e posicionamento da página "Quem somos" de safeminesolucoes.com.br. */
  text: `Fundada em 2017 em Belo Horizonte, a ${site.brandShort} aproxima mineração e indústria das tecnologias que mantêm a operação segura, produtiva e sem paradas. Entendemos o serviço antes de indicar o compressor.`,
  scene: {
    src: cenario,
    alt: 'Técnico com tablet ao lado de um compressor portátil Atlas Copco',
  },
  /** 3 números entre o texto e o CTA. */
  metrics: [
    { value: '2017', label: 'fundada em Belo Horizonte' },
    { value: '+20 anos', label: 'de experiência da equipe' },
    { value: '1.567 CFM', label: 'de vazão no Large Air' },
  ],
  /** Título em uma linha e descrição em duas (até ~50 caracteres) nos cards do desktop. */
  reasons: [
    {
      icon: 'user',
      title: 'Atendimento consultivo',
      description: 'Vazão, pressão e motor antes de indicar.',
    },
    {
      icon: 'users',
      title: 'Equipe experiente',
      description: 'Mais de duas décadas em mineração e indústria.',
    },
    {
      icon: 'file',
      title: 'Cotação pela descrição',
      description: 'Sem vazão ou pressão: basta descrever o serviço.',
    },
    {
      icon: 'clock',
      title: 'Agilidade na identificação',
      description: 'Orientação para encontrar a solução certa.',
    },
    {
      icon: 'pin',
      title: 'Sede em Contagem',
      description: 'Na Grande Belo Horizonte, em Minas Gerais.',
    },
  ],
} as const satisfies {
  eyebrow: string
  titleLines: readonly string[]
  text: string
  scene: Photo
  metrics: readonly [Metric, Metric, Metric]
  reasons: readonly [Reason, Reason, Reason, Reason, Reason]
}
