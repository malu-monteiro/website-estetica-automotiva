export const HERO_CONTENT = {
  topRated: "Top Rated",
  title: "MSS_STUDIO CAR",
  subtitle: "ESTÉTICA AUTOMOTIVA",
  description:
    "Garantimos qualidade transformando a aparência do seu veículo,\ndestacando os detalhes, e trazendo brilho e proteção que fazem a\ndiferença",
  ctaText: "Solicite um orçamento",
  whatsappMessage: "Olá! Gostaria de solicitar um orçamento.",
  whatsappNumber: "5541999346385",
};

export type IconName = "TrendingUp" | "Users";

export interface CounterDataItem {
  icon: IconName;
  value: number;
  label: string;
}

export const COUNTER_DATA: CounterDataItem[] = [
  {
    icon: "TrendingUp",
    value: 5,
    label: "Anos de experiência",
  },
  {
    icon: "Users",
    value: 1000,
    label: "Clientes atendidos",
  },
];

export const MEDIA_PATHS = {
  videoPoster: "/videobg-poster.webp",
  videoWebm: "/videobg.webm",
  videoMp4: "/videobg.mp4",
};
