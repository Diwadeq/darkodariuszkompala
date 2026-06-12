# Darko Lubliniec — strona promocyjna

Nowoczesna, jednostronicowa witryna (landing page) dla firmy **Darko** z Lublińca:
punkt kurierski, drukarnia i pieczątki.

Zbudowana w **Next.js (App Router)** + **Tailwind CSS** + **Framer Motion** + **Lucide React**.
Strona jest w 100% statyczna (SSG) i hostowana na **GitHub Pages**.

## 🔗 Podgląd na żywo

https://diwadeq.github.io/darkodariuszkompala/

## 🛠️ Uruchomienie lokalne

```bash
npm install      # instalacja zależności
npm run dev      # serwer deweloperski -> http://localhost:3000
```

## 🏗️ Budowanie statycznej wersji

```bash
npm run build    # generuje statyczny eksport do folderu ./out
```

## ✏️ Jak edytować treści

Wszystkie dane firmy (telefon, adres, e-mail, godziny otwarcia, mapa) znajdują się
w **jednym pliku**:

```
lib/site.js
```

Zmień je tam, a zaktualizują się w całej witrynie (nagłówek, sekcja kontakt, stopka, mapa).

> **Uwaga:** Godziny otwarcia oraz pola NIP/REGON zostały wpisane przykładowo /
> pozostawione puste — uzupełnij je w `lib/site.js`.

## 📁 Struktura projektu

```
app/
  layout.jsx        # metadane SEO (PL), font Inter, <html lang="pl">
  page.jsx          # składa sekcje strony
  globals.css       # style globalne + klasy przycisków/kontenera
components/
  Header.jsx        # przyklejony nagłówek + menu mobilne + CTA
  Hero.jsx          # sekcja główna z nagłówkiem i przyciskami
  Services.jsx      # 3 usługi: kurier, druk, pieczątki
  WhyUs.jsx         # dlaczego my (4 atuty)
  Contact.jsx       # dane kontaktowe + mapa Google
  Footer.jsx        # stopka
  Reveal.jsx        # animacja pojawiania się przy przewijaniu
lib/
  site.js           # centralne dane firmy + linki nawigacji
.github/workflows/
  deploy.yml        # automatyczne wdrożenie na GitHub Pages
```

## 🚀 Wdrożenie

Każdy `git push` do gałęzi `main` automatycznie buduje i publikuje stronę
na GitHub Pages (workflow `.github/workflows/deploy.yml`).
