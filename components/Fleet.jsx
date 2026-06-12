"use client";

import { motion } from "framer-motion";
import { Users, Boxes, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import { asset } from "@/lib/site";

// Galeria floty. Aby podmienić zdjęcie, wrzuć plik do /public/images
// i zostaw tę samą nazwę. Zdjęcia Kii są tymczasowe (poglądowe, z internetu) —
// po dodaniu własnych wystarczy je podmienić i usunąć pole `badge`.
const photos = [
  { src: "/images/car-7.jpg", alt: "Mercedes Vito – przewóz osób, Darko Lubliniec", featured: true },
  { src: "/images/car-1.jpg", alt: "Bus Mercedes Vito – transport, Darko" },
  { src: "/images/car-2.jpg", alt: "Samochód firmowy Darko – transport osób" },
  { src: "/images/car-5.jpg", alt: "Flota Darko – komfortowy bus" },
  { src: "/images/car-8.jpg", alt: "Transport rzeczy – samochód Darko" },
  { src: "/images/kia-1.jpg", alt: "Biała Kia Sportage – widok z przodu", badge: "Zdjęcie poglądowe" },
  { src: "/images/kia-2.jpg", alt: "Biała Kia Sportage – widok z boku", badge: "Zdjęcie poglądowe" },
  { src: "/images/kia-3.jpg", alt: "Biała Kia Sportage – widok z tyłu (lewa strona)", badge: "Zdjęcie poglądowe" },
  { src: "/images/kia-4.jpg", alt: "Biała Kia Sportage – widok z tyłu (prawa strona)", badge: "Zdjęcie poglądowe" },
];

const perks = [
  { icon: Users, label: "Przewóz osób" },
  { icon: Boxes, label: "Transport rzeczy" },
  { icon: ShieldCheck, label: "Zadbane pojazdy" },
];

export default function Fleet() {
  return (
    <section id="flota" className="scroll-mt-24 bg-slate-50 py-20 md:py-28">
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Flota
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Nasza flota
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Dwa busy Mercedes Vito oraz Kia Sportage — zadbane, komfortowe i gotowe do trasy.
          </p>

          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            {perks.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <Icon className="h-5 w-5 text-brand-600" aria-hidden />
                {label}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Siatka zdjęć — pierwsze zdjęcie większe (akcent). */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
          {photos.map((photo, i) => (
            <Reveal
              key={photo.src}
              delay={(i % 3) * 0.07}
              className={photo.featured ? "col-span-2 lg:row-span-2" : ""}
            >
              <motion.figure
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className={`group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-sm transition-shadow duration-200 hover:shadow-soft ${
                  photo.featured ? "aspect-[16/10] lg:aspect-auto lg:min-h-full" : "aspect-[4/3]"
                }`}
              >
                {photo.badge && (
                  <span className="absolute left-3 top-3 z-10 rounded-full bg-slate-900/65 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                    {photo.badge}
                  </span>
                )}
                {/* Subtelne rozjaśnienie ciemnych zdjęć + delikatny zoom przy najechaniu. */}
                <img
                  src={asset(photo.src)}
                  alt={photo.alt}
                  loading="lazy"
                  className="photo-enhance h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.06]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-white/5" />
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
              </motion.figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-8 text-center text-sm text-slate-500">
          Zdjęcia Kii Sportage mają charakter poglądowy. Potrzebujesz przewozu osób lub transportu rzeczy?{" "}
          <a href="#kontakt" className="font-semibold text-brand-600 hover:underline">
            Skontaktuj się z nami
          </a>
          .
        </Reveal>
      </div>
    </section>
  );
}
