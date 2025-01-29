import { TrendingUp, Users } from "lucide-react";

import AboutImage from "../assets/aboutImage.png";

import Polimento from "../assets/polimento.png";
import PolimentoFarol from "../assets/polimento-farol.png";
import Vitrificação from "../assets/vitrificacao.jpg";
import Higienização from "../assets/higienizacao-interna.avif";

import Polimento1 from "../assets/carousel/polimento1.jpg";
import Polimento2 from "../assets/carousel/polimento2.jpg";

import Farol1 from "../assets/carousel/farol1.jpg";
import Farol2 from "../assets/carousel/farol2.jpg";
import Farol3 from "../assets/carousel/farol3.jpg";
import Farol4 from "../assets/carousel/farol4.jpg";
import Farol5 from "../assets/carousel/farol5.jpg";
import Farol6 from "../assets/carousel/farol6.jpg";
import Farol7 from "../assets/carousel/farol7.jpg";
import Farol8 from "../assets/carousel/farol8.jpg";
import Farol9 from "../assets/carousel/farol9.jpg";
import Farol10 from "../assets/carousel/farol10.png";
import Farol11 from "../assets/carousel/farol11.png";
import Farol12 from "../assets/carousel/farol12.png";
import Farol13 from "../assets/carousel/farol13.jpg";
import Farol14 from "../assets/carousel/farol14.jpg";
import Farol15 from "../assets/carousel/farol15.jpg";
import Farol16 from "../assets/carousel/farol16.jpg";

import Vitrificacao1 from "../assets/carousel/vitrificacao1.jpg";
import Vitrificacao2 from "../assets/carousel/vitrificacao2.jpg";
import Vitrificacao3 from "../assets/carousel/vitrificacao3.jpg";
import Vitrificacao4 from "../assets/carousel/vitrificacao4.jpg";

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
  images: [Polimento1, Polimento2],
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

export const farolData = {
  title: "Revitalização de Farol",
  images: [
    Farol1,
    Farol2,
    Farol3,
    Farol4,
    Farol5,
    Farol6,
    Farol7,
    Farol8,
    Farol9,
    Farol10,
    Farol11,
    Farol12,
    Farol13,
    Farol14,
    Farol15,
    Farol16,
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
    "Recupera o brilho original da pintura.",
    "Elimina micro-riscos e marcas de lavagem.",
    "Prepara a pintura para receber uma camada de proteção, como ceras ou vitrificadores.",
  ],
};

export const vitrificacaoData = {
  title: "Vitrificação",
  images: [Vitrificacao1, Vitrificacao2, Vitrificacao3, Vitrificacao4],
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
    image: [AboutImage],
    description: `A MSS_STUDIO CAR é uma empresa especializada em estética automotiva. 
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
    content: "Email: mssstudiocar@gmail.com",
    href: "mailto:mssstudiocar@gmail.com",
  },
  {
    id: "contact-2",
    content: "Instagram: @",
    href: "https://www.instagram.com/mss_studiocar/",
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
    href: "https://www.instagram.com/mss_studiocar/",
    icon: <FaInstagram />,
    text: "Nos acompanhe no Instagram",
  },
  {
    id: "social-media-2",
    href: "@",
    icon: <FaFacebook />,
  },
];
