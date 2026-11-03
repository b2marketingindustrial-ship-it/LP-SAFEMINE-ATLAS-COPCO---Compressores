/**
 * Dados da seção "Aplicações" (biblioteca B2, fase: prova).
 *
 * 4 cards-botão com foto 4:3, ícone e título. O card inteiro é o CTA. Estrutura da seção
 * "Segmentos atendidos" das LPs SEIVE, nas cores da Safe Mine, como na LP de torres
 * (03/11/2026, pedido do usuário).
 *
 * Nesta LP a seção segue o mockup de 29/10 (componente alterado — ver docs/BRIEFING.md).
 * Fotos provisórias, recortadas do mockup (~400 px de largura útil): o slot `aplicacoes`
 * segue em `assets.pendentes` até chegarem os originais 1200×900.
 *
 * As quatro aplicações que a campanha compra (perfuração, jateamento, mineração e
 * grande vazão). Fotos placeholder: slot `aplicacoes` em `assets.pendentes`, com
 * direito de uso das fotos do material da Atlas Copco a confirmar.
 */
import type { IconName } from '@data/icons'
import type { Photo } from '@data/types'

import app1 from '@assets/aplicacoes/aplicacao-1.png'
import app2 from '@assets/aplicacoes/aplicacao-2.png'
import app3 from '@assets/aplicacoes/aplicacao-3.png'
import app4 from '@assets/aplicacoes/aplicacao-4.png'

export interface Application {
  id: string
  icon: IconName
  label: string
  description: string
  photo: Photo
}

export const applications = {
  eyebrow: 'Aplicações',
  title: 'Ar comprimido para cada serviço de campo',
  /** Trecho do título em verde. */
  titleHighlight: 'cada serviço de campo',
  text: 'Perfuração, jateamento, poços e fundações pedem vazão e pressão diferentes. Escolha a aplicação.',
  /** Chamada no pé de cada card (o card inteiro é o botão). */
  cardCta: 'Cotar para esta aplicação',
  /** Faixa abaixo dos cards, para quem não se vê nas 4 aplicações. */
  help: {
    title: 'Sua aplicação não está aqui?',
    text: 'Descreva o serviço. A Safe Mine ajuda na seleção do compressor.',
  },
  items: [
    {
      id: 'desmonte-de-rocha',
      icon: 'mountain',
      label: 'Desmonte de rocha',
      description: 'Ar comprimido para perfuração em rochas, pedreiras e mineração.',
      photo: { src: app1, alt: 'Perfuração de rocha para desmonte' },
    },
    {
      id: 'jateamento',
      icon: 'blast',
      label: 'Jateamento abrasivo',
      description: 'Para remover corrosão, tinta e contaminantes de superfícies.',
      photo: { src: app2, alt: 'Jateamento abrasivo em superfície metálica' },
    },
    {
      id: 'pocos-artesianos',
      icon: 'droplet',
      label: 'Poços artesianos',
      description: 'Ar para perfuração e limpeza do furo até a captação de água.',
      photo: { src: app3, alt: 'Perfuração de poço artesiano' },
    },
    {
      id: 'fundacoes',
      icon: 'drill',
      label: 'Fundações',
      description: 'Perfuração e limpeza de furos para estacas e ancoragens.',
      photo: { src: app4, alt: 'Perfuração para fundações e estacas' },
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  titleHighlight: string
  text: string
  cardCta: string
  help: { title: string; text: string }
  items: readonly [Application, Application, Application, Application]
}
