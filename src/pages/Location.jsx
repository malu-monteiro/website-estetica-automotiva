import { useRef, useEffect } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";

export default function Localization() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const pinhais = { lng: -49.1529147, lat: -25.4172584 };
  const zoom = 15;
  const apiKey = import.meta.env.VITE_MAPTILER_API_KEY;

  maptilersdk.config.apiKey = apiKey;

  const createPopup = (lng, lat, title, address, cep) => {
    return new maptilersdk.Popup({
      offset: 25,
      closeButton: false,
      closeOnClick: false,
      closeOnMove: false,
    })
      .setLngLat([lng, lat])
      .setHTML(
        `<h3 style="color: black;">${title}</h3>
        <p style="color: black;">${address}</p>
        <p style="color: black;">CEP: ${cep}</p>`
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
