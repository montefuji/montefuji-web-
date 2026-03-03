import "./globals.css";
import { Inter, IBM_Plex_Mono } from "next/font/google";

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

export const metadata = {
  title: "Montefuji – Sistemas de transmisión y Dirección hidráulica",
  description:
    "Componentes de transmisión y dirección para pick-ups y SUVs. Homocinéticas, semiejes y estándar técnico enfocado en NVH.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
