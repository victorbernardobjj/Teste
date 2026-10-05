/**
 * Arquitetura de Conteúdo — Dra. Mariana Almeida (Psicóloga Clínica)
 * Centralização editorial de dados para facilitar manutenção e personalização.
 */

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  context?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface IdentificationItem {
  number: string;
  title: string;
  description: string;
}

export interface ApproachStep {
  number: string;
  title: string;
  description: string;
}

export interface AreaItem {
  title: string;
  subtitle: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const CLINIC_INFO = {
  name: "Dra. Mariana Almeida",
  shortName: "Mariana Almeida",
  role: "Psicóloga Clínica",
  crp: "CRP 05/123456",
  approach: "Terapia Cognitivo-Comportamental",
  modality: "Atendimento online para todo o Brasil",
  location: "Rio de Janeiro — RJ",
  targetAudience: "Adultos de 25 a 45 anos",
  phoneDisplay: "(21) 99999-9999",
  whatsappUrl:
    "https://wa.me/5521999999999?text=Ol%C3%A1,%20Dra.%20Mariana!%20Encontrei%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20atendimento.",
  instagram: "@victorbernardobjj",
  instagramUrl: "https://instagram.com/victorbernardobjj",
  email: "contato@marianaalmeidapsi.com.br",
  year: 2026,
};

export const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Abordagem", href: "#abordagem" },
  { label: "Atendimento", href: "#atendimento" },
  { label: "FAQ", href: "#faq" },
];

export const HERO_CONTENT = {
  label: "PSICOTERAPIA PARA ADULTOS",
  headline: "Um espaço para você se ouvir, se compreender e cuidar de si.",
  description:
    "Psicoterapia online para quem deseja compreender melhor suas emoções e construir uma relação mais saudável consigo mesmo.",
  ctaText: "Conhecer o atendimento",
  ctaTarget: "#atendimento",
  meta: "Atendimento online · CRP 05/123456",
};

export const IDENTIFICATION_CONTENT = {
  label: "TALVEZ VOCÊ SE RECONHEÇA AQUI",
  title:
    "Algumas coisas continuam ocupando espaço na cabeça, mesmo quando o dia termina.",
  intro:
    "Muitas vezes aprendemos a seguir em frente ignorando desconfortos constantes. A psicoterapia oferece um tempo dedicado para investigar com cuidado o que está por trás dessas sensações.",
  items: [
    {
      number: "01",
      title: "Ansiedade e pensamentos acelerados",
      description:
        "Preocupação persistente com o futuro, sensação constante de alerta e dificuldade real em desacelerar o fluxo mental ao final do dia.",
    },
    {
      number: "02",
      title: "Dificuldade em estabelecer limites",
      description:
        "Sentimento de culpa ao dizer não, medo de decepcionar os outros e sobrecarga contínua por assumir responsabilidades que não são suas.",
    },
    {
      number: "03",
      title: "Autoestima e insegurança",
      description:
        "Autocrítica desproporcional, comparação desgastante com terceiros e a sensação recorrente de nunca ser ou fazer o suficiente.",
    },
    {
      number: "04",
      title: "Relações e conflitos",
      description:
        "Padrões repetitivos em vínculos afetivos e familiares, receio de rejeição ou abandono e desgastes frequentes na comunicação.",
    },
    {
      number: "05",
      title: "Sobrecarga emocional",
      description:
        "Sensação de estar operando no limite das próprias forças, onde mesmo pequenos imprevistos causam esgotamento profundo.",
    },
    {
      number: "06",
      title: "Momentos de mudança",
      description:
        "Transições profissionais, encerramento de ciclos, perdas ou novos papéis que exigem reconstrução de identidade e novos rumos.",
    },
  ] as IdentificationItem[],
};

export const QUOTE_CONTENT = {
  quote: "Você não precisa ter todas as respostas antes de começar.",
  subquote:
    "A terapia pode ser um espaço para olhar com mais calma para aquilo que está acontecendo.",
};

export const ABOUT_CONTENT = {
  label: "SOBRE MARIANA",
  greeting: "Olá, eu sou Mariana.",
  paragraphs: [
    "Sou psicóloga clínica e acredito que a psicoterapia pode ser um espaço de acolhimento, reflexão e construção de novas possibilidades.",
    "Meu trabalho parte de uma escuta cuidadosa e individualizada, respeitando a história e o momento de cada pessoa.",
  ],
  specs: [
    { label: "Atuação", value: "Psicóloga Clínica" },
    { label: "Registro", value: "CRP 05/123456" },
    { label: "Linha teórica", value: "Terapia Cognitivo-Comportamental" },
    { label: "Modalidade", value: "Atendimento online para todo o Brasil" },
  ],
};

export const GALLERY_SLIDES = [
  {
    id: "slide-1",
    subtitle: "Consultório e ambientação",
    description: "Espaço sereno planejado para acolhimento e privacidade durante as sessões.",
  },
  {
    id: "slide-2",
    subtitle: "Espaço de escuta e reflexão",
    description: "Encontros focados na individualidade, sem pressa e com respeito ao seu ritmo.",
  },
  {
    id: "slide-3",
    subtitle: "Prática clínica e pesquisa",
    description: "Compromisso constante com a ética profissional e fundamentação técnica.",
  },
];

export const APPROACH_CONTENT = {
  label: "ABORDAGEM",
  title: "Terapia Cognitivo-Comportamental",
  description:
    "A Terapia Cognitivo-Comportamental busca compreender a relação entre pensamentos, emoções e comportamentos, ajudando a construir novas formas de perceber e lidar com diferentes situações.",
  steps: [
    {
      number: "01",
      title: "Compreender",
      description:
        "Mapeamos juntos os pensamentos automáticos e os padrões de crenças que geram angústia ou respostas automáticas no seu cotidiano.",
    },
    {
      number: "02",
      title: "Reorganizar",
      description:
        "Avaliamos com honestidade essas narrativas internas, diferenciando fatos de distorções e flexibilizando conclusões rígidas.",
    },
    {
      number: "03",
      title: "Desenvolver",
      description:
        "Construímos ferramentas comportamentais práticas para que você adquira autonomia duradoura frente aos desafios e decisões.",
    },
  ] as ApproachStep[],
};

export const AREAS_CONTENT = {
  title: "Questões que podemos trabalhar juntos.",
  subtitle:
    "Cada processo terapêutico é desenhado a partir da sua realidade concreta, focando nas áreas que hoje pedem atenção e clareza.",
  areas: [
    {
      title: "ANSIEDADE",
      subtitle: "Preocupações recorrentes, sensação de aperto e antecipação mental",
    },
    {
      title: "AUTOESTIMA",
      subtitle: "Diálogo interno severo, autoimagem e validação pessoal",
    },
    {
      title: "RELACIONAMENTOS",
      subtitle: "Comunicação assertiva, dinâmicas de apego e fronteiras afetivas",
    },
    {
      title: "ESTRESSE",
      subtitle: "Esgotamento emocional, pressões profissionais e desaceleração",
    },
    {
      title: "AUTOCONHECIMENTO",
      subtitle: "Compreensão de valores fundamentais, forças e necessidades reais",
    },
    {
      title: "TRANSIÇÕES DE VIDA",
      subtitle: "Adaptação a novos começos, luto, mudanças de carreira e ciclos",
    },
  ] as AreaItem[],
};

export const TESTIMONIALS_CONTENT = {
  tag: "CONTEÚDO DEMONSTRATIVO",
  note: "Relatos ilustrativos de experiência clínica para preservação total do sigilo ético.",
  items: [
    {
      id: "1",
      quote:
        "Encontrei na terapia um espaço onde consegui organizar pensamentos que pareciam confusos há muito tempo.",
      author: "Paciente fictícia",
      context: "Acompanhamento online · 32 anos",
    },
    {
      id: "2",
      quote:
        "Foi importante ter alguém para me ajudar a olhar para situações que eu vinha tentando resolver sozinho.",
      author: "Paciente fictício",
      context: "Acompanhamento online · 38 anos",
    },
    {
      id: "3",
      quote: "Me senti acolhida desde o primeiro contato.",
      author: "Paciente fictícia",
      context: "Acompanhamento online · 27 anos",
    },
  ] as Testimonial[],
};

export const HOW_IT_WORKS_CONTENT = {
  title: "Começar é mais simples do que parece.",
  subtitle: "O processo inicial é direto, transparente e respeita a sua prontidão.",
  steps: [
    {
      number: "01",
      title: "Primeiro contato",
      description: "Você entra em contato pelo WhatsApp.",
    },
    {
      number: "02",
      title: "Conversa inicial",
      description: "Conversamos sobre o que você procura.",
    },
    {
      number: "03",
      title: "Definição do horário",
      description: "Encontramos um horário adequado.",
    },
    {
      number: "04",
      title: "Início da terapia",
      description: "Começamos o acompanhamento.",
    },
  ] as ProcessStep[],
};

export const FAQ_CONTENT = {
  title: "Perguntas frequentes",
  subtitle: "Respostas transparentes sobre a dinâmica das sessões e o funcionamento da psicoterapia.",
  items: [
    {
      id: "faq-1",
      question: "Como funciona a terapia online?",
      answer:
        "Os atendimentos ocorrem por videochamada em plataforma segura e criptografada (Google Meet ou equivalente). Você precisa apenas de uma conexão estável à internet, fones de ouvido e um local reservado onde possa falar com total privacidade e conforto.",
    },
    {
      id: "faq-2",
      question: "Qual a duração das sessões?",
      answer:
        "Cada sessão tem duração de 50 minutos. Esse tempo é reservado exclusivamente para você, permitindo uma escuta aprofundada e o desenvolvimento consistente dos temas trabalhados.",
    },
    {
      id: "faq-3",
      question: "Com que frequência acontecem as sessões?",
      answer:
        "Geralmente os atendimentos ocorrem com frequência semanal, principalmente no início do processo, para garantir continuidade e ritmo terapêutico. Conforme a evolução e a consolidação dos ganhos, os intervalos podem ser espaçados de comum acordo.",
    },
    {
      id: "faq-4",
      question: "Como faço para agendar?",
      answer:
        "Basta clicar no botão de agendamento ou enviar uma mensagem pelo WhatsApp. Responderei alinhando os horários disponíveis na agenda, explicando as opções de dia e esclarecendo eventuais dúvidas antes de confirmarmos a primeira sessão.",
    },
    {
      id: "faq-5",
      question: "Como saber se a terapia é indicada para mim?",
      answer:
        "A terapia é indicada para qualquer adulto que esteja enfrentando sofrimento emocional, angústia, ansiedade, sobrecarga, dilemas relacionais ou que simplesmente deseje construir maior clareza sobre suas escolhas e seu funcionamento. Não é preciso atingir um estado de crise para buscar ajuda.",
    },
    {
      id: "faq-6",
      question: "Você atende convênios?",
      answer:
        "Os atendimentos são exclusivamente particulares. No entanto, forneço recibo detalhado com número de CRP e documentação necessária para que você possa solicitar o reembolso junto ao seu plano de saúde, caso seu convênio ofereça essa modalidade.",
    },
  ] as FAQItem[],
};

export const FINAL_CTA_CONTENT = {
  title: "Se fizer sentido para você, podemos conversar.",
  description: "Entre em contato para conhecer melhor o atendimento.",
  buttonText: "Falar com Mariana →",
};
