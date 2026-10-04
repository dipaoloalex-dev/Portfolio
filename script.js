/**
 * ============================================================================
 * script.js
 * ============================================================================
 * Logica interattiva del portfolio di Alex Di Paolo.
 *
 * Contiene due responsabilità separate:
 *   1) Le animazioni "animate-on-scroll" (fade/slide in ingresso).
 *   2) L'inizializzazione delle icone della libreria Lucide.
 *
 * Il file è caricato con `defer` (vedi index.html), quindi viene eseguito
 * dopo il parsing dell'HTML ma prima dell'evento DOMContentLoaded.
 * ============================================================================
 */

/*
 * ============================================================================
 * 1) ANIMAZIONI ALLO SCROLL ("animate-on-scroll")
 * ============================================================================
 * Come funziona:
 *   - Gli elementi interessati hanno già nel markup le classi Tailwind che
 *     descrivono l'animazione, ad esempio:
 *
 *         class="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll"
 *
 *   - Per impostazione predefinita l'animazione è in PAUSA (vedi CSS iniettato
 *     qui sotto), quindi gli elementi risultano nello stato iniziale (0%).
 *   - Quando un elemento entra nel viewport, un IntersectionObserver gli
 *     aggiunge la classe `.animate`, che fa partire l'animazione.
 *   - L'observer smette poi di seguire l'elemento (animazione una sola volta).
 *
 * L'intero blocco è avvolto in una IIFE (funzione anonima auto-invocata) per
 * non inquinare lo scope globale, tranne le due funzioni/proprietà esposte
 * intenzionalmente su `window`.
 */
(function () {
    /*
     * Inietta da JavaScript le regole CSS che controllano play/pause.
     * Vengono iniettate qui (e non in style.css) per tenere questa feature
     * autocontenuta: l'animazione funziona anche se il CSS esterno manca.
     */
    const style = document.createElement("style");
    style.textContent = `
/* Stato di default: animazione in pausa finché l'elemento non è visibile. */
.animate-on-scroll { animation-play-state: paused !important; }

/* Quando JS aggiunge la classe .animate, l'animazione parte. */
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
    document.head.appendChild(style);

    // true = l'animazione avviene una sola volta (poi l'observer libera l'elemento).
    const once = true;

    /*
     * Crea (una sola volta) l'IntersectionObserver condiviso, salvato su window
     * per poter essere riutilizzato/esteso da altro codice.
     */
    if (!window.__inViewIO) {
        window.__inViewIO = new IntersectionObserver((entries) => {
            // `entries` contiene tutti gli elementi osservati il cui stato è cambiato.
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // L'elemento è (almeno parzialmente) visibile: avvia l'animazione.
                    entry.target.classList.add("animate");

                    // Se l'animazione è "one shot", smetti di osservare l'elemento.
                    if (once) window.__inViewIO.unobserve(entry.target);
                }
            });
        // threshold 0.2 = scatta quando è visibile almeno il 20% dell'elemento.
        // rootMargin negativo in basso = anticipa/ritarda il trigger sotto il bordo.
        }, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
    }

    /*
     * Funzione globale riutilizzabile: osserva tutti gli elementi che
     * corrispondono al selettore (di default `.animate-on-scroll`).
     * Osservare ogni elemento una sola volta evita observer duplicati.
     */
    window.initInViewAnimations = function (selector = ".animate-on-scroll") {
        document.querySelectorAll(selector).forEach((el) => {
            window.__inViewIO.observe(el);
        });
    };

    // Avvia l'osservazione quando il DOM è pronto (tutti gli elementi esistono).
    document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();

/*
 * ============================================================================
 * 2) ICONE LUCIDE
 * ============================================================================
 * Scansiona il DOM e sostituisce ogni elemento `<i data-lucide="...">` con
 * l'SVG corrispondente. Va eseguito dopo che il DOM (e quindi le icone) è
 * stato caricato; essendo lo script `defer`, a questo punto il DOM esiste.
 *
 * Nota: le icone Iconify, invece, sono gestite automaticamente dal loro
 * script incluso nell'<head> e non richiedono inizializzazione.
 */
lucide.createIcons();
