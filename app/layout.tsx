import type { Metadata } from "next";
import { PERSONAL, TECHS } from "@/data/site";
import "./globals.css";

const siteUrl = new URL(PERSONAL.portfolio);

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: "Umar Firoz Portfolio",
  title: {
    default: "Umar Firoz | Full-Stack Software Engineer",
    template: "%s | Umar Firoz",
  },
  description:
    "Umar Firoz portfolio - software engineer building React interfaces, Java backends, Golang microservices, AWS systems, and GenAI workflows.",
  keywords: [
    "Umar Firoz",
    "full-stack software engineer",
    "React developer",
    "Java Spring Boot",
    "Golang microservices",
    "AWS",
    "GenAI",
    "frontend-first software engineer",
    "IBM India software engineer",
    "microservices engineer",
    "React TypeScript developer",
    ...TECHS,
  ],
  authors: [{ name: PERSONAL.name, url: PERSONAL.portfolio }],
  creator: PERSONAL.name,
  publisher: PERSONAL.name,
  category: "Software Engineering Portfolio",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Umar Firoz | Full-Stack Software Engineer",
    description:
      "Frontend-first software engineer building precise interfaces and scalable product systems.",
    url: PERSONAL.portfolio,
    siteName: "Umar Firoz Portfolio",
    type: "website",
    locale: "en_IN",
    emails: [PERSONAL.email],
    phoneNumbers: [PERSONAL.phone],
  },
  twitter: {
    card: "summary",
    title: "Umar Firoz | Full-Stack Software Engineer",
    description:
      "React, Java Spring Boot, Golang, AWS, and GenAI portfolio of Umar Firoz.",
  },
  other: {
    "profile:first_name": "Umar",
    "profile:last_name": "Firoz",
    "geo.region": "IN-TG",
    "geo.placename": PERSONAL.location,
    "ai-summary":
      "Umar Firoz is a frontend-first full-stack software engineer at IBM India working across React, Java Spring Boot, Golang microservices, AWS, and GenAI workflows.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
