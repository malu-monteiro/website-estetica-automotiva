import { MetadataRoute } from "next";

import { SERVICES_CONTENT } from "@/lib/constants/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.mssstudiocar.com.br/";
  const lastModified = new Date();

  const staticRoutes = ["/", "/curso", "/politica", "/sobre", "/termos"];

  const serviceRoutes = SERVICES_CONTENT.services.map((service) => ({
    url: `${baseUrl}/servicos/${service.slug}`,
    lastModified,
  }));

  const staticRoutesFormatted = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
  }));

  return [...staticRoutesFormatted, ...serviceRoutes];
}
