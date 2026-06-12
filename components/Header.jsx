"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { site, navLinks, asset } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Subtelne wzmocnienie tła nagłówka po przewinięciu strony.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/70 bg-white/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between md:h-20">
        {/* Logo marki */}
        <a href="#" className="group flex items-center gap-3" aria-label={`${site.brand} ${site.city} — strona główna`}>
          <img
            src={asset("/images/logo-darko.png")}
            alt={`${site.brand} logo`}
            className="h-9 w-auto md:h-10"
          />
          <span className="hidden text-[11px] font-semibold uppercase tracking-wider text-slate-500 sm:block">
            {site.city}
          </span>
        </a>

        {/* Nawigacja – desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-brand-600"
            >
              {link.label}
            </a>
          ))}
          <a href="#kontakt" className="btn-primary !px-5 !py-2.5 text-sm">
            <Phone className="h-4 w-4" aria-hidden />
            Kontakt
          </a>
        </div>

        {/* Przełącznik menu – mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Menu rozwijane – mobile */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="overflow-hidden border-t border-slate-200 bg-white md:hidden"
        >
          <div className="container-px flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-brand-600"
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.phoneHref}
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Zadzwoń: {site.phone}
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
