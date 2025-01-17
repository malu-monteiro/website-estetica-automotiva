import { TrendingUp, Users } from "lucide-react";

import Polimento from "../assets/polimento.png";
import PolimentoFarol from "../assets/polimento-farol.png";
import Vitrificação from "../assets/vitrificacao.jpg";
import Higienização from "../assets/higienizacao-interna.avif";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

export const navLinks = [
  { id: "home", title: "Início" },
  { id: "services", title: "Serviços" },
  { id: "about", title: "Sobre Nós" },
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
    id: "about",
    title: "O cuidado que o seu veículo",
    highlight: "merece!",
    description: `A MSS_Studio Car é uma empresa especializada em estética automotiva.
    Oferecemos polimento, polimento de farol, vitrificação e higienização interna 
    para manter seu veí culo impecável e protegido contra os desgastes do tempo. Com qualidade e atenção aos detalhes, 
    garantimos um carro que parece novo e permanece valorizado. Invista no cuidado que seu carro merece e agende hoje mesmo um horário!
    Estamos localizados em Pinhais, Paraná. Contato: (41) 99934-6385`,
  },
];

export const aboutUs = [
  {
    id: "social-media-1",
    href: "https://www.instagram.com/mss_studiocar",
    icon: <FaInstagram />,
  },
  {
    id: "social-media-2",
    href: "https://www.facebook.com/share/1H69AeeNP2/?mibextid=wwXlfr",
    icon: <FaFacebook />,
  },
];

export const contact = [
  {
    id: "contact-1",
    title: "Email: mssstudiocar@gmail.com",
    href: "mailto:mssstudiocar@gmail.com",
  },
  {
    id: "contact-2",
    title: "Instagram: @mss_studiocar",
    href: "https://www.instagram.com/mss_studiocar",
  },
  {
    id: "contact-3",
    title: "WhatsApp: (41) 99934-6385",
    href: "https://wa.me/5541999346385",
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    href: "https://www.instagram.com/mss_studiocar",
    icon: <FaInstagram />,
  },
  {
    id: "social-media-2",
    href: "https://www.facebook.com/share/1H69AeeNP2/?mibextid=wwXlfr",
    icon: <FaFacebook />,
  },
];
