"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { asset } from "@/lib/site";

/**
 * Kafelek jednego pojazdu: duże zdjęcie główne z podpisem + pasek miniaturek.
 * Kliknięcie miniaturki podmienia zdjęcie główne (bez przeładowania strony).
 */
export default function VehicleCard({ name, type, images, badge }) {
  const [active, setActive] = useState(0);
  const main = images[active];

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-soft"
    >
      {/* Zdjęcie główne */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
        {badge && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-slate-900/65 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
            {badge}
          </span>
        )}
        <img
          key={main.src}
          src={asset(main.src)}
          alt={main.alt}
          className="photo-enhance h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/85 via-slate-900/25 to-transparent p-5 pt-12">
          <h3 className="text-lg font-bold text-white">{name}</h3>
          <p className="text-sm text-slate-200">{type}</p>
        </div>
      </div>

      {/* Miniaturki */}
      <div className="flex gap-2 p-3">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Pokaż zdjęcie ${i + 1} – ${name}`}
            aria-pressed={i === active}
            className={`relative h-14 flex-1 overflow-hidden rounded-lg border-2 transition ${
              i === active
                ? "border-brand-600"
                : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            <img src={asset(img.src)} alt="" className="photo-enhance h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </motion.div>
  );
}
