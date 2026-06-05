# EXCO Service Site Pattern

Wzorzec do generowania stron dla kolejnych usług EXCO A2A Polska.
Gotowe instancje: **Legal** (`exco-legal.vercel.app`) | W kolejce: **HR**

---

## Stack (niezmieniony)

```
React 19 + Vite 6 + TypeScript + Tailwind v4 + Framer Motion 12 + Lucide React
```

**Uwaga:** `"build": "vite build"` bez `tsc` — Framer Motion v12 ma zbyt restrykcyjne typy dla `custom` wariantów z `transition` wewnątrz funkcji.

---

## Design System

### Kolory
| Token CSS | Hex | Użycie |
|-----------|-----|--------|
| `--color-navy` | `#1B2A4A` | Tło dark sekcji, tekst główny |
| `--color-navy-light` | `#243661` | Hero gradient |
| `--color-navy-dark` | `#111c33` | Footer |
| `--color-gold` | `#C9A84C` | Akcenty, ikony, CTA |
| `--color-gold-light` | `#e4c878` | Hover złota |
| `--color-gold-dark` | `#a8882e` | Gradient buttona |
| `--color-cream` | `#F8F5EE` | Tło jasnych sekcji |
| `--color-cream-dark` | `#EDE8DC` | Tło alternatywnych sekcji |

### Typografia
- **Nagłówki:** `font-family: var(--font-serif)` = Playfair Display (Google Fonts)
- **Treść:** `font-family: var(--font-sans)` = Inter (Google Fonts)
- **Link Google Fonts** (w `index.html`):
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
  ```

### Animacje
- Framer Motion `useInView` + `initial/animate` dla scroll-triggered
- Warianty: `{ hidden: { opacity: 0, y: 20 }, visible: (delay) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: 'easeOut' } }) }`
- Hover karty: `whileHover={{ y: -4, boxShadow: '...' }}`
- **NIE** używaj `ease: number[]` — tylko stringi: `"easeOut"`, `"easeInOut"`, `"easeIn"`

---

## Struktura projektu

```
exco-[service]/
├── public/
│   ├── favicon.svg          # Gold scale SVG
│   ├── logo-legal.png       # Logo usługi (pobrane z exco.pl)
│   └── photos/              # Zdjęcia zespołu (pobrane z exco.pl WP)
│       ├── raphael.jpg      # MG_4005.jpg
│       ├── laurent.jpg      # MG_3988.jpg
│       ├── magdalena.jpg    # M_laskowska.jpg
│       └── karolina.jpg     # K_Kanclerz.jpg
├── src/
│   ├── data/
│   │   ├── team.ts          # TeamMember[] — edytuj per instancja
│   │   └── services.ts      # Service[] — edytuj per instancja
│   ├── components/
│   │   ├── Navbar.tsx       # Stały — zmień logo i linki
│   │   ├── Hero.tsx         # Zmień tagline i SVG emblem
│   │   ├── Services.tsx     # Zmień services.ts
│   │   ├── Team.tsx         # Zmień team.ts
│   │   ├── About.tsx        # Zmień teksty i stats
│   │   ├── Contact.tsx      # Zmień dane kontaktowe
│   │   └── Footer.tsx       # Zmień dane firmy
│   ├── App.tsx              # Tylko importy sekcji
│   ├── index.css            # Design tokens @theme — nie zmienaj
│   └── main.tsx             # Entry — nie zmienaj
├── index.html               # Zmień title, description, lang
├── package.json             # "build": "vite build"
└── vite.config.ts           # Bez zmian
```

---

## Jak stworzyć nową instancję (np. HR)

### 1. Clone i rename
```bash
git clone https://github.com/TvF80/exco-legal exco-hr
cd exco-hr
# Usuń .git i utwórz nowe repo
rm -rf .git && git init
```

### 2. Edytuj dane (src/data/)
**`team.ts`** — zmień tylko osoby specyficzne dla działu HR (Zarząd pozostaje taki sam):
```ts
export const team: TeamMember[] = [
  // Zarząd (kopiuj z Legal — Raphaël i Laurent)
  { id: 'raphael', ... photo: '/photos/raphael.jpg' },
  { id: 'laurent', ... photo: '/photos/laurent.jpg' },
  // Specjaliści HR działu
  { id: 'hr-lead', name: '...', title: 'Kierownik HR', role: 'partner', ... },
]
```

**`services.ts`** — zastąp 6 usług prawnych → usługami HR:
```ts
export const services: Service[] = [
  { id: 'payroll', icon: 'Calculator', title: 'Obsługa płac', ... },
  { id: 'recruitment', icon: 'Users', title: 'Rekrutacja', ... },
  // itd.
]
```

### 3. Edytuj teksty (src/components/)
- `Hero.tsx`: tagline, subtitle, stats (zachowaj 3 statystyki)
- `About.tsx`: paragraf opisowy, 4 stats-kard
- `Contact.tsx`: email kontaktowy, temat formularza
- `Navbar.tsx`: podmień `/logo-legal.png` → `/logo-hr.png`
- `Footer.tsx`: dane firmy (NIP, email)
- `index.html`: `<title>`, `<meta description>`

### 4. Pobierz logo i zdjęcia
```bash
# Logo działu (z exco.pl)
curl -sL "https://exco.pl/wp-content/uploads/[rok]/[plik].png" -o public/logo-hr.png

# Zdjęcia zespołu (Zarząd jest już w public/photos/)
curl -sL "https://exco.pl/wp-content/uploads/[rok]/[inicjaly].jpg" -o public/photos/[imie].jpg
```

Wzorzec URL zdjęć exco.pl: `https://exco.pl/wp-content/uploads/[yyyy]/[mm]/[INICJALY].jpg`
Znane: `raphael.jpg` = MG_4005, `laurent.jpg` = MG_3988, `magdalena.jpg` = M_laskowska, `karolina.jpg` = K_Kanclerz

### 5. Deploy
```bash
npm install
vercel link   # → TV-F80-s-projects / exco-hr
vercel --prod
```

---

## Sekcje i ich zawartość per instancja

| Komponent | Co zmienić | Co zostawić |
|-----------|-----------|-------------|
| `Navbar` | logo img, CTA tekst | animacje, layout, menu |
| `Hero` | tagline (2 linie), subtitle, 3 stats | SVG emblem, animacje, przyciski |
| `Services` | `src/data/services.ts` (6 rekordów) | ikony z Lucide, karty, hover |
| `Team` | `src/data/team.ts` | podział Zarząd/Dział, karty, foto |
| `About` | 2 akapity, 4 stat-karty | layout 2-col, animacje |
| `Contact` | email, temat select, NIP | formularz, mapa, layout |
| `Footer` | nazwa działu, email, NIP | 3-col layout, copyright |

---

## Dostępne ikony Lucide dla Services

Prawo: `Scale`, `FileText`, `Briefcase`, `Building2`, `Archive`, `Users`
HR: `Users`, `Calculator`, `UserCheck`, `Calendar`, `TrendingUp`, `ClipboardList`
Księgowość: `BarChart2`, `Receipt`, `CreditCard`, `PieChart`, `Landmark`, `BookOpen`
IT: `Monitor`, `Code2`, `Server`, `Shield`, `Zap`, `Database`

---

## Znane ograniczenia

- **TypeScript**: build bez `tsc` ze względu na FM v12 typ `Variants` z funkcyjnymi wariantami
- **Zdjęcia**: exco.pl lazy-loads — pobierać przez `curl` z `data-src` w HTML
- **Natalia Wesołowska**: brak zdjęcia na exco.pl (aplikant, nie wymieniona w /o-nas)
