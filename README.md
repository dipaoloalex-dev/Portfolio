<div align="center">

# Portfolio

**Portfolio personale di Alex Di Paolo — Software Developer & IT System Designer**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/it/docs/Web/HTML)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/it/docs/Web/JavaScript)
[![Responsive](https://img.shields.io/badge/Responsive-Mobile%20First-4ade80)](https://developer.mozilla.org/it/docs/Learn/CSS/CSS_layout/Responsive_Design)

`⭐ Aggiungi una stella su GitHub per supportare il progetto!`

</div>

---

## 📌 Panoramica del Progetto

Questo repository contiene il codice sorgente del mio **portfolio personale**: una vetrina web statica che presenta il mio profilo professionale, i progetti a cui ho lavorato e i miei canali di contatto.

Un sito **statico, senza build step**, costruito per essere leggero e veloce da pubblicare. I punti di forza:

* **Single Page + Sezioni**: un unico `index.html` contiene hero, griglia progetti, processo di lavoro e contatti, con navigazione continua tramite scroll.
* **Design Glassmorphism Dark**: interfaccia scura e futuristica con pannelli in "vetro" smerigliato (`backdrop-filter`), glow di sfondo e micro-interazioni al passaggio del mouse.
* **Animazioni allo Scroll native**: nessuna dipendenza esterna per le animazioni; usano `IntersectionObserver` + `@keyframes` CSS per far comparire gli elementi con fade, slide e blur.
* **Accessibilità e performance**: font Inter, immagini locali ottimizzate, icone vettoriali (Iconify/Lucide) e CDN con `preconnect`.
* **Privacy by design (GDPR)**: banner di consenso cookie personalizzato che carica **Google Analytics 4 solo dopo il consenso esplicito** e permette la revoca in qualsiasi momento.

---

## 🚀 Guida Rapida - Avvio

### Opzione 1: Server statico (Consigliato)

Non serve installare nulla: basta un piccolo server statico per servire i file (alcune feature come il `localStorage` del banner cookie richiedono un'origine HTTP, non `file://`).

**Passo 1: Clona il repository**

```bash
git clone https://github.com/dipaoloalex-dev/Portfolio.git
cd Portfolio
```

**Passo 2: Avvia un server locale**

Con Python 3 (già presente su macOS/Linux):

```bash
python3 -m http.server 8000
```

In alternativa con Node.js:

```bash
npx serve .
```

**Passo 3: Apri nel browser**

```
http://localhost:8000
```

**Passo 4: Spegnimento**

Basta interrompere il processo nel terminale con `Ctrl + C`.

---

### Opzione 2: Apertura diretta (Sviluppo rapido)

Per modifiche veloci puoi anche aprire direttamente il file nel browser:

```bash
open index.html        # macOS
```

> **💡 Nota:** aprendo il file con doppio clic il sito funziona, ma il banner cookie potrebbe comportarsi diversamente per via delle restrizioni di `file://`. Per una verifica completa usa l'Opzione 1.

Se usi **Visual Studio Code**, l'estensione *Live Server* permette l'anteprima con reload automatico a ogni salvataggio.

---

## 🧰 Stack Tecnologico

| Ambito | Tecnologie |
|---|---|
| **Markup** | HTML5 semantico |
| **Stile** | TailwindCSS (CDN) + CSS personalizzato (`style.css`) |
| **Interattività** | JavaScript vanilla (`IntersectionObserver`, `localStorage`) |
| **Tipografia** | Font *Inter* (Google Fonts) |
| **Icone** | Iconify + Lucide |
| **Sfondo animato** | UnicornStudio |
| **Analytics** | Google Analytics 4 (caricato solo dopo il consenso) |
| **Privacy** | Banner cookie GDPR custom |

---

## 📂 Architettura del Repository

```plaintext
/
├── index.html            # Pagina principale (hero, progetti, processo, contatti)
├── script.js             # Animazioni allo scroll + inizializzazione icone Lucide
├── style.css             # Stili custom: animazioni, glassmorphism, scrollbar
├── README.md
│
├── banner/               # Consenso cookie (GDPR)
│   ├── cookie_banner.css # Stili del banner e della modal preferenze
│   └── cookie_banner.js  # Logica consenso + caricamento condizionato di GA4
│
└── images/               # Asset locali
    ├── image_1.png       # Immagini della hero (cluster "glass")
    ├── image_2.png
    ├── ...
    └── icons_*.png       # Icone dei contatti (WhatsApp, Email, LinkedIn, GitHub)
```

---

## 🖥️ Utilizzo dell'Interfaccia

Il sito è organizzato in sezioni scorrevoli all'interno di un'unica pagina:

1. **Hero** — Presentazione con nome, ruolo e competenze principali.
2. **My Projects** — Griglia responsive di schede progetto, ognuna con anteprima, titolo (link al progetto esterno, dove disponibile) e descrizione.
3. **Il processo in 3 step** — Percorso che mostra i vantaggi del passaggio "offline → online": perché serve un sito, i problemi comuni della gestione manuale e l'automazione.
4. **Contatti** — Footer con i canali diretti: WhatsApp, Email, LinkedIn e GitHub.
5. **Banner Cookie** — Consenso categorie per categoria (Necessari / Analytics), con possibilità di riaprire le preferenze dal footer.

---

## 🍪 Privacy & Cookie

* Il sito **non raccoglie dati personali propri**.
* **Google Analytics 4** viene caricato **solo** dopo il consenso esplicito dell'utente.
* Le preferenze sono salvate in `localStorage` (`alexdipaolo_cookie_consent`) con scadenza a 365 giorni.
* L'ID di misurazione è configurabile in `banner/cookie_banner.js` (`CONFIG.gaMeasurementId`).

---

## 📄 License

© 2026 **Alex Di Paolo**. Tutti i diritti riservati.

---

<div align="center">

**Alex Di Paolo — Software Developer & IT System Designer**

[Email](mailto:dipaoloalex.dev@gmail.com) · [LinkedIn](https://www.linkedin.com/in/alex-di-paolo) · [GitHub](https://github.com/dipaoloalex-dev)

</div>
