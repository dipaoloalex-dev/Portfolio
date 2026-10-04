# Portfolio

Portfolio personale di **Alex Di Paolo** — Software Developer & IT System Designer.

Sito statico in un singolo file HTML con TailwindCSS, animazioni allo scroll e
una sezione progetti. Gli asset (immagini, stili, script) sono locali.

## Struttura

```
.
├── index.html            # Pagina principale
├── script.js             # Animazioni allo scroll + inizializzazione icone
├── style.css             # Stili personalizzati (glassmorphism, scrollbar)
├── banner/               # Banner di consenso cookie (GDPR)
│   ├── cookie_banner.css
│   └── cookie_banner.js
└── images/               # Immagini e icone locali
```

## Avvio in locale

Non serve alcun build. Basta aprire `index.html` nel browser oppure avviare un
piccolo server statico:

```bash
python3 -m http.server 8000
```

Poi visita http://localhost:8000

## Contatti

- Email: dipaoloalex.dev@gmail.com
- LinkedIn: https://www.linkedin.com/in/alex-di-paolo
- GitHub: https://github.com/dipaoloalex-dev
