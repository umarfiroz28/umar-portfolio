import {
  ACHIEVEMENTS,
  CORE_HIGHLIGHTS,
  CREDENTIALS,
  PERSONAL,
  PROJECTS,
  SERVICES,
  TECHS,
} from "@/data/site";

export default function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${PERSONAL.portfolio}#person`,
        name: PERSONAL.name,
        url: PERSONAL.portfolio,
        email: PERSONAL.email,
        telephone: PERSONAL.phone,
        jobTitle: "Full-Stack Software Engineer",
        description: PERSONAL.intro,
        worksFor: {
          "@type": "Organization",
          name: "IBM India",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Hyderabad",
          addressRegion: "Telangana",
          addressCountry: "IN",
        },
        sameAs: [
          PERSONAL.social.linkedin,
          PERSONAL.social.github,
          PERSONAL.social.codeforces,
          PERSONAL.social.leetcode,
        ],
        knowsAbout: TECHS,
        hasCredential: [...CREDENTIALS.map((item) => item.value), ...ACHIEVEMENTS],
      },
      {
        "@type": "WebSite",
        "@id": `${PERSONAL.portfolio}#website`,
        url: PERSONAL.portfolio,
        name: "Umar Firoz Portfolio",
        description: PERSONAL.heroTagline,
        inLanguage: "en-IN",
        publisher: {
          "@id": `${PERSONAL.portfolio}#person`,
        },
      },
      {
        "@type": "ProfilePage",
        "@id": `${PERSONAL.portfolio}#profile-page`,
        url: PERSONAL.portfolio,
        name: "Umar Firoz - Full-Stack Software Engineer Portfolio",
        description: PERSONAL.aboutPitch,
        about: {
          "@id": `${PERSONAL.portfolio}#person`,
        },
        mainEntity: {
          "@id": `${PERSONAL.portfolio}#person`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${PERSONAL.portfolio}/favicon.svg`,
        },
      },
      {
        "@type": "ItemList",
        "@id": `${PERSONAL.portfolio}#projects`,
        name: "Selected software engineering projects",
        itemListElement: PROJECTS.map((project, index) => ({
          "@type": "CreativeWork",
          position: index + 1,
          name: project.title,
          description: project.description,
          url: project.url,
          about: project.stack,
          dateCreated: project.period,
          resultComment: project.result,
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${PERSONAL.portfolio}#services`,
        name: "Portfolio skill areas",
        itemListElement: SERVICES.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: service.title,
          description: service.description,
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${PERSONAL.portfolio}#answer-engine-summary`,
        name: "Answer engine summary for Umar Firoz",
        itemListElement: CORE_HIGHLIGHTS.map((highlight, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: highlight.title,
          description: `${highlight.detail}: ${highlight.copy}`,
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
