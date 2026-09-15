import { BUSINESS, LOCATIONS } from "./business";

export const SITE_NAME = "Platinum Pawn";

export function pageTitle(title?: string) {
  return title ? `${title} · ${SITE_NAME}` : `${SITE_NAME} · Bristol & New Britain`;
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BUSINESS.name,
    url: "https://platinumpawnbrokers.com",
    description: BUSINESS.description,
    areaServed: ["Bristol, CT", "New Britain, CT"],
    department: [
      {
        "@type": "PawnShop",
        name: LOCATIONS.bristol.name,
        telephone: LOCATIONS.bristol.phoneHref.replace("tel:", ""),
        address: {
          "@type": "PostalAddress",
          streetAddress: LOCATIONS.bristol.street,
          addressLocality: "Bristol",
          addressRegion: "CT",
          postalCode: "06010",
          addressCountry: "US",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "10:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "10:00",
            closes: "16:00",
          },
        ],
      },
      {
        "@type": "PawnShop",
        name: LOCATIONS["new-britain"].name,
        telephone: LOCATIONS["new-britain"].phoneHref.replace("tel:", ""),
        address: {
          "@type": "PostalAddress",
          streetAddress: LOCATIONS["new-britain"].street,
          addressLocality: "New Britain",
          addressRegion: "CT",
          postalCode: "06053",
          addressCountry: "US",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "10:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "10:00",
            closes: "16:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Sunday",
            opens: "12:00",
            closes: "15:00",
          },
        ],
      },
    ],
  };
}
