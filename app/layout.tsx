import type { Metadata, Viewport } from "next";
import {
  Inter,
  JetBrains_Mono,
  Space_Grotesk,
  Instrument_Serif,
} from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono-code",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});
const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: `${site.name} — Portfolio`,
  authors: [{ name: site.name, url: site.github }],
  creator: site.name,
  keywords: [
    "AI Engineer",
    "LLM Engineer",
    "LLM evaluation",
    "AI agents",
    "agent benchmarking",
    "full-stack developer",
    "Next.js",
    "TypeScript",
    "Python",
    "Ayush Yadav",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: `${site.name} — ${site.role}`,
    title: `${site.name} — ${site.role}`,
    description: site.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  category: "technology",
  icons: { icon: "/icon", shortcut: "/icon", apple: "/icon" },
};

export const viewport: Viewport = {
  themeColor: "#f6f5ef",
  colorScheme: "light",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  url: site.url,
  sameAs: [site.github, site.linkedin].filter(Boolean),
  description: site.description,
  address: { "@type": "PostalAddress", addressCountry: "IN" },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Motilal Nehru National Institute of Technology, Allahabad",
  },
  knowsAbout: [
    "LLM evaluation",
    "AI agents",
    "Agent benchmarking",
    "Next.js",
    "TypeScript",
    "Python",
    "C++",
    "Full-stack development",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${mono.variable} ${display.variable} ${serif.variable}`}
    >
      <head>
        {/* Scroll reveals need JS to trigger; without it, show everything. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important;clip-path:none!important}.node{color:var(--color-mute)}`}</style>
        </noscript>
      </head>
      <body className="antialiased">
        {children}
        <script
          type="application/ld+json"
          // Structured data for search engines; content is static and trusted.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
