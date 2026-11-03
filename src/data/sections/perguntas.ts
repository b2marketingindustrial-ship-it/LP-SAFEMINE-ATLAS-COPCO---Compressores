/**
 * Dados da seção "Perguntas frequentes" (biblioteca B2, fase: autoridade).
 *
 * Entrou em 03/11/2026, a pedido do usuário, entre os recursos e os diferenciais, como na LP
 * de torres. As 5 primeiras são o bloco `perguntas` da ficha (`docs/FICHA-LP.md`); as 2 últimas
 * usam só dados já publicados na LP (linha elétrica e endereço).
 * Pendente: validação do comercial e prazo de entrega, disponibilidade de modelos e região
 * atendida, como pede a ficha.
 */
export interface Question {
  question: string
  answer: string
}

export const faq = {
  eyebrow: 'Perguntas frequentes',
  title: 'O que perguntam antes de cotar',
  /** Trecho do título em verde. */
  titleHighlight: 'antes de cotar',
  text: 'As dúvidas mais comuns antes de pedir a cotação. Não encontrou a sua? Fale com a nossa equipe.',
  items: [
    {
      question: 'Preciso saber a vazão e a pressão para pedir cotação?',
      answer: 'Não. Se não souber, descreva o serviço que o compressor vai executar.',
    },
    {
      question: 'Quais informações devo enviar para pedir uma cotação?',
      answer:
        'Descreva a operação e a aplicação. Segmento, localização, características do equipamento e requisitos técnicos ajudam a avaliar a demanda.',
    },
    {
      question: 'Como saber qual compressor é mais adequado para minha operação?',
      answer:
        'Cada operação tem necessidades próprias. A equipe avalia a aplicação, a vazão e a pressão para indicar a linha adequada.',
    },
    {
      question: 'A Safe Mine vende os compressores diretamente?',
      answer:
        'Sim. A Safe Mine fornece equipamentos e peças originais das linhas que comercializa, incluindo Atlas Copco, e ajuda a identificar o modelo adequado à aplicação.',
    },
    {
      question: 'Os compressores atendem só a mineração?',
      answer:
        'Não. São usados em construção, infraestrutura, geotecnia, perfuração de poços e indústria.',
    },
    {
      question: 'Há compressores portáteis elétricos?',
      answer:
        'Sim. Os modelos T400, T500, T900 e V1100 têm motor elétrico WEG, com vazão de 403 a 1.100 CFM e pressão de 10 bar.',
    },
    {
      question: 'Onde fica a Safe Mine?',
      answer:
        'Em Contagem, na Grande Belo Horizonte. Fale com a equipe pelo formulário ou pelo WhatsApp.',
    },
  ],
} as const satisfies {
  eyebrow: string
  title: string
  titleHighlight: string
  text: string
  items: readonly Question[]
}
