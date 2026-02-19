/**
 * email-protect.js
 *
 * Reconstructs email addresses at runtime so the full "user@domain" string
 * never appears in the static HTML source — frustrating address harvesters
 * that scan raw markup.
 *
 * Usage in HTML:
 *   <a href="#" data-eu="user" data-ed="domain.com" class="email-link">…</a>
 *
 * The script will:
 *   - set href="mailto:user@domain.com"
 *   - replace the element's text content with the real address if the
 *     element carries the "email-link" class
 */
(function () {
  'use strict';

  function buildEmail(eu, ed) {
    // '\u0040' is the @ sign — avoids a literal @ in this source file too
    return eu + '\u0040' + ed;
  }

  function revealLinks() {
    document.querySelectorAll('[data-eu][data-ed]').forEach(function (el) {
      var email  = buildEmail(el.dataset.eu, el.dataset.ed);
      var mailto = 'mailto:' + email;

      if (el.tagName === 'A') {
        el.href = mailto;
        // Replace placeholder text with the real address
        if (el.classList.contains('email-link')) {
          el.textContent = email;
        }
      }

      // Clean up data attributes so they don't linger in the live DOM
      el.removeAttribute('data-eu');
      el.removeAttribute('data-ed');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', revealLinks);
  } else {
    revealLinks(); // already parsed (e.g. script loaded with defer)
  }
})();
