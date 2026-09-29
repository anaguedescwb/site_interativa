import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const WHATSAPP_URL = 'https://wa.me/554130134444';
export const PHONE_DISPLAY = '(41) 3013-4444';
export const PHONE_HREF = 'tel:+554130134444';
export const ADDRESS = 'R. Buenos Aires, 1373 · Água Verde · Curitiba/PR';

export const headerData = {
  links: [
    {
      text: 'Soluções',
      links: [
        { text: 'Outsourcing de impressão', href: getPermalink('/outsourcing-de-impressao-em-curitiba-3') },
        { text: 'Gestão de impressão', href: getPermalink('/gestao-de-impressao') },
        { text: 'Locação de impressoras', href: getPermalink('/locacao-de-impressoras') },
        { text: 'Assistência técnica', href: getPermalink('/assistencia-tecnica-de-impressoras') },
        { text: 'Suprimentos', href: getPermalink('/suprimentos') },
        { text: 'Serviços de impressão', href: getPermalink('/servicos-de-impressao') },
        { text: 'Gestão de outsourcing', href: getPermalink('/gestao-de-outsourcing') },
        { text: 'Compensação de carbono', href: getPermalink('/compensacao-de-carbono-na-sua-impressao') },
      ],
    },
    {
      text: 'Segmentos',
      links: [
        { text: 'Impressoras para área médica', href: getPermalink('/impressoras-para-area-medica') },
        { text: 'Impressão para contabilidade', href: getPermalink('/impressao-para-contabilidade') },
        { text: 'Impressoras para varejo', href: getPermalink('/impressoras-para-varejo') },
        { text: 'Impressão para advocacias', href: getPermalink('/impressao-para-advocacias') },
        { text: 'Impressão para escolas', href: getPermalink('/impressao-para-escolas') },
      ],
    },
    { text: 'Produtos', href: getPermalink('/produtos') },
    {
      text: 'A Interativa',
      links: [
        { text: 'Quem somos', href: getPermalink('/quem-somos') },
        { text: 'Autorizada Xerox', href: getPermalink('/autorizada-xerox') },
        { text: 'Trabalhe conosco', href: getPermalink('/trabalhe-conosco') },
      ],
    },
    { text: 'Blog', href: getBlogPermalink() },
    { text: 'Contato', href: getPermalink('/contato') },
  ],
  actions: [
    {
      variant: 'primary' as const,
      text: 'Diagnóstico gratuito',
      href: WHATSAPP_URL,
      target: '_blank',
      icon: 'tabler:brand-whatsapp',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Serviços',
      links: [
        { text: 'Locação de Impressoras', href: getPermalink('/locacao-de-impressoras') },
        { text: 'Outsourcing de Impressão', href: getPermalink('/outsourcing-de-impressao-em-curitiba-3') },
        { text: 'Gestão de Impressão', href: getPermalink('/gestao-de-impressao') },
        { text: 'Assistência Técnica', href: getPermalink('/assistencia-tecnica-de-impressoras') },
        { text: 'Compensação de Carbono', href: getPermalink('/compensacao-de-carbono-na-sua-impressao') },
        { text: 'Suprimentos', href: getPermalink('/suprimentos') },
      ],
    },
    {
      title: 'Institucional',
      links: [
        { text: 'Sobre a Interativa', href: getPermalink('/quem-somos') },
        { text: 'Autorizada Xerox', href: getPermalink('/autorizada-xerox') },
        { text: 'Produtos', href: getPermalink('/produtos') },
        { text: 'Contato', href: getPermalink('/contato') },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Trabalhe Conosco', href: getPermalink('/trabalhe-conosco') },
      ],
    },
    {
      title: 'Contato',
      links: [
        { text: `Telefone: ${PHONE_DISPLAY}`, href: PHONE_HREF },
        { text: `WhatsApp: ${PHONE_DISPLAY}`, href: WHATSAPP_URL },
        { text: ADDRESS, href: 'https://maps.google.com/?q=R.+Buenos+Aires,+1373,+Curitiba+PR' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [{ ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: WHATSAPP_URL }],
  footNote: `
    Copyright © ${new Date().getFullYear()} · Interativa Impressoras · Feito por <a class="text-primary underline" href="https://cwbti.com.br/">CwbTecnologia</a>
  `,
};
