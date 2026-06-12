"use client";

import { Zap, MapPin, ShieldCheck, Layers } from "lucide-react";
import Reveal from "@/components/Reveal";

const reasons = [
  {
    icon: Zap,
    title: "Szybka realizacja",
    description:
      "Większość zleceń wykonujemy od ręki lub tego samego dnia. Nie każemy Ci czekać.",
  },
  {
    icon: MapPin,
    title: "Lokalnie i blisko",
    description:
      "Działamy w centrum Lublińca — wygodny dojazd i miejsca parkingowe w pobliżu.",
  },
  {
    icon: ShieldCheck,
    title: "Profesjonalna obsługa",
    description:
      "Doradzimy najlepsze rozwiązanie i zadbamy o każdy szczegół Twojego zlecenia.",
  },
  {
    icon: Layers,
    title: "Wszystko w jednym miejscu",
    description:
      "Kurier, druk i pieczątki bez jeżdżenia po całym mieście. Oszczędzasz czas.",
  },
];

export default function WhyUs() {
  return (
    <section id="dlaczego-my" className="scroll-mt-24 bg-slate-50 py-20 md:py-28">
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Dlaczego my
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Lokalnie, szybko i z głową
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Stawiamy na konkret i rzetelność. Oto, co zyskujesz, wybierając nasz punkt.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-7 transition-shadow duration-200 hover:shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
