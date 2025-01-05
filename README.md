# Portfolio 🔥

### Un modello di Portfolio multipagina altamente performante per gli sviluppatori.

<div align="center">
  <img src="https://i.postimg.cc/GpBbCyyY/video.gif" alt="Portfolio Demo" width="100%" /> 
</div> 

---

### Caratteristiche: 

- Facile da configurare e utilizzare
- Gratuito e Open Source
- Senza dipendenze da framework aggiuntivi
- Senza librerie esterne
- Struttura multipagina
- Design completamente reattivo
- Prestazioni elevate e ottimizzazione SEO

---

### Tecnologie Utilizzate: 

- HTML
- CSS
- JavaScript

---

### STEP 1 - Homepage:  

Accedi a `/index.html` e personalizza le tue informazioni inserendo i tuoi dati. La struttura comprende sei sezioni.

### Header: 

- Sostituisci l'immagine in `.header__logo-img` con la tua. È consigliabile utilizzare un'immagine con sfondo trasparente, così da armonizzarla con il colore del tema. Per rimuovere lo sfondo, puoi utilizzare strumenti come [Remove.bg](https://www.remove.bg/it), caricando la tua immagine per un'elaborazione automatica.
- Modifica il testo nella classe `.header__logo-sub` per inserire il tuo nome, personalizzando così il branding del tuo portfolio online.

```html
<!-- INIZIO Header -->
    <header class="header">
      <div class="header__content">
        <div class="header__logo-container">
          <div class="header__logo-img-cont dynamicBgClr">
            <img src="./assets/png/mario-rossi.png" alt="Alex Di Paolo Logo Image" class="header__logo-img" /> 
          </div>
          <span class="header__logo-sub"> Mario Rossi </span>
        </div>
        <div class="header__main">
          <ul class="header__links">
            <li class="header__link-wrapper">
              <a href="./index.html" class="header__link"> Home </a>
            </li>
            <li class="header__link-wrapper">
              <a href="./index.html#about" class="header__link"> About </a>
            </li>
            <li class="header__link-wrapper">
              <a href="./index.html#projects" class="header__link"> Projects </a>
            </li>
            <li class="header__link-wrapper">
              <a href="./index.html#contact" class="header__link"> Contact </a>
            </li>
          </ul>
          <div class="header__main-ham-menu-cont">
            <img src="./assets/svg/ham-menu.svg" alt="hamburger menu" class="header__main-ham-menu" />
            <img src="./assets/svg/ham-menu-close.svg" alt="hamburger menu close" class="header__main-ham-menu-close d-none" />
          </div>
        </div>
      </div>
      <div class="header__sm-menu">
        <div class="header__sm-menu-content">
          <ul class="header__sm-menu-links">
            <li class="header__sm-menu-link">
              <a href="./index.html"> Home </a>
            </li>
            <li class="header__sm-menu-link">
              <a href="./index.html#about"> About </a>
            </li>
            <li class="header__sm-menu-link">
              <a href="./index.html#projects"> Projects </a>
            </li>
            <li class="header__sm-menu-link">
              <a href="./index.html#contact"> Contact </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
<!-- FINE Header -->
```

### Sezione Hero: 

- Modifica il titolo all'interno della classe `.heading-primary` con il testo che desideri, per personalizzare il messaggio di benvenuto o la presentazione del tuo portfolio.
- Aggiungi una breve descrizione personale nella sezione `.text-primary`, per fornire ai visitatori una panoramica delle tue competenze, esperienze o obiettivi professionali.
- Compila l'attributo `href` all'interno della classe `.home-hero__social-icon-link` con il link al tuo profilo sui social media, così che i visitatori possano facilmente connettersi con te su piattaforme come LinkedIn, GitHub o altre.

```html
<!-- INIZIO Sezione Hero -->
    <section class="home-hero dynamicBg">
      <div class="home-hero__content">
        <h1 class="heading-primary"> Hey, I'm Mario Rossi </h1>
        <div class="home-hero__info">
          <p class="text-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
            tempora explicabo quae quod deserunt eius sapiente solutions for
            complex problems
          </p>
        </div>
        <div class="home-hero__cta">
          <a href="./#projects" class="btn btn--bg"> Projects </a>
        </div>
      </div>
      <div class="home-hero__socials">
        <div class="home-hero__social">
          <a href="#" class="home-hero__social-icon-link">
            <img src="./assets/png/tiktok-ico.png" alt="icon" class="home-hero__social-icon" />
          </a>
        </div>
        <div class="home-hero__social">
          <a href="#" class="home-hero__social-icon-link">
            <img src="./assets/png/instagram-ico.png" alt="icon" class="home-hero__social-icon" />
          </a>
        </div>
        <div class="home-hero__social">
          <a href="#" class="home-hero__social-icon-link">
            <img src="./assets/png/github-ico.png" alt="icon" class="home-hero__social-icon" />
          </a>
        </div>
        <div class="home-hero__social">
          <a href="#" class="home-hero__social-icon-link home-hero__social-icon-link--bd-none">
            <img src="./assets/png/linkedin-ico.png" alt="icon" class="home-hero__social-icon" />
          </a>
        </div>
      </div>
      <div class="home-hero__mouse-scroll-cont">
        <div class="mouse">
        </div>
      </div>
    </section>
<!-- FINE Sezione Hero -->
```

### Sezione About: 

- Nella classe `.heading-sec__sub`, aggiungi una breve descrizione che introduca la sezione in modo chiaro e accattivante, spiegando di cosa tratta e perché è rilevante per i visitatori del tuo portfolio.
- Nella classe `.about__content-details-para`, inserisci i tuoi dati personali, come nome, professione, esperienze e formazione. Utilizza il tag `<strong>` per evidenziare parole chiave come competenze principali, traguardi professionali o altri dettagli che desideri sottolineare.
- Nella classe `.skills__skill`, elenca le tue competenze professionali, una per volta, in modo ordinato. Puoi includere competenze tecniche (come linguaggi di programmazione, software o metodologie) e trasversali (come la comunicazione, il lavoro di squadra, ecc.), per dare una visione completa delle tue capacità.

```html
<!-- INIZIO Sezione About -->
    <section id="about" class="about sec-pad">
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-med">
          <span class="heading-sec__main"> About Me </span>
          <span class="heading-sec__sub">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
            tempora explicabo quae quod deserunt eius sapiente
          </span>
        </h2>
        <div class="about__content">
          <div class="about__content-main">
            <h3 class="about__content-title"> Get to know me! </h3>
            <div class="about__content-details">
              <p class="about__content-details-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
                tempora explicabo quae quod deserunt eius sapiente
              </p>
              <p class="about__content-details-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
                tempora explicabo quae quod deserunt eius sapiente
              </p>
            </div>
            <a href="./#contact" class="btn btn--med btn--theme dynamicBgClr"> Contact </a>
          </div>
          <div class="about__content-skills">
            <h3 class="about__content-title"> My Skills </h3>
            <div class="skills">
              <div class="skills__skill"> HTML </div>
              <div class="skills__skill"> CSS </div>
              <div class="skills__skill"> JavaScript </div>
              <div class="skills__skill"> TypeScript </div>
              <div class="skills__skill"> SQL </div>
              <div class="skills__skill"> MongoDB </div>
              <div class="skills__skill"> C </div>
              <div class="skills__skill"> C++ </div>
              <div class="skills__skill"> Dart </div>
              <div class="skills__skill"> Java </div>
              <div class="skills__skill"> Python </div>
              <div class="skills__skill"> Jupyter Notebook </div>
              <div class="skills__skill"> PHP </div>
              <div class="skills__skill"> Office </div>
              <div class="skills__skill"> Midjourney </div>
              <div class="skills__skill"> SEO </div>
              <div class="skills__skill"> WordPress </div>
            </div>
          </div>
        </div>
      </div>
    </section>
<!-- FINE Sezione About -->
```

### Sezione Project: 

- Nella classe `.heading-sec__sub`, inserisci una breve descrizione che introduca la sezione in modo chiaro e conciso, specificando di cosa tratta la sezione, ad esempio presentando i progetti che hai realizzato nel tuo portfolio.
- La classe `.projects__row` rappresenta una riga per ciascun progetto nel tuo portfolio. Per ogni progetto che desideri mostrare, aggiungi un elemento `.projects__row` all'interno della sezione corrispondente. Ad esempio, se hai 3 progetti, avrai 3 elementi `.projects__row`, uno dopo l'altro.

All'interno di ogni `.projects__row`, includi i seguenti 4 elementi principali:

- Immagine del progetto (`.projects__row-img`): Aggiungi l'URL del mockup o dell'immagine del tuo progetto. Puoi utilizzare siti web come [Media Modifier](https://mediamodifier.com) per creare mockup gratuitamente. Assicurati di ritagliare eventuali spazi bianchi inutili attorno al mockup per migliorare l'aspetto e ridurre la dimensione del file.
- Titolo del progetto (`.projects__row-content-title`): Inserisci il titolo del progetto che stai presentando, rendendolo chiaro e accattivante per attrarre l'interesse del visitatore.
- Descrizione del progetto (`.projects__row-content-desc`): Aggiungi una breve descrizione del progetto (2-3 righe) che fornisca una panoramica generale. Poiché ogni progetto avrà una pagina dedicata, potrai aggiungere tutti i dettagli specifici su quella pagina, come funzionalità, tecnologie utilizzate, obiettivi raggiunti, ecc.
- Pulsante **Case Study** (Anchor): Aggiungi un pulsante o link con il testo **Case Study"** che reindirizzerà l'utente alla pagina dedicata del progetto, ad esempio, il pulsante nel Progetto 1 potrebbe linkare al file `/project-1.html`, dove si troveranno tutti i dettagli specifici di quel progetto.

Attualmente, ho già creato una pagina separata per ciascun progetto, denominata `project-1.html`, `project-2.html` e `project-3.html`, che contengono lo stesso codice, con la sola differenza nei dettagli del progetto (titolo, descrizione, immagine). Per aggiungere ulteriori progetti, puoi creare nuovi file seguendo la stessa struttura, copiando il codice di project-1.html e aggiornando i dati relativi al nuovo progetto.

```html
<!-- INIZIO Sezione Project -->
    <section id="projects" class="projects sec-pad">
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-bg">
          <span class="heading-sec__main"> Projects </span>
          <span class="heading-sec__sub">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
            tempora explicabo quae quod deserunt eius sapiente
          </span>
        </h2>
        <div class="projects__content">
          <div class="projects__row">
            <div class="projects__row-img-cont">
              <img src="./assets/jpeg/project-mockup-example.jpeg" alt="Software Screenshot" class="projects__row-img" loading="lazy" />
            </div>
            <div class="projects__row-content">
              <h3 class="projects__row-content-title"> Project 1 </h3>
              <p class="projects__row-content-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                facilis tempora, explicabo quae quod deserunt eius sapiente
                praesentium.
              </p>
              <a class='btn btn--med btn--theme dynamicBgClr' href='./project-1.html' > Case Study </a>
            </div>
          </div>
          <div class="projects__row">
            <div class="projects__row-img-cont">
              <img src="./assets/jpeg/project-mockup-example.jpeg" alt="Software Screenshot" class="projects__row-img" loading="lazy" />
            </div>
            <div class="projects__row-content">
              <h3 class="projects__row-content-title"> Project 2 </h3>
              <p class="projects__row-content-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                facilis tempora, explicabo quae quod deserunt eius sapiente
                praesentium.
              </p>
              <a class='btn btn--med btn--theme dynamicBgClr' href='./project-2.html'> Case Study </a>
            </div>
          </div>
          <div class="projects__row">
            <div class="projects__row-img-cont">
              <img src="./assets/jpeg/project-mockup-example.jpeg" alt="Software Screenshot" class="projects__row-img" loading="lazy" />
            </div>
            <div class="projects__row-content">
              <h3 class="projects__row-content-title"> Project 3 </h3>
              <p class="projects__row-content-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                facilis tempora, explicabo quae quod deserunt eius sapiente
                praesentium.
              </p>
              <a class='btn btn--med btn--theme dynamicBgClr' href='./project-3.html'> Case Study </a>
            </div>
          </div>
        </div>
      </div>
    </section>
<!-- FINE Sezione Project -->
```

### Sezione Contact: 

- Nella classe `.heading-sec__sub`, inserisci una breve descrizione che introduca la sezione di contatto, indicando chiaramente lo scopo del modulo, come ad esempio "Compila il modulo sottostante per entrare in contatto con me" o una descrizione che inviti gli utenti a inviare richieste o domande.
- La classe `.contact__form-field` rappresenta un campo all'interno del modulo di contatto. Attualmente ci sono 3 campi, ma puoi aggiungere ulteriori campi in base alle tue necessità (ad esempio, per raccogliere ulteriori informazioni come il numero di telefono o la richiesta di un progetto specifico). Quando aggiungi nuovi campi, ricorda di modificare correttamente i nomi degli attributi `label` per una corretta identificazione del campo e quelli degli attributi `input/textarea` per garantire che i dati vengano raccolti e inviati correttamente.

Se desideri inviare i dati del modulo via email, ti consiglio vivamente di utilizzare [Web3 Forms](https://web3forms.com), una soluzione semplice da configurare e gratuita.

```html
<!-- INIZIO Sezione Contact -->
    <section id="contact" class="contact sec-pad dynamicBg">
      <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-med">
          <span class="heading-sec__main heading-sec__main--lt"> Contact </span>
          <span class="heading-sec__sub heading-sec__sub--lt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
            tempora explicabo quae quod deserunt eius sapiente
          </span>
        </h2>
        <div class="contact__form-container">
          <form action="#" class="contact__form">
            <div class="contact__form-field">
              <label class="contact__form-label" for="name"> Name: </label>
              <input required placeholder="Enter Your Name" type="text" class="contact__form-input" name="name" id="name" />
            </div>
            <div class="contact__form-field">
              <label class="contact__form-label" for="email"> Email: </label>
              <input required placeholder="Enter Your Email" type="text" class="contact__form-input" name="email" id="email" />
            </div>
            <div class="contact__form-field">
              <label class="contact__form-label" for="message"> Message: </label>
              <textarea required cols="30" rows="10" class="contact__form-input" placeholder="Enter Your Message" name="message" id="message"></textarea>
            </div>
            <button type="submit" class="btn btn--theme contact__btn dynamicBgClr"> Submit </button>
          </form>
        </div>
      </div>
    </section>
<!-- FINE Sezione Contact -->
```

### Footer: 

- All'interno del tag `<h4>` con la classe `.heading heading-sm text-lt`, inserisci il tuo nome completo, così da personalizzare l'intestazione con la tua identità.
- Nella classe  `.main-footer__short-desc`, aggiungi una breve descrizione su di te, mettendo in evidenza i tuoi punti di forza, competenze o una frase che rappresenti il tuo approccio professionale. Questa sezione può servire per dare un'idea immediata a chi visita il tuo portfolio o sito.
- Nell'attributo `href` del tag `<a>` all'interno di `.main-footer__social-cont`, inserisci il link diretto al tuo profilo social (come LinkedIn, GitHub o altre piattaforme professionali), in modo che i visitatori possano facilmente trovarti online e conoscere meglio il tuo lavoro.

```html
<!-- INIZIO Footer -->
    <footer class="main-footer">
      <div class="main-container">
        <div class="main-footer__upper">
          <div class="main-footer__row main-footer__row-1">
            <h2 class="heading heading-sm main-footer__heading-sm">
              <span> Social </span>
            </h2>
            <div class="main-footer__social-cont">
              <a rel="noreferrer" href="#">
                <img class="main-footer__icon" src="./assets/png/x-ico.png" alt="icon" title="X" />
              </a>
              <a rel="noreferrer" href="#">
                <img class="main-footer__icon" src="./assets/png/facebook-ico.png" alt="icon" title="Facebook" />
              </a>
              <a rel="noreferrer" href="#">
                <img class="main-footer__icon" src="./assets/png/tiktok-ico.png" alt="icon" title="TikTok" />
              </a>
              <a rel="noreferrer" href="#">
                <img class="main-footer__icon" src="./assets/png/instagram-ico.png" alt="icon" title="Instagram" />
              </a>
              <a rel="noreferrer" href="#">
                <img class="main-footer__icon" src="./assets/png/youtube-ico.png" alt="icon" title="YouTube" />
              </a>
              <a rel="noreferrer" href="#">
                <img class="main-footer__icon" src="./assets/png/github-ico.png" alt="icon" title="GitHub" />
              </a>
              <a rel="noreferrer" href="#">
                <img class="main-footer__icon" src="./assets/png/linkedin-ico.png" alt="icon" title="LinkedIn" />
              </a>
              <a rel="noreferrer" href="#">
                <img class="main-footer__icon main-footer__icon--mr-none" src="./assets/png/whatsapp-ico.png" alt="icon" title="WhatsApp" />
              </a>
            </div>
          </div>
          <div class="main-footer__row main-footer__row-2">
            <h4 class="heading heading-sm text-lt"> Mario Rossi </h4>
            <p class="main-footer__short-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit facilis
              tempora explicabo quae quod deserunt
            </p>
          </div>
        </div>
        <div class="main-footer__lower">
          &copy; Copyright 2025. Developed by <a rel="noreferrer" href="#"> Alex Di Paolo </a>
        </div>
      </div>
    </footer>
<!-- FINE Footer -->
```

---

### STEP 2 - Pagina del Progetto: 

Ogni progetto disporrà di una pagina dedicata, progettata per presentare in modo dettagliato e professionale tutte le informazioni essenziali. Queste pagine permettono di evidenziare il lavoro svolto e il valore che ciascun progetto aggiunge al portfolio. Ogni pagina includerà il titolo del progetto per una chiara identificazione, accompagnato da una descrizione che ne illustra gli obiettivi, le funzionalità principali e il contesto in cui è stato sviluppato.

### Sezione Hero: 

- Su `.heading-primary` inserisci il titolo del progetto, che dovrebbe essere il nome completo o un'etichetta distintiva del progetto. Questo è l'elemento principale che cattura l'attenzione degli utenti e fornisce un'indicazione chiara del progetto di cui si sta parlando.
- Su `.text-primary` aggiungi una breve descrizione del progetto. La descrizione dovrebbe essere concisa ma informativa, offrendo agli utenti un'idea generale del progetto, dei suoi obiettivi e della sua importanza. Potresti menzionare gli scopi principali, le caratteristiche distintive o i risultati raggiunti.
- Nell'attributo `href` del tag Anchor con classe `btn btn--bg` (etichettato come **Live Link**) inserisci il collegamento attivo al progetto. Questo dovrebbe indirizzare gli utenti alla versione live del progetto o alla sua demo. Assicurati che il link sia corretto e punti a una pagina funzionante, che permetta agli utenti di esplorare direttamente il progetto.

```html
<!-- INIZIO Sezione Hero -->
    <section class="project-cs-hero dynamicBg">
      <div class="project-cs-hero__content">
        <h1 class="heading-primary"> Project 1 </h1>
        <div class="project-cs-hero__info">
          <p class="text-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
            tempora explicabo quae quod deserunt eius sapiente solutions for
            complex problems
          </p>
        </div>
        <div class="project-cs-hero__cta">
          <a href="#" class="btn btn--bg"> Live Link </a>
        </div>
      </div>
    </section>
<!-- FINE Sezione Hero -->
```

### Sezione Project Details: 

- Su `.project-details__showcase-img`, modifica il valore dell'attributo `src` con il percorso o il link del mockup del progetto. Assicurati che l'immagine sia di alta qualità e rappresenti bene il progetto, mostrando l'interfaccia utente o una visualizzazione significativa del risultato finale. 
- Su `.project-details__desc-par`, aggiungi un paragrafo dettagliato che descriva il progetto, spiegando le sue caratteristiche principali, gli obiettivi e i risultati raggiunti. Usa più elementi `.project-details__desc-para` per aggiungere più paragrafi, consentendo una descrizione più esaustiva e ben organizzata. Ogni paragrafo può trattare un aspetto diverso del progetto, come le fasi di sviluppo, le sfide affrontate o l'impatto del progetto.
- Su `.skills`, specifica le competenze utilizzate per sviluppare il progetto. Utilizza gli elementi `.skills__skill` per elencare ogni competenza separatamente, come ad esempio linguaggi di programmazione, framework, tecnologie o strumenti utilizzati. Ogni competenza deve essere un elemento distintivo, in modo che i visitatori possano facilmente capire le tue capacità tecniche.
- Nell'attributo `href` del tag Anchor con classe `btn btn--med btn--theme project-details__links-btn` (etichettato come **Live Link**), inserisci il collegamento attivo al progetto. Questo dovrebbe rimandare alla versione online o alla demo del progetto, in modo che gli utenti possano esplorarlo in tempo reale.
- Nell'attributo `href` del tag Anchor con classe `btn btn--med btn--theme-inv project-details__links-btn` (etichettato come **Code Link**), inserisci il link al codice sorgente del progetto (Repository Link). Questo può essere il link al tuo repository GitHub, GitLab o ad una piattaforma simile, dove gli utenti possono consultare il codice, contribuire o imparare dalle tue soluzioni tecniche.

```html
<!-- INIZIO Sezione Project Details -->
    <section class="project-details">
      <div class="main-container">
        <div class="project-details__content">
          <div class="project-details__showcase-img-cont">
            <img src="./assets/jpeg/project-mockup-example.jpeg" alt="Project Image" class="project-details__showcase-img" />
          </div>
          <div class="project-details__content-main">
            <div class="project-details__desc">
              <h3 class="project-details__content-title"> Project Overview </h3>
              <p class="project-details__desc-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                alias tenetur minus quaerat aliquid, aut provident blanditiis,
                deleniti aspernatur ipsam eaque veniam voluptatem corporis vitae
                mollitia laborum corrupti ullam rem. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Neque alias tenetur minus quaerat
                aliquid, aut provident blanditiis, deleniti aspernatur ipsam
                eaque veniam voluptatem corporis vitae mollitia laborum corrupti
                ullam rem?
              </p>
              <p class="project-details__desc-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                alias tenetur minus quaerat aliquid, aut provident blanditiis,
                deleniti aspernatur ipsam eaque veniam voluptatem corporis vitae
                mollitia laborum corrupti ullam rem?
              </p>
            </div>
            <div class="project-details__tools-used">
              <h3 class="project-details__content-title"> Tools Used </h3>
              <div class="skills">
                <div class="skills__skill"> HTML </div>
                <div class="skills__skill"> CSS </div>
                <div class="skills__skill"> JavaScript </div>
                <div class="skills__skill"> TypeScript </div>
                <div class="skills__skill"> SQL </div>
                <div class="skills__skill"> MongoDB </div>
                <div class="skills__skill"> C </div>
                <div class="skills__skill"> C++ </div>
                <div class="skills__skill"> Dart </div>
                <div class="skills__skill"> Java </div>
                <div class="skills__skill"> Python </div>
                <div class="skills__skill"> Jupyter Notebook </div>
                <div class="skills__skill"> PHP </div>
                <div class="skills__skill"> Office </div>
                <div class="skills__skill"> Midjourney </div>
                <div class="skills__skill"> SEO </div>
                <div class="skills__skill"> WordPress </div>
              </div>
            </div>
            <div class="project-details__links">
              <h3 class="project-details__content-title"> See Live </h3>
              <a href="#" class="btn btn--med btn--theme project-details__links-btn dynamicBgClr"> Live Link </a>
              <a href="#" class="btn btn--med btn--theme-inv project-details__links-btn dynamicBrdrClr"> Code Link </a>
            </div>
          </div>
        </div>
      </div>
    </section>
<!-- INIZIO Sezione Project Details -->
```

---

### Distribuzione: 

Una volta completata la configurazione, devi mettere online il tuo sito web! Consiglio vivamente di utilizzare [Hostinger](https://www.hostinger.it) per raggiungere questo obiettivo nel modo più semplice.

---

### Esprimi il tuo apprezzamento concedendo una stella ⭐

Se ti piace questo progetto, dagli una stella su Github cliccando sul pulsante Star ⭐.

---

### Autore:

- **Alex Di Paolo** - [LinkedIn](https://www.linkedin.com/in/alex-di-paolo-3a2943342), [GitHub](https://github.com/dipaoloalex-dev), [Instagram](https://www.instagram.com/alexdp3/?igsh=Z3J1aTlvcG00cnNo), [TikTok](https://www.tiktok.com/@alexdipaolo21?_t=8sR06QOlhwk&_r=1)

Attualmente sono alla ricerca di **opportunità professionali** sia **da remoto** (a livello globale) che **in sede** (in qualsiasi parte della Campania, Italy). Se hai un'opportunità che corrisponde alle mie competenze ed esperienze, puoi contattarmi tramite il mio [LinkedIn](https://www.linkedin.com/in/alex-di-paolo-3a2943342) o via email all'indirizzo: dipaoloalex.dev@gmail.com.

---

### Licenza:

Questo progetto è concesso in licenza sotto la Licenza **GPL-3.0**. Consulta il file [LICENSE](https://github.com/dipaoloalex-dev/Portfolio/blob/main/LICENSE.txt) per i dettagli.
