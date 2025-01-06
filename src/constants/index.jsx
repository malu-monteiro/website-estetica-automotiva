import { TrendingUp, Users } from "lucide-react";

import Polimento from "../assets/polimento.png";
import PolimentoFarol from "../assets/polimento-farol.png";
import Vitrificação from "../assets/vitrificacao.jpg";
import Higienização from "../assets/higienizacao-interna.avif";

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
