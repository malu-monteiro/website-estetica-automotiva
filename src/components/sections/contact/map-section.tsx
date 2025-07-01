"use client";

import React, { useEffect, useRef } from "react";

import { motion } from "framer-motion";

import { ArrowUpRight } from "lucide-react";

import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";

import { DEFAULT_ITEM_VARIANTS } from "@/lib/animations";
import { CONTACT_INFO, MAP_CONFIG } from "@/lib/constants/contact";
import { addMarker, createMap, generateGoogleMapsLink } from "@/lib/utils";

export const MapSection = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maptilersdk.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    try {
      const mapInstance = createMap(
        mapContainer.current,
        MAP_CONFIG.center,
        MAP_CONFIG.zoom
      );

      map.current = mapInstance;
      addMarker(
        mapInstance,
        MAP_CONFIG.center.lng,
        MAP_CONFIG.center.lat,
        MAP_CONFIG.markerColor
      );
    } catch (error) {
      console.error("Erro ao inicializar o mapa:", error);
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <motion.div
      className="lg:w-1/2 relative rounded-lg shadow-xl overflow-hidden"
      style={{ height: "500px" }}
      variants={DEFAULT_ITEM_VARIANTS}
    >
      <div ref={mapContainer} className="w-full h-full absolute inset-0" />

      <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-white/90 backdrop-blur-sm shadow-lg z-10 max-w-sm">
        <h4 className="text-lg font-bold text-gray-900 mb-2">MSS Studio Car</h4>
        <p className="text-gray-700 text-sm mb-3 leading-relaxed">
          {CONTACT_INFO.address}, {CONTACT_INFO.cityState}, {CONTACT_INFO.cep}
        </p>
        <a
          href={generateGoogleMapsLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
        >
          Ver no Google Maps
          <ArrowUpRight className="size-4" />
        </a>
      </div>
    </motion.div>
  );
};
