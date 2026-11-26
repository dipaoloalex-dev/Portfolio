/**
 * @file cookie_banner.js
 * @brief GDPR cookie consent logic for the portfolio.
 * @details Shows a cookie banner until the visitor makes a choice, stores that
 *          choice in localStorage with an expiry date, loads Google Analytics 4
 *          only after explicit opt-in, and lets the visitor change or withdraw
 *          consent at any time. The script exposes a small public API through
 *          window.CookieConsent.
 *
 *          Dependencies: the banner/modal markup must exist in the main HTML
 *          page (e.g. index.html) with the IDs referenced below, and the
 *          "is-visible" classes are styled in banner/cookie_banner.css.
 *
 *          Note: the site itself does not collect personal data. The only data
 *          possibly shared is the phone number the user sends via WhatsApp.
 * @author [Your Name]
 * @date 2026-11-26
 */

/*
 * IIFE (Immediately Invoked Function Expression): wrapping all the code in a
 * function keeps every helper private, so only window.CookieConsent is exposed
 * to the rest of the page and global scope pollution is avoided.
 */
(function () {
    /**
     * @constant {Object} CONFIG
     * @description Central place for the values that configure the consent
     *              flow: the localStorage key, how long a choice lasts, and the
     *              Google Analytics 4 measurement ID.
     */
    const CONFIG = {
        // localStorage key used to save the visitor's cookie preferences.
        storageKey: "alexdipaolo_cookie_consent",
        // How many days a stored consent remains valid before the banner reappears.
        expiryDays: 365,
        // Google Analytics 4 property ID (anonymous, aggregated measurement).
        gaMeasurementId: "G-2M6V79H761"
    };

    // Cached DOM references (the elements are defined in index.html).
    // Caching them avoids repeated getElementById calls on every interaction.

    // Banner container (#cookieBanner): the small card shown on first visit.
    const banner = document.getElementById("cookieBanner");
    // Preferences overlay (#cookiePreferences): the modal with the category switches.
    const prefs = document.getElementById("cookiePreferences");
    // Analytics checkbox (#cookiePrefsAnalytics): the on/off switch inside the modal.
    const analyticsToggle = document.getElementById("cookiePrefsAnalytics");

    /**
     * @description Reads the consent record from localStorage.
     *   Returns null when no record exists, when the stored JSON is invalid,
     *   or when the saved consent has expired. An expired record is deleted.
     * @returns {Object|null} The consent object ({ necessary, analytics,
     *   createdAt, expiresAt }) or null when there is no valid consent.
     * @example
     * const consent = readConsent();
     * if (!consent) showBanner();
     */
    function readConsent() {
        try {
            // localStorage stores strings, so read the raw JSON text first.
            const raw = localStorage.getItem(CONFIG.storageKey);
            // No stored value means the visitor has not made a choice yet.
            if (!raw) return null;

            // Convert the JSON string back into a JavaScript object.
            const consent = JSON.parse(raw);
            // Guard against corrupted data or old records without an expiry date.
            if (!consent || !consent.expiresAt) return null;
            // Date.now() is in milliseconds; expiresAt was stored the same way.
            if (Date.now() > consent.expiresAt) {
                // The consent is too old: remove it so the visitor is asked again.
                localStorage.removeItem(CONFIG.storageKey);
                return null;
            }
            // The record exists and is still valid; return it to the caller.
            return consent;
        } catch (e) {
            // localStorage or JSON.parse can throw (e.g. blocked storage or
            // malformed JSON). Treat any error as "no valid consent".
            return null;
        }
    }

    /**
     * @description Saves the consent choice to localStorage and adds the
     *   createdAt/expiresAt timestamps used by readConsent().
     * @param {Object} consent - The visitor's choice, for example
     *   { necessary: true, analytics: false }.
     * @returns {void} Nothing. Storage errors are ignored on purpose.
     * @example
     * writeConsent({ necessary: true, analytics: true });
     */
    function writeConsent(consent) {
        // Current time in milliseconds, used as the creation date and expiry base.
        const now = Date.now();
        // Copy the incoming choice and add the metadata fields. Object.assign
        // avoids mutating the object passed by the caller.
        const record = Object.assign({}, consent, {
            createdAt: now,
            // Convert expiryDays into milliseconds:
            // days * 24 hours * 60 minutes * 60 seconds * 1000 milliseconds.
            expiresAt: now + CONFIG.expiryDays * 24 * 60 * 60 * 1000
        });
        try {
            // localStorage only accepts strings, so serialise the record to JSON.
            localStorage.setItem(CONFIG.storageKey, JSON.stringify(record));
        } catch (e) {
            // Storage may be full or disabled (private mode). In that case the
            // consent still applies to the current page session, it just is not saved.
        }
    }

    /**
     * @description Loads the Google Analytics 4 script and configures gtag.
     *   The function is idempotent: calling it twice will not inject the
     *   external script twice.
     * @returns {void} Nothing.
     * @example
     * initializeGoogleAnalytics();
     */
    function initializeGoogleAnalytics() {
        // If GA was already initialised, do not add the script again: just
        // refresh the consent state and stop here.
        if (window.__gaInitialized) {
            updateGAConsent(true);
            return;
        }
        // Custom flag that makes this function safe to call more than once.
        window.__gaInitialized = true;

        // Create the external gtag.js script element.
        const script = document.createElement("script");
        // async: true lets the browser keep parsing the page while GA loads.
        script.async = true;
        // Build the script URL with the measurement ID from CONFIG.
        script.src = "https://www.googletagmanager.com/gtag/js?id=" + CONFIG.gaMeasurementId;
        // Append it to <head> so the browser starts downloading it.
        document.head.appendChild(script);

        // Standard gtag bootstrap: create the dataLayer queue if it is missing.
        window.dataLayer = window.dataLayer || [];
        // gtag is a tiny wrapper that pushes its arguments into dataLayer.
        // It must use the arguments object (not a rest array) because that is
        // the format the Google Tag script expects to find in the queue.
        window.gtag = function () { window.dataLayer.push(arguments); };
        // Register the current timestamp (required by the gtag setup).
        window.gtag("js", new Date());
        // Configure the GA4 property; anonymize_ip masks the visitor's IP address.
        window.gtag("config", CONFIG.gaMeasurementId, { anonymize_ip: true });
    }

    /**
     * @description Updates Google's consent mode after the visitor grants or
     *   withdraws analytics consent.
     * @param {boolean} granted - true allows analytics storage, false denies it.
     * @returns {void} Nothing.
     * @example
     * updateGAConsent(false); // withdraw analytics consent
     */
    function updateGAConsent(granted) {
        // gtag only exists after initializeGoogleAnalytics() has run, so check first.
        if (typeof window.gtag === "function") {
            window.gtag("consent", "update", {
                // The ternary converts the boolean into the string Google expects.
                analytics_storage: granted ? "granted" : "denied"
            });
        }
    }

    /**
     * @description Applies a stored choice: loads Google Analytics when
     *   analytics was accepted, otherwise denies analytics storage.
     * @param {Object} consent - Consent object with a boolean `analytics` field.
     * @returns {void} Nothing.
     * @example
     * applyConsent({ necessary: true, analytics: true });
     */
    function applyConsent(consent) {
        // Truthy check: only explicit opt-in loads the analytics script.
        if (consent.analytics) {
            initializeGoogleAnalytics();
        } else {
            // No consent: make sure GA does not store anything for this visitor.
            updateGAConsent(false);
        }
    }

    /**
     * @description Reveals the cookie banner by adding the CSS class that
     *   animates it into view (see .cookie-banner.is-visible in the stylesheet).
     * @returns {void} Nothing.
     * @example
     * showBanner();
     */
    function showBanner() {
        // The null check prevents a crash if the banner markup is missing.
        if (banner) banner.classList.add("is-visible");
    }

    /**
     * @description Hides the cookie banner by removing its visible-state class.
     * @returns {void} Nothing.
     * @example
     * hideBanner();
     */
    function hideBanner() {
        // Null check as above; the banner simply stays hidden if missing.
        if (banner) banner.classList.remove("is-visible");
    }

    /**
     * @description Opens the preferences modal and pre-selects the analytics
     *   switch from the saved consent (unchecked when nothing is saved).
     * @returns {void} Nothing.
     * @example
     * openPrefs();
     */
    function openPrefs() {
        // Read the current stored choice so the switch reflects reality.
        const saved = readConsent();
        // !! converts the result into a real boolean: false when nothing is
        // saved or when analytics was denied.
        if (analyticsToggle) analyticsToggle.checked = !!(saved && saved.analytics);
        // Adding the class makes the overlay visible via CSS.
        if (prefs) prefs.classList.add("is-visible");
    }

    /**
     * @description Closes the preferences modal by removing its visible class.
     * @returns {void} Nothing.
     * @example
     * closePrefs();
     */
    function closePrefs() {
        // Removing the class triggers the CSS close transition.
        if (prefs) prefs.classList.remove("is-visible");
    }

    /**
     * @description Accepts every cookie category, saves the choice, applies it,
     *   and hides both the banner and the modal.
     * @returns {void} Nothing.
     * @example
     * acceptAll();
     */
    function acceptAll() {
        // necessary is always true (the site cannot work without it);
        // analytics is true because the visitor clicked "Accept all".
        const consent = { necessary: true, analytics: true };
        // Persist the choice so it survives page reloads.
        writeConsent(consent);
        // Load GA immediately, without waiting for a reload.
        applyConsent(consent);
        // Close the UI now that a choice has been made.
        hideBanner();
        closePrefs();
    }

    /**
     * @description Accepts only the strictly necessary cookies, saves the
     *   choice, denies analytics, and hides both the banner and the modal.
     * @returns {void} Nothing.
     * @example
     * acceptNecessary();
     */
    function acceptNecessary() {
        // The visitor refused optional cookies: analytics stays false.
        const consent = { necessary: true, analytics: false };
        // Persist the choice.
        writeConsent(consent);
        // Make sure analytics storage is denied.
        applyConsent(consent);
        // Close the UI.
        hideBanner();
        closePrefs();
    }

    /**
     * @description Saves the categories selected in the preferences modal
     *   (necessary cookies are always enabled).
     * @returns {void} Nothing.
     * @example
     * savePreferences();
     */
    function savePreferences() {
        // Build the consent object from the switch state. The double negation
        // handles a missing element and converts the checkbox value to boolean.
        const consent = {
            necessary: true,
            analytics: !!(analyticsToggle && analyticsToggle.checked)
        };
        // Persist, apply, and close the UI.
        writeConsent(consent);
        applyConsent(consent);
        hideBanner();
        closePrefs();
    }

    /**
     * @description Withdraws consent completely: deletes the stored record,
     *   denies analytics storage, closes the modal, and shows the banner again.
     * @returns {void} Nothing.
     * @example
     * withdraw();
     */
    function withdraw() {
        try {
            // Deleting the key means the next page load counts as a first visit.
            localStorage.removeItem(CONFIG.storageKey);
        } catch (e) {
            // Ignore storage errors: the UI and analytics state still change.
        }
        // Tell Google to stop using analytics storage for this visitor.
        updateGAConsent(false);
        // Close the modal and ask the visitor to choose again.
        closePrefs();
        showBanner();
    }

    /**
     * @description Returns the current consent record, or null when the
     *   visitor has not chosen yet (or the record expired).
     * @returns {Object|null} The stored consent object or null.
     * @example
     * const status = getStatus();
     * console.log(status && status.analytics);
     */
    function getStatus() {
        // Delegate to readConsent so expiry and parsing logic live in one place.
        return readConsent();
    }

    /**
     * @description Wires every banner/modal button to its handler and makes a
     *   click on the dark backdrop close the preferences modal.
     * @returns {void} Nothing.
     * @example
     * wireEvents();
     */
    function wireEvents() {
        // Look up the buttons here (not at module load) so the DOM is ready.
        // "Accept all" button in the banner.
        const acceptAllBtn = document.getElementById("cookieBannerAcceptAll");
        // "Only necessary" button in the banner.
        const necessaryBtn = document.getElementById("cookieBannerNecessary");
        // "Manage preferences" button in the banner.
        const manageBtn = document.getElementById("cookieBannerManage");
        // "x" close button in the modal header.
        const prefsClose = document.getElementById("cookiePrefsClose");
        // "Save preferences" button in the modal footer.
        const prefsSave = document.getElementById("cookiePrefsSave");
        // "Accept all" button in the modal footer.
        const prefsAcceptAll = document.getElementById("cookiePrefsAcceptAll");

        // Click "Accept all" -> enable every category and close the UI.
        if (acceptAllBtn) acceptAllBtn.addEventListener("click", acceptAll);
        // Click "Only necessary" -> reject optional cookies and close the UI.
        if (necessaryBtn) necessaryBtn.addEventListener("click", acceptNecessary);
        // Click "Manage preferences" -> open the modal with the saved switch state.
        if (manageBtn) manageBtn.addEventListener("click", openPrefs);
        // Click the "x" -> close the modal without saving.
        if (prefsClose) prefsClose.addEventListener("click", closePrefs);
        // Click "Save preferences" -> persist only the selected categories.
        if (prefsSave) prefsSave.addEventListener("click", savePreferences);
        // Click "Accept all" inside the modal -> same behaviour as the banner button.
        if (prefsAcceptAll) prefsAcceptAll.addEventListener("click", acceptAll);

        // Clicking the dark area around the dialog closes the modal. The dialog
        // itself is a child, so clicks inside it have a different e.target and
        // do not trigger this handler.
        if (prefs) {
            prefs.addEventListener("click", (e) => {
                // e.target === prefs means the click landed on the overlay backdrop.
                if (e.target === prefs) closePrefs();
            });
        }
    }

    /**
     * @description Boots the consent flow: connects the buttons, then either
     *   shows the banner (no valid consent) or silently applies the stored one.
     * @returns {void} Nothing.
     * @example
     * init();
     */
    function init() {
        // Attach all click handlers before showing anything.
        wireEvents();

        // Check for an existing, non-expired consent record.
        const consent = readConsent();
        if (!consent) {
            // First visit (or expired consent): ask the visitor for a choice.
            showBanner();
            return;
        }

        // Returning visitor with a valid choice: apply it and keep the banner hidden.
        applyConsent(consent);
        hideBanner();
    }

    // Public API: lets other scripts (or the browser console) reopen the banner,
    // read the current status, or withdraw consent. Functions are exposed by
    // reference, so calling them keeps the same closure scope as internal code.
    window.CookieConsent = {
        acceptAll,
        acceptNecessary,
        withdraw,
        getStatus,
        showBanner,
        openPreferences: openPrefs
    };

    // Start the script as soon as the DOM is ready.
    // If the document is still parsing, wait for DOMContentLoaded; otherwise
    // (e.g. script loaded with defer or placed at the end of <body>) run now.
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
