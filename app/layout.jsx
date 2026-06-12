import { Inter } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"], // latin-ext = polskie znaki ą, ę, ł, ś...
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://darko.5v.pl"),
  title: {
    default: `${site.brand} Lubliniec — punkt kurierski, drukarnia, pieczątki`,
    template: `%s | ${site.brand} Lubliniec`,
  },
  description:
    "Punkt kurierski, drukarnia i pieczątki w Lublińcu. Nadasz i odbierzesz paczki, wydrukujesz dokumenty oraz zamówisz pieczątkę — szybko, lokalnie i profesjonalnie.",
  keywords: [
    "punkt kurierski Lubliniec",
    "drukarnia Lubliniec",
    "pieczątki Lubliniec",
    "ksero Lubliniec",
    "wydruki Lubliniec",
    "nadawanie paczek Lubliniec",
  ],
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://darko.5v.pl",
    siteName: `${site.brand} Lubliniec`,
    title: `${site.brand} Lubliniec — punkt kurierski, drukarnia, pieczątki`,
    description:
      "Przesyłki kurierskie, druk i pieczątki w jednym miejscu w centrum Lublińca.",
  },
  alternates: {
    canonical: "https://darko.5v.pl",
  },
};

export const viewport = {
  themeColor: "#2563eb",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
