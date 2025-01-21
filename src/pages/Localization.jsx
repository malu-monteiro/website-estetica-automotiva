import { useRef, useEffect } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";

export default function Localization() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const pinhais = { lng: -49.1529147, lat: -25.4172584 };
  const zoom = 14;
  const apiKey = import.meta.env.VITE_MAPTILER_API_KEY;

  maptilersdk.config.apiKey = apiKey;

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
  }, [apiKey, pinhais.lng, pinhais.lat, zoom]);

  return (
    <div className="w-full h-auto">
      <h3 className="text-xl sm:text-5xl lg:text-6xl font-bold mb-10 text-center mt-10">
        Localização
      </h3>
      <div className="w-full h-96">
        <div ref={mapContainer} className="w-full h-full" />
      </div>
    </div>
  );
}
