import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://magic-route.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://magic-route.vercel.app/guide/lax-to-disneyland",
      lastModified: new Date(),
    },
    {
      url: "https://magic-route.vercel.app/hotels-near-disneyland",
      lastModified: new Date(),
    },
  ];
}