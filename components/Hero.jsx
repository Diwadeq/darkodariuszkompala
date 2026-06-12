"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight, Users, Truck, ShieldCheck } from "lucide-react";
import { site } from "@/lib/site";

const highlights = [
  { icon: Users, label: "Przewóz osób" },
  { icon: Truck, label: "Transport rzeczy" },
  { icon: ShieldCheck, label: "Na czas i bezpiecznie" },
];

// Delikatna kaskada dla elementów nagłówka hero.
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36">
      {/* Subtelne tło: delikatny gradient + miękka poświata. */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/70 via-white to-white" />
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-brand-200/40 blur-3xl" />

      <div className="container-px pb-20 md:pb-28">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700"
          >
            <span className="h-2 w-2 rounded-full bg-brand-500" />
            Transport osób i rzeczy — {site.city} i okolice
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl"
          >
            Transport osób i rzeczy{" "}
            <span className="text-brand-600">na każdą trasę</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 md:text-xl"
          >
            Komfortowy przewóz pasażerów i rzetelny transport towarów — lokalnie w Lublińcu
            i na dłuższych trasach. Zadbane samochody, punktualność i rozsądne ceny.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a href={site.phoneHref} className="btn-primary w-full sm:w-auto">
              <Phone className="h-5 w-5" aria-hidden />
              Zadzwoń: {site.phone}
            </a>
            <a href="#transport" className="btn-secondary w-full sm:w-auto">
              Zobacz ofertę
              <ArrowRight className="h-5 w-5" aria-hidden />
            </a>
          </motion.div>

          {/* Krótki pasek zaufania. */}
          <motion.ul
            variants={item}
            className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
          >
            {highlights.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <Icon className="h-5 w-5 text-brand-600" aria-hidden />
                {label}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
