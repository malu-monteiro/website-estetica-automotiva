import { TrendingUp, Users } from "lucide-react";

import Polimento from "../assets/polimento.png";
import PolimentoFarol from "../assets/polimento-farol.png";
import Vitrificação from "../assets/vitrificacao.jpg";
import Higienização from "../assets/higienizacao-interna.avif";

import PolimentoCarousel from "../assets/polimento-1.jpg";
import Polimento2Carousel from "../assets/polimento-2.jpg";

import HigienizacaoCarousel from "../assets/higienizacao1.jpg";
import Higienizacao2Carousel from "../assets/higienizacao2.jpg";

import { FaFacebook, FaInstagram } from "react-icons/fa6";

export const navLinks = [
  { id: "home", title: "Início" },
  { id: "about", title: "Sobre Nós" },
  { id: "services", title: "Serviços" },
  { id: "reviews", title: "Avaliações" },
  { id: "location", title: "Localização" },
  { id: "contact", title: "Contato" },
];

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
    image: PolimentoFarol,
    path: "/polimento-farol",
  },
  {
    id: "service-3",
    title: "Vitrificação",
    image: Vitrificação,
    path: "/vitrificacao",
  },
  {
    id: "service-4",
    title: "Higienização Interna Premium",
    image: Higienização,
    path: "/higienizacao-interna",
  },
];

export const polimentoData = {
  title: "Polimento",
  images: [PolimentoCarousel, Polimento2Carousel],
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
    "Recupera o brilho original da pintura.",
    "Elimina micro-riscos e marcas de lavagem.",
    "Prepara a pintura para receber uma camada de proteção, como ceras ou vitrificadores.",
  ],
};

export const higienizacaoData = {
  title: "Higienização Interna Premium",
  images: [HigienizacaoCarousel, Higienizacao2Carousel],
  finalidade: [
    "Remove resíduos, manchas, poeira e sujeiras acumuladas em estofados, carpetes, painéis e outras superfícies internas do veículo.",
    "Elimina germes, bactérias, fungos e ácaros, garantindo um ambiente mais saudável para os ocupantes.",
    "Remove odores indesejados, como de cigarro, mofo ou comida, deixando o interior do veículo mais agradável.",
  ],

  beneficios: [
    "Reduz alérgenos e poeira, promovendo um ambiente mais respirável, especialmente para quem sofre de alergias ou problemas respiratórios.",
    "A limpeza regular ajuda a identificar problemas potenciais, como manchas de líquidos que podem causar danos permanentes se não tratados.",
    "O interior do carro ganha uma aparência como nova.",
  ],

  processo: [
    "Aspiração completa do interior",
    "Aplicação de produtos específicos",
    "Higienização do ar condicionado",
    "Limpeza de todas as superfícies",
  ],
};
export const about = [
  {
    id: "about",
    title: "Sobre Nós",
    subtitle: "Excelência em cada ",
    highlight: "detalhe!",
    description: `A MSS_STUDIOCAR é uma empresa especializada em estética automotiva. 
    Oferecemos serviços de Polimento, Revitalização de Faróis, Vitrificação e Higienização 
    Interna Premium, garantindo que seu veículo se mantenha impecável e protegido contra os 
    efeitos do tempo. Com atenção aos detalhes e compromisso com a qualidade, proporcionamos 
    um carro com aparência de novo, preservando seu valor. `,
  },
];

export const aboutUs = [
  {
    id: "about-us",
    description: `A MSS_STUDIOCAR é uma empresa 
    especializada em estética automotiva 
    localizada em Pinhais.`,
  },
];

export const contact = [
  {
    id: "contact-1",
    content: "Email: @.com",
    href: "mailto:@.com",
  },
  {
    id: "contact-2",
    content: "Instagram: @",
    href: "https://www.instagram.com/",
  },
  {
    id: "contact-3",
    content: "WhatsApp: @",
    href: "@",
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    href: "@",
    icon: <FaInstagram />,
  },
  {
    id: "social-media-2",
    href: "@",
    icon: <FaFacebook />,
  },
];
