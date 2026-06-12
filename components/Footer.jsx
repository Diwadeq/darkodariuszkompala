import { Phone, Mail, MapPin } from "lucide-react";
import { site, navLinks, asset } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container-px py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Marka */}
          <div>
            <img
              src={asset("/images/logo-darko.png")}
              alt={`${site.brand} logo`}
              className="h-10 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
              {site.tagline} w {site.city} i okolicy. Komfortowo, punktualnie i bezpiecznie —
              pasażerów i ładunek wozimy z dbałością.
            </p>
          </div>

          {/* Nawigacja */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Nawigacja
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-brand-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Kontakt
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-600" aria-hidden />
                <span>
                  {site.address.street}, {site.address.postal} {site.address.city}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 flex-shrink-0 text-brand-600" aria-hidden />
                <a href={site.phoneHref} className="transition-colors hover:text-brand-600">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 flex-shrink-0 text-brand-600" aria-hidden />
                <a href={site.emailHref} className="break-all transition-colors hover:text-brand-600">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 space-y-1 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          <p>© {year} {site.legalName}. Wszelkie prawa zastrzeżone.</p>
          {(site.nip || site.regon) && (
            <p>
              {site.nip && <>NIP: {site.nip}</>}
              {site.nip && site.regon && <span aria-hidden> · </span>}
              {site.regon && <>REGON: {site.regon}</>}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
