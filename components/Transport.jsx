"use client";

import { motion } from "framer-motion";
import { Users, CarFront, Truck, Handshake, Boxes } from "lucide-react";
import Reveal from "@/components/Reveal";

// Realny zakres usług transportowych (bez kodów-wypełniaczy z CEIDG).
const services = [
  {
    icon: Users,
    title: "Przewóz osób",
    description:
      "Kursy regularne i indywidualne — dowieziemy pasażerów na czas, wygodnie i bezpiecznie.",
  },
  {
    icon: CarFront,
    title: "Przewóz na żądanie",
    description:
      "Transport pasażerski z kierowcą na telefon — lotniska, dworce, wyjazdy i trasy okolicznościowe.",
  },
  {
    icon: Truck,
    title: "Transport towarów",
    description:
      "Przewóz rzeczy i przesyłek — krótkie kursy lokalne oraz dłuższe trasy na terenie kraju.",
  },
  {
    icon: Handshake,
    title: "Pośrednictwo w transporcie",
    description:
      "Zorganizujemy przewóz osób lub towarów i dobierzemy najlepsze rozwiązanie do Twoich potrzeb.",
  },
  {
    icon: Boxes,
    title: "Usługi logistyczne",
    description:
      "Wsparcie w planowaniu i obsłudze transportu — sprawnie, terminowo i bez stresu.",
  },
];

export default function Transport() {
  return (
    <section id="transport" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Transport
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Transport osób i rzeczy
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Komfortowy przewóz pasażerów i rzetelny transport towarów — lokalnie w Lublińcu
            i na dłuższych trasach. Zadbane samochody i punktualność, na których możesz polegać.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={(i % 3) * 0.1}>
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
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
