/**
 * Dados da seção "Recursos dos compressores" (fase: prova). Seção própria, trazida da LP de
 * torres em 03/11/2026 a pedido do usuário, acima do FAQ.
 *
 * Fonte: a tabela técnica da ficha (`docs/FICHA-LP.md`, bloco `especificacoes`: modelos,
 * motores, vazão e pressão por família) e três diferenciais da versão anterior (mobilidade,
 * diesel ou elétrico, portfólio por porte). A X-AIR fica de fora: o porte dela diverge entre
 * os materiais (pendência na ficha).
 *
 * `scope` diz a que linha o recurso se aplica: vários não valem para todas.
 */
import type { IconName } from '@data/icons'

export interface Feature {
  icon: IconName
  title: string
  description: string
  scope: string
}

export const features = {
  eyebrow: 'Recursos dos compressores',
  title: 'Recursos que fazem diferença no campo',
  /** Trecho do título em verde. */
  titleHighlight: 'no campo',
  text: 'O que os compressores portáteis Atlas Copco trazem para o serviço de campo, do acionamento à pressão de trabalho.',
  items: [
    {
      icon: 'zap',
      title: 'Acionamento elétrico WEG',
      description: 'Os modelos T400, T500, T900 e V1100 operam com motor elétrico, sem diesel.',
      scope: 'Elétricos · 403 a 1.100 CFM',
    },
    {
      icon: 'cylinder',
      title: 'Até 30 bar de pressão',
      description: 'Alta pressão para poços artesianos, fundações e geotecnia.',
      scope: 'Large Air · X1200 e XAVS1600',
    },
    {
      icon: 'sliders',
      title: 'De 7 a 20 bar na X-Air+',
      description:
        'Modelos de 818 a 992 CFM e motor MWM, com a pressão escolhida conforme o serviço.',
      scope: 'X-Air+ 970-10 a 900-20',
    },
    {
      icon: 'engine',
      title: 'Motor conforme o porte',
      description: 'Kubota no Small Air, Perkins no Medium Air, MWM e Scania nos de grande vazão.',
      scope: 'Linhas a diesel',
    },
    {
      icon: 'truck',
      title: 'Mobilidade em campo',
      description: 'Fornecimento móvel de ar comprimido, levado até a frente de serviço.',
      scope: 'Compressores portáteis',
    },
    {
      icon: 'layers',
      title: 'Um porte para cada serviço',
      description: 'De 100 a 1.567 CFM, da sinalização rodoviária à geotecnia.',
      scope: 'Small, Medium e Large Air',
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  titleHighlight: string
  text: string
  items: readonly Feature[]
}
