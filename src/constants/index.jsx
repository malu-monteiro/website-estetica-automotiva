import { TrendingUp, Users } from "lucide-react";

import Polimento from "../assets/polimento.png";
import PolimentoFarol from "../assets/polimento-farol.png";
import Vitrificação from "../assets/vitrificacao.jpg";
import Higienização from "../assets/higienizacao-interna.avif";

import Serviço from "../assets/servico.png";

export const navLinks = [
  { label: "Início", href: "#" },
  { label: "Sobre Nós", href: "#" },
  { label: "Serviços", href: "#" },
  { label: "Contato", href: "#" },
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
  },
  {
    id: "service-2",
    title: "Polimento de Farol",
    image: PolimentoFarol,
  },
  {
    id: "service-3",
    title: "Vitrificação",
    image: Vitrificação,
  },
  {
    id: "service-4",
    title: "Higienização Interna",
    image: Higienização,
  },
];

export const about = [
  {
    id: "about-1",
    title: "O cuidado que o seu veículo",
    highlight: "merece!",
    description: `Cuidar do seu carro vai além da estética; é preservar seu valor e prolongar sua vida útil. 
    Na nossa Estética Automotiva, oferecemos polimento, polimento de farol, vitrificação e higienização interna 
    para manter seu veículo impecável e protegido contra os desgastes do tempo. Com qualidade e atenção aos detalhes, 
    garantimos um carro que parece novo e permanece valorizado. Invista no cuidado que seu carro merece!`,
    image: Serviço,
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    link: "https://www.facebook.com/",
  },
];
