/**
 * Dados da seção "Linhas de produto" (biblioteca B2, fase: oferta).
 *
 * 3 ou 4 cards, exatamente um deles escuro — normalmente o card de marcas, que
 * fecha o grid com peso visual. Cada linha tem 3 features de 2–4 palavras.
 *
 * Aqui os cards são os portes da linha APE Atlas Copco. O layout desta LP segue o mockup
 * de 29/10 (componente alterado — ver docs/BRIEFING.md): os 4 cards são claros, e `dark`
 * fica só para o contrato da biblioteca. `features` é posicional: vazão, pressão, motor.
 *
 * Fotos provisórias, recortadas do mockup (~330 px de largura útil): o slot `linhas`
 * segue em `assets.pendentes` até chegarem os originais 800×600.
 */
import type { Photo } from '@data/types'

import linha1 from '@assets/linhas/linha-1.png'
import linha2 from '@assets/linhas/linha-2.png'
import linha3 from '@assets/linhas/linha-3.png'
import marcasPhoto from '@assets/linhas/marcas.png'

export interface ProductLine {
  id: string
  tag: string
  title: string
  description: string
  photo: Photo
  features: readonly [string, string, string]
  /** Para que serviço o porte serve (era a descrição; a ficha define o porte pela aplicação). */
  idealFor: string
  /** Exatamente um card escuro por grid. Informe sempre (true/false). */
  dark: boolean
}

export const productLines = {
  eyebrow: 'Linhas por porte',
  title: 'Compressores portáteis para cada exigência de ar',
  /** Trecho do título em verde, na segunda linha. */
  titleHighlight: 'cada exigência de ar',
  text: 'Cada porte combina vazão, pressão e motor para um tipo de serviço em campo.',
  /** Rótulos das duas primeiras features de cada card. */
  specLabels: ['Vazão', 'Pressão'],
  /** Rótulo da linha "quando escolher" de cada card. */
  idealForLabel: 'Indicado para',
  note: 'Vazão e pressão variam conforme o modelo e a configuração.',
  items: [
    {
      id: 'small-air',
      tag: 'Pequeno porte',
      title: 'Small Air',
      description: 'Modelos XAS 58-88 e U110-190, para serviços leves em campo.',
      photo: { src: linha1, alt: 'Compressor portátil Small Air' },
      features: ['100 a 190 CFM', '7 a 10 bar', 'Motor Kubota'],
      idealFor: 'Sinalização rodoviária, demolição e perfuração manual.',
      dark: false,
    },
    {
      id: 'medium-air',
      tag: 'Médio porte',
      title: 'Medium Air',
      description: 'Modelos XAS, XATS e XAHS 300Pd e a linha X-AIR.',
      photo: { src: linha2, alt: 'Compressor portátil Medium Air' },
      features: ['272 a 404 CFM', '7 a 14 bar', 'Motor Perkins'],
      idealFor: 'Jateamento abrasivo, concreto projetado e perfuração de rocha.',
      dark: false,
    },
    {
      id: 'large-air',
      tag: 'Grande vazão',
      title: 'Large Air',
      description: 'Modelos X1200 e XAVS1600, com alta vazão e pressão.',
      photo: { src: linha3, alt: 'Compressor portátil Large Air' },
      features: ['Até 1.567 CFM', 'Até 30 bar', 'Motores MWM e Scania'],
      idealFor: 'Poços artesianos, fundações e geotecnia.',
      dark: false,
    },
    {
      id: 'eletricos',
      tag: 'Elétrico',
      title: 'Elétricos WEG',
      description: 'Modelos T400, T500, T900 e V1100, com acionamento elétrico.',
      photo: { src: marcasPhoto, alt: 'Compressor portátil elétrico com motor WEG' },
      features: ['403 a 1.100 CFM', '10 bar', 'Motor elétrico WEG'],
      idealFor: 'Operações com energia elétrica disponível no local.',
      dark: true,
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  titleHighlight: string
  text: string
  specLabels: readonly [string, string]
  idealForLabel: string
  note: string
  items:
    | readonly [ProductLine, ProductLine, ProductLine]
    | readonly [ProductLine, ProductLine, ProductLine, ProductLine]
}
