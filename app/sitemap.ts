import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://magic-route.vercel.app";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/guide/lax-to-disneyland`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/hotels-near-disneyland`,
      lastModified: new Date(),
    },
  ];
}