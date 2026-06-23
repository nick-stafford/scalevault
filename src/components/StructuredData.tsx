import { site } from "@/config/site";

/**
 * JSON-LD structured data. Helps search engines and AI answer engines
 * (Google AI Overviews, ChatGPT search, Perplexity, etc.) understand what the
 * firm does, who it serves, and the questions it answers. Built from the
 * single source of truth in `site` so it never drifts from the visible copy.
 */
export default function StructuredData() {
  const url = site.url;

  const business = {
    "@context": "https://schema.org",
    "@type": ["AccountingService", "ProfessionalService"],
    "@id": `${url}/#business`,
    name: site.firmName,
    url,
    image: `${url}/nick-headshot.jpg`,
    description: site.metaDescription,
    email: site.email,
    telephone: site.phoneHref.replace("tel:", ""),
    priceRange: "$$",
    // Remote-first: serves the entire US, home base in the Bay Area.
    areaServed: { "@type": "Country", name: "United States" },
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.state,
      addressCountry: "US",
    },
    founder: {
      "@type": "Person",
      name: "Nick Stafford",
      jobTitle: "Accountant & Software Engineer",
    },
    knowsAbout: [
      "Tax preparation",
      "Tax planning",
      "Bookkeeping",
      "Accounting automation",
      "Fractional CFO services",
      "QuickBooks",
      "Xero",
      "Financial reporting",
      "Cash-flow forecasting",
    ],
    makesOffer: site.services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, description: s.blurb },
    })),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}/#website`,
    url,
    name: site.firmName,
    description: site.metaDescription,
    publisher: { "@id": `${url}/#business` },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: site.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
