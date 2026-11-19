/**
 * ============================================================================
 * script.js
 * ============================================================================
 * Logica interattiva del portfolio di Alex Di Paolo.
 *
 * Contiene tre responsabilità separate:
 *   1) Le animazioni "animate-on-scroll" (fade/slide in ingresso).
 *   2) L'inizializzazione delle icone della libreria Lucide.
 *   3) Le micro-interazioni delle card (QR Athena + approval Easy Work).
 *
 * Il file è caricato con `defer` (vedi index.html), quindi viene eseguito
 * dopo il parsing dell'HTML ma prima dell'evento DOMContentLoaded.
 * ============================================================================
 */

/* Valori hardcoded centralizzati: stessi numeri di prima, un solo punto. */
window.__CONFIG = Object.assign(
    {
        inViewThreshold: 0.2,
        inViewRootMargin: "0px 0px -10% 0px",
        bumpMs: 350,
        skyDefaultStep: 1,
        skyDefaultMin: 0,
        skyDefaultMax: 9999,
    },
    window.__CONFIG || {}
);

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
                    const el = entry.target;

                    // L'elemento è (almeno parzialmente) visibile: avvia l'animazione.
                    el.classList.add("animate");

                    /*
                     * A fine animazione rimuove del tutto il layer dell'animazione.
                     * Il `filter` e il `transform` finali restano applicati per via di
                     * `fill-mode: both`: su mobile questo fa rasterizzare l'elemento a
                     * risoluzione più bassa, rendendo il testo sfuocato.
                     * La classe `anim-complete` azzera l'animazione (vedi style.css).
                     */
                    const complete = () => el.classList.add("anim-complete");
                    el.addEventListener("animationend", complete, { once: true });

                    /*
                     * Rete di sicurezza: se `animationend` non scatta (es. il browser
                     * mette in pausa l'animazione di un elemento fuori schermo), la
                     * classe viene applicata comunque dopo ritardo + durata.
                     */
                    const cs = getComputedStyle(el);
                    const delay = parseFloat(cs.animationDelay) || 0;
                    const duration = parseFloat(cs.animationDuration) || 0;
                    window.setTimeout(complete, (delay + duration) * 1000 + 100);

                    // Se l'animazione è "one shot", smetti di osservare l'elemento.
                    if (once) window.__inViewIO.unobserve(el);
                }
            });
        // threshold 0.2 = scatta quando è visibile almeno il 20% dell'elemento.
        // rootMargin negativo in basso = anticipa/ritarda il trigger sotto il bordo.
        }, { threshold: window.__CONFIG.inViewThreshold, rootMargin: window.__CONFIG.inViewRootMargin });
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

/*
 * ============================================================================
 * 3) MICRO-INTERAZIONI CARD (Athena QR + Easy Work approval + Akerus + Sky Fly)
 * ============================================================================
 * Toggle semplici e reversibili, accessibili da tastiera (sono <button> nativi).
 * Nessuna dipendenza: solo classList + testi. Le icone Lucide sono già
 * entrambe nel DOM (check + x) e si alternano via CSS, così non serve
 * richiamare createIcons dopo il toggle.
 */
(function () {
    // Zoom generico tipo QR: usato da Athena QR e Akerus PDF.
    function bindZoom(id, labelZoom, labelUnzoom) {
        const btn = document.getElementById(id);
        if (!btn) return;
        btn.addEventListener("click", () => {
            const zoomed = btn.classList.toggle("qr-zoomed");
            btn.setAttribute("aria-pressed", String(zoomed));
            btn.setAttribute("aria-label", zoomed ? labelUnzoom : labelZoom);
        });
    }

    bindZoom("athenaQrBtn", "Ingrandisci QR Museum Pass", "Rimpicciolisci QR Museum Pass");
    bindZoom("akerusPdfBtn", "Ingrandisci anteprima PDF report", "Rimpicciolisci anteprima PDF report");

    // Easy Work: click sulla riga manager = approved <-> not approved.
    const approvalBtn = document.getElementById("managerApprovalBtn");
    const statusPill = document.getElementById("leaveStatusPill");
    if (approvalBtn) {
        const textEl = approvalBtn.querySelector(".approval-text");
        const subEl = approvalBtn.querySelector(".approval-sub");

        approvalBtn.addEventListener("click", () => {
            const isApproved = approvalBtn.classList.contains("is-approved");
            const nowApproved = !isApproved;

            approvalBtn.classList.toggle("is-approved", nowApproved);
            approvalBtn.classList.toggle("is-denied", !nowApproved);
            approvalBtn.setAttribute("aria-pressed", String(nowApproved));

            if (textEl) textEl.textContent = nowApproved ? "Manager approved" : "Manager not approved";
            if (subEl) subEl.textContent = nowApproved ? "09 Jun · 10:12" : "09 Jun · 10:14 · Rejected";

            // Pill di stato coerente: Pending (giallo) <-> Rejected (rosso).
            if (statusPill) {
                statusPill.textContent = nowApproved ? "Pending" : "Rejected";
                statusPill.classList.toggle("bg-yellow-500/15", nowApproved);
                statusPill.classList.toggle("text-yellow-400", nowApproved);
                statusPill.classList.toggle("bg-red-500/15", !nowApproved);
                statusPill.classList.toggle("text-red-400", !nowApproved);
            }
        });
    }

    // Sky Fly: stepper su/giù per Time e Cycles remaining.
    function formatSky(value, unit) {
        const grouped = Number(value).toLocaleString("en-US");
        return grouped + unit;
    }

    document.querySelectorAll(".sky-metric").forEach((metric) => {
        const valueEl = metric.querySelector(".sky-value");
        if (!valueEl) return;
        const step = parseInt(metric.dataset.step || String(window.__CONFIG.skyDefaultStep), 10);
        const min = parseInt(metric.dataset.min || String(window.__CONFIG.skyDefaultMin), 10);
        const max = parseInt(metric.dataset.max || String(window.__CONFIG.skyDefaultMax), 10);
        const unit = metric.dataset.unit || "";
        let current = parseInt(metric.dataset.value || "0", 10);

        metric.querySelectorAll(".sky-btn").forEach((btn) => {
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                const dir = parseInt(btn.dataset.dir || "1", 10);
                current = Math.min(max, Math.max(min, current + dir * step));
                metric.dataset.value = String(current);
                valueEl.textContent = formatSky(current, unit);
                // Micro-feedback: flash azzurro breve sul numero.
                valueEl.classList.remove("bump");
                void valueEl.offsetWidth;
                valueEl.classList.add("bump");
                window.setTimeout(() => valueEl.classList.remove("bump"), window.__CONFIG.bumpMs);
            });
        });
    });
})();
