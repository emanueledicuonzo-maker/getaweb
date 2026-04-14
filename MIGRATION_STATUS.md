# Migration status (temporary)

This repository has been migrated to a Vite + React source layout, but page rendering is currently hybrid.

## React app shell (real React code)
- `src/main.tsx`
- `src/App.tsx`
- `src/router/index.tsx`
- `src/components/layout/LegacyHtmlPage.tsx`

## Approved pages currently rendered through legacy HTML (temporary)
- `/` (`src/content/legacy/index.html`)
- `/servizi` (`src/content/legacy/servizi.html`)
- `/territorio` (`src/content/legacy/territorio.html`)
- `/blog` (`src/content/legacy/blog.html`)
- `/contatti` (`src/content/legacy/contatti.html`)
- `/legale` (`src/content/legacy/legale.html`)
- `/servizi/landing-page` (`src/content/legacy/landing-page.html`)
- `/servizi/siti-web` (`src/content/legacy/siti-web.html`)
- `/servizi/e-commerce` (`src/content/legacy/e-commerce.html`)
- `/servizi/back-office` (`src/content/legacy/back-office.html`)
- `/servizi/copy-e-messaggio` (`src/content/legacy/copy-e-messaggio.html`)
- `/servizi/seo-strategica` (`src/content/legacy/seo-strategica.html`)
- `/servizi/tracciamento-e-misurazione` (`src/content/legacy/tracciamento-e-misurazione.html`)
- `/blog/come-ottimizzare-google-business-profile` (`src/content/legacy/come-ottimizzare-google-business-profile.html`)
- `/blog/hai-un-sito-bello-ma-non-genera-richieste` (`src/content/legacy/hai-un-sito-bello-ma-non-genera-richieste.html`)
- `/blog/pagine-seo-geo-faq-blog-vs-sito-vetrina` (`src/content/legacy/pagine-seo-geo-faq-blog-vs-sito-vetrina.html`)
- `/blog/quanto-conviene-investire-in-un-sito-performante` (`src/content/legacy/quanto-conviene-investire-in-un-sito-performante.html`)

## Dismissed pages (not recreated)
Handled only as redirects:
- `alba.html`
- `cuneo.html`
- `saluzzo.html`
- `savigliano.html`
- `torino.html`
- `architettura-informativa-updated.html`
- `architettura-informativa.html`
- `pagine-geo.html`
- `perche-oggi-non-basta-avere-un-sito.html`
- `perche-le-pagine-geo-aiutano-davvero-a-trovare-clienti.html`

## Verification note
In this environment npm registry access is blocked (HTTP 403), so dependency installation and Vite build/start could not be executed here.
