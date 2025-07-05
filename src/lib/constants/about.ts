// Page "/" section #sobre
export const HOME_ABOUT_CONTENT = {
  badge: "Sobre Nós",
  title: "Dedicação e",
  titleHighlight: "expertise",
  subtitle: "Excelência em cada detalhe, paixão em cada projeto",
  rating: {
    stars: 5,
    score: "5/5 de",
    reviews: "44+ Avaliações",
  },
  stats: [
    "Profissional Capacitado",
    "Anos de Experiência",
    "Alunos Satisfeitos",
  ],
  testimonial: {
    text: "Muito boa didática, conhecimento e domínio do assunto.\nEu comprovo e indico.",
    author: "Gustavo",
    company: "GP Car Centro de Treinamento Automotiva",
    source: "Google Reviews",
    avatar: "/gustavo.jpg",
  },
  instructor: {
    name: "Márcio",
    role: "Especialista em Estética Automotiva e Instrutor do curso de Polimento de Faróis",
    image: "/aboutimg.png",
  },
  ctas: {
    readMore: {
      text: "Continuar lendo",
      link: "/sobre",
    },
    services: {
      text: "Nossos Serviços",
      link: "/servicos",
    },
    course: {
      text: "Nosso Curso",
      link: "/curso",
    },
  },
} as const;

// Page /sobre
export const ABOUT_CONTENT = {
  headerImage: "/aboutus.jpg",
  headerPageTitle: "Sobre Nós",
  ourHistory: {
    title: "Nossa História",
    subtitle: "Cada veículo é uma obra de arte em potencial",
    description:
      "Fundada em 2021, em Pinhais (PR), a MSS_STUDIO CAR surgiu para oferecer serviços de estética automotiva premium, com foco em polimento, vitrificação e higienização. Nossa filosofia combina tecnologia de ponta com habilidade artesanal, buscando não apenas restaurar, mas elevar a condição do seu veículo. Comprometidos com a qualidade e os detalhes, também oferecemos capacitação por meio do nosso curso de Polimento de Faróis.",
    image: "/autodetail.jpg",
    imageAlt: "Nossa História MSS Studio Car",
    cta: {
      text: "Ver Nosso Curso",
      link: "/curso",
    },
  },
  whyChooseUs: {
    title: "Por que escolher a MSS_STUDIO CAR?",
    description:
      "Conheça os diferenciais que fazem nossos clientes voltarem sempre",
    features: [
      {
        icon: "Zap",
        title: "Atendimento Rápido",
        description:
          "Serviços com hora marcada e entrega no prazo, sem perder a qualidade no resultado",
      },
      {
        icon: "Sparkles",
        title: "Acabamento Impecável",
        description:
          "Cuidamos de cada detalhe para deixar seu carro com aparência de novo",
      },
      {
        icon: "Star",
        title: "Produtos de Alta Qualidade",
        description:
          "Utilizamos apenas materiais profissionais e testados para garantir durabilidade",
      },
      {
        icon: "UserCheck",
        title: "Experiência e Confiança",
        description:
          "Anos de experiência em estética automotiva e centenas de clientes satisfeitos",
      },
    ],
    cta: {
      text: "Ver Nossos Serviços",
      link: "/#servicos",
    },
  },
  contact: {
    text: "Solicite um orçamento",
    whatsappMessage: "Olá, gostaria de solicitar um orçamento",
  },
} as const;
