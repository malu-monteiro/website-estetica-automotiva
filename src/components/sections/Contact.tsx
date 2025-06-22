"use client";

import React, { useEffect, useRef } from "react";

import { motion, useInView } from "framer-motion";

import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";

import {
  FaLocationDot,
  FaEnvelope,
  FaWhatsapp,
  FaClock,
} from "react-icons/fa6";

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
  if (!mapContainer) {
    console.error("Map container not found.");
    return null;
  }
  if (mapContainer.hasChildNodes()) {
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
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maptilersdk.Map | null>(null);

  const { center, zoom } = locationData;

  useEffect(() => {
    if (!mapContainer.current || map.current) {
      return;
    }

    const initializedMap = initializeMap(mapContainer.current, center, zoom);

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
    <section
      id="contato"
      className="relative py-20 bg-cover overflow-hidden bg-neutral-900"
    >
      <motion.div
        ref={ref}
        className="mx-auto flex max-w-[1440px] flex-col px-4 md:px-8 lg:px-16 xl:px-24 items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {/* Main Title */}
        <motion.h2
          className="text-3xl font-bold text-neutral-100 md:text-4xl lg:text-5xl text-center mx-auto"
          variants={itemVariants}
        >
          Contato
        </motion.h2>

        {/* Highlight line */}
        <motion.div
          className="mt-3 h-1 w-24 rounded-full bg-red-500 mx-auto"
          variants={itemVariants}
        />

        {/* Subtitle */}
        <motion.h3
          className="mt-6 text-2xl font-medium tracking-tight text-neutral-300 md:text-3xl lg:text-4xl mb-20"
          variants={itemVariants}
        >
          Nos contate para dúvidas e agendamentos
        </motion.h3>

        {/* Information Cards */}
        <motion.div
          className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
        >
          <motion.div
            className="flex flex-col items-center text-center group cursor-pointer"
            variants={itemVariants}
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full border border-neutral-700 bg-neutral-800 mb-4 transition-all duration-300 group-hover:border-red-500 group-hover:bg-red-500/10 group-hover:scale-110">
              <FaClock className="text-2xl text-neutral-300 transition-all duration-300 group-hover:text-red-400 group-hover:rotate-12" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-100 mb-1">
              Atendimento
            </h3>
            <p className="text-neutral-400 mb-2">
              Atendemos apenas com horário agendado
            </p>
            <p className="text-neutral-100 font-bold">
              Segunda a Sexta, das 8h às 18h
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center text-center group cursor-pointer"
            variants={itemVariants}
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full border border-neutral-700 bg-neutral-800 mb-4 transition-all duration-300 group-hover:border-blue-500 group-hover:bg-blue-500/10 group-hover:scale-110">
              <FaLocationDot className="text-2xl text-neutral-300 transition-all duration-300 group-hover:text-blue-400 group-hover:-translate-y-1" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-100 mb-1">
              Endereço
            </h3>
            <p className="text-neutral-400 mb-2">
              A MSS STUDIO CAR está localizada em
            </p>
            <p className="text-neutral-100 font-bold">
              Rua Alamanda, 85, Pinhais, PR, 83328-130
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center text-center group cursor-pointer"
            variants={itemVariants}
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full border border-neutral-700 bg-neutral-800 mb-4 transition-all duration-300 group-hover:border-green-500 group-hover:bg-green-500/10 group-hover:scale-110">
              <FaWhatsapp className="text-2xl text-neutral-300 transition-all duration-300 group-hover:text-green-400 group-hover:bounce" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-100 mb-1">
              WhatsApp
            </h3>
            <p className="text-neutral-400 mb-2">Agendamentos e orçamentos</p>
            <a
              href={`https://wa.me/${
                contactInfo.whatsappNumber
              }?text=${encodeURIComponent(
                "Olá, gostaria de saber mais sobre os serviços de estética automotiva da MSS Studio Car!"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline font-bold"
            >
              (41) 99934-6385
            </a>
          </motion.div>

          <motion.div
            className="flex flex-col items-center text-center group cursor-pointer"
            variants={itemVariants}
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full border border-neutral-700 bg-neutral-800 mb-4 transition-all duration-300 group-hover:border-yellow-500 group-hover:bg-yellow-500/10 group-hover:scale-110">
              <FaEnvelope className="text-2xl text-neutral-300 transition-all duration-300 group-hover:text-yellow-400 group-hover:rotate-6" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-100 mb-1">
              E-mail
            </h3>
            <p className="text-neutral-400 mb-2">
              Retornamos todos os e-mails em até 24 horas úteis
            </p>
            <a
              href={`mailto:${contactInfo.emailAddress}`}
              className="text-blue-400 hover:underline font-bold"
            >
              mssstudiocar@gmail.com
            </a>
          </motion.div>
        </motion.div>

        {/* Map */}
        <motion.div
          className="w-full relative rounded-lg shadow-xl overflow-hidden"
          style={{ height: "500px" }}
          variants={itemVariants}
        >
          <div
            ref={mapContainer}
            className="w-full h-full"
            style={{ position: "absolute", top: 0, left: 0 }}
          />
          <div className="absolute bottom-4 left-4 p-6 bg-white rounded-lg shadow-lg text-neutral-900 max-w-xs md:max-w-sm lg:max-w-md z-10 text-left">
            <h4 className="text-xl font-bold mb-2">
              Localização MSS Studio Car
            </h4>
            <p className="text-neutral-700 mb-4">
              Estamos localizados em Pinhais, PR. Venha nos visitar!
            </p>
            <p className="text-neutral-700 mb-4 font-semibold">
              Rua Alamanda, 85, Pinhais, PR, 83328-130
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                `${contactInfo.address}, ${contactInfo.cityState}, ${contactInfo.cep}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-bold"
            >
              Ver no Google Maps
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
