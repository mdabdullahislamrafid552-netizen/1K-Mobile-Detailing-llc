import { business } from '../data/business';

export function SEO() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    "name": business.name,
    "telephone": business.phoneDisplay,
    "email": business.email,
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates"
      },
      "geoRadius": "25 miles",
      "description": business.serviceRadius
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lanham",
      "addressRegion": "MD",
      "postalCode": "20706"
    },
    "url": business.siteUrl,
    "sameAs": [
      business.instagramUrl,
      business.bookingUrl
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      }
    ]
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}
