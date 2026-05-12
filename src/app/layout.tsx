import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.montefuji.org";
const siteName = "Montefuji";
const siteDescription =
  "Especialistas en homocinéticas, semiejes, fuelles y reparación de dirección hidráulica en Concepción. Atención para pick-ups, SUVs, talleres y particulares.";
const ogImage = "/montefuji-cv-axle.webp";

function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-sans",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Montefuji | Homocinéticas y dirección hidráulica en Concepción",
    template: "%s | Montefuji",
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: "Montefuji", url: siteUrl }],
  creator: "Montefuji",
  publisher: "Montefuji",
  keywords: [
    "homocinéticas Concepción",
    "homocineticas Concepcion",
    "semiejes Concepción",
    "dirección hidráulica Concepción",
    "reparación cremallera hidráulica",
    "fuelles homocinéticos",
    "juntas homocinéticas",
    "autopartes Concepción",
    "tren delantero Concepción",
    "Toyota Hilux homocinética",
    "Mitsubishi L200 semieje",
    "Ford Ranger homocinética",
    "Hyundai Tucson homocinética",
    "homocineticas Hilux Concepcion",
    "direccion hidraulica Ranger",
    "fuelle homocinetica Concepcion",
    "semieje Subaru Forester",
    "vibracion al acelerar semieje",
    "ruido al doblar homocinetica",
  ],
  category: "Autopartes y servicio técnico automotriz",
  alternates: {
    canonical: "/",
    languages: {
      "es-CL": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "/",
    siteName,
    title: "Montefuji | Homocinéticas, semiejes y dirección hidráulica en Concepción",
    description: siteDescription,
    images: [
      {
        url: ogImage,
        width: 1800,
        height: 554,
        alt: "Semieje completo con juntas homocinéticas Montefuji",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Montefuji | Homocinéticas en Concepción",
    description: siteDescription,
    images: [ogImage],
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  appleWebApp: {
    capable: true,
    title: siteName,
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["AutoPartsStore", "AutoRepair"],
  "@id": absoluteUrl("/#montefuji"),
  name: siteName,
  url: siteUrl,
  logo: absoluteUrl("/montefuji-logo.png"),
  image: [
    absoluteUrl("/montefuji-cv-axle.webp"),
    absoluteUrl("/montefuji-real-cv-joints.webp"),
    absoluteUrl("/montefuji-steering-rack.webp"),
  ],
  description: siteDescription,
  telephone: "+56950995385",
  email: "info@montefuji.org",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Salas 566",
    addressLocality: "Concepción",
    addressRegion: "Biobío",
    addressCountry: "CL",
  },
  department: [
    {
      "@type": "AutoRepair",
      name: "Taller Montefuji",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Colo Colo 922",
        addressLocality: "Concepción",
        addressRegion: "Biobío",
        addressCountry: "CL",
      },
    },
  ],
  areaServed: [
    { "@type": "City", name: "Concepción" },
    { "@type": "AdministrativeArea", name: "Región del Biobío" },
    { "@type": "Country", name: "Chile" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:30",
      closes: "18:30",
    },
  ],
  knowsAbout: [
    "Homocinéticas",
    "Semiejes",
    "Fuelles homocinéticos",
    "Dirección hidráulica",
    "Cremalleras hidráulicas",
    "Tren delantero",
    "Ruido al doblar",
    "Vibración al acelerar",
    "Fuga de dirección hidráulica",
  ],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Product", name: "Juntas homocinéticas" } },
    { "@type": "Offer", itemOffered: { "@type": "Product", name: "Semiejes" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reparación de dirección hidráulica" } },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${mono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
