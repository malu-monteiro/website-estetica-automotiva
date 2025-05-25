import { TrendingUp, Users, ChevronsDown } from "lucide-react";

import background from "../assets/homeBackground.png";

import AboutImage from "../assets/aboutImage.png";

import Polimento from "../assets/polimento.jpg";
import Revitalizacao from "../assets/revitalizacao.jpg";
import Vitrificação from "../assets/vitrificacao.jpg";
import Higienização from "../assets/higienizacao-interna.avif";

import Polimento1 from "../assets/carousel/polimento/polimento1.jpg";
import Polimento2 from "../assets/carousel/polimento/polimento2.jpg";
import Polimento3 from "../assets/carousel/polimento/polimento3.jpg";
import Polimento4 from "../assets/carousel/polimento/polimento4.jpg";
import Polimento5 from "../assets/carousel/polimento/polimento5.jpg";
import Polimento6 from "../assets/carousel/polimento/polimento6.jpg";
import Polimento7 from "../assets/carousel/polimento/polimento7.jpg";
import Polimento8 from "../assets/carousel/polimento/polimento8.jpg";

import Revitalizacao1 from "../assets/carousel/revitalizacao/revitalizacao1.jpg";
import Revitalizacao2 from "../assets/carousel/revitalizacao/revitalizacao2.jpg";
import Revitalizacao3 from "../assets/carousel/revitalizacao/revitalizacao3.jpg";
import Revitalizacao4 from "../assets/carousel/revitalizacao/revitalizacao4.jpg";
import Revitalizacao5 from "../assets/carousel/revitalizacao/revitalizacao5.jpg";
import Revitalizacao6 from "../assets/carousel/revitalizacao/revitalizacao6.jpg";
import Revitalizacao7 from "../assets/carousel/revitalizacao/revitalizacao7.jpg";
import Revitalizacao8 from "../assets/carousel/revitalizacao/revitalizacao8.jpg";
import Revitalizacao9 from "../assets/carousel/revitalizacao/revitalizacao9.jpg";
import Revitalizacao10 from "../assets/carousel/revitalizacao/revitalizacao10.png";
import Revitalizacao11 from "../assets/carousel/revitalizacao/revitalizacao11.png";
import Revitalizacao12 from "../assets/carousel/revitalizacao/revitalizacao12.png";
import Revitalizacao13 from "../assets/carousel/revitalizacao/revitalizacao13.jpg";
import Revitalizacao14 from "../assets/carousel/revitalizacao/revitalizacao14.jpg";
import Revitalizacao15 from "../assets/carousel/revitalizacao/revitalizacao15.jpg";
import Revitalizacao16 from "../assets/carousel/revitalizacao/revitalizacao16.jpg";
import Revitalizacao17 from "../assets/carousel/revitalizacao/revitalizacao17.jpg";
import Revitalizacao18 from "../assets/carousel/revitalizacao/revitalizacao18.jpg";
import Revitalizacao19 from "../assets/carousel/revitalizacao/revitalizacao19.jpg";
import Revitalizacao20 from "../assets/carousel/revitalizacao/revitalizacao20.jpg";
import Revitalizacao21 from "../assets/carousel/revitalizacao/revitalizacao21.jpg";
import Revitalizacao22 from "../assets/carousel/revitalizacao/revitalizacao22.jpg";
import Revitalizacao23 from "../assets/carousel/revitalizacao/revitalizacao23.jpg";
import Revitalizacao24 from "../assets/carousel/revitalizacao/revitalizacao24.jpg";

import Vitrificacao1 from "../assets/carousel/vitrificacao/vitrificacao1.jpg";
import Vitrificacao2 from "../assets/carousel/vitrificacao/vitrificacao2.png";
import Vitrificacao3 from "../assets/carousel/vitrificacao/vitrificacao3.jpg";
import Vitrificacao4 from "../assets/carousel/vitrificacao/vitrificacao4.jpg";
import Vitrificacao5 from "../assets/carousel/vitrificacao/vitrificacao5.jpg";
import Vitrificacao6 from "../assets/carousel/vitrificacao/vitrificacao6.jpg";

import Higienizacao1 from "../assets/carousel/higienizacao/higienizacao1.png";
import Higienizacao2 from "../assets/carousel/higienizacao/higienizacao2.jpg";
import Higienizacao3 from "../assets/carousel/higienizacao/higienizacao3.png";
import Higienizacao4 from "../assets/carousel/higienizacao/higienizacao4.png";
import Higienizacao5 from "../assets/carousel/higienizacao/higienizacao5.png";
import Higienizacao6 from "../assets/carousel/higienizacao/higienizacao6.png";
import Higienizacao7 from "../assets/carousel/higienizacao/higienizacao7.png";
import Higienizacao8 from "../assets/carousel/higienizacao/higienizacao8.png";
import Higienizacao9 from "../assets/carousel/higienizacao/higienizacao9.png";
import Higienizacao10 from "../assets/carousel/higienizacao/higienizacao10.png";
import Higienizacao11 from "../assets/carousel/higienizacao/higienizacao11.png";
import Higienizacao12 from "../assets/carousel/higienizacao/higienizacao12.png";

import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";

export const navLinks = [
  { id: "home", title: "Início" },
  { id: "about", title: "Sobre Nós" },
  { id: "services", title: "Serviços" },
  { id: "course", title: "Curso" },
  { id: "reviews", title: "Avaliações" },
  { id: "location", title: "Localização" },
  { id: "contact", title: "Contato" },
];

export const homeData = {
  title: "MSS_Studio Car",
  subtitle: "Estética Automotiva",
  description:
    "Garantimos qualidade transformando a aparência do seu veículo, destacando os detalhes e trazendo brilho e proteção que fazem a diferença.",
  backgroundImage: background,
  button: {
    text: "Saiba mais",
    href: "#about",
    icon: ChevronsDown,
    ariaLabel: "Saiba mais sobre nós",
  },
};

export const whatsappBase = {
  href: "https://wa.me/41999346385",
  icon: FaWhatsapp,
  ariaLabel: "Conversar no WhatsApp",
  className: "bg-green-600 hover:bg-green-700 text-white",
};

export const features = [
  {
    id: "feature-1",
    icon: TrendingUp,
    title: "+5",
    content: "Anos de experiência.",
  },
  {
    id: "feature-2",
    icon: Users,
    title: "+1000",
    content: "Clientes atendidos.",
  },
];

export const services = [
  {
    id: "service-1",
    title: "Polimento",
    image: Polimento,
    path: "/website-estetica-automotiva/polimento",
  },
  {
    id: "service-2",
    title: "Revitalização de Farol",
    image: Revitalizacao,
    path: "/website-estetica-automotiva/revitalizacao-de-farol",
  },
  {
    id: "service-3",
    title: "Vitrificação de Pintura",
    image: Vitrificação,
    path: "/website-estetica-automotiva/vitrificacao-de-pintura",
  },
  {
    id: "service-4",
    title: "Higienização Interna Premium",
    image: Higienização,
    path: "/website-estetica-automotiva/higienizacao-interna-premium",
  },
];

export const servicesHeader = {
  title: "Nossos",
  highlight: "Serviços",
  subtitle: "Conheça nossos serviços e acesse para saber mais!",
};

export const about = [
  {
    id: "about",
    title: "Sobre Nós",
    subtitle: "Excelência em cada ",
    highlight: "detalhe!",
    image: [AboutImage],
    description: `A MSS_Studio Car é uma empresa especializada em estética automotiva. 
    Oferecemos serviços de polimento, revitalização de faróis, vitrificação e higienização
    interna premium, garantindo que seu veículo se mantenha impecável e protegido contra os 
    efeitos do tempo. Com atenção aos detalhes e compromisso com a qualidade, proporcionamos 
    um carro com aparência de novo, preservando seu valor.`,
  },
];

export const contact = [
  {
    id: "contact-3",
    content: "WhatsApp: (41) 9 9934-6385",
    href: "https://wa.me/41999346385",
  },
  {
    id: "contact-2",
    content: "Instagram: @mss_studiocar",
    href: "https://www.instagram.com/mss_studiocar/",
  },
  {
    id: "contact-1",
    content: "Email: mssstudiocar@gmail.com",
    href: "mailto:mssstudiocar@gmail.com",
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    href: "https://www.instagram.com/mss_studiocar/",
    icon: FaInstagram,
    text: "Nos acompanhe no Instagram",
  },
  {
    id: "social-media-2",
    href: "https://www.facebook.com/people/MSS-StudioCar/61563094166325/",
    icon: FaFacebook,
    text: "Curta nossa página no Facebook",
  },
  {
    id: "social-media-3",
    href: "https://wa.me/41999346385",
    icon: FaWhatsapp,
  },
];

export const courseData = {
  title: "Curso Polimento de Farol",
  subtitle: "Técnicas - 100% Prático",
  description:
    "Aprenda as melhores técnicas profissionais para polimento de faróis com nosso curso intensivo.",
  image: "/images/polimento-farol.jpg",

  features: [
    "Lixamento manual.",
    "Lixamento com máquina.",
    "Controle de lixamento.",
    "Remoção de craquelados.",
  ],

  staticTexts: {
    techniquesTitle: "Técnicas Dominadas",
    certificateText: "Certificado de conclusão.",
    premiumTitle: "Diferencial Exclusivo",
    premiumDescription: "Técnicas aplicadas em concessionárias premium",
    ctaTitle: "Curso individual",
    ctaHighlight: "profissionalizante!",
    ctaDescription:
      "Agende seu horário via WhatsApp conforme sua disponibilidade.",
  },
};

export const elfsightConfig = {
  appId: import.meta.env.VITE_ELFSIGHT_APP_ID,
};

export const locationData = {
  center: { lng: -49.1529147, lat: -25.4172584 },
  zoom: 15,
  address: "Rua Alamanda, 85, Pinhais, PR",
  cep: "83328-130",
  title: "Endereço",
  workingHours: "Atendimento de segunda a sexta, das 8h às 18h",
};

export const polimentoData = {
  title: "Polimento",
  subtitle: "Revitalização profissional para o interior do seu veículo",
  images: [
    Polimento1,
    Polimento2,
    Polimento3,
    Polimento4,
    Polimento5,
    Polimento6,
    Polimento7,
    Polimento8,
  ],
  finalidade: [
    "Remover arranhões leves.",
    "Marcas de oxidação.",
    "Imperfeições da pintura do carro.",
    "Devolver brilho e uniformidade à superfície.",
  ],

  beneficios: [
    "Recupera o brilho original da pintura.",
    "Elimina micro-riscos e marcas de lavagem.",
    "Prepara a pintura para receber uma camada de proteção, como ceras ou vitrificadores.",
  ],

  processo: [
    "Lavagem e descontaminação química da pintura.",
    "Descontaminação mecânica.",
    "Polimento com abrasivos de alta nanotecnologia do mercado.",
  ],
};

export const revitalizacaoData = {
  title: "Revitalização de Farol",
  images: [
    Revitalizacao1,
    Revitalizacao2,
    Revitalizacao3,
    Revitalizacao4,
    Revitalizacao5,
    Revitalizacao6,
    Revitalizacao7,
    Revitalizacao8,
    Revitalizacao9,
    Revitalizacao10,
    Revitalizacao11,
    Revitalizacao12,
    Revitalizacao13,
    Revitalizacao14,
    Revitalizacao15,
    Revitalizacao16,
    Revitalizacao17,
    Revitalizacao18,
    Revitalizacao19,
    Revitalizacao20,
    Revitalizacao21,
    Revitalizacao22,
    Revitalizacao23,
    Revitalizacao24,
  ],
  finalidade: [
    "Remover amarelado.",
    "Remover micro trincas.",
    "Remover craquelados.",
  ],

  beneficios: [
    "Mais segurança ao dirigir à noite.",
    "Clareamento da lente.",
    "Iluminação mais eficiente.",
    "Valorização do seu veículo, deixando com aspecto de novo.",
  ],

  processo: [
    "Lixamento.",
    "Aplicação de polimero para cristalizar e proteger a lente.",
  ],
};

export const vitrificacaoData = {
  title: "Vitrificação de Pintura",
  images: [
    Vitrificacao1,
    Vitrificacao2,
    Vitrificacao3,
    Vitrificacao4,
    Vitrificacao5,
    Vitrificacao6,
  ],
  finalidade: [
    "Agir como uma camada de sacrifício protegendo o verniz.",
    "Proteger de ação química e intempéries do dia-a-dia.",
  ],

  beneficios: [
    "Proteção de longa duração.",
    "Brilho intenso.",
    "Facilidade na limpeza.",
    "Resistência aos raios UV.",
    "Proteção química.",
    "Valorização do seu veículo.",
  ],

  processo: [
    "Após o polimento é feito limpeza com produto específico.",
    "Aplicação do vitrificador de longa proteção.",
  ],
};

export const higienizacaoData = {
  title: "Higienização Interna Premium",
  subtitle: "Revitalização profissional para o interior do seu veículo",
  images: [
    Higienizacao1,
    Higienizacao2,
    Higienizacao3,
    Higienizacao4,
    Higienizacao5,
    Higienizacao6,
    Higienizacao7,
    Higienizacao8,
    Higienizacao9,
    Higienizacao10,
    Higienizacao11,
    Higienizacao12,
  ],
  finalidade: [
    "Cuidado com sua saúde e bem estar.",
    "Conforto ao dirigir.",
    "Valorização do seu veículo.",
    "Prevenção de danos.",
  ],

  beneficios: [
    "Melhora qualidade do ar.",
    "Redução de alergias e doenças.",
    "Prevenção de pragas.",
    "Eliminação de odores.",
  ],

  processo: [
    "Limpeza com produtos bactericidas.",
    "Utilização de vapor.",
    "Oxi sanitização com geradora de ozônio.",
  ],
};

export const aboutUs = [
  {
    id: "about-us",
    description: `A MSS_Studio Car é uma empresa 
    especializada em estética automotiva 
    localizada em Pinhais.`,
  },
];
