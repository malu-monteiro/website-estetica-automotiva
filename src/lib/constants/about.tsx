import { FaFacebook, FaInstagram } from "react-icons/fa";

interface OurHistoryContent {
  title: string;
  subtitle: string;
  description: string | React.ReactNode;
  image: string;
  imageAlt: string;
  cta: {
    text: string;
    link: string;
  };
}

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface WhyChooseUsContent {
  title: string;
  description: string;
  features: Feature[];
  cta: {
    text: string;
    link: string;
  };
}

interface ContactContent {
  text: string;
  whatsappMessage: string;
}

interface AboutContent {
  headerImage: string;
  headerPageTitle: string;
  ourHistory: OurHistoryContent;
  whyChooseUs: WhyChooseUsContent;
  contact: ContactContent;
}

// Page "/" section #sobre
export const HOME_ABOUT_CONTENT = {
  badge: "Sobre Nós",
  title: "Dedicação e",
  titleHighlight: "expertise",
  subtitle: "Excelência em cada detalhe, paixão em cada projeto",
  rating: {
    stars: 5,
    score: "5/5 de",
    reviews: "45+ Avaliações",
  },
  stats: [
    "Profissional Capacitado",
    "Anos de Experiência",
    "Alunos Satisfeitos",
  ],
  testimonial: {
    text: "Serviço de extrema qualidade e com preço justo. \n Recomendo a todos.",
    author: "Gilson",
    source: "Google Reviews",
  },
  instructor: {
    name: "Márcio",
    role: "Especialista em Estética Automotiva e Instrutor do curso de Polimento de Faróis",
    image: "/about/marcio.webp",
  },
  socialLinks: [
    {
      icon: <FaInstagram className="size-5" />,
      href: "https://www.instagram.com/mss_studiocar/",
      label: "Instagram",
    },
    {
      icon: <FaFacebook className="size-5" />,
      href: "https://www.facebook.com/profile.php?id=61563094166325",
      label: "Facebook",
    },
  ],
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
export const ABOUT_CONTENT: AboutContent = {
  headerImage: "/about/page/header.webp",
  headerPageTitle: "Sobre Nós",
  ourHistory: {
    title: "Nossa História",
    subtitle: "Cada veículo é uma obra de arte em potencial",
    description: (
      <>
        Fundada em 2021, em Pinhais (PR), a MSS_STUDIO CAR surgiu para oferecer
        serviços de estética automotiva premium, com foco em{" "}
        <span className="text-white">
          polimento, vitrificação e higienização
        </span>
        . Nossa filosofia combina tecnologia de ponta com habilidade artesanal,
        buscando não apenas restaurar, mas elevar a condição do seu veículo.
        Comprometidos com a qualidade e os detalhes, também oferecemos
        capacitação por meio do nosso{" "}
        <span className="text-white">Curso de Polimento de Faróis</span>.
      </>
    ),
    image: "/about/page/our-history.webp",
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
