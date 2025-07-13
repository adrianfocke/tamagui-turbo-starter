# Übersicht: tamagui-turbo-starter Template

## 1. Einleitung

Das tamagui-turbo-starter Template ist ein modernes, monorepo-basiertes Starterkit für die Entwicklung von Cross-Plattform-Anwendungen mit React, React Native (Expo), Tamagui, Supabase und weiteren modernen Tools. Es ermöglicht die Entwicklung von Web- und Mobile-Apps mit einer gemeinsamen Codebasis und konsistentem UI-Design. Das Template ist auf Produktivität, Skalierbarkeit und Developer Experience ausgelegt.

---

## 2. Projektstruktur und Monorepo-Architektur

Das Projekt verwendet ein Monorepo-Setup mit [Turborepo](https://turbo.build/), was die Verwaltung mehrerer Apps und Packages in einem Repository ermöglicht. Die wichtigsten Verzeichnisse sind:

- `/apps`: Enthält die Applikationen, z.B. `mobile` (Expo/React Native) und `web` (Vite/React).
- `/packages`: Enthält wiederverwendbare Packages wie `ui` (Tamagui-Komponenten), `data` (Datenzugriff, z.B. Supabase), `utils`, `stores`, `i18n` (Internationalisierung) etc.
- `/docs`: Dokumentation und Anleitungen.
- Zentrale Konfigurationsdateien wie `package.json`, `turbo.json`, `tsconfig.base.json`, `pnpm-workspace.yaml`.

**Vorteile des Monorepos:**
- Gemeinsame Nutzung von Code und Abhängigkeiten.
- Einheitliche Konfiguration und Versionierung.
- Effizientes Caching und parallele Builds durch Turborepo.

---

## 3. Wichtige Libraries und Frameworks

### 3.1 Tamagui

[Tamagui](https://tamagui.dev/) ist ein UI-Kit und Styling-Framework für React und React Native, das konsistente, performante und themenfähige Komponenten für Web und Mobile bereitstellt. Es nutzt eine eigene statische Optimierung, um Styles zur Buildzeit zu extrahieren.

**Eigenheiten:**
- Styles werden deklarativ als Props gesetzt (`<Button backgroundColor="$color" />`).
- Themes und Variablen werden zentral definiert.
- Cross-Plattform: Ein Style funktioniert auf Web und Mobile identisch.
- Tree-shaking und statische Extraktion für Performance.

### 3.2 Expo

[Expo](https://expo.dev/) ist ein Framework und eine Plattform für universelle React Native Apps. Es vereinfacht das Setup, bietet viele APIs (z.B. Kamera, Push Notifications) und ermöglicht Over-the-Air-Updates.

**Eigenheiten:**
- Konfiguration über `app.json` oder `app.config.js`.
- Nutzung von `expo-constants` für Umgebungsvariablen.
- OTA-Updates und einfaches Deployment.

### 3.3 Vite

[Vite](https://vitejs.dev/) ist ein moderner Build- und Dev-Server für Webanwendungen. Es bietet extrem schnelle Starts und Hot Module Replacement.

**Eigenheiten:**
- Umgebungsvariablen mit Präfix `VITE_` in `.env`-Dateien.
- Nutzung von `import.meta.env` für Zugriff auf Variablen.
- Optimiert für moderne ESM-Module.

### 3.4 Supabase

[Supabase](https://supabase.com/) ist ein Open-Source-Backend-as-a-Service, das Auth, Datenbank (Postgres), Storage und Realtime-APIs bietet.

**Eigenheiten:**
- Zugriff über `@supabase/supabase-js`.
- Authentifizierung, Realtime-Subscriptions, Storage-APIs.
- Umgebungsvariablen für URL und Anon-Key.

### 3.5 Zustand, React Query, etc.

- **Zustand**: State-Management für globale und lokale States.
- **React Query**: Daten-Fetching, Caching und Synchronisation.
- **i18n**: Internationalisierung, meist mit `i18next`.

---

## 4. Patterns und Best Practices

### 4.1 Cross-Plattform-Entwicklung

- Gemeinsame Komponenten und Hooks in `/packages/ui` und `/packages/utils`.
- Plattform-spezifische Dateien mit `.native.tsx`, `.web.tsx` oder `.ios.tsx`/`.android.tsx`.
- Nutzung von Tamagui für konsistentes Styling.

### 4.2 Environment Handling

- Web: `.env`-Dateien mit `VITE_`-Präfix, Zugriff via `import.meta.env`.
- Mobile: `app.json`/`app.config.js` mit `extra`-Feld, Zugriff via `expo-constants`.
- Utility-Funktion, die je nach Plattform die richtige Quelle nutzt (siehe dein aktuelles Supabase-Setup).

### 4.3 Modularisierung

- Features und UI-Komponenten sind in Packages gekapselt.
- Zentrale Provider (z.B. AuthProvider, ThemeProvider) in `/packages/app/provider`.

### 4.4 TypeScript

- Strikte Typisierung in allen Packages.
- Gemeinsame Typen in `/packages/types` oder `/packages/app/types.d.ts`.
- Zentrale `tsconfig.base.json` für konsistente Einstellungen.

### 4.5 Testing

- Nutzung von `vitest` für Unit- und Integrationstests.
- Tests in `__tests__`-Verzeichnissen oder `*.test.ts(x)`-Dateien.

---

## 5. Eigenheiten und Tipps zu den wichtigsten Tools

### 5.1 Turborepo

- Tasks werden in `turbo.json` definiert (z.B. build, lint, test).
- Caching und parallele Ausführung beschleunigen Builds.
- Abhängigkeiten zwischen Apps und Packages werden automatisch erkannt.

### 5.2 pnpm

- Schneller, platzsparender Package-Manager.
- Workspaces werden in `pnpm-workspace.yaml` definiert.
- Gemeinsame und lokale Abhängigkeiten werden sauber verwaltet.

### 5.3 Expo Go vs. EAS Build

- Expo Go: Schnell für Entwicklung, aber nur Standard-APIs.
- EAS Build: Für Custom-Native-Code und Production-Builds.

### 5.4 Tamagui Themes

- Themes werden zentral definiert und können dynamisch gewechselt werden.
- Variablen wie `$color`, `$space` etc. sorgen für Konsistenz.

### 5.5 Supabase Auth

- Auth-Status kann mit React Context oder Zustand global verwaltet werden.
- Realtime-Features (z.B. Live-Updates) sind einfach zu integrieren.

---

## 6. Typische Stolpersteine

- **Umgebungsvariablen:** Unterschiedliche Zugriffsarten auf Web und Mobile beachten.
- **Native Abhängigkeiten:** Bei Expo Go stehen nicht alle nativen Module zur Verfügung.
- **Styling:** Tamagui benötigt manchmal Anpassungen für spezifische Plattformen.
- **Monorepo:** Symlinks und Node-Module-Auflösung können bei falscher Konfiguration zu Problemen führen.

---

## 7. Deployment und CI/CD

- Web: Deployment z.B. auf Vercel, Netlify oder eigene Server.
- Mobile: Expo EAS Build für iOS/Android, OTA-Updates via Expo.
- CI/CD: Turborepo kann in CI-Pipelines integriert werden, um nur geänderte Packages zu bauen.

---

## 8. Fazit

Das tamagui-turbo-starter Template bietet eine hochmoderne, flexible und skalierbare Basis für Cross-Plattform-Apps. Die Kombination aus Monorepo, Tamagui, Expo, Vite und Supabase ermöglicht eine schnelle Entwicklung, konsistentes UI und eine starke Developer Experience. Die wichtigsten Erfolgsfaktoren sind ein gutes Verständnis der Plattform-spezifischen Eigenheiten, konsequente Nutzung von TypeScript und die Einhaltung der Patterns für Modularisierung und Environment Handling.

---

# 1. Supabase im tamagui-turbo-starter

## 1.1 Integration

Supabase wird als Backend-as-a-Service für Authentifizierung, Datenbank (Postgres), Storage und Realtime verwendet. Die Integration erfolgt über das Package `@supabase/supabase-js`, das sowohl im Web als auch in React Native (über Expo) funktioniert.

**Zentrale Datei:**  
`/packages/data/src/supabase/index.ts`  
Hier wird der Supabase-Client initialisiert. Die Umgebungsvariablen werden plattformübergreifend geladen (siehe vorherige Antworten).

**Best Practices:**
- Lege alle Supabase-Interaktionen (CRUD, Auth, Storage) in eigene Hooks oder Service-Funktionen im `data`-Package ab.
- Nutze TypeScript-Typen für deine Supabase-Tabellen (z.B. mit [supabase-js typegen](https://github.com/supabase/supabase-js/tree/main/spec/typegen)).
- Auth-Status global mit Context oder Zustand verwalten.

**Eigenheiten:**
- Realtime-Features funktionieren auch in React Native, benötigen aber ggf. spezielle Konfiguration.
- Storage-Uploads in React Native benötigen ggf. Polyfills für `fetch`/`Blob`.
- Die Anon Keys sind öffentlich, aber du solltest keine Admin-Keys im Client verwenden.

**Skalierbarkeit:**
- Supabase ist horizontal skalierbar, aber beachte Limits des Free-Tiers.
- Für große Projekte empfiehlt sich die Nutzung von RLS (Row Level Security) und Policies.

---

# 2. Git-Workflow und Monorepo

## 2.1 Git im Monorepo

- Nutze Feature-Branches für neue Features oder Bugfixes.
- Committe granular und mit sprechenden Messages.
- Nutze `.gitignore` in allen relevanten Packages/Apps, um Build-Artefakte, `node_modules` etc. auszuschließen.
- Turborepo kann mit Git Hooks (z.B. via Husky) für Pre-Commit-Checks (Lint, Test) kombiniert werden.

**Best Practices:**
- Nutze Pull Requests für Code Reviews.
- Verwende Tags für Releases (z.B. `web-v1.0.0`, `mobile-v1.0.0`).
- CI/CD-Pipelines können so konfiguriert werden, dass nur geänderte Apps/Packages gebaut werden.

**Eigenheiten:**
- Symlinks im Monorepo können bei falscher Git-Konfiguration zu Problemen führen (z.B. bei Windows).
- Achte auf konsistente Node- und pnpm-Versionen im Team.

---

# 3. Eigenheiten und Tipps zu den wichtigsten Libraries

## 3.1 Tamagui

- Styles werden als Props gesetzt, nicht als CSS-Klassen.
- Themes und Variablen sind zentral und können dynamisch gewechselt werden.
- Für responsive Designs gibt es Props wie `sm`, `md`, `lg`.
- Tamagui extrahiert Styles zur Buildzeit für bessere Performance.

**Stolpersteine:**
- Nicht alle CSS-Properties sind 1:1 verfügbar.
- Custom Fonts müssen in Expo und Web unterschiedlich eingebunden werden.

## 3.2 Zustand

- Minimalistisches State-Management, ideal für globale States wie Auth, Theme, etc.
- Stores können in `/packages/stores` abgelegt werden.
- Zustand ist sehr performant und einfach zu testen.

## 3.3 React Query

- Für Daten-Fetching, Caching und Synchronisation.
- Query-Keys sollten eindeutig und konsistent sein.
- Perfekt für Supabase-Interaktionen, da automatische Refetches und Background-Updates möglich sind.

## 3.4 i18n

- Internationalisierung meist mit `i18next`.
- Übersetzungen in `/packages/i18n/locales`.
- Dynamisches Nachladen von Sprachen möglich.

---

# 4. Skalierbarkeit

## 4.1 Code-Struktur

- Trenne Features in eigene Packages (z.B. `features/auth`, `features/profile`).
- Gemeinsame Komponenten in `/packages/ui`.
- Utility-Funktionen in `/packages/utils`.

## 4.2 Daten und State

- Nutze React Query für Server State, Zustand für UI State.
- Supabase Policies und RLS für sichere, skalierbare Datenzugriffe.

## 4.3 Build und Deployment

- Turborepo sorgt für schnelle Builds durch Caching.
- Web kann auf Vercel/Netlify, Mobile via Expo EAS Build deployed werden.
- CI/CD kann so konfiguriert werden, dass nur geänderte Teile gebaut werden.

---

# 5. Supabase & Git: Zusammenarbeit und Besonderheiten

- **Migrationen:** Nutze Supabase CLI oder SQL-Skripte für Datenbankmigrationen. Versioniere diese im Repo.
- **Seeding:** Lege Seed-Skripte für Testdaten an.
- **Branching:** Für experimentelle Features können eigene Supabase-Projekte genutzt werden (z.B. mit eigenen .env-Dateien pro Branch).

---

# 6. Typische Stolpersteine & Tipps

- **Umgebungsvariablen:** Immer nach Änderungen Server/App neu starten.
- **Supabase Limits:** Free-Tier hat Limits für Auth, Storage, Realtime.
- **Monorepo:** Achte auf korrekte Imports (`import ... from '@myorg/ui'` statt relativer Pfade).
- **Expo:** Native Module nur mit EAS Build, nicht in Expo Go.
- **Web/Mobile Unterschiede:** Manche APIs (z.B. File Upload) müssen plattformabhängig behandelt werden.

---

# 7. Best Practices für große Teams

- Schreibe und pflege eine klare README und Entwicklerdokumentation.
- Nutze Linting, Prettier und TypeScript-Strict-Mode.
- Schreibe Tests für alle Packages.
- Nutze Storybook (z.B. in `/packages/ui`) für UI-Komponenten.
- Automatisiere Releases und Deployments mit CI/CD.

---

# 8. Weiterführende Ressourcen

- [Tamagui Docs](https://tamagui.dev/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Expo Docs](https://docs.expo.dev/)
- [Turborepo Docs](https://turbo.build/repo/docs)
- [pnpm Docs](https://pnpm.io/)

---

Wenn du zu einem der Punkte ein konkretes Beispiel, ein Setup-Snippet oder eine Schritt-für-Schritt-Anleitung möchtest, sag einfach Bescheid!
