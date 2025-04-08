import { TrendingUp, Users, ChevronsDown } from "lucide-react";

import background from "../assets/homeBackground.png";

import AboutImage from "../assets/aboutImage.png";

import Polimento from "../assets/polimento.jpg";
import Revitalizacao from "../assets/revitalizacao.jpg";
import Vitrificação from "../assets/vitrificacao.jpg";
import Higienização from "../assets/higienizacao-interna.avif";

import Polimento1 from "../assets/carousel/polimento1.jpg";
import Polimento2 from "../assets/carousel/polimento2.jpg";
import Polimento3 from "../assets/carousel/polimento3.jpg";

import Revitalizacao1 from "../assets/carousel/revitalizacao1.jpg";
import Revitalizacao2 from "../assets/carousel/revitalizacao2.jpg";
import Revitalizacao3 from "../assets/carousel/revitalizacao3.jpg";
import Revitalizacao4 from "../assets/carousel/revitalizacao4.jpg";
import Revitalizacao5 from "../assets/carousel/revitalizacao5.jpg";
import Revitalizacao6 from "../assets/carousel/revitalizacao6.jpg";
import Revitalizacao7 from "../assets/carousel/revitalizacao7.jpg";
import Revitalizacao8 from "../assets/carousel/revitalizacao8.jpg";
import Revitalizacao9 from "../assets/carousel/revitalizacao9.jpg";
import Revitalizacao10 from "../assets/carousel/revitalizacao10.png";
import Revitalizacao11 from "../assets/carousel/revitalizacao11.png";
import Revitalizacao12 from "../assets/carousel/revitalizacao12.png";
import Revitalizacao13 from "../assets/carousel/revitalizacao13.jpg";
import Revitalizacao14 from "../assets/carousel/revitalizacao14.jpg";
import Revitalizacao15 from "../assets/carousel/revitalizacao15.jpg";
import Revitalizacao16 from "../assets/carousel/revitalizacao16.jpg";

import Vitrificacao1 from "../assets/carousel/vitrificacao1.jpg";
import Vitrificacao2 from "../assets/carousel/vitrificacao2.jpg";
import Vitrificacao3 from "../assets/carousel/vitrificacao3.jpg";

import Higienizacao1 from "../assets/carousel/higienizacao1.png";
import Higienizacao2 from "../assets/carousel/higienizacao2.jpg";
import Higienizacao3 from "../assets/carousel/higienizacao3.png";
import Higienizacao4 from "../assets/carousel/higienizacao4.png";
import Higienizacao5 from "../assets/carousel/higienizacao5.png";
import Higienizacao6 from "../assets/carousel/higienizacao6.png";
import Higienizacao7 from "../assets/carousel/higienizacao7.png";
import Higienizacao8 from "../assets/carousel/higienizacao8.png";
import Higienizacao9 from "../assets/carousel/higienizacao9.png";
import Higienizacao10 from "../assets/carousel/higienizacao10.png";
import Higienizacao11 from "../assets/carousel/higienizacao11.png";
import Higienizacao12 from "../assets/carousel/higienizacao12.png";

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
  title: "MSS_STUDIO CAR",
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
    path: "/polimento",
  },
  {
    id: "service-2",
    title: "Revitalização de Farol",
    image: Revitalizacao,
    path: "/revitalizacao-de-farol",
  },
  {
    id: "service-3",
    title: "Vitrificação de Pintura",
    image: Vitrificação,
    path: "/vitrificacao-de-pintura",
  },
  {
    id: "service-4",
    title: "Higienização Interna Premium",
    image: Higienização,
    path: "/higienizacao-interna-premium",
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
    description: `A MSS_STUDIO CAR é uma empresa especializada em estética automotiva. 
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
      "Agende seu horário pelo WhatsApp conforme sua disponibilidade.",
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
  images: [Polimento1, Polimento2, Polimento3],
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
  title: "Vitrificação",
  images: [Vitrificacao1, Vitrificacao2, Vitrificacao3],
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
    description: `A MSS_STUDIO CAR é uma empresa 
    especializada em estética automotiva 
    localizada em Pinhais.`,
  },
];
