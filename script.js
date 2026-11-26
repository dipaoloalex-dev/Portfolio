/**
 * @file script.js
 * @brief Interactive behaviour for the Alex Di Paolo portfolio.
 * @details Handles five independent concerns:
 *          1. Reveal-on-scroll animations (.animate-on-scroll).
 *          2. Lucide icon initialisation.
 *          3. Project-card micro-interactions (Athena QR, Easy Work approval,
 *             Sky Fly counters).
 *          4. Highlighting the navigation link of the section in view.
 *          5. Hiding the fixed navbar while scrolling down.
 *          The file is loaded with defer from index.html, so the HTML is already
 *          parsed when it runs. It reads IDs/classes from index.html and relies on
 *          transitions defined in style.css; cookie logic lives in cookie_banner.js.
 * @author [Your Name]
 * @date 2026-11-26
 */

/*
 * Central configuration object exposed on window so other scripts can read or
 * override values. The defaults are merged with any existing window.__CONFIG,
 * which lets a page customise the behaviour without editing this file.
 */
window.__CONFIG = Object.assign(
    {
        // Fraction of an element that must be visible before its animation starts (0-1).
        inViewThreshold: 0.2,
        // Negative bottom margin makes the animation trigger slightly before the viewport edge.
        inViewRootMargin: "0px 0px -10% 0px",
        // Duration in milliseconds of the temporary blue flash on Sky Fly values.
        bumpMs: 350,
        // Fallbacks used when a .sky-metric element has no matching data-* attribute.
        skyDefaultStep: 1,
        skyDefaultMin: 0,
        skyDefaultMax: 9999,
    },
    // Any pre-existing configuration overrides the defaults above.
    window.__CONFIG || {}
);

/* ============================================================
   1. REVEAL-ON-SCROLL ANIMATIONS
   Elements marked .animate-on-scroll stay paused until an
   IntersectionObserver adds .animate when they enter the viewport.
   ============================================================ */
(function () {
    // Create an inline <style> element that controls animation play/pause.
    const style = document.createElement("style");
    style.textContent = `
/* Default state: the animation stays paused until the element is visible. */
.animate-on-scroll { animation-play-state: paused !important; }

/* When JS adds .animate, the animation starts running. */
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
    // Attach the rules to <head> so they apply immediately.
    document.head.appendChild(style);

    // true = animate each element only once, then stop observing it.
    const once = true;

    // Create a single shared observer and reuse it for every card/section.
    if (!window.__inViewIO) {
        window.__inViewIO = new IntersectionObserver((entries) => {
            // entries contains every observed element whose visibility changed.
            entries.forEach((entry) => {
                // Only act when at least part of the element is on screen.
                if (entry.isIntersecting) {
                    // The actual DOM element that triggered the observer.
                    const el = entry.target;

                    // Switch the CSS animation from paused to running.
                    el.classList.add("animate");

                    // complete() adds .anim-complete, which resets filter/animation
                    // in style.css so mobile text does not stay blurred.
                    const complete = () => el.classList.add("anim-complete");
                    // Prefer the real animationend event.
                    el.addEventListener("animationend", complete, { once: true });

                    // Read the computed animation timing to build a fallback timer.
                    const cs = getComputedStyle(el);
                    // animationDelay/animationDuration are strings like "0.3s".
                    const delay = parseFloat(cs.animationDelay) || 0;
                    const duration = parseFloat(cs.animationDuration) || 0;
                    // Safety net: if animationend never fires (e.g. tab is backgrounded),
                    // apply the final state after delay + duration + 100ms.
                    window.setTimeout(complete, (delay + duration) * 1000 + 100);

                    // One-shot behaviour: stop observing after the first trigger.
                    if (once) window.__inViewIO.unobserve(el);
                }
            });
        // Observe when 20% is visible and use the configured margin from CONFIG.
        }, { threshold: window.__CONFIG.inViewThreshold, rootMargin: window.__CONFIG.inViewRootMargin });
    }

    /**
     * @description Starts observing every element that matches a selector so
     *   its entrance animation runs when it enters the viewport.
     * @param {string} [selector=".animate-on-scroll"] - CSS selector of the elements to observe.
     * @returns {void} Nothing.
     * @example
     * window.initInViewAnimations();
     * window.initInViewAnimations(".fade-in");
     */
    window.initInViewAnimations = function (selector = ".animate-on-scroll") {
        // observe() is idempotent: observing the same element twice is harmless.
        document.querySelectorAll(selector).forEach((el) => {
            window.__inViewIO.observe(el);
        });
    };

    // Start once the DOM is ready, so every .animate-on-scroll element exists.
    document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();

/* ============================================================
   2. LUCIDE ICONS
   ============================================================ */

// Replace every <i data-lucide="..."> placeholder in the document with its SVG.
lucide.createIcons();

/* ============================================================
   3. PROJECT-CARD MICRO-INTERACTIONS
   Athena QR zoom, Easy Work approval toggle and Sky Fly counters.
   ============================================================ */
(function () {
    /**
     * @description Wires a click toggle on a zoomable card preview. The click
     *   switches the .qr-zoomed class and keeps ARIA state in sync.
     * @param {string} id - ID of the button element in index.html.
     * @param {string} labelZoom - Accessible label used while zoomed out.
     * @param {string} labelUnzoom - Accessible label used while zoomed in.
     * @returns {void} Nothing.
     * @example
     * bindZoom("athenaQrBtn", "Zoom QR", "Shrink QR");
     */
    function bindZoom(id, labelZoom, labelUnzoom) {
        // Find the button; it may not exist on every page.
        const btn = document.getElementById(id);
        // Silently skip when the card is absent.
        if (!btn) return;
        // Toggle zoom on every click.
        btn.addEventListener("click", () => {
            // classList.toggle returns true when the class was added.
            const zoomed = btn.classList.toggle("qr-zoomed");
            // Tell assistive technology whether the preview is expanded.
            btn.setAttribute("aria-pressed", String(zoomed));
            // Swap the accessible label between "zoom in" and "zoom out".
            btn.setAttribute("aria-label", zoomed ? labelUnzoom : labelZoom);
        });
    }

    // Athena Museum Pass QR code.
    bindZoom("athenaQrBtn", "Ingrandisci QR Museum Pass", "Rimpicciolisci QR Museum Pass");
    // Akerus PDF report preview (same visual behaviour as the QR).
    bindZoom("akerusPdfBtn", "Ingrandisci anteprima PDF report", "Rimpicciolisci anteprima PDF report");

    // Easy Work approval demo: button + status pill in the card.
    const approvalBtn = document.getElementById("managerApprovalBtn");
    const statusPill = document.getElementById("leaveStatusPill");
    if (approvalBtn) {
        // Text lines inside the button that change with the state.
        const textEl = approvalBtn.querySelector(".approval-text");
        const subEl = approvalBtn.querySelector(".approval-sub");

        // Click toggles between approved and denied.
        approvalBtn.addEventListener("click", () => {
            // Read the current state from the CSS class.
            const isApproved = approvalBtn.classList.contains("is-approved");
            // The next state is the opposite.
            const nowApproved = !isApproved;

            // CSS shows the check icon in .is-approved and the x icon in .is-denied.
            approvalBtn.classList.toggle("is-approved", nowApproved);
            approvalBtn.classList.toggle("is-denied", !nowApproved);
            // Keep the pressed state accessible.
            approvalBtn.setAttribute("aria-pressed", String(nowApproved));

            // Update the two text lines without touching the icons.
            if (textEl) textEl.textContent = nowApproved ? "Manager approved" : "Manager not approved";
            if (subEl) subEl.textContent = nowApproved ? "09 Jun · 10:12" : "09 Jun · 10:14 · Rejected";

            // Keep the status pill consistent: yellow Pending or red Rejected.
            if (statusPill) {
                statusPill.textContent = nowApproved ? "Pending" : "Rejected";
                statusPill.classList.toggle("bg-yellow-500/15", nowApproved);
                statusPill.classList.toggle("text-yellow-400", nowApproved);
                statusPill.classList.toggle("bg-red-500/15", !nowApproved);
                statusPill.classList.toggle("text-red-400", !nowApproved);
            }
        });
    }

    /**
     * @description Formats a counter value with thousands separators and
     *   appends the optional unit.
     * @param {number|string} value - Numeric value to display.
     * @param {string} unit - Suffix such as " h" (may be empty).
     * @returns {string} The formatted value, e.g. "1,240 h".
     * @example
     * formatSky(1240, " h"); // "1,240 h"
     */
    function formatSky(value, unit) {
        // toLocaleString("en-US") produces 1,240 instead of 1240.
        const grouped = Number(value).toLocaleString("en-US");
        // Append the unit exactly as provided.
        return grouped + unit;
    }

    // Each .sky-metric is an independent counter with its own limits.
    document.querySelectorAll(".sky-metric").forEach((metric) => {
        // The element that displays the number.
        const valueEl = metric.querySelector(".sky-value");
        // Skip a malformed metric instead of throwing.
        if (!valueEl) return;
        // Read limits from data-* attributes, falling back to window.__CONFIG.
        const step = parseInt(metric.dataset.step || String(window.__CONFIG.skyDefaultStep), 10);
        const min = parseInt(metric.dataset.min || String(window.__CONFIG.skyDefaultMin), 10);
        const max = parseInt(metric.dataset.max || String(window.__CONFIG.skyDefaultMax), 10);
        const unit = metric.dataset.unit || "";
        // Current value kept in a local variable for fast updates.
        let current = parseInt(metric.dataset.value || "0", 10);

        // Wire both arrow buttons (data-dir="1" up, data-dir="-1" down).
        metric.querySelectorAll(".sky-btn").forEach((btn) => {
            btn.addEventListener("click", (e) => {
                // Stop the click from bubbling to other card handlers.
                e.stopPropagation();
                // Direction multiplier: 1 or -1.
                const dir = parseInt(btn.dataset.dir || "1", 10);
                // Add/subtract the step and clamp the result between min and max.
                current = Math.min(max, Math.max(min, current + dir * step));
                // Persist the value so other code can read it.
                metric.dataset.value = String(current);
                // Refresh the visible number.
                valueEl.textContent = formatSky(current, unit);
                // Restart the CSS "bump" flash: remove, force reflow, add again.
                valueEl.classList.remove("bump");
                void valueEl.offsetWidth;
                valueEl.classList.add("bump");
                // Remove the class after the configured duration.
                window.setTimeout(() => valueEl.classList.remove("bump"), window.__CONFIG.bumpMs);
            });
        });
    });
})();

/* ============================================================
   4. ACTIVE NAVIGATION LINK
   Highlights the nav link whose section is crossing the middle
   of the viewport, using the data-nav attributes in index.html.
   ============================================================ */
(function () {
    // Collect all navigation links (Home, Projects, Process, Contact).
    const links = Array.from(document.querySelectorAll(".site-nav-link"));
    // Skip the whole feature if there is no nav or no IntersectionObserver.
    if (!links.length || !("IntersectionObserver" in window)) return;

    // Lookup table id -> link, useful for quick access/debugging; setActive()
    // still loops over all links so it can clear the previously active one.
    const byId = {};
    links.forEach((a) => {
        byId[a.getAttribute("data-nav")] = a;
    });

    /**
     * @description Applies the active styles to the link matching a section id
     *   and removes them from all the others.
     * @param {string} id - Section id, e.g. "projects".
     * @returns {void} Nothing.
     * @example
     * setActive("projects");
     */
    function setActive(id) {
        links.forEach((a) => {
            // on is true only for the link whose data-nav matches the section.
            const on = a.getAttribute("data-nav") === id;
            // Active link: white text + subtle pill; inactive: muted grey.
            a.classList.toggle("bg-white/10", on);
            a.classList.toggle("text-white", on);
            a.classList.toggle("text-zinc-400", !on);
            // aria-current tells screen readers which section is current.
            if (on) a.setAttribute("aria-current", "true");
            else a.removeAttribute("aria-current");
        });
    }

    // A narrow band around the viewport centre decides which section is active.
    const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                // The section entering the band becomes the active one.
                if (entry.isIntersecting) setActive(entry.target.id);
            });
        },
        // -40% top + -55% bottom leaves a 5% detection band near the centre.
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    // Observe only the four sections that have a matching nav link.
    ["home", "projects", "process", "contact"].forEach((id) => {
        const el = document.getElementById(id);
        if (el) io.observe(el);
    });
})();

/* ============================================================
   5. HIDE NAVBAR ON SCROLL DOWN
   The fixed navbar stays visible near the top; below 120px it
   hides while scrolling down and returns when scrolling up.
   ============================================================ */
(function () {
    // The fixed header that receives .nav-hidden.
    const nav = document.getElementById("siteNav");
    // Skip if this page has no navbar.
    if (!nav) return;
    // Keep the navbar visible for the first 120 pixels of the page.
    const HIDE_AFTER = 120;
    // Remember the previous scroll position to detect direction.
    let lastY = window.scrollY || 0;
    // Prevents scheduling more than one animation-frame update at a time.
    let ticking = false;

    /**
     * @description Reads the current scroll position and toggles .nav-hidden:
     *   hidden when scrolling down after the threshold, visible otherwise.
     * @returns {void} Nothing.
     * @example
     * update();
     */
    function update() {
        // Release the frame lock so the next scroll event can schedule again.
        ticking = false;
        // Current vertical scroll offset.
        const y = window.scrollY || 0;
        // Direction: true when the user moved down since the last update.
        const goingDown = y > lastY;
        // Hide only below the threshold AND while moving down; otherwise show.
        if (y > HIDE_AFTER && goingDown) nav.classList.add("nav-hidden");
        else nav.classList.remove("nav-hidden");
        // Store the position for the next comparison.
        lastY = y;
    }

    window.addEventListener(
        "scroll",
        () => {
            // Throttle with requestAnimationFrame: at most one update per frame.
            if (!ticking) {
                ticking = true;
                window.requestAnimationFrame(update);
            }
        },
        // passive: true tells the browser this listener never calls preventDefault(),
        // which keeps scrolling smooth.
        { passive: true }
    );
})();
