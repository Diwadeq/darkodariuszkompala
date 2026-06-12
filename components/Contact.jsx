"use client";

import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export default function Contact() {
  return (
    <section id="kontakt" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Kontakt
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Zamów transport
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Chcesz zamówić przewóz osób lub transport rzeczy? Zadzwoń lub napisz —
            ustalimy trasę, termin i szczegóły.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Dane kontaktowe */}
          <Reveal className="flex flex-col gap-5">
            <ContactRow icon={MapPin} title="Adres">
              {site.address.street}
              <br />
              {site.address.postal} {site.address.city}
            </ContactRow>

            <ContactRow icon={Phone} title="Telefon">
              <a href={site.phoneHref} className="transition-colors hover:text-brand-600">
                {site.phone}
              </a>
            </ContactRow>

            <ContactRow icon={Mail} title="E-mail">
              <a href={site.emailHref} className="break-all transition-colors hover:text-brand-600">
                {site.email}
              </a>
            </ContactRow>

            <div className="mt-1 flex flex-col gap-3 sm:flex-row">
              <a href={site.phoneHref} className="btn-primary flex-1">
                <Phone className="h-5 w-5" aria-hidden />
                Zadzwoń teraz
              </a>
              <a
                href={site.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex-1"
              >
                Wyznacz trasę
                <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </Reveal>

          {/* Mapa Google */}
          <Reveal delay={0.1} className="overflow-hidden rounded-2xl border border-slate-200 shadow-soft">
            <iframe
              title={`Mapa dojazdu — ${site.brand} ${site.city}`}
              src={site.mapEmbed}
              className="h-80 w-full lg:h-full"
              style={{ border: 0, minHeight: "320px" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, title, children }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <div className="min-w-0">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">{title}</h3>
        <div className="mt-1 text-slate-700">{children}</div>
      </div>
    </div>
  );
}
