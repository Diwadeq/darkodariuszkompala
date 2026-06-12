"use client";

import { Users, Boxes, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import VehicleCard from "@/components/VehicleCard";

// Flota jako osobne kafelki per pojazd. Aby podmienić zdjęcie, wrzuć plik
// do /public/images zachowując nazwę. Zdjęcia Kii są tymczasowe (poglądowe)
// — po dodaniu własnych usuń pole `badge`.
const vehicles = [
  {
    name: "Mercedes Vito",
    type: "Komfortowy bus osobowy",
    images: [
      { src: "/images/car-5.jpg", alt: "Mercedes Vito – bok z otwartymi drzwiami i skórzanymi fotelami" },
      { src: "/images/car-1.jpg", alt: "Mercedes Vito – widok z przodu" },
      { src: "/images/car-2.jpg", alt: "Mercedes Vito – przestrzeń bagażowa" },
    ],
  },
  {
    name: "Renault Trafic",
    type: "Przestronny bus osobowy",
    images: [
      { src: "/images/car-7.jpg", alt: "Renault Trafic – widok z przodu" },
      { src: "/images/car-6.jpg", alt: "Renault Trafic – fotele pasażerskie" },
      { src: "/images/car-8.jpg", alt: "Renault Trafic – kokpit i deska rozdzielcza" },
    ],
  },
  {
    name: "Kia Sportage",
    type: "Samochód osobowy (SUV)",
    badge: "Zdjęcia poglądowe",
    images: [
      { src: "/images/kia-1.jpg", alt: "Biała Kia Sportage – widok z przodu" },
      { src: "/images/kia-2.jpg", alt: "Biała Kia Sportage – widok z boku" },
      { src: "/images/kia-3.jpg", alt: "Biała Kia Sportage – tył od lewej" },
      { src: "/images/kia-4.jpg", alt: "Biała Kia Sportage – tył od prawej" },
    ],
  },
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
            Dwa busy — Mercedes Vito i Renault Trafic — oraz Kia Sportage. Zadbane,
            komfortowe i gotowe do trasy.
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

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {vehicles.map((vehicle, i) => (
            <Reveal key={vehicle.name} delay={i * 0.1}>
              <VehicleCard {...vehicle} />
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
