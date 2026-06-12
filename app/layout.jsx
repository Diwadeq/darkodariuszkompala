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
    default: `${site.brand} Lubliniec — transport osób i rzeczy`,
    template: `%s | ${site.brand} Lubliniec`,
  },
  description:
    "Transport osób i rzeczy w Lublińcu i okolicy. Komfortowy przewóz pasażerów oraz rzetelny transport towarów — zadbane samochody, punktualność i rozsądne ceny.",
  keywords: [
    "transport osób Lubliniec",
    "przewóz osób Lubliniec",
    "transport rzeczy Lubliniec",
    "transport towarów Lubliniec",
    "przewóz na żądanie Lubliniec",
    "busy Lubliniec",
  ],
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://darko.5v.pl",
    siteName: `${site.brand} Lubliniec`,
    title: `${site.brand} Lubliniec — transport osób i rzeczy`,
    description:
      "Komfortowy przewóz osób i rzetelny transport towarów w Lublińcu i okolicy.",
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
