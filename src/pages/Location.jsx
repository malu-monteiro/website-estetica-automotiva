import { useRef, useEffect } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import "../styles/map.css";

export default function Localization() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const pinhais = { lng: -49.1529147, lat: -25.4172584 };
  const zoom = 15;
  const apiKey = import.meta.env.VITE_MAPTILER_API_KEY;

  maptilersdk.config.apiKey = apiKey;

  const createPopup = (lng, lat, title, address, cep) => {
    const fullAddress = `${address} - CEP: ${cep}`;

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
      </div>
      `
      );
  };

  useEffect(() => {
    if (map.current) return;

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [pinhais.lng, pinhais.lat],
      zoom: zoom,
    });

    new maptilersdk.Marker({ color: "#FF0000" })
      .setLngLat([-49.1529147, -25.4172584])
      .addTo(map.current);

    const popup = createPopup(
      pinhais.lng,
      pinhais.lat,
      "Endereço",
      "Rua Alamanda, 85, Pinhais, PR",
      "83328-130"
    );

    popup.addTo(map.current);
  }, [apiKey, pinhais.lng, pinhais.lat, zoom]);

  return (
    <div id="location">
      <div className="w-full h-auto flex flex-col">
        <div className="text-center">
          <h4 className="text-xl sm:text-5xl lg:text-6xl font-bold mb-10 mt-10 lg:mt-20">
            Localização
          </h4>
          <p className="text-base sm:text-lg lg:text-xl mb-10">
            Horário de Funcionamento: Segunda a Sexta das 8h às 18h.
          </p>
          <div className="w-full h-[500px]">
            <div ref={mapContainer} className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
