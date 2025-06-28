"use client";

import React, { useEffect, useRef } from "react";

import { motion, useInView } from "framer-motion";

import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";

import {
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  MessagesSquare,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { ShinyButton } from "../ui/shiny-button";

import { ANIMATION_VARIANTS } from "@/lib/animations";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const contactInfo = {
  whatsappNumber: "5541999346385",
  emailAddress: "mssstudiocar@gmail.com",
  address: "Rua Alamanda, 85",
  cityState: "Pinhais, PR",
  cep: "83328-130",
};

const locationData = {
  center: { lng: -49.1529147, lat: -25.4172584 },
  zoom: 15,
};

maptilersdk.config.apiKey = process.env.NEXT_PUBLIC_MAPTILER_API_KEY || "";

const initializeMap = (
  mapContainer: HTMLElement | null,
  center: { lng: number; lat: number },
  zoom: number
) => {
  if (!mapContainer || mapContainer.hasChildNodes()) {
    return null;
  }

  return new maptilersdk.Map({
    container: mapContainer,
    style: maptilersdk.MapStyle.STREETS,
    center: [center.lng, center.lat],
    zoom: zoom,
  });
};

const createMarkerAndPopup = (
  mapInstance: maptilersdk.Map,
  lng: number,
  lat: number
) => {
  new maptilersdk.Marker({ color: "#FF0000" })
    .setLngLat([lng, lat])
    .addTo(mapInstance);
};

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const mapContainerInner = useRef<HTMLDivElement>(null);
  const map = useRef<maptilersdk.Map | null>(null);

  const { center, zoom } = locationData;

  useEffect(() => {
    if (!mapContainerInner.current || map.current) {
      return;
    }

    const initializedMap = initializeMap(
      mapContainerInner.current,
      center,
      zoom
    );

    if (initializedMap) {
      map.current = initializedMap;
      createMarkerAndPopup(map.current, center.lng, center.lat);
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [center, zoom]);

  return (
    <section id="contato" className="relative py-20 bg-black overflow-hidden">
      <motion.div
        ref={ref}
        className="relative z-10 mx-auto flex max-w-[1440px] flex-col px-4 md:px-8 lg:px-16 xl:px-24 pb-20"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        <motion.div
          variants={ANIMATION_VARIANTS.item}
          className="mb-24 text-center flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 py-2 mb-6">
            <div className="w-2 h-2 bg-white rounded-full" />
            <span className="text-white text-sm font-medium uppercase">
              Entre em contato
            </span>
          </div>

          <h3 className="uppercase font-syne text-3xl font-semibold text-white md:text-4xl lg:text-5xl leading-tight mb-8">
            Dúvidas e<span className="block text-white">agendamentos</span>
          </h3>

          <ShinyButton className="border-transparent bg-green-600 text-white hover:shadow-green-800">
            <div className="flex items-center justify-center gap-2">
              <FaWhatsapp className="size-4 sm:size-5 text-white" />
              <span className="text-white">Entrar em contato</span>
            </div>
          </ShinyButton>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 w-full">
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div className="flex flex-col" variants={itemVariants}>
              <Clock className="size-6 text-neutral-300 mb-3" />
              <h4 className="text-xl font-medium text-neutral-100 mb-2">
                Atendimento
              </h4>
              <p className="text-neutral-400 mb-3">
                Atendemos apenas com horário agendado
              </p>
              <p className="text-neutral-100 font-medium">
                Segunda a Sexta, das 8h às 18h
              </p>
            </motion.div>

            <motion.div className="flex flex-col" variants={itemVariants}>
              <MapPin className="size-6 text-neutral-300 mb-3" />
              <h4 className="text-xl font-medium text-neutral-100 mb-2">
                Endereço
              </h4>
              <p className="text-neutral-400 mb-3">
                A MSS STUDIO CAR está localizada em
              </p>
              <p className="text-neutral-100 font-medium">
                Rua Alamanda, 85, Pinhais, PR
              </p>
            </motion.div>

            <motion.div className="flex flex-col" variants={itemVariants}>
              <MessagesSquare className="size-6 text-neutral-300 mb-3" />
              <h4 className="text-xl font-medium text-neutral-100 mb-2">
                WhatsApp
              </h4>
              <p className="text-neutral-400 mb-3">Agendamentos e orçamentos</p>
              <a
                href={`https://wa.me/${
                  contactInfo.whatsappNumber
                }?text=${encodeURIComponent(
                  "Olá, gostaria de saber mais sobre os serviços de estética automotiva da MSS Studio Car!"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 hover:underline font-medium transition-colors"
              >
                (41) 99934-6385
              </a>
            </motion.div>

            <motion.div className="flex flex-col" variants={itemVariants}>
              <Mail className="size-6 text-neutral-300 mb-3" />
              <h4 className="text-xl font-medium text-neutral-100 mb-2">
                E-mail
              </h4>
              <p className="text-neutral-400 mb-3">
                Retornamos em até 24 horas úteis
              </p>
              <a
                href={`mailto:${contactInfo.emailAddress}`}
                className="text-blue-400 hover:text-blue-300 hover:underline font-medium transition-colors"
              >
                mssstudiocar@gmail.com
              </a>
            </motion.div>
          </div>

          <motion.div
            className="lg:w-1/2 relative rounded-lg shadow-xl overflow-hidden"
            style={{ height: "500px" }}
            variants={itemVariants}
          >
            <div
              ref={mapContainerInner}
              className="w-full h-full absolute inset-0"
            />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-white/90 backdrop-blur-sm shadow-lg z-10 max-w-sm">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                MSS_Studio Car
              </h4>
              <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                {contactInfo.address}, {contactInfo.cityState},{" "}
                {contactInfo.cep}
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${contactInfo.address}, ${contactInfo.cityState}, ${contactInfo.cep}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
              >
                Ver no Google Maps
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Separator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center w-full">
        <div className="h-[1px] w-3/4 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
