import { useRef, useEffect } from "react";

import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import "./styles/map.css";

import { locationData } from "../constants";

maptilersdk.config.apiKey = import.meta.env.VITE_MAPTILER_API_KEY;

const initializeMap = (mapContainer, center, zoom) => {
  return new maptilersdk.Map({
    container: mapContainer,
    style: maptilersdk.MapStyle.STREETS,
    center: [center.lng, center.lat],
    zoom: zoom,
  });
};

const createPopup = (lng, lat, title, address, cep) => {
  const fullAddress = `${address}, ${cep}`;
  const googleMapsUrl =
    "https://www.google.com/maps/place/MSS_Studio+Car+Est%C3%A9tica+Automotiva/@-25.4177091,-49.1528858,18.29z/data=!4m10!1m2!2m1!1sMP+Studio+Car+Est%C3%A9tica+Automotiva+-+RUA.+Alemanha,+85+-+Jardim+Karla,+Pinhais+-+PR,+83328-130!3m6!1s0x94dcef962d685757:0x297e47eeb64b5ba8!8m2!3d-25.417228!4d-49.1529216!15sCl5NUCBTdHVkaW8gQ2FyIEVzdMOpdGljYSBBdXRvbW90aXZhIC0gUlVBLiBBbGVtYW5oYSwgODUgLSBKYXJkaW0gS2FybGEsIFBpbmhhaXMgLSBQUiwgODMzMjgtMTMwkgEIY2FyX3dhc2jgAQA!16s%2Fg%2F11p47f3y2t?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D";

  return new maptilersdk.Popup({
    offset: 25,
    closeButton: false,
    closeOnClick: false,
    closeOnMove: false,
  })
    .setLngLat([lng, lat])
    .setHTML(
      `<div class="map-popup">
        <div class="map-popup__container">
          <h3 class="map-popup__title">${title}</h3>
          <div class="map-popup__button-wrapper">
            <button 
              onclick="
                navigator.clipboard.writeText('${fullAddress}');
                const tooltip = this.querySelector('.map-popup__tooltip');
                tooltip.style.opacity = '1';
                setTimeout(() => tooltip.style.opacity = '0', 2000);
              "
              class="map-popup__button"
              title="Copiar endereço"
            >
              <div class="map-popup__tooltip">Copiado!</div>
              <svg width="16" height="16" viewBox="0 0 24 24" style="stroke: currentColor;">
                <rect width="8" height="4" x="8" y="2" rx="1" ry="1" fill="none" stroke-width="2"/>
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" fill="none" stroke-width="2"/>
              </svg>
            </button>
          </div>
        </div>
        <p class="map-popup__text">${address}</p>
        <p class="map-popup__text">CEP: ${cep}</p>
        <a 
          href="${googleMapsUrl}" 
          target="_blank" 
          rel="noopener noreferrer"
          class="map-popup__link"
        >
          Acesse
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style="stroke: currentColor; margin-left: 4px;">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" fill="none" stroke-width="2"/>
            <path d="M15 3h6v6" fill="none" stroke-width="2"/>
            <path d="M10 14L21 3" fill="none" stroke-width="2"/>
          </svg>
        </a>
      </div>`
    );
};

export default function Location() {
  const mapContainer = useRef(null);
  const map = useRef(null);

  const { center, zoom, address, cep, title, workingHours } = locationData;

  useEffect(() => {
    if (map.current) return;

    map.current = initializeMap(mapContainer.current, center, zoom);

    new maptilersdk.Marker({ color: "#FF0000" })
      .setLngLat([center.lng, center.lat])
      .addTo(map.current);

    const popup = createPopup(center.lng, center.lat, title, address, cep);
    popup.addTo(map.current);
  }, [center, zoom, address, cep, title]);

  return (
    <section id="location" className="scroll-mt-16">
      <div className="w-full h-auto flex flex-col">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-neutral-300 font-bold mb-4 mt-6 lg:mt-12">
            Localização
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 text-neutral-300">
            {workingHours}
          </p>

          <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] px-4 sm:px-0">
            <div ref={mapContainer} className="w-full h-full rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
