import { clsx, type ClassValue } from "clsx";

import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Initials from names used in ReviewCard (Reviews section)
export const getInitials = (name: string): string => {
  if (!name) return "";

  const parts = name.split(" ").filter(Boolean);

  return parts.length === 1
    ? parts[0].substring(0, 2).toUpperCase()
    : (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

import * as maptilersdk from "@maptiler/sdk";
import { CONTACT_INFO } from "./constants/contact";

maptilersdk.config.apiKey = process.env.NEXT_PUBLIC_MAPTILER_API_KEY || "";

export const createMap = (
  container: HTMLElement,
  center: { lng: number; lat: number },
  zoom: number
) => {
  return new maptilersdk.Map({
    container,
    style: maptilersdk.MapStyle.STREETS,
    center: [center.lng, center.lat],
    zoom,
  });
};

export const addMarker = (
  map: maptilersdk.Map,
  lng: number,
  lat: number,
  color: string
) => {
  new maptilersdk.Marker({ color }).setLngLat([lng, lat]).addTo(map);
};

export const generateWhatsAppLink = () => {
  const message =
    "Olá, gostaria de saber mais sobre os serviços de estética automotiva da MSS Studio Car!";
  return `https://wa.me/${
    CONTACT_INFO.whatsappNumber
  }?text=${encodeURIComponent(message)}`;
};

export const generateGoogleMapsLink = () => {
  const address = `${CONTACT_INFO.address}, ${CONTACT_INFO.cityState}, ${CONTACT_INFO.cep}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;
};
