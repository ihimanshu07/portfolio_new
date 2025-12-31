import { title, description } from '@/app/data';

export default function StructuredData() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Vishal Kumar Geed",
    "alternateName": "Vishal",
    "url": siteUrl,
    "image": `${siteUrl}/images/preview.png`,
    "jobTitle": "Full Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "sameAs": [
      "https://github.com/vishalkumargeed",
      "https://linkedin.com/in/vishalkumargeed",
      "https://x.com/vishalctx"
    ],
    "knowsAbout": [
      "Web Development",
      "Full Stack Development",
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Blockchain Development",
      "Solana",
      "Ethereum"
    ],
    "description": description,
    "email": "vishalkumargeed@gmail.com"
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": `${title} Portfolio`,
    "url": siteUrl,
    "description": description,
    "author": {
      "@type": "Person",
      "name": "Vishal Kumar Geed"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteUrl}/?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${siteUrl}/#portfolio`,
    "name": `${title} Portfolio`,
    "description": description,
    "creator": {
      "@type": "Person",
      "name": "Vishal Kumar Geed"
    },
    "url": siteUrl,
    "inLanguage": "en-US"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
    </>
  );
}

