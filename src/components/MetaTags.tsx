import { useEffect } from "react";
import { rotasData, entidade } from "../data/siteData";
import { getAssetUrl } from "../utils/asset";

interface MetaTagsProps {
  path: string;
}

export function MetaTags({ path }: MetaTagsProps) {
  useEffect(() => {
    const route = rotasData.find((r) => r.path === path) || {
      title: "Dra. Vânia Medeiros | Harmonização Facial em Águas Claras",
      description:
        "Conheça a Dra. Vânia Medeiros, os tratamentos apresentados e as informações para conversar sobre uma avaliação em Águas Claras, Brasília.",
    };

    document.title = route.title;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    if (route.description) {
      metaDesc.setAttribute("content", route.description);
    }

    // JSON-LD structured data for Person and WebSite
    let scriptTag = document.querySelector('script[data-schema="main-ldjson"]');
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.setAttribute("type", "application/ld+json");
      scriptTag.setAttribute("data-schema", "main-ldjson");
      document.head.appendChild(scriptTag);
    }

    const logoUrl = typeof window !== "undefined"
      ? `${window.location.origin}${getAssetUrl("/midias/monogramas/monograma-vm-dourado.png")}`
      : getAssetUrl("/midias/monogramas/monograma-vm-dourado.png");

    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "@id": "https://www.dravaniamedeiros.com.br/#person",
          name: entidade.displayName,
          jobTitle: entidade.professionPublished,
          image: logoUrl,
          sameAs: [entidade.instagram],
          address: {
            "@type": "PostalAddress",
            streetAddress: `${entidade.address.street}, ${entidade.address.number}, ${entidade.address.floor}, ${entidade.address.room}`,
            addressLocality: entidade.address.city,
            addressRegion: entidade.address.state,
            postalCode: entidade.address.postalCode,
            addressCountry: entidade.address.country,
          },
        },
        {
          "@type": "WebSite",
          "@id": "https://www.dravaniamedeiros.com.br/#website",
          url: "https://www.dravaniamedeiros.com.br/",
          name: entidade.siteBrand,
          description: route.description,
          inLanguage: entidade.language,
          publisher: {
            "@type": "Person",
            name: entidade.displayName,
            logo: logoUrl,
          },
        },
      ],
    };

    scriptTag.textContent = JSON.stringify(schemaData);
  }, [path]);

  return null;
}
