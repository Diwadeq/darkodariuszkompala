// ============================================================
// Centralne dane firmy.
// To jedyne miejsce, które trzeba edytować, aby zmienić
// telefon, adres, e-mail czy godziny otwarcia na całej stronie.
// ============================================================

export const site = {
  brand: "Darko",
  legalName: "Darko Transport Osób i Rzeczy Dariusz Kompała",
  owner: "Dariusz Kompała",
  city: "Lubliniec",
  tagline: "Punkt kurierski, drukarnia i pieczątki",

  // Dane rejestrowe (oficjalne — CEIDG / gowork).
  nip: "5751172023",
  regon: "389499759",
  legalForm: "Indywidualna działalność gospodarcza",
  established: "2021",

  phone: "509 917 452",
  phoneHref: "tel:+48509917452",

  email: "darkolubliniec@gmail.com",
  emailHref: "mailto:darkolubliniec@gmail.com",

  address: {
    street: "ul. Elizy Orzeszkowej 11",
    postal: "42-700",
    city: "Lubliniec",
  },

  // UWAGA: godziny przyjęte przykładowo — potwierdź i popraw, jeśli inne.
  hours: [
    { day: "Poniedziałek – Piątek", time: "9:00 – 17:00" },
    { day: "Sobota", time: "9:00 – 13:00" },
    { day: "Niedziela", time: "Nieczynne" },
  ],

  // Mapa Google działa bez klucza API (osadzenie po adresie).
  mapEmbed:
    "https://www.google.com/maps?q=ul.%20Elizy%20Orzeszkowej%2011%2C%2042-700%20Lubliniec&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=ul.%20Elizy%20Orzeszkowej%2011%2C%2042-700%20Lubliniec",
};

// Linki nawigacyjne (kotwice do sekcji na stronie).
export const navLinks = [
  { label: "Usługi", href: "#uslugi" },
  { label: "Transport", href: "#transport" },
  { label: "Dlaczego my", href: "#dlaczego-my" },
  { label: "Kontakt", href: "#kontakt" },
];

// Prefiks ścieżek do plików statycznych (obrazy z folderu /public).
// W produkcji dokleja basePath, aby zdjęcia działały na GitHub Pages
// pod adresem .../darkodariuszkompala/. Lokalnie zwraca ścieżkę bez zmian.
export const asset = (path) =>
  `${process.env.NODE_ENV === "production" ? "/darkodariuszkompala" : ""}${path}`;
