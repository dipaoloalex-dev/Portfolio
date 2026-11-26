/**
 * @file script.js
 * @brief Initializes the Lucide icon set used by the CV pages.
 * @details This file is loaded at the end of index.html and index_it.html, after
 *          the page markup and after the Lucide CDN script in the <head>.
 *          It calls lucide.createIcons(), which finds every <i data-lucide="...">
 *          placeholder in the document and replaces it with the matching inline
 *          SVG icon. A global stroke width is applied so all icons share the same
 *          visual weight. This is the only local JavaScript file used by the CV pages.
 * @author [Your Name]
 * @date 2026-11-26
 */

/**
 * @description Scans the DOM for elements with a data-lucide attribute and
 *   replaces each one with the corresponding Lucide SVG icon. Called once,
 *   after the markup has been parsed, so every placeholder already exists.
 * @param {Object} options - Configuration object for the icon generation.
 * @param {Object} options.attrs - Attributes applied to every generated <svg>;
 *   the "stroke-width" key sets the line thickness used by all icons.
 * @returns {void} Nothing; the function updates the DOM in place.
 * @example
 * lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
 */
lucide.createIcons({
    // attrs holds the default SVG attributes applied to every icon created.
    attrs: {
        // 1.5 is slightly thinner than Lucide's default (2), which suits the
        // compact CV layout and keeps small icons from looking too heavy.
        "stroke-width": 1.5 
    }
});
