"use client";

import { motion } from "framer-motion";
import { Package, Printer, Stamp, Check } from "lucide-react";
import Reveal from "@/components/Reveal";

const services = [
  {
    icon: Package,
    title: "Przesyłki kurierskie",
    description:
      "Nadawanie i odbiór paczek wielu firm kurierskich w jednym punkcie. Wygodnie, blisko i bez kolejek.",
    points: ["Nadawanie i odbiór", "Wielu przewoźników", "Pomoc przy etykietach"],
  },
  {
    icon: Printer,
    title: "Drukarnia",
    description:
      "Wydruki czarno-białe i kolorowe, ksero oraz skanowanie. Dokumenty, ulotki, plakaty i wizytówki.",
    points: ["Wydruki i ksero", "Skanowanie dokumentów", "Druk kolorowy i cz-b"],
  },
  {
    icon: Stamp,
    title: "Pieczątki",
    description:
      "Pieczątki firmowe i imienne wykonywane na zamówienie. Wysoka jakość odbicia i krótki czas realizacji.",
    points: ["Pieczątki firmowe", "Pieczątki imienne", "Szybka realizacja"],
  },
];

export default function Services() {
  return (
    <section id="uslugi" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Usługi
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Wszystko, czego potrzebujesz — w jednym miejscu
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Trzy usługi, jeden adres. Zaoszczędź czas i załatw sprawy bez jeżdżenia po całym mieście.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map(({ icon: Icon, title, description, points }, i) => (
            <Reveal key={title} delay={i * 0.12}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="group h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow duration-200 hover:border-brand-200 hover:shadow-soft"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-200 group-hover:bg-brand-600 group-hover:text-white">
                  <Icon className="h-7 w-7" aria-hidden />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">{title}</h3>
                <p className="mt-3 text-slate-600">{description}</p>

                <ul className="mt-6 space-y-2.5">
                  {points.map((point) => (
                    <li key={point} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <Check className="h-4 w-4 flex-shrink-0 text-brand-600" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
