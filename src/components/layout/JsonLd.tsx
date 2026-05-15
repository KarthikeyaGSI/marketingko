"use client";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Marketing Ko - Growth OS",
    "operatingSystem": "Web",
    "applicationCategory": "BusinessApplication",
    "description": "Autonomous AI revenue infrastructure and growth systems. We eliminate revenue leakage through high-velocity lead qualification and automated sales operations.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "124"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Marketing Ko",
      "url": "https://marketingko.vercel.app"
    }
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Revenue Systems",
        "item": "https://marketingko.vercel.app/revenue-systems"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Lead Qualification",
        "item": "https://marketingko.vercel.app/systems/lead-qual"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Autonomous CRM",
        "item": "https://marketingko.vercel.app/systems/crm-automation"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
    </>
  );
}
