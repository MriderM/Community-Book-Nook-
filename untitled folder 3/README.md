# The Community Book Nook - Website Project (Part 3)

## Project Overview
This project is a responsive, SEO-optimized website for a fictional non-profit organization, "The Community Book Nook". It features dynamic content, interactive elements, and secure form validation.

## New Features Added in Part 3
*   **Interactive Elements:** Added a Leaflet interactive map on the Contact page. Added a modal for event registrations.
*   **Dynamic Content:** Added a search bar and frequency filter on the Programs page.
*   **Form Validation & AJAX:** Implemented client-side validation and simulated AJAX submission for the Contact and Registration forms.
*   **SEO Enhancements:** Added meta descriptions, keywords, Open Graph tags, `robots.txt`, and `sitemap.xml`.

## Changelog (Based on Part 2 Feedback)
*   **Refactoring:** Moved all inline CSS to an external `style.css` file to improve page loading speed and maintainability.
*   **JavaScript:** Separated all JavaScript into `script.js` to keep HTML files clean.
*   **Accessibility:** Added `aria-label` attributes to form inputs and search fields.
*   **SEO:** Added descriptive `alt` text and meta descriptions to all pages.
*   **Validation:** Replaced basic HTML validation with robust JavaScript error handling.

## Setup Instructions
1. Clone the repository.
2. Open `index.html` in your browser, or run a local server (e.g., `npx serve` or VS Code Live Server).
3. To view the map, ensure you have an active internet connection (Leaflet loads from CDN).

## Deployment
The website can be deployed on Netlify or GitHub Pages. Simply drag and drop the project folder into Netlify, or push to a GitHub repository and enable GitHub Pages in the settings.

## References
*   Leaflet. (2026). *Leaflet - a JavaScript library for interactive maps*. https://leafletjs.com/
*   MDN Web Docs. (2026). *Client-side form validation*. https://developer.mozilla.org/
*   Unsplash. (n.d.). *Library Interior Images*. https://unsplash.com