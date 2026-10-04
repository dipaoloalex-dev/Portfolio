/**
 * cookie_banner.js
 *
 * Gestione del consenso cookie (GDPR) per il portfolio.
 *
 * Questo file espone un'API pubblica `window.CookieConsent` e si occupa di:
 * - mostrare il banner in basso a sinistra finche' non viene espressa una scelta
 * - salvare le preferenze in localStorage con scadenza
 * - caricare Google Analytics 4 SOLO dopo il consenso esplicito
 * - permettere la revoca del consenso in qualsiasi momento
 *
 * Nota sul progetto: il sito non raccoglie dati personali propri.
 * L'unico dato eventualmente condiviso e' il numero di telefono
 * dell'utente, nel momento in cui sceglie di contattarci via WhatsApp.
 */
(function () {
    const CONFIG = {
        // Chiave usata per salvare le preferenze nel browser
        storageKey: "alexdipaolo_cookie_consent",
        // Durata del consenso in giorni
        expiryDays: 365,
        // ID proprieta' Google Analytics 4 (misurazione anonima e aggregata)
        gaMeasurementId: "G-2M6V79H761"
    };

    // Riferimenti agli elementi del DOM (inseriti in index.html)
    const banner = document.getElementById("cookieBanner");
    const prefs = document.getElementById("cookiePreferences");
    const analyticsToggle = document.getElementById("cookiePrefsAnalytics");

    /**
     * Legge le preferenze salvate. Restituisce null se assenti o scadute.
     */
    function readConsent() {
        try {
            const raw = localStorage.getItem(CONFIG.storageKey);
            if (!raw) return null;

            const consent = JSON.parse(raw);
            if (!consent || !consent.expiresAt) return null;
            if (Date.now() > consent.expiresAt) {
                localStorage.removeItem(CONFIG.storageKey);
                return null;
            }
            return consent;
        } catch (e) {
            return null;
        }
    }

    /**
     * Salva le preferenze con una data di scadenza.
     */
    function writeConsent(consent) {
        const now = Date.now();
        const record = Object.assign({}, consent, {
            createdAt: now,
            expiresAt: now + CONFIG.expiryDays * 24 * 60 * 60 * 1000
        });
        try {
            localStorage.setItem(CONFIG.storageKey, JSON.stringify(record));
        } catch (e) {
            /* localStorage non disponibile: il consenso vale solo per la sessione */
        }
    }

    /**
     * Carica Google Analytics 4 dopo il consenso. Idempotente.
     */
    function initializeGoogleAnalytics() {
        if (window.__gaInitialized) {
            updateGAConsent(true);
            return;
        }
        window.__gaInitialized = true;

        const script = document.createElement("script");
        script.async = true;
        script.src = "https://www.googletagmanager.com/gtag/js?id=" + CONFIG.gaMeasurementId;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        window.gtag = function () { window.dataLayer.push(arguments); };
        window.gtag("js", new Date());
        window.gtag("config", CONFIG.gaMeasurementId, { anonymize_ip: true });
    }

    /**
     * Aggiorna il consenso analytics lato Google (per la revoca).
     */
    function updateGAConsent(granted) {
        if (typeof window.gtag === "function") {
            window.gtag("consent", "update", {
                analytics_storage: granted ? "granted" : "denied"
            });
        }
    }

    /**
     * Applica le preferenze: carica o disattiva gli analytics.
     */
    function applyConsent(consent) {
        if (consent.analytics) {
            initializeGoogleAnalytics();
        } else {
            updateGAConsent(false);
        }
    }

    function showBanner() {
        if (banner) banner.classList.add("is-visible");
    }

    function hideBanner() {
        if (banner) banner.classList.remove("is-visible");
    }

    function openPrefs() {
        const saved = readConsent();
        if (analyticsToggle) analyticsToggle.checked = !!(saved && saved.analytics);
        if (prefs) prefs.classList.add("is-visible");
    }

    function closePrefs() {
        if (prefs) prefs.classList.remove("is-visible");
    }

    /**
     * Accetta tutte le categorie.
     */
    function acceptAll() {
        const consent = { necessary: true, analytics: true };
        writeConsent(consent);
        applyConsent(consent);
        hideBanner();
        closePrefs();
    }

    /**
     * Accetta solo i cookie necessari.
     */
    function acceptNecessary() {
        const consent = { necessary: true, analytics: false };
        writeConsent(consent);
        applyConsent(consent);
        hideBanner();
        closePrefs();
    }

    /**
     * Salva le preferenze scelte nel modal.
     */
    function savePreferences() {
        const consent = {
            necessary: true,
            analytics: !!(analyticsToggle && analyticsToggle.checked)
        };
        writeConsent(consent);
        applyConsent(consent);
        hideBanner();
        closePrefs();
    }

    /**
     * Revoca il consenso: cancella le preferenze e rimostra il banner.
     */
    function withdraw() {
        try {
            localStorage.removeItem(CONFIG.storageKey);
        } catch (e) {
            /* ignora */
        }
        updateGAConsent(false);
        closePrefs();
        showBanner();
    }

    function getStatus() {
        return readConsent();
    }

    /**
     * Collega i pulsanti del banner e del modal.
     */
    function wireEvents() {
        const acceptAllBtn = document.getElementById("cookieBannerAcceptAll");
        const necessaryBtn = document.getElementById("cookieBannerNecessary");
        const manageBtn = document.getElementById("cookieBannerManage");
        const prefsClose = document.getElementById("cookiePrefsClose");
        const prefsSave = document.getElementById("cookiePrefsSave");
        const prefsAcceptAll = document.getElementById("cookiePrefsAcceptAll");

        if (acceptAllBtn) acceptAllBtn.addEventListener("click", acceptAll);
        if (necessaryBtn) necessaryBtn.addEventListener("click", acceptNecessary);
        if (manageBtn) manageBtn.addEventListener("click", openPrefs);
        if (prefsClose) prefsClose.addEventListener("click", closePrefs);
        if (prefsSave) prefsSave.addEventListener("click", savePreferences);
        if (prefsAcceptAll) prefsAcceptAll.addEventListener("click", acceptAll);

        // Chiude il modal cliccando sullo sfondo esterno
        if (prefs) {
            prefs.addEventListener("click", (e) => {
                if (e.target === prefs) closePrefs();
            });
        }
    }

    function init() {
        wireEvents();

        const consent = readConsent();
        if (!consent) {
            showBanner();
            return;
        }

        applyConsent(consent);
        hideBanner();
    }

    // API pubblica per riaprire il banner o gestire il consenso da console/altri script
    window.CookieConsent = {
        acceptAll,
        acceptNecessary,
        withdraw,
        getStatus,
        showBanner,
        openPreferences: openPrefs
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
