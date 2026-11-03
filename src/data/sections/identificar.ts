/**
 * Dados da seção "Painel de apoio" (biblioteca B2, fase: apoio).
 *
 * Painel navy com 6 dados que o visitante pode enviar sem ter a especificação em
 * mãos. São 6 exatos: a faixa é um grid de 2/3/6 colunas com divisórias, e
 * qualquer outro número deixa célula órfã.
 *
 * Nesta LP o painel segue o mockup de 29/10 (componente alterado — ver docs/BRIEFING.md):
 * bloco navy com o CTA à esquerda e, à direita, os 6 dados em dois grupos.
 *
 * Os 6 dados são os campos do formulário pedido no briefing, que o padrão substitui
 * pelo shortcode do plugin. Vazão e pressão entram como opcionais: quem não as sabe
 * pede cotação descrevendo o serviço.
 */
import type { IconName } from '@data/icons'

export interface SupportItem {
  icon: IconName
  label: string
  hint: string
}

export const supportPanel = {
  eyebrow: 'Dados para cotação',
  title: 'Não sabe a vazão ou a pressão?',
  text: 'Descreva o serviço. A Safe Mine avalia a aplicação e ajuda a indicar o compressor adequado para a sua operação.',
  microcopy: 'Você pode pedir cotação sem os dados técnicos.',
  /** Rótulo do botão do bloco navy (layout do mockup de 29/10). */
  ctaLabel: 'Receber indicação e cotação',
  /** Lado claro: os 3 primeiros itens são o essencial; os demais, "se souber". */
  list: {
    title: 'O que ajuda na sua cotação',
    text: 'Comece pela aplicação. Os dados técnicos podem ficar para depois.',
    essentialLabel: 'Essencial',
    optionalLabel: 'Se souber, envie também',
    optionalFrom: 3,
  },
  items: [
    { icon: 'file', label: 'Aplicação', hint: 'Descreva o serviço que será executado.' },
    { icon: 'pin', label: 'Cidade/UF', hint: 'Local da operação' },
    { icon: 'power', label: 'Acionamento', hint: 'Diesel ou elétrico, se tiver preferência' },
    { icon: 'move', label: 'Vazão', hint: 'em CFM' },
    { icon: 'cylinder', label: 'Pressão', hint: 'em bar' },
    { icon: 'layers', label: 'Linha', hint: 'se já tiver preferência' },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  text: string
  microcopy: string
  ctaLabel: string
  list: {
    title: string
    text: string
    essentialLabel: string
    optionalLabel: string
    optionalFrom: number
  }
  items: readonly [SupportItem, SupportItem, SupportItem, SupportItem, SupportItem, SupportItem]
}
